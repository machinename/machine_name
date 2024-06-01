'use client'

import styles from './styles/page.module.css'; 
import ChatBot from './components/ChatBot';
import Things from './components/Things';
import { useAppContext } from './contexts/AppProvider';

export default function Home() {
    const { isChatOpen } = useAppContext();
    
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>MACHINE NAME</h1>
    
            <ChatBot/>
        </div>
    );
}
