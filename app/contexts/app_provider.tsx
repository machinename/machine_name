'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

interface Message {
    sender: string;
    message: string;
}

interface AppContextType {
    toggleTheme: () => void;
    isDarkTheme: boolean;
    isChatOpen: boolean;
    setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
    conversation: Message[];
    setConversation: React.Dispatch<React.SetStateAction<Message[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [conversation, setConversation] = useState<Message[]>([]);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <AppContext.Provider value={{
            isDarkTheme,
            toggleTheme,
            isChatOpen,
            setIsChatOpen,
            conversation,
            setConversation
        }}>
            <MuiThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppContext.Provider>
    );
};
