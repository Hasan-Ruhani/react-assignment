"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Puzzle, 
  PenTool, 
  Code, 
  Rocket 
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements.",
  },
  {
    icon: Puzzle,
    title: "Strategy",
    description: "We develop a comprehensive strategy tailored to your specific needs and objectives.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our designers create visually stunning concepts that align with your brand identity.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers bring the designs to life with clean, efficient, and scalable code.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to keep everything running perfectly.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We follow a proven methodology to ensure every project is completed successfully.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 rounded-full bg-card p-4 border-4 border-background shadow-sm">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="hidden md:flex absolute -bottom-8 left-1/2 -translate-x-1/2 text-3xl font-light text-muted-foreground">
                  {index < processSteps.length - 1 ? "↓" : ""}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}