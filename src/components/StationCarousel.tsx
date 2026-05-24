"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface StationCarouselProps {
  images: { src: string; alt: string }[];
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
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
                {/* 
                  Para agregar la imagen:
                  1. Coloca el archivo en: public{img.src}
                  2. Descomenta el componente Image de abajo
                  3. Ajusta el quality si es necesario

                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    loading="lazy"
                  />
                */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent font-[Arimo]">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-[Arimo] max-w-xs mx-auto">
                      {/* img.alt — disponible cuando la imagen esté agregada */}
                      {img.alt}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
                      {img.src}
                    </p>
                  </div>
                </div>
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
