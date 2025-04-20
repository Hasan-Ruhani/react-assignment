"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
}

export default function BlogCard({
  id,
  title,
  excerpt,
  author,
  date,
  image,
  categories,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <Link href={`/blog/${id}`} className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <Link href={`/blog/${id}`} className="group">
            <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="pt-2 text-sm text-muted-foreground">
          <div className="flex justify-between w-full">
            <span>{author}</span>
            <span>{format(new Date(date), 'MMM dd, yyyy')}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}