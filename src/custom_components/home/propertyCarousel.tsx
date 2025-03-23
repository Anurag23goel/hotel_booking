import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { Home } from "lucide-react";
import Image from "next/image";
import apt from "../../../public/assets/types/apt.jpeg";
import cabin from "../../../public/assets/types/cabin.jpeg";
import glamping from "../../../public/assets/types/glamping.jpeg";
import homestay from "../../../public/assets/types/homestay.jpeg";
import hotel from "../../../public/assets/types/hotel.jpeg";
import resort from "../../../public/assets/types/resort.jpeg";
import ryokans from "../../../public/assets/types/ryokans.jpeg";
import villa from "../../../public/assets/types/villa.jpeg";
import cottage from "../../../public/assets/types/cottages.jpeg";

const typesOfProperties = [
  { name: "Apartment", image: apt },
  { name: "Cabin", image: cabin },
  { name: "Glamping", image: glamping },
  { name: "Homestay", image: homestay },
  { name: "Hotel", image: hotel },
  { name: "Resort", image: resort },
  { name: "Ryokans", image: ryokans },
  { name: "Villa", image: villa },
  { name: "Cottages", image: cottage },
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
            <div className="p-2  flex justify-center ">
              <div className="group cursor-pointer ">
                <div className="relative aspect-square overflow-hidden rounded-3xl ">
                  <Image
                    src={property.image?.src}
                    alt={property.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
