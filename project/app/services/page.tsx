"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessSection from "@/components/services/ProcessSection";
import CTASection from "@/components/home/CTASection";
import { 
  Paintbrush, 
  Code, 
  Megaphone,
  Palette,
} from "lucide-react";

// Map service icon names to components
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
      return null;
  }
};

export default function ServicesPage() {
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer a comprehensive range of digital services to help your business grow and succeed online.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={getIcon(service.icon)}
                features={service.features}
                process={service.process}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With countless digital agencies to choose from, here's why our clients trust us with their digital presence:
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <span className="mr-3 text-primary">✓</span>
                  <div>
                    <strong className="font-medium">Expert Team:</strong>
                    <p className="text-muted-foreground">
                      Our specialists bring years of industry experience to every project.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-3 text-primary">✓</span>
                  <div>
                    <strong className="font-medium">Tailored Approach:</strong>
                    <p className="text-muted-foreground">
                      We create custom solutions specific to your business needs, not one-size-fits-all.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-3 text-primary">✓</span>
                  <div>
                    <strong className="font-medium">Results-Driven:</strong>
                    <p className="text-muted-foreground">
                      We focus on delivering measurable results that impact your bottom line.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-3 text-primary">✓</span>
                  <div>
                    <strong className="font-medium">Transparent Communication:</strong>
                    <p className="text-muted-foreground">
                      We keep you informed throughout the entire process with regular updates.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-3 text-primary">✓</span>
                  <div>
                    <strong className="font-medium">Long-Term Partnership:</strong>
                    <p className="text-muted-foreground">
                      We build lasting relationships with our clients, not just one-off projects.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">95%</span>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">250+</span>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">10+</span>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary mb-2">24/7</span>
                <p className="text-muted-foreground">Client Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}