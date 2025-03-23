import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_components/ui/carousel";
import Image from "next/image";

export default function Offers() {
  return (
    <div className="w-full h-full">
      <Carousel
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        {/* Carousel Content */}
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full bg-white border rounded-lg shadow-sm flex items-center p-4">
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Offer Title</h3>
                  <p className="text-gray-600 mt-1">Offer Description</p>
                  <button className="mt-2 bg-[#057d23] text-white px-4 py-2 rounded-md hover:bg-[#057d23] transition">
                    Save 15%
                  </button>
                </div>

                {/* Offer Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src={"/assets/offer.jpeg"}
                    alt={"title"}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
