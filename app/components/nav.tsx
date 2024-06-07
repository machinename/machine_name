'use client'

import { Button, Divider } from '@mui/material';
import Link from 'next/link'
import React from 'react';

const navItems = {
  '/': {
    name: 'MACHINE NAME',
  },
  '/projects': {
    name: 'PROJECTS',
  },
  '/chat': {
    name: 'CHAT',
  },
  '/contact': {
    name: 'CONTACT',
  },
 
}

export function Navbar() {
  return (
        <nav
          className={"sticky mb-8 top-0 bg-white flex flex-row items-start w-full px-0 py-2 scroll-pr-6"}
        >
          <div className="flex flex-row gap-1">
          {Object.entries(navItems).map(([path, { name }], index, array) => {
          const isLastItem = index === array.length - 1;
          return (
            <React.Fragment key={path}>
              <Link href={path}>
                <Button className='m-0 rounded-none'>
                  {name}</Button>
              </Link>
              {!isLastItem && <Divider orientation="vertical" flexItem />}
            </React.Fragment>
          )
        })}
        </div>
      </nav>
  )
}
