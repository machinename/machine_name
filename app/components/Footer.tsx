'use client'

import React from 'react'
import { useThemeContext } from './ThemeProvider'
import styles from '../styles/page.module.css'
import Link from 'next/link'
import {  DarkMode, GitHub} from '@mui/icons-material';
import { IconButton } from '@mui/material'

export default function Footer() {
    const GitHubUrl = "https://github.com/machinename"
    const { toggleTheme, } = useThemeContext();

    return (
        // Footer container with defined styles 
        <div className={styles.footer}>
            {/* Start of footer content */}
            <div className={styles.footerStartContent}>
                <p>© 2024 Machine Name</p>
            </div>


            {/* End section containing the toggle for dark mode */}
            <div className={styles.footerEndContent}>
                <IconButton aria-label="DarkMode" onClick={toggleTheme}>
                    <DarkMode color='secondary' />
                </IconButton>
                <Link href={GitHubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconButton aria-label="GitHub">
                        <GitHub color='secondary'/>
                    </IconButton>
                </Link>
            </div>

            {/* End section for mobile mode */}
            <div className={styles.mobileFooterEndContent}>
            <IconButton aria-label="DarkMode" onClick={toggleTheme}>
                    <DarkMode color='secondary' />
                </IconButton>
            </div>

            <div className={styles.mobileFooterEndContent}>
                <Link href={GitHubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                <IconButton aria-label="GitHub">
                    <GitHub color='secondary'/>
                </IconButton>
                </Link>
            </div>
        </div>
    );
}
