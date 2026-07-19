"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StationImage } from "@/lib/stations";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface StationCarouselProps {
  images: StationImage[];
}

export default function StationCarousel({ images }: StationCarouselProps) {
  if (!images.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-3xl mx-auto"
      >
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              <div
                className={cn(
                  "relative aspect-video rounded-2xl overflow-hidden border border-border",
                  img.background === "light"
                    ? "bg-white"
                    : img.background === "dark"
                      ? "bg-black"
                      : "bg-muted"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={cn(
                    img.fit === "contain"
                      ? "object-contain p-2 sm:p-3"
                      : "object-cover"
                  )}
                  sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 bg-background border-border hover:bg-accent hover:text-white transition-colors" />
        <CarouselNext className="hidden sm:flex -right-4 bg-background border-border hover:bg-accent hover:text-white transition-colors" />

        {/* Mobile: inline arrow buttons */}
        <div className="flex justify-center gap-4 mt-4 sm:hidden">
          <CarouselPrevious className="static translate-y-0 size-10 bg-background border-border hover:bg-accent hover:text-white transition-colors" />
          <CarouselNext className="static translate-y-0 size-10 bg-background border-border hover:bg-accent hover:text-white transition-colors" />
        </div>
      </Carousel>
    </motion.div>
  );
}
