"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme-toggle';
import { Laptop, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Laptop className="h-6 w-6" />
            <span className="font-bold">Nexus Creative</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">Services</Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden md:flex" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
                <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">Services</Link>
                <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">Blog</Link>
                <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;