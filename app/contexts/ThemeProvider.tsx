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

// Creating a context for managing theme state
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
}
);

// Creating a context for managing theme state
const ThemeContext = createContext({
    toggleTheme: () => { },
    isDarkTheme: true,
});

// Custom hook to access the theme context
export const useThemeContext = () => useContext(ThemeContext);

// ThemeProvider component to manage the theme state and provide the theme context
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
    };

    // Selecting the current theme based on isDarkTheme state
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;


    // Providing the theme context and Material-UI's ThemeProvider
    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
            <MuiThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
