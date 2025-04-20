"use client";

import React from 'react';
import Link from 'next/link';
import { Laptop } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Laptop className="h-6 w-6" />
              <span className="font-bold">Nexus Creative</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into digital reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#web-design" className="hover:underline">Web Design</Link></li>
              <li><Link href="/services#development" className="hover:underline">Development</Link></li>
              <li><Link href="/services#branding" className="hover:underline">Branding</Link></li>
              <li><Link href="/services#marketing" className="hover:underline">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus Creative. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:underline">Twitter</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline">LinkedIn</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline">Instagram</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;