"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Heart, 
  Star, 
  Award, 
  Users, 
  Lightbulb 
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from design to development to customer service.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about digital and committed to creating solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working closely with our clients to ensure their vision becomes reality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new technologies and approaches to stay at the forefront of digital.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality, ensuring every project meets the highest standards.",
  },
  {
    icon: Star,
    title: "Integrity",
    description: "We operate with transparency, honesty, and a commitment to doing what's right.",
  },
];

export default function ValueSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            These core principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-card rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}