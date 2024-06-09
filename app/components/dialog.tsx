'use client'

import { useEffect, useRef } from 'react';
import {
    Button,
} from '@mui/material';

interface DialogProps {
    isDialog: boolean;
    handleCloseDialog: () => void;
    handleDeleteChat: () => void;
}

export default function Dialog({ isDialog, handleCloseDialog, handleDeleteChat }: DialogProps) {
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