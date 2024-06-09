'use client';

import { Email, GitHub, LinkedIn, Message } from '@mui/icons-material';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

// Navigation items with paths and names
const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'Work',
  },
  '/projects': {
    name: 'Projects',
  },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the navbar has been scrolled
  const navbarRef = useRef(); // Reference to the navbar element

  // Handle scroll event to add shadow to the navbar when scrolled
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts, and clean up when it unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Paper component from MUI used for styling
    <Paper
      sx={{
        borderRadius: '0px', // No border radius
      }}
      className={`w-full p-4 fixed top-0 ${isScrolled ? 'shadow' : 'shadow-none'}`} // Add shadow class if scrolled
    >
      <nav className="flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center space-x-3">
          {/* Map over navItems to create navigation links */}
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link key={path}  href={path}>
              {name === 'MN' ? (
                // Display logo for 'MN'
                <Image src="/favicon.ico" alt="Icon" width={24} height={24} />
              ) : (
                // Display name for other nav items
                name
              )}
            </Link>
          ))}
        </div>
        {/* Link to the contact page */}
        <div className="flex flex-row items-center space-x-3">
        <Link href="mailto:khlawton@asu.edu">
          <Email/>
        </Link>
        {/* <Link href="https://www.linkedin.com/in/kendrick-lawton-257684247/" target='_blank' rel='noopener noreferrer' passHref>
          <LinkedIn/>
        </Link> */}
        <Link href="https://github.com/machinename" target='_blank' rel='noopener noreferrer' passHref>
          <GitHub/>
        </Link>
        </div>
      </nav>
    </Paper>
  );
}
