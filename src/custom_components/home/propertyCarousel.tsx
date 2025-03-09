import { Card, CardContent } from "@/shadcn_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { Home } from "lucide-react";
import Image from "next/image";

export default function PropertyCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-2  flex justify-center ">
              <div className="group cursor-pointer ">
                <div className="relative aspect-square overflow-hidden rounded-3xl ">
                  <img
                    src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
                    alt="homestays"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Home className="h-5 w-5 text-neutral-700" />
                  <h3 className="text-lg font-medium text-neutral-900">
                    Homestays
                  </h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
