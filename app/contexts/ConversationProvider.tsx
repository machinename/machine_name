'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
    sender: string;
    message: string;
    type: 'text' | 'code';
}

interface ConversationType {
    conversation: Message[];
    setConversation: React.Dispatch<React.SetStateAction<Message[]>>;
}

const Conversation = createContext<ConversationType | undefined>(undefined);

export const useConversation = (): ConversationType => {
    const context = useContext(Conversation);
    if (!context) {
        throw new Error('useConversation must be used within a ConversationProvider');
    }
    return context;
};


export const ConversationProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [conversation, setConversation] = useState<Message[]>([]);
    return (
        <Conversation.Provider value={{ conversation, setConversation }}>
            {children}
        </Conversation.Provider>
    );
};
