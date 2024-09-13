"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

import HeroImage1 from "@/public/hero1.jpg.webp";
import HeroImage2 from "@/public/hero2.jpg.webp";
import HeroImage3 from "@/public/hero3.jpg.webp";
import HeroImage4 from "@/public/hero4.jpg.webp";
import HeroImage5 from "@/public/hero5.jpg.webp";
import HeroImage6 from "@/public/hero6.jpg.webp";

const HeroImages = [
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
  HeroImage5,
  HeroImage6,
];

export const HeroSection = () => {
  return (
    <Carousel
      className="bg-card p-4 rounded-xl group"
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 2,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {HeroImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <Card className="overflow-hidden">
              <Image
                className="object-cover w-full"
                src={image}
                alt={"HeroImage" + index}
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CarouselNext className="right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Carousel>
  );
};
