import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import Image from "next/image";

export default function PopularAttractions() {
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
                  <Image
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600"
                    alt="Taj Mahal at sunrise"
                    width={600}
                    height={400}
                    className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h2 className="text-white text-xl font-semibold leading-tight">
                      Sunrise Taj Mahal Tour From Delhi
                    </h2>
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
