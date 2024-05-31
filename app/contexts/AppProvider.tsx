'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Creating light and dark themes using Material-UI's createTheme function
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#333',
        },
        background: {
            default: '#FFF',
        },
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#FFF',
        },
        background: {
            default: '#333',
        },
    }
});

// Creating a context for managing theme state
const ThemeContext = createContext({
    toggleTheme: () => { },
    isDarkTheme: true,
});

// Custom hook to access the theme context
export const useThemeContext = () => useContext(ThemeContext);

// Creating a context for managing conversation state
interface Message {
    sender: string;
    message: string;
    type: 'text' | 'code';
}

interface ConversationType {
    conversation: Message[];
    setConversation: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ConversationContext = createContext<ConversationType | undefined>(undefined);

export const useConversation = (): ConversationType => {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error('useConversation must be used within a ConversationProvider');
    }
    return context;
};

// AppProvider component to manage both theme and conversation state
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [conversation, setConversation] = useState<Message[]>([]);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    // Selecting the current theme based on isDarkTheme state
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    // Providing both theme and conversation contexts
    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
            <ConversationContext.Provider value={{ conversation, setConversation }}>
                <MuiThemeProvider theme={currentTheme}>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </ConversationContext.Provider>
        </ThemeContext.Provider>
    );
};
