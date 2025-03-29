import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { Home } from "lucide-react";
import Image from "next/image";

const typesOfProperties = [
  { name: "Apartment", image: "/assets/types/apt.jpeg" },
  { name: "Cabin", image: "/assets/types/cabin.jpeg" },
  { name: "Glamping", image: "/assets/types/glamping.jpeg" },
  { name: "Homestay", image: "/assets/types/homestay.jpeg" },
  { name: "Hotel", image: "/assets/types/hotel.jpeg" },
  { name: "Resort", image: "/assets/types/resort.jpeg" },
  { name: "Ryokans", image: "/assets/types/ryokans.jpeg" },
  { name: "Villa", image: "/assets/types/villa.jpeg" },
  { name: "Cottages", image: "/assets/types/cottages.jpeg" },
];

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
        {typesOfProperties.map((property) => (
          <CarouselItem
            key={property.name}
            className="pl-1 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-2 flex justify-center">
              <div className="group cursor-pointer w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src={property.image}
                    alt={property.name}
                    width={300} // Optimized width for most screens
                    height={300} // Matches aspect-square (1:1 ratio)
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px" // Responsive sizes
                    priority={false} // Set to true if this is above the fold
                    quality={75} // Balance quality and performance
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Home className="h-5 w-5 text-neutral-700" />
                  <h3 className="text-lg font-medium text-neutral-900">
                    {property.name}
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