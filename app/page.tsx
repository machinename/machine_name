'use client'
import { useState } from 'react';

import {
  CircularProgress,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { KeyboardArrowUp, KeyboardArrowDown, Forward, Delete } from '@mui/icons-material';

import firebase from "../firebaseConfig.js";

import Dialog from './components/Dialog';
import { useConversation } from './contexts/AppProvider';

import styles from './styles/page.module.css'; 

export default function Home() {
    const { conversation, setConversation } = useConversation();
    
    const [input, setInput] = useState<string>('');
    const [isChat, setIsChat] = useState(conversation.length > 1);
    const [isDialog, setIsDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteChat = () => {
        setConversation([]);
        setIsDialog(false);
        setIsChat(false);
    }

    const handleMessageSend = async () => {
        setIsChat(true);
        if (input.trim() !== '') {
            const responseInput = input;
            setConversation([...conversation, { sender: 'YOU', message: responseInput, type: 'text' }]);
            setInput('');
            setIsLoading(true);
            try {
                const result = await firebase.model.generateContent(responseInput);
                const response = result.response;
                const text = response.text();
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'AI', message: text, type: detectCodeType(text) },
                ]);
            } catch (error) {
                console.error('Error sending message to Vertex AI:', error);
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'AI', message: 'An error occurred. Please try again.', type: 'text' },
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
        <div className={styles.wrapper}>
            {!isChat && (<h1 className={styles.h1}>MACHINE NAME</h1>)}
            {isChat && (
                <Paper className={styles.chatContainer} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
                    {conversation.map((msg, index) => (
                        <div className={styles.chatMessage} key={index}>
                            {msg.type === 'text' && (
                                <Typography>
                                    {msg.sender}: {msg.message}
                                </Typography>
                            )}
                            {msg.type === 'code' && (
                                <SyntaxHighlighter language="java" style={dracula} customStyle={{ margin: '10px', borderRadius: '5px' }}>
                                    {msg.message}
                                </SyntaxHighlighter>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className={styles.chatMessage}>
                            <CircularProgress />
                        </div>
                    )}
                </Paper>
            )}

            <Paper className={styles.chatInput}>
                <InputBase
                multiline={true  }
                maxRows={5}
                    sx={{ ml: 1, flex: 1}}
                    type="text"
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleMessageSend();
                        }
                    }}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter Here"
                    inputProps={{ 'aria-label': '' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                {input.trim() && (
                    <IconButton color="secondary" sx={{ maxHeight: 50 }} aria-label="directions" onKeyDown={handleMessageSend} onClick={handleMessageSend}>
                        <Forward />
                    </IconButton>
                )}
                <IconButton color="secondary" sx={{ maxHeight: 50 }} aria-label="directions" onClick={() => setIsChat(!isChat)}>
                    {isChat ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </IconButton>
                {conversation.length > 0 && (
                    <IconButton color="secondary" sx={{ maxHeight: 50 }}  onClick={() => setIsDialog(true)}>
                        <Delete />
                    </IconButton>
                )}
            </Paper>

            <Dialog isDialog={isDialog} handleCloseDialog={() => setIsDialog(false)} handleDeleteChat={handleDeleteChat} />
        </div>
    );
}
