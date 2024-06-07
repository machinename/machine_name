'use client'

import { Button, Divider, Paper } from '@mui/material';
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';

const navItems = {
  '/': {
    name: 'MACHINE NAME',
  },
  '/work': {
    name: 'WORK',
  },
  '/projects': {
    name: 'PROJECTS',
  },
  // '/blog': {
  //   name: 'BLOG',
  // },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Paper
      sx={{
        borderRadius: '0px'
      }}
      className={`w-full p-3 fixed top-0  bg-white ${
        isScrolled ? 'shadow' : 'shadow-none'
      }`}
    >
      <nav className="flex flex-row justify-between scroll-pr-6">
        <div className="flex flex-row space-x-1">
          {Object.entries(navItems).map(([path, { name }], index, array) => {
            const isLastItem = index === array.length - 1;
            return (
              <React.Fragment key={path}>
                <Link href={path}>
                  <Button className="m-0 rounded-none">{name}</Button>
                </Link>
                {!isLastItem && <Divider orientation="vertical" flexItem />}
              </React.Fragment>
            );
          })}
        </div>


        
        <Link href={'/contact'}>
            <Button className="m-0 rounded-none" variant='contained'>CONTACT</Button>
        </Link>
        

      </nav>
    </Paper>
  );
}
