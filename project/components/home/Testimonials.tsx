"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";
import { 
  QuoteIcon
} from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-col gap-8 md:flex-row md:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-primary mb-4">
                        <QuoteIcon className="h-8 w-8 opacity-50" />
                      </div>
                      <p className="text-card-foreground mb-6 flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}