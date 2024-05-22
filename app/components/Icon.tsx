'use client'

import { CSSProperties } from 'react';
import styles from '../styles/page.module.css';

interface MNIconProps {
    size?: number;
    color?: string;
}

export default function MNIcon({ size = 200, color = '#7f7f7f' }: MNIconProps) {
    const iconSize = size / 5;

    const iconStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        height: size,
        minWidth: size * 3,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#333',
        padding: '1%'
    };

    const letterContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: iconSize * 4,
        width: iconSize * 4,
        backgroundColor: color
    };

    const rotatedLetterStyle: CSSProperties = {
        ...letterContainerStyle,
        transform: 'rotate(45deg)'
    };

    return (
        <div style={iconStyle}>
            <div style={letterContainerStyle}>
                <h1 className={styles.h1}>M</h1>
            </div>
            <div style={{ width: iconSize }} />
            <div style={letterContainerStyle}>
                <h2 className={styles.h2}>E</h2>
            </div>
            <div style={{ width: iconSize }} />
            <div style={letterContainerStyle}>
                <h1 className={styles.h1}>N</h1>
            </div>
            <div style={{ width: iconSize }} />
            <div style={{ ...rotatedLetterStyle, transform: 'rotate(180deg)' }}>
                <h2 className={styles.h2}>E</h2>
            </div>
        </div>
    );
}

