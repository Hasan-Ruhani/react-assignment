"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { company } from "@/lib/data";
import TeamSection from "@/components/about/TeamSection";
import ValueSection from "@/components/about/ValueSection";
import HistorySection from "@/components/about/HistorySection";

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're a team of passionate digital experts committed to helping businesses thrive in the digital world.
            </motion.p>
          </div>
        </div>
      </section>

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
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in {company.founded}, {company.name} has grown from a small design studio to a full-service digital agency serving clients across various industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that great design and technology should be accessible to all businesses, regardless of size. Our mission is to help our clients succeed in the digital landscape by creating beautiful, functional, and effective digital solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                With a team of experienced designers, developers, and marketing specialists, we have the expertise to handle projects of any size and complexity.
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team collaborating"
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

      <ValueSection />
      <HistorySection />
      <TeamSection />
    </>
  );
}