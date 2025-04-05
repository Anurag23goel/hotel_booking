"use client";

import React from "react";
import Image from "next/image";
import { Camera, Utensils, Ban } from "lucide-react";

const RoomDetails: React.FC = () => {
  const rooms = [
    {
      name: "Superior Room With Balcony",
      description: "(280 sq ft (26 sq mt)) | Garden View | Queen Bed",
      image: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200",
      ],
      photos: 6,
      amenities: [
        "Mineral Water",
        "Air Conditioning",
        "Bathroom",
        "Telephone",
        "Closet",
        "Chair",
      ],
      options: [
        {
          type: "Breakfast Included",
          originalPrice: 4500,
          discountedPrice: 1894,
          taxes: 476,
          includes: ["Breakfast Included"],
          nonRefundable: true,
        },
      ],
      deal: "Enjoy Free Breakfast throughout your stay for just ₹85 more!",
    },
    {
      name: "Superior Room",
      description: "(280 sq ft (26 sq mt)) | Garden View | Queen Bed",
      image: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&h=200",
      ],
      photos: 4,
      amenities: [],
      options: [
        {
          type: "Room Only",
          originalPrice: 4500,
          discountedPrice: 1809,
          taxes: 454,
          includes: [],
          nonRefundable: false,
        },
        {
          type: "Room with Breakfast",
          originalPrice: 4500,
          discountedPrice: 1894,
          taxes: 476,
          includes: ["Breakfast Included"],
          nonRefundable: false,
        },
        {
          type: "Room with Breakfast + Lunch/Dinner",
          originalPrice: 7700,
          discountedPrice: 3336,
          taxes: 814,
          includes: ["Breakfast Included", "Lunch or Dinner Included"],
          nonRefundable: false,
        },
      ],
      deal: "Deal Applied: BharatTripsDeal | Great Discounts for You. Get INR674 Off",
    },
    {
      name: "Executive Suite - Pool View",
      description: "(451 sq ft (40 sq mt)) | Swimming Pool View | Double Bed",
      image: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&h=200",
      ],
      photos: 8,
      amenities: [
        "Study Room",
        "Wi-Fi",
        "Room Service",
        "Mineral Water",
        "Air Conditioning",
        "Housekeeping",
      ],
      options: [
        {
          type: "Room Only",
          originalPrice: 5500,
          discountedPrice: 2382,
          taxes: 581,
          includes: [],
          nonRefundable: false,
        },
        {
          type: "Room with Breakfast",
          originalPrice: 5500,
          discountedPrice: 2555,
          taxes: 624,
          includes: ["Breakfast Included"],
          nonRefundable: false,
        },
      ],
      deal: null,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="space-y-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* Room Header */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {room.name}
              </h3>
              <p className="text-sm text-gray-600">{room.description}</p>
              {room.deal && (
                <div className="mt-3 bg-indigo-50 text-indigo-700 p-3 rounded-lg text-sm">
                  {room.deal}
                </div>
              )}
            </div>

            {/* Room Content */}
            <div className="p-6 flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="relative space-y-3 flex-shrink-0">
                {room.image.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt={room.name}
                    width={300}
                    height={200}
                    className="object-cover rounded-lg shadow-md"
                  />
                ))}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>{room.photos} PHOTOS</span>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-6">
                {/* Amenities */}
                {room.amenities.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span className="text-indigo-600">•</span>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing Options */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Choose Your Package
                  </h4>
                  <div className=" space-y-4">
                    {room.options.map((option, optIdx) => (
                      <div
                        key={optIdx}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                          <div className="space-y-2">
                            <h5 className="text-base font-medium text-gray-900">
                              {option.type}
                            </h5>
                            {option.includes.length > 0 ? (
                              option.includes.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <Utensils className="w-4 h-4 text-indigo-600" />
                                  <span>{item}</span>
                                </div>
                              ))
                            ) : (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Ban className="w-4 h-4 text-red-500" />
                                <span>No meals included</span>
                              </div>
                            )}
                            {option.nonRefundable && (
                              <div className="flex items-center gap-2 text-sm text-red-500">
                                <Ban className="w-4 h-4" />
                                <span>Non-Refundable</span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-2">
                            <div>
                              <span className="text-gray-500 line-through text-sm">
                                ₹{option.originalPrice.toLocaleString()}
                              </span>
                              <div className="text-2xl font-semibold text-gray-900">
                                ₹{option.discountedPrice.toLocaleString()}
                              </div>
                              <span className="text-sm text-gray-600">
                                +₹{option.taxes} Taxes & Fees per night
                              </span>
                            </div>
                            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors w-full sm:w-auto">
                              Select Room
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
