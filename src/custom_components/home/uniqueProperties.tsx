import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import { Heart } from "lucide-react";

export default function UniqueProperties() {
  return (
    <Carousel className="w-full" opts={{
      align: "start",
      loop: true,
    }}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-2 flex justify-center">
              <div className="w-full max-w-screen bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&q=80&w=600"
                    alt="Heritage Madurai"
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <button
                    className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Heritage Madurai
                  </h2>
                  <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                    <span>India,</span>
                    <span>Madurai</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-[#057d23] text-white px-2 py-1 rounded text-sm font-medium">
                      8.6
                    </span>
                    <div className="text-sm">
                      <span className="font-medium">Fabulous</span>
                      <span className="text-gray-600"> · 1,238 reviews</span>
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
