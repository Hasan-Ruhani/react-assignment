"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { company } from "@/lib/data";

const milestones = [
  {
    year: 2015,
    title: "Founded",
    description: "Nexus Creative was established with a vision to help businesses succeed in the digital realm.",
  },
  {
    year: 2017,
    title: "Expanded Services",
    description: "Added digital marketing and branding to our service offerings to provide complete digital solutions.",
  },
  {
    year: 2019,
    title: "Office Expansion",
    description: "Moved to a larger office space to accommodate our growing team of creatives and developers.",
  },
  {
    year: 2021,
    title: "International Clients",
    description: "Started working with international clients, expanding our reach beyond national borders.",
  },
  {
    year: 2023,
    title: "Industry Recognition",
    description: "Received multiple awards for our innovative approach to digital solutions and client success.",
  },
];

export default function HistorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Since founding {company.name} in {company.founded}, we've been on an incredible journey 
              of growth and innovation. Here are some key milestones that have shaped who we are today.
            </p>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year} 
                  className="relative pl-10 border-l border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-primary">{milestone.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team working together"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}