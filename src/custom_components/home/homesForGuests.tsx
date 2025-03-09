import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { Heart } from "lucide-react";

export default function HomesForGuests() {
  return (
    <Carousel className="w-full" opts={{
      align: "start",
      loop: true,
    }}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Image Container with Heart Icon */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600"
            alt="Leman Locke Apartment"
            className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Leman Locke</h3>
          
          {/* Location */}
          <p className="text-sm text-gray-600 mb-2">Tower Hamlets, United Kingdom, London</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center bg-[#057d23] text-white text-sm font-medium px-2 py-0.5 rounded">
              8.8
            </div>
            <span className="text-sm font-medium">Fabulous</span>
            <span className="text-sm text-gray-500">· 714 reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-right">
              <div className="text-lg font-semibold">₹ 13,362</div>
            </div>
          </div>
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
