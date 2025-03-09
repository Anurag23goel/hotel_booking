import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { MapPin, Star } from "lucide-react";

export default function HotelDeals() {
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
            <div className="p-2 flex justify-center">
              <div className="w-full max-w-screen bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600"
                    alt="Hotel Room"
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#057d23] text-white px-2 py-0.5 text-sm font-medium rounded">
                    Genius
                  </div>
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 leading-tight mb-1">
                    Hotel Uptown - 1Km From Connaught Place
                  </h2>

                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>New Delhi, India</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center bg-[#057d23] text-white px-2 py-1 rounded">
                      <span className="font-bold mr-1">8.1</span>
                      <Star size={14} fill="currentColor" />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Very good</span>
                      <span className="text-gray-500"> · 524 reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-green-100 text-[#057d23] px-2 py-1 rounded text-sm font-medium">
                      Early 2025 Deal
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        ₹16,252
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        ₹8,939
                      </div>
                      <div className="text-xs text-gray-500">2 nights</div>
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
