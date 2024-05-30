'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/page.module.css';
import { Box, Button, Divider, IconButton, Paper } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from './ThemeProvider';

export default function AppBar() {
    const [isMenu, setIsMenu] = useState(false);
    const pathname = usePathname()
    const contactEmail = "info@machinename.dev";
    const subject = encodeURIComponent("Inquiry");
    const body = encodeURIComponent("Hello, I would like to know more about your services.");
    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    const iconButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const { isDarkTheme } = useThemeContext();


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
    
          if (
            menuRef.current &&
            !menuRef.current.contains(target) &&
            iconButtonRef.current &&
            !iconButtonRef.current.contains(target) // Check if click is not on the IconButton
          ) {
            setIsMenu(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <>
        <Box className={styles.appBar} sx={{ backgroundColor: 'background.default' }}>
            <Box className={styles.appBarStart}>
                <Link href="/">
                    <Button sx={{ borderRadius: '0' }} className={pathname === '/' ? styles.activeLink : ''}>MACHINE NAME</Button>
                </Link>
                <Box sx={{
                    height: '100%',
                    padding: '4px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Divider orientation="vertical"/>
                </Box>
                <Link href="/mini_ml">
                    <Button sx={{ borderRadius: '0' }} className={pathname === '/mini_ml' ? styles.activeLink : ''}>MINI ML</Button>
                </Link>
                <Box sx={{
                    height: '100%',
                    padding: '4px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Divider orientation="vertical"/>
                </Box>
                <Link href="/solutions">
                    <Button sx={{ borderRadius: '0' }} className={pathname === '/solutions' ? styles.activeLink : ''}>SOLUTIONS</Button>
                </Link>
            </Box>
            <Box className={styles.appBarStartMobile}>
                <IconButton ref={iconButtonRef}  onClick={() => setIsMenu(!isMenu)}><MenuIcon color='secondary'/></IconButton>
                    <Box sx={{
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Divider orientation="vertical"/>
                    </Box>
                <Link href="/">
                    <Button sx={{ borderRadius: '0' }} className={pathname === '/' ? styles.activeLink : ''}>MACHINE NAME</Button>
                </Link>
            </Box>
            <Box className={styles.appBarEnd} >
                <a href={mailtoLink}>
                    <Button className={styles.button} color='secondary'sx={{ borderRadius: '0' }}variant="contained">
                        Contact
                    </Button>
                </a>
            </Box>
        </Box>

        {isMenu && ( 
        <Paper ref={menuRef} className={styles.appBarMobileMenu}>
            <Link href="/mini_ml">
                <Button sx={{ borderRadius: '0' }} className={pathname === '/mini_ml' ? styles.activeLink : ''}>MINI ML</Button>
            </Link>
            <Link href="/solutions">
                <Button sx={{ borderRadius: '0' }} className={pathname === '/solutions' ? styles.activeLink : ''}>SOLUTIONS</Button>
            </Link>
        </Paper>
      )}

        </>
    ); 
}
