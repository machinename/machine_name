'use client'

import MNIcon from './components/Icon';
import styles from './styles/page.module.css';

export default function Home() {
    return (
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>MACHINE NAME</h1>
                <MNIcon/>
            </div>
    );
};