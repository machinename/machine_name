import React, { useRef, useEffect } from 'react';

interface DialogProps {
    isDialog: boolean;
    handleCloseDialog: () => void;
    handleDeleteChat: () => void;
}

export function Dialog({ isDialog, handleCloseDialog, handleDeleteChat }: DialogProps) {
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
        <div ref={dialogRef} className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white dark:bg-gray-800 shadow-md rounded-none p-4">
            <div className="text-left pb-2">
                <p className="text-lg font-semibold">Delete Chat?</p>
            </div>
            <div className="text-left pb-4">
                <p>This will delete all of the chat history. This will also delete all related activity.</p>
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                    onClick={handleCloseDialog}
                >
                    CANCEL
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={handleDeleteChat}
                >
                    DELETE
                </button>
            </div>
        </div>
    );
}
