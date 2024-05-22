'use client'
import styles from '../styles/page.module.css';
import { Box,  Button, MenuItem, Paper } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


export default function AppBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuProducts = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (

        <Box className={styles.appBar} sx={{ backgroundColor: 'background.default' }}>
            <div className={styles.appBarStart}>
                <Link href="/">
                <Button sx={{ borderRadius: '0'  }}>MACHINE NAME</Button>
                </Link>
                <Link href="/solutions" >
                    <Button sx={{ borderRadius: '0' 
                         }}>
                        SOLUTIONS
                    </Button>
                </Link>
                <Link href="/mini_ml" >
                    <Button sx={{ borderRadius: '0' 
                         }}>
                        MINI ML
                    </Button>
                </Link>
        
            </div>

            <div className={styles.appBarEnd}>                    
  
            </div>
        </Box>

    ); 
}
