'use client'

import { useState, useEffect, useRef } from 'react';
import {
    Button,
  CircularProgress,
  IconButton,
  InputBase
} from '@mui/material';
import {
    KeyboardArrowUp, 
    KeyboardArrowDown, 
    Forward, 
    Delete 
} from '@mui/icons-material';
import firebase from "../../firebaseConfig";


import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useAppContext } from '../contexts/app_provider';



interface DialogProps {
    isDialog: boolean;
    handleCloseDialog: () => void;
    handleDeleteChat: () => void;
}


function Dialog({ isDialog, handleCloseDialog, handleDeleteChat }: DialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                handleCloseDialog();
            }
        };

        if (isDialog) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDialog, handleCloseDialog]);

    if (!isDialog) {
        return null;
    }

    return (
        <div ref={dialogRef} 
     
        style={{
            position: 'fixed',
            marginTop: '30vh',
            width: '400px',
            top: '0',
            zIndex: '900',
            backgroundColor: 'white',
            border: '0.5px solid lightgray',
            padding: '1rem'
        }}>
            <div className="text-left pb-2">
                <p className="text-lg font-semibold">Delete Chat?</p>
            </div>
            <div className="text-left pb-4">
                <p>This will delete all of the chat history. This will also delete all related activity.</p>
            </div>
            <div className="flex justify-end gap-2">
                <Button
                    className="rounded-none"
                    variant='contained'
                    onClick={handleCloseDialog}
                >
                    CANCEL
                </Button>
                <Button
                    className="rounded-none"
                    variant='contained'
                    onClick={handleDeleteChat}
                >
                    DELETE
                </Button>
            </div>
        </div>
    );
}

export default function Page() {

    const { conversation, setConversation } = useAppContext();
    const { isChatOpen, setIsChatOpen } = useAppContext();
  
    const [input, setInput] = useState<string>('');
    const [isDialog, setIsDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showMiddleText, setShowMiddleText] = useState(false);
    const [showLastText, setShowLastText] = useState(false);

    const conversationEndRef = useRef<HTMLDivElement>(null);

    const handleDeleteChat = () => {
        setConversation([]);
        setIsDialog(false);
        setIsChatOpen(false);
    }

    const handleShowChat = () => {
        setConversation([]);
        setIsDialog(false);
        setIsChatOpen(false);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMiddleText(true);
      }, 1200);
  
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowLastText(true);
        }, 2400); 
    
        return () => clearTimeout(timer);
      }, []);
  

    const handleMessageSend = async () => {
        setIsChatOpen(true);
        if (input.trim() !== '') {
            const responseInput = input;
            setConversation([...conversation, { sender: 'CLIENT', message: responseInput}]);
            setInput('');
            setIsLoading(true);
            try {
                const result = await firebase.model.generateContent(responseInput);
                const response = result.response;
                const text = response.text();
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'SERVER', message: text },
                ]);
            } catch (error) {
                console.error('Error sending message to Vertex AI:', error);
                setConversation(prevConversation => [
                    ...prevConversation,
                    { sender: 'SERVER', message: 'An error occurred. Please try again.'},
                ]);
            } finally {
                setIsLoading(false);
            }
        }
    };


    useEffect(() => {
        if (conversationEndRef.current) {
            conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [conversation]);

    return (  
    <>  
           <section className='pb-28'>
                {!isChatOpen && (
                    <>
                        <h1 className="tracking-tighter">Chat With</h1>
                        {showMiddleText && <h1 className="tracking-tighter">Machine Name</h1>}
                        {showLastText && <h1 className="tracking-tighter">Type Away</h1>}
                    </>
                )}
                <>
                  {isChatOpen && (conversation.map((msg, index) => (
                        <div key={index} className='py-4 '>
                            <>
                                {msg.sender}
                            </>
                            <>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.message}</ReactMarkdown>
                            </>
                        </div>
                    ))

                  )}
               


                    {isLoading && (
                        <div className="flex items-center  justify-center">
                            <CircularProgress size={30} />
                        </div>
                    )}
                    <div ref={conversationEndRef} />
                </>

            </section>

            <>
            <Dialog isDialog={isDialog} handleCloseDialog={()=> {
                    setIsDialog(false);
                }} handleDeleteChat={handleDeleteChat}/>
            </>
    
    <div className="flex flex-col fixed w-full bottom-0 max-w-2xl px-2">
                    <div className=" bg-gray-100 flex items-center rounded-none p-2">
                        <InputBase
                        className="ml- flex-1"
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
                            {isChatOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown/>}
                        </IconButton>
                    )}
                    {conversation.length > 0 && (
                        <IconButton color="secondary" onClick={() => setIsDialog(true)}>
                            <Delete />
                        </IconButton>
                    )}
                </div>
                <div className='text-center p-2 bg-white'>
                    <p>Chat can make mistakes. Check important info.</p>
                </div>
                </div>

    </>
    );
}

