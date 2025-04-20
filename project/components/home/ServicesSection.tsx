"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Paintbrush, 
  Code, 
  Megaphone,

  Palette,
  Check,
  ArrowRight
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "paintbrush":
      return <Paintbrush className="h-6 w-6" />;
    case "code":
      return <Code className="h-6 w-6" />;
    case "megaphone":
      return <Megaphone className="h-6 w-6" />;
    case "palette":
      return <Palette className="h-6 w-6" />;
    default:
      return <Check className="h-6 w-6" />;
  }
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We offer a comprehensive range of digital services to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group rounded-lg border bg-card p-6 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform"
                asChild
              >
                <Link href={`/services#${service.id}`}>
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}