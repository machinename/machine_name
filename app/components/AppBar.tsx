'use client'
import styles from '../styles/page.module.css';
import { Box, Button, Divider } from '@mui/material';
import Link from 'next/link';

export default function AppBar() {
    const contactEmail = "info@machinename.dev";
    const subject = encodeURIComponent("Inquiry");
    const body = encodeURIComponent("Hello, I would like to know more about your services.");
    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    return (
        <Box className={styles.appBar} sx={{ backgroundColor: 'background.default' }}>
            <Box className={styles.appBarStart}>
                <Link href="/">
                    <Button sx={{ borderRadius: '0'  }}>MACHINE NAME</Button>
                </Link>
                <Box sx={{
                    height: '100%',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                <Divider orientation="vertical" sx={{
                   
                }}/>
                </Box>
                
                <Link href="/mini_ml" >
                    <Button sx={{ borderRadius: '0' }}>MINI ML</Button>
                </Link>
                <Link href="/solutions" >
                    <Button sx={{ borderRadius: '0' }}>SOLUTIONS</Button>
                </Link>
                {/* <Link href="/blog" >
                    <Button sx={{ borderRadius: '0' }}>BLOG</Button>
                </Link> */}
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
