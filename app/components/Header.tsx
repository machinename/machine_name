'use client';
import React, { useEffect, useRef, useState } from 'react';
import {Button, Divider, IconButton, Paper, useMediaQuery} from '@mui/material';
import Link from 'next/link';
import { Close, Menu } from '@mui/icons-material';

export default function AppBar() {
    const isMobile = useMediaQuery('(max-width:732px)');
    const [isMenu, setIsMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const iconButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                iconButtonRef.current &&
                !iconButtonRef.current.contains(target)
            ) {
                setIsMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>          

        <header className={scrolled ? "bg-white shadow fixed top-0 w-full" : "bg-white fixed top-0 w-full"
        }
        style={{
            zIndex: '1200'
        }}>
                <div className="container mx-auto h-[max(5vh,50px)] ">
                    <div className="flex justify-between h-full items-center p-2">
                <nav className="flex flex-row items-center  justify-center space-x-3  ">
                    {isMobile && (
                    <IconButton ref={iconButtonRef}  onClick={() => setIsMenu(!isMenu)}> {isMenu ? <Close color='secondary'/> : <Menu color='secondary'/>}</IconButton>)}
                    <Link href="/" className="text-black hover:text-gray-400">
                        <Button className="rounded-none">
                            MACHINE NAME
                        </Button>
                    </Link>
                
                    {!isMobile && (
                        <>
                            <Divider orientation="vertical" flexItem />
      
                            <Link href="/projects" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">PROJECTS</Button>
                            </Link>
                            <Link href="/blog" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">BLOG</Button>
                            </Link>
                        </>
                        )}
                    </nav>
                    <Link href="/contact" className="text-black hover:text-gray-400">
                        <Button className="rounded-none" variant='contained'>CONTACT</Button>
                    </Link>
                    </div>
                </div>
                {isMenu && isMobile && (
                <Paper ref={menuRef} className="absolute bg-white shadow p-2  flex w-full flex-col items-center rounded-none">
                    <Link href="/projects" className="w-full">
                        <Button className="rounded-none w-full">PROJECTS</Button>
                    </Link>
                    <Link href="/blog" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">BLOG</Button>
                    </Link>
                </Paper>
            )}
            </header>

            </>
            
    );
}
