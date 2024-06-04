'use client'

import { useState, useEffect, useRef } from 'react';
import {
  CircularProgress,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import {
    KeyboardArrowUp, 
    KeyboardArrowDown, 
    Forward, 
    Delete 
} from '@mui/icons-material';
import firebase from "../firebaseConfig";
import Dialog from './components/Dialog';
import { useAppContext } from './contexts/AppProvider';

export default function Home() {

    const { conversation, setConversation } = useAppContext();
    const { isChatOpen, setIsChatOpen } = useAppContext();
  
    const [input, setInput] = useState<string>('');
    const [isDialog, setIsDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const conversationEndRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (conversationEndRef.current) {
            conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [conversation]);

    return (

      <main className={conversation.length == 0 ? "flex flex-col min-h-[700px] h-[100vh] items-center justify-center pt-20" : "flex flex-col min-h-[700px] items-center pt-20 mb-[100px]"}>
      {conversation.length == 0 && (
        <h1 className="text-5xl">Machine Name</h1>
      )}
      
                <div className="text-black bg-blue rounded-none lg:w-[600px] w-[400px] flex flex-col gap-5 overflow-y-auto">
                    {conversation.map((msg, index) => (
                        <div key={index}>
                            {(msg.type === 'text' || msg.type === 'code') && (
                                <div className="flex flex-row w-full text-left p-2 rounded-lg">
                                    <p>
                                        {msg.sender} - {msg.message}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-center  justify-center">
                            <CircularProgress size={30} />
                        </div>
                    )}
                    <div ref={conversationEndRef} />
                </div>
        

            <Paper className={"bg-gray-100 flex items-center p-2 rounded-none lg:w-[600px] w-[400px] fixed bottom-0 mb-12 z-150"}>
                <InputBase
                    className="ml-1 flex-1"
                    multiline={true}
                    maxRows={2}
                    type="text"
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleMessageSend();
                        }
                    }}
                    onChange={(e) => setInput(e.target.value)}
                    inputProps={{ 'aria-label': '' }}
                />
                
                <IconButton
                    color="secondary"
            
                    aria-label="directions"
                    onKeyDown={handleMessageSend}
                    onClick={handleMessageSend}
                    disabled={input.trim() === ''}
                >
                    <Forward />
                </IconButton>

            
                {conversation.length > 0 && (
                    <IconButton color="secondary" className="" aria-label="directions" onClick={() => setIsChatOpen(!isChatOpen)}>
                        {isChatOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                    </IconButton>
                )}
                {conversation.length > 0 && (
                    <IconButton color="secondary" onClick={() => setIsDialog(true)}>
                        <Delete />
                    </IconButton>
                )}
            </Paper>

            <Dialog isDialog={isDialog} handleCloseDialog={() => setIsDialog(false)} handleDeleteChat={handleDeleteChat} />
        
    </main>
    );
}
