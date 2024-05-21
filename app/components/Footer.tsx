'use client'

import React from 'react'
import { useThemeContext } from './ThemeProvider'
import styles from '../styles/page.module.css'
import Link from 'next/link'
import { ChatOutlined, DarkMode, GitHub} from '@mui/icons-material';
import { IconButton } from '@mui/material'

const LINKEDIN_URL =  "https://github.com/kendricklawton"
const GITHUB_URL = "https://www.linkedin.com/in/kendrick-lawton-257684247/"

export default function Footer() {
    const GitHubUrl = "https://github.com/machinename"
    const { toggleTheme } = useThemeContext();

    return (
        // Footer container with defined styles 
        <div className={styles.footer}>
            {/* Start of footer content */}
            <div className={styles.footerStart}>
                <h4 className={styles.h4}>© 2024 Machine Name</h4>
            </div>

            {/*Centered section containing socil media icons */}
            <div className={styles.footerCenter}>
                <div className={styles.footerCenterContent}>
                </div>
            </div>

            {/* End section containing the toggle for dark mode */}
            <div className={styles.footerEnd}>
            <IconButton aria-label="DarkMode" onClick={toggleTheme}>
                    <DarkMode color='secondary' />
                </IconButton>

                <Link href={GitHubUrl}>
                <IconButton aria-label="GitHub">
                    <GitHub color='secondary'/>
                </IconButton>
                </Link>

                <IconButton aria-label="Chat">
                    <ChatOutlined color='secondary'/>
                </IconButton>
            </div>

            <div className={styles.footerEnd1}>
            <IconButton aria-label="DarkMode" onClick={toggleTheme}>
                    <DarkMode color='secondary' />
                </IconButton>
            </div>
            <div className={styles.footerEnd2}>
          

                <Link href={GitHubUrl}>
                <IconButton aria-label="GitHub">
                    <GitHub color='secondary'/>
                </IconButton>
                </Link>

            </div>
            <div className={styles.footerEnd3}>
            

                <IconButton aria-label="Chat">
                    <ChatOutlined color='secondary'/>
                </IconButton>
            </div>
        </div>
    );
}
