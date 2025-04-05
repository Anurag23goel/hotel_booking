"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/shadcn_components/ui/card";
import { Badge } from "@/shadcn_components/ui/badge";
import Image from "next/image";
import { PROPERTY_CARD_TYPE } from "@/Types";


export function PropertyCard({
  name,
  price,
  rating,
  image,
  distance,
  amenities,
  isValueStays,
  taxesAndFees,
}: PROPERTY_CARD_TYPE) {
  return (
    <Card className="overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-36 md:h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isValueStays && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1">
            BharatTrips ValueStays
          </Badge>
        )}
      </div>
      <CardHeader className="p-3 md:p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-sm md:text-base lg:text-lg line-clamp-2">
              {name}
            </h3>
            <div className="flex items-center mt-0.5 md:mt-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg md:text-xl lg:text-2xl font-bold">
              ₹{price.toLocaleString()}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {taxesAndFees}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 md:p-4 pt-0">
        <div className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
          {distance}
        </div>
        <div className="space-y-1 md:space-y-2">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-xs md:text-sm">
              {amenity}
            </div>
          ))}
        </div>
        <button className="w-full mt-3 md:mt-4 bg-[#310744] text-white py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] transition-colors text-xs md:text-sm font-medium">
          VIEW DETAILS
        </button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
