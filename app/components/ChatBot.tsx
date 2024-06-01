'use client'
import { useState } from 'react';
import {
  CircularProgress,
  Divider,
  IconButton,
  Input,
  InputBase,
  Paper,
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { KeyboardArrowUp, KeyboardArrowDown, Forward, Delete} from '@mui/icons-material';
import firebase from "../../firebaseConfig.js";
import Dialog from './Dialog';
import { useAppContext } from '../contexts/AppProvider';
import styles from '../styles/page.module.css';

export default function ChatBot() {
    const { conversation, setConversation } = useAppContext();
    const {isChatOpen, isDarkTheme, setIsChatOpen} = useAppContext();
  
    
    const [input, setInput] = useState<string>('');
    const [isDialog, setIsDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteChat = () => {
        setConversation([]);
        setIsDialog(false);
        setIsChatOpen(false);
    }

    const handleMessageSend = async () => {
        setIsChatOpen(true);
        if (input.trim() !== '') {
            const responseInput = input;
            setConversation([...conversation, { sender: 'CLIENT', message: responseInput, type: 'text' }]);
            setInput('');
            setIsLoading(true);
            try {
                const result = await firebase.model.generateContent(responseInput);
                const response = result.response;
                const text = response.text();
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'SERVER', message: text, type: detectCodeType(text) },
                ]);
            } catch (error) {
                console.error('Error sending message to Vertex AI:', error);
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'SERVER', message: 'An error occurred. Please try again.', type: 'text' },
                ]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    function detectCodeType(text: string) {
        if (text.includes("```")) {
            return 'code';
        }
        return 'text';
    }

    return (
        <>
            {isChatOpen && (
                <Paper className={styles.chatContainer} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
                    {conversation.map((msg, index) => (
                        <div key={index}>
                            {msg.type === 'text' && (
                                <div className={styles.chatMessage} style={{
                                    backgroundColor: isDarkTheme ?  '#202124' : 'aliceblue'
                                }}>
                                    <p>
                                        {msg.sender} - {msg.message}
                                    </p>
                                </div>
                            )}
                            {msg.type === 'code' && (
                                <SyntaxHighlighter language="java" style={dracula} customStyle={{ margin: '10px', borderRadius: '5px' }}>
                                    {msg.message}
                                </SyntaxHighlighter>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className={styles.chatMessageContainer}>
                            <div className={styles.chatMessageIcon}>
                                <CircularProgress size={30}/>
                            </div>
                        </div>
                    )}
                </Paper>
            )}

            <Paper className={styles.chatInput}>
                <InputBase
                sx={{
                    ml: 1, flex: 1,
                
                }}
                multiline={true  }
                maxRows={5}
       
                    type="text"
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleMessageSend();
                        }
                    }}
                    onChange={(e) => setInput(e.target.value)}
                    // placeholder="Enter Here"
                    inputProps={{ 'aria-label': '' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                {input.trim() && (
                    <IconButton color="secondary" sx={{ maxHeight: 50 }} aria-label="directions" onKeyDown={handleMessageSend} onClick={handleMessageSend}>
                        <Forward />
                    </IconButton>
                )}
                <IconButton color="secondary" sx={{ maxHeight: 50 }} aria-label="directions" onClick={() => setIsChatOpen(!isChatOpen)}>
                    {isChatOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </IconButton>
                {conversation.length > 0 && (
                    <IconButton color="secondary" sx={{ maxHeight: 50 }}  onClick={() => setIsDialog(true)}>
                        <Delete />
                    </IconButton>
                )}
            </Paper>

            <Dialog isDialog={isDialog} handleCloseDialog={() => setIsDialog(false)} handleDeleteChat={handleDeleteChat} />
        </>
    );
}
