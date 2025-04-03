"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/shadcn_components/ui/card";
import { Badge } from "@/shadcn_components/ui/badge";
import Image from "next/image";

interface PropertyCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
  distance: string;
  amenities: string[];
  isMmtValueStays?: boolean;
  taxesAndFees: string;
}

export function PropertyCard({
  name,
  price,
  rating,
  image,
  distance,
  amenities,
  isMmtValueStays,
  taxesAndFees,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isMmtValueStays && (
          <Badge className="absolute top-2 left-2 bg-red-500">
            MMT ValueStays
          </Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">{name}</h3>
            <div className="flex items-center mt-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">₹{price.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">{taxesAndFees}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-sm text-muted-foreground mb-2">{distance}</div>
        <div className="space-y-2">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-sm">
              {amenity}
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          VIEW DETAILS
        </button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
