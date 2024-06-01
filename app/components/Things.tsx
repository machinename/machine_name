'use client'

import React from 'react'
import styles from '../styles/page.module.css'
import Link from 'next/link'
import { Paper } from '@mui/material'
import { useAppContext } from '../contexts/AppProvider';

export default function Things() {
    const GitHubUrl = "https://github.com/machinename"
    const { toggleTheme } = useAppContext();

    return (
        // Footer container with defined styles 
        <div className={styles.thingsContainer}>
            <Paper className={styles.things}></Paper>
            <Paper className={styles.things}></Paper>
            <Paper className={styles.things}></Paper>
            <Paper className={styles.things}></Paper>
        </div>
    );
}
