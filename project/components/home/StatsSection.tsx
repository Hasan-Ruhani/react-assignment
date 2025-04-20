"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Award, 
  Coffee,
  Clock
} from "lucide-react";

const stats = [
  {
    label: "Happy Clients",
    value: "150+",
    icon: User,
    description: "Businesses we've helped succeed",
  },
  {
    label: "Projects Completed",
    value: "250+",
    icon: Award,
    description: "Successful digital solutions delivered",
  },
  {
    label: "Coffee Consumed",
    value: "5,280+",
    icon: Coffee,
    description: "Cups that fueled our creativity",
  },
  {
    label: "Years Experience",
    value: "10+",
    icon: Clock,
    description: "Of digital excellence",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}