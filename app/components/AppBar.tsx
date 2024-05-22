'use client'
import styles from '../styles/page.module.css';
import { Box,  Button } from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


export default function AppBar() {
    return (

        <Box className={styles.appBar} sx={{ backgroundColor: 'background.default' }}>
            <Box className={styles.appBarStart}>
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
                <Link href="/blog" >
                    <Button sx={{ borderRadius: '0' 
                         }}>
                        BLOG
                    </Button>
                </Link>
            </Box>
            <Box className={styles.appBarEnd} />
        </Box>

    ); 
}
