"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  process: string[];
  index: number;
}

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  features,
  process,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="scroll-mt-20"
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-3">
          <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary">
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base mt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="mb-6">
            <h4 className="font-medium mb-3">What We Offer:</h4>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Our Process:</h4>
            <div className="flex flex-wrap gap-2">
              {process.map((step, i) => (
                <Badge key={step} variant="outline" className="px-3 py-1">
                  {i + 1}. {step}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button asChild>
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}