'use client'

import React, { useRef, useEffect } from 'react';
import { Button, Paper } from '@mui/material';
import styles from '../styles/page.module.css';

interface DialogProps {
    isDialog: boolean;
    handleCloseDialog: () => void;
    handleDeleteChat: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isDialog, handleCloseDialog, handleDeleteChat }) => {
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
        <Paper className={styles.dialog} ref={dialogRef}>
            <div className={styles.dialogHeader}>
                <p>Delete Chat?</p>
            </div>
            <div className={styles.dialogContent}>
                <p>This will delete all of the chat history. This will also delete all related activity.</p>
            </div>
            <div className={styles.dialogActions}>
                <Button onClick={handleCloseDialog} sx={{ borderRadius: '0' }}>CANCEL</Button>
                <Button onClick={handleDeleteChat} sx={{ borderRadius: '0' }}>DELETE</Button>
            </div>
        </Paper>
    );
};

export default Dialog;
