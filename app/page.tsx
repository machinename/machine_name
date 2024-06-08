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
  Delete,
  Close
} from '@mui/icons-material';
import firebase from "../firebaseConfig";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAppContext } from './contexts/app_provider';
import Dialog from './components/dialog';
import { ProjectList } from './components/lists';
import Link from 'next/link';

export default function Page() {
  const { isChatOpen, setIsChatOpen, conversation, setConversation } = useAppContext();

  const [input, setInput] = useState<string>('');
  const [isDialog, setIsDialog] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMiddleText, setShowMiddleText] = useState(false);
  const [showLastText, setShowLastText] = useState(false);

  const conversationEndRef = useRef<HTMLDivElement>(null);

  const handleDeleteChat = () => {
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

  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const handleMessageSend = async () => {
    setIsChatOpen(true);
    if (input.trim() !== '') {
      const responseInput = input;
      setConversation([...conversation, { sender: 'CLIENT', message: responseInput }]);
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
          { sender: 'SERVER', message: 'An error occurred. Please try again.' },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section>
        {!isChatOpen && (
          <>
            <h1 className="tracking-tighter mb-4">machinename.dev</h1>
            <h2 className="tracking-tighter text-neutral-600 dark:text-neutral-400">
              Hello, my name is Kendrick. Welcome to my developer portfolio–machinename.dev, built with Next.js!
            </h2>
            {showMiddleText &&
              <>
                <hr className="my-3 border-neutral-100 dark:border-neutral-800"></hr>
                <h1 className="mb-4 tracking-tighter">Work</h1>
                <Link className='flex flex-col' href='/work'>
                  <h2 className="tracking-tighter text-neutral-600 dark:text-neutral-400">Clyde & Co</h2>
                  <h2 className="tracking-tighter text-neutral-600 dark:text-neutral-400">Test Automation Engineer, 2023 — Current </h2>
                </Link>
              </>
            }
            {showLastText &&
              <>
                <hr className="my-3 border-neutral-100 dark:border-neutral-800"></hr>
                <div className="mb-8">
                  <ProjectList />
                </div>
              </>}
          </>
        )}
        <>
          {isChatOpen && (conversation.map((msg, index) => (
            <div ref={conversationEndRef} key={index} className='py-4 '>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.sender}</ReactMarkdown>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.message}</ReactMarkdown>
            </div>
          ))
          )}
          {isLoading && (
            <div ref={conversationEndRef} className="flex items-center  justify-center">
              <CircularProgress size={30} />
            </div >
          )}
        </>
      </section>
      <>
        <Dialog isDialog={isDialog} handleCloseDialog={() => {
          setIsDialog(false);
        }} handleDeleteChat={handleDeleteChat} />
      </>
      <div className={isInputOpen ? "flex flex-col bg-white fixed w-full bottom-0 max-w-3xl px-3 pt-3" : "bottom-0 fixed right-0 p-3"}>
        {
          isInputOpen ?
            <>
              <div className=" bg-gray-100 flex items-center rounded-none p-2">
                <InputBase
                  placeholder='Enter prompt...'
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
                <IconButton color="secondary" onClick={() => {
                  setIsInputOpen(false);
                  setIsChatOpen(false);
                }}>
                  <Close />
                </IconButton>
              </div>
              <div className='text-center p-2 bg-white'>
                <p>Chat can make mistakes. Check important info.</p>
              </div>
            </>
            :
            <Button className='rounded-none' variant='contained' onClick={() => setIsInputOpen(true)}>AI Chat</Button>}
      </div>
    </>
  );
}

