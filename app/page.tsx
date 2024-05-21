import { ArrowForward, ModelTrainingOutlined, WorkHistory } from '@mui/icons-material';
import styles from './styles/page.module.css';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

// App component with references and sections for Home, Experience, and Projects
export default function Home() {
    return (
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>MACHINE NAME</h1>
                <div                style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',  
                        borderRadius: '0',
                       
                        minWidth: '400px', 
                        minHeight: '100px', 
                        backgroundImage: `url(/logo.svg)`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                        
                    
                        
                    }}>

                </div>
            </div>
    );
};

