import React from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import Image from "next/image";

export const ProductSection = () => {
  return (
    <div className="bg-card p-4 rounded-xl space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <span>Title</span>
          <div className="flex items-center gap-1">
            <div className="bg-destructive text-destructive-foreground rounded px-1 py-0.5">
              02
            </div>
            :
            <div className="bg-destructive text-destructive-foreground rounded px-1 py-0.5">
              57
            </div>
            :
            <div className="bg-destructive text-destructive-foreground rounded px-1 py-0.5">
              29
            </div>
          </div>
        </div>
        <Button variant="main">Xem tất cả</Button>
      </div>
      <Carousel
        className="px-[2px]"
        opts={{
          align: "start",
          slidesToScroll: 6,
        }}
      >
        <CarouselContent>
          {[...Array(30)].map((_, index) => (
            <CarouselItem key={index} className="basis-1/6">
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
};

const ProductCard = () => {
  return (
    <Card className="overflow-hidden">
      <Image
        src={
          "https://salt.tikicdn.com/cache/750x750/ts/product/56/70/a6/e08b592083a5642ffe5d1242734a2a31.png.webp"
        }
        width={1000}
        height={1000}
        alt="Image1"
        className="object-cover w-full"
      />
      <div className="p-2">
        <div>Title</div>
        <div>Ratting</div>
        <div>Price</div>
        <div>Discount</div>
        <div>Origin</div>
      </div>
    </Card>
  );
};
