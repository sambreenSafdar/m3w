'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Cross, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      name: 'How it works',
      path: '#how-it-works',
    },
    {
      name: 'Partners',
      path: '#partners',
    },
    {
      name: 'Pricing',
      path: '#pricing',
    },
    {
      name: 'Contact',
      path: '#contact',
    },
  ];
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-secondary border-b border-gray-600 top-0 fixed w-full z-50">
      <div className="container mx-auto">
        <div className="min-h-16 flex items-center w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-5 lg:gap-16">
              <div className="text-white">
                <Link href="/">
                  <Image src="/logo.png" alt="logo" height={50} width={135} />
                </Link>
              </div>
              <div className="hidden md:flex items-center gap-8">
                {navlinks?.map((link) => (
                  <div className="text-white" key={link.path + link.name}>
                    <Link href={link.path}>{link.name}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-5 hidden md:flex">
              <Button className="text-white hover:no-underline" variant="link">
                Login
              </Button>
              <Button variant="outline" className="bg-transparent text-white">
                Signup
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="link"
                size="icon"
                className="px-0 text-white"
                onClick={() => handleMenu()}
              >
                {!isOpen ? (
                  <Menu className="h-6 w-10" />
                ) : (
                  <X className="h-6 w-10" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="min-h-screen absolute w-full bg-white container mx-auto flex items-center">
          <div className="w-full">
            {navlinks?.map((link) => (
              <div
                className="border-b text-center text-3xl py-6 hover:text-primary"
                key={link.path}
              >
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
            <div className="border-b text-center text-3xl py-6 hover:text-primary">
              <Link href="/">Login</Link>
            </div>
            <div className="border-b text-center text-3xl py-6 hover:text-primary">
              <Link href="/">Signup</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
