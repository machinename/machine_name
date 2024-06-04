'use client';
import React, { useEffect, useRef, useState } from 'react';
import {Button, Divider, IconButton, Paper, useMediaQuery} from '@mui/material';
import Link from 'next/link';
import { Menu } from '@mui/icons-material';

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

        <header className={scrolled ? "bg-white shadow fixed top-0 w-full flex flex-row items-center justify-center h-[max(5vh,50px)] p-2 z-1200" : "bg-white fixed top-0 w-full h-[max(5vh,50px)] p-2 z-1200 flex flex-row items-center justify-center"}>
                <div className="container mx-auto ">
                    <div className="flex justify-between items-center">
                <nav className="flex flex-row items-center justify-center space-x-3">
                    {isMobile && (
                    <IconButton ref={iconButtonRef}  onClick={() => setIsMenu(!isMenu)}><Menu color='secondary'/></IconButton>)}
                    <Link href="/" className="text-black hover:text-gray-400">
                        <Button className="rounded-none">
                            MACHINE NAME
                        </Button>
                    </Link>
                
                    {!isMobile && (
                        <>
                            <Divider orientation="vertical" flexItem />
                            <Link href="/mini_ml" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">MINI ML</Button>
                            </Link>
                            <Link href="/solutions" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">SOLUTIONS</Button>
                            </Link>
                            <Link href="/templates" className="text-black hover:text-gray-400">
                                <Button className="rounded-none">TEMPLATES</Button>
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
                <Paper ref={menuRef} className="absolute bg-white shadow p-2 ml-2 mt-2 flex flex-col items-center rounded-none z-1200">
                    <Link href="/mini_ml" className="w-full">
                        <Button className="rounded-none w-full">MINI ML</Button>
                    </Link>
                    <Link href="/solutions" className="w-full">
                        <Button className="rounded-none w-full">SOLUTIONS</Button>
                    </Link>
                    <Link href="/templates" className="w-full">
                        <Button className="rounded-none w-full">TEMPLATES</Button>
                    </Link>
                </Paper>
            )}
            </header>

            </>
            
    );
}
