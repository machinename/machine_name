'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useThemeContext } from './ThemeProvider';
import styles from '../styles/page.module.css';
import { Chat, Directions, Search, Menu, Send, SendTimeExtensionRounded, ArrowUpwardRounded, ArrowUpwardOutlined } from '@mui/icons-material';
import { Button, Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js"
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";

interface Message {
    sender: string;
    message: string;
}

const firebaseApp = initializeApp(firebaseConfig);

// Initialize the Vertex AI service
const vertexAI = getVertexAI(firebaseApp);

// Initialize the generative model with a model that supports your use case
// Gemini 1.5 Pro is versatile and can accept both text-only or multimodal prompt inputs
const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-pro-preview-0409" });

export default function ChatBot() {
    // Accessing toggleTheme function from the theme context using custom hook
    const [isChatBot, setIsChatBot] = useState(false);
    const [conversation, setConversation] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const toggleChatBot = () => {
        setIsChatBot(!isChatBot);
    };

    const handleMessageSend = async () => {
        if (input.trim() !== '') {
            setConversation([
                ...conversation,
                { sender: 'YOU', message: input }
            ]);

            const responseInput = input;
            setInput('');
            try {
               
                // To generate text output, call generateContent with the text input
                const result = await model.generateContent(responseInput);
              
                const response = result.response;
                
                const text = response.text();
         
                setConversation([
                    ...conversation,
                    { sender: 'YOU', message: responseInput},
                    { sender: 'AI', message: text}
                ]);
            } catch (error) {
                console.error('Error sending message to Vertex AI:', error);
                setConversation([
                    ...conversation,
                    { sender: 'AI', message: 'An error occurred. Please try again.' }
                ]);
            }
        }
    };



    return (
        <div className={styles.chatBot}>
            {isChatBot && (
                <div className={styles.chatWrapper}>
                    <div>
                        <Paper className={styles.chatDisplay}>
                            {conversation.map((conversation, index) => (
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '2%'

                                }} key={index}>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '2px',
                                        //  background: 'green',
                                        marginBottom: '2px'
                                    }}>
                                        <p style={{ margin: '0', padding: '0' }}>{conversation.sender}</p>
                                        <p style={{ margin: '0', padding: '0' }}>{conversation.message}</p>
                                    </div>

                                </div>
                            ))}
                        </Paper>

                        <Paper
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: 0 }}
                        >

                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="text"
                                value={input}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        // handleMessageSend();
                                    }
                                }}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."

                                inputProps={{ 'aria-label': 'search google maps' }}
                            />

                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleMessageSend}>
                                <ArrowUpwardOutlined />
                            </IconButton> 
                        </Paper>


                    </div>

                </div>
            )}
            <div className={styles.chatButtonWrapper}>
                <Button

                    onClick={toggleChatBot}

                    color="secondary"
                    sx={{ borderRadius: '0' }}
                    variant="contained"
                    endIcon={<Chat />}
                >
                    AI CHAT
                </Button>
            </div>
        </div>
    );
}