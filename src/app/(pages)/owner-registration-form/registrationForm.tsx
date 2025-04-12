"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../shadcn_components/ui/carousel";
import { Card, CardContent } from "../../../shadcn_components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CarouselDemo = () => {
  const images = [
    "/assets/dark.jpg",
    "/assets/lounge.jpg",
    "/assets/pool.jpg",
    "/assets/peopleboat.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Registration Form
          </h1>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Property Images
              </h2>

              <div className="relative">
                <div className="aspect-video relative">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDemo;
