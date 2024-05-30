'use client'
import styles from '../styles/page.module.css';
import { Box, Button, Divider } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function AppBar() {
    const pathname = usePathname()
    const contactEmail = "info@machinename.dev";
    const subject = encodeURIComponent("Inquiry");
    const body = encodeURIComponent("Hello, I would like to know more about your services.");
    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    return (
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
            <Box className={styles.appBarEnd} >
                <a href={mailtoLink}>
                    <Button className={styles.button} color='secondary'sx={{ borderRadius: '0' }}variant="contained">
                        Contact
                    </Button>
                </a>
            </Box>
        </Box>
    ); 
}
