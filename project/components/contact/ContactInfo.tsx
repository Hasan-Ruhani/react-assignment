"use client";

import React from "react";
import { motion } from "framer-motion";
import { company } from "@/lib/data";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold">Get in Touch</h3>
      <p className="text-muted-foreground">
        Have a question or want to discuss a project? 
        Reach out to us using any of the methods below:
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a 
              href={`mailto:${company.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {company.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Phone</h4>
            <a 
              href={`tel:${company.phone}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {company.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Address</h4>
            <p className="text-muted-foreground">
              {company.address}
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Office Hours</h4>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}