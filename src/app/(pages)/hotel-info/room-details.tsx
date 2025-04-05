import React from "react";
import { Camera, Utensils, Ban } from "lucide-react";
import Image from "next/image";

const roomDetails = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
        {/* First Room */}
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
          <div className="flex justify-between items-start mb-2"></div>
          <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
            Enjoy Free Breakfast throughout your stay for just ₹85 more!
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="relative w-full md:w-auto">
              <Image
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200"
                alt="Superior Room"
                width={300}
                height={200}
                className="rounded-lg w-full md:w-72 h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs md:text-sm flex items-center gap-1">
                <Camera size={14} className="md:w-4 md:h-4" />
                <span>6 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-base md:text-lg">
                Superior Room With Balcony
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                (280 sq ft (26 sq mt)) | Garden View | Queen Bed
              </p>

              <div className="grid grid-cols-2 gap-2 mt-2 md:mt-3 text-xs md:text-sm">
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Mineral Water</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Air Conditioning</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Bathroom</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Telephone</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Closet</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Chair</span>
                </div>
              </div>

              <div className="mt-3 md:mt-4">
                <div className="flex items-center gap-1 md:gap-2">
                  <Utensils size={14} className="md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm">Breakfast Included</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-red-500">
                  <Ban size={14} className="md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Non-Refundable</span>
                </div>
              </div>

              <div className="mt-3 md:mt-4 flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                <div>
                  <div className="text-gray-500 line-through text-xs md:text-sm">
                    ₹4,500
                  </div>
                  <div className="text-xl md:text-2xl font-semibold">
                    ₹1,894
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    +₹476 Taxes & Fees per night
                  </div>
                </div>
                <button className="bg-[#310744]  text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                  SELECT ROOM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Room Section */}
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
          <div className="mb-3 md:mb-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-md text-xs md:text-sm">
                Breakfast Included
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-md text-xs md:text-sm">
                Breakfast & Lunch/Dinner Included
              </button>
            </div>
            <div className="bg-green-50 text-green-700 p-2 rounded-md text-xs md:text-sm">
              Deal Applied: BharatTripsDeal | Great Discounts for You. Get
              INR674 Off
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="relative w-full md:w-auto">
              <Image
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200"
                alt="Superior Room"
                width={300}
                height={200}
                className="rounded-lg w-full md:w-72 h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs md:text-sm flex items-center gap-1">
                <Camera size={14} className="md:w-4 md:h-4" />
                <span>4 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-3 md:space-y-4">
                {/* Room Only Option */}
                <div className="border-b pb-3 md:pb-4">
                  <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">
                    Room Only
                  </h3>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                    <Ban size={14} className="md:w-4 md:h-4" />
                    <span>No meals included</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="text-gray-500 line-through text-xs md:text-sm">
                        ₹4,500
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        ₹1,809
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        +₹454 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast Option */}
                <div className="border-b pb-3 md:pb-4">
                  <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">
                    Room with Breakfast
                  </h3>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                    <Utensils size={14} className="md:w-4 md:h-4" />
                    <span>Breakfast included</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="text-gray-500 line-through text-xs md:text-sm">
                        ₹4,500
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        ₹1,894
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        +₹476 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast + Lunch/Dinner Option */}
                <div>
                  <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">
                    Room with Breakfast + Lunch/Dinner
                  </h3>
                  <div className="space-y-1 mb-1 md:mb-2">
                    <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
                      <Utensils size={14} className="md:w-4 md:h-4" />
                      <span>Breakfast included</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
                      <Utensils size={14} className="md:w-4 md:h-4" />
                      <span>Lunch Or Dinner included</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="text-gray-500 line-through text-xs md:text-sm">
                        ₹7,700
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        ₹3,336
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        +₹814 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                      SELECT ROOM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Room */}
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="relative w-full md:w-auto">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&h=200"
                alt="Executive Suite"
                width={300}
                height={200}
                className="rounded-lg w-full md:w-72 h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs md:text-sm flex items-center gap-1">
                <Camera size={14} className="md:w-4 md:h-4" />
                <span>8 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-base md:text-lg">
                Executive suite - Pool View
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                (451 sq ft (40 sq mt)) | Swimming Pool View | Double Bed
              </p>

              <div className="grid grid-cols-2 gap-2 mt-2 md:mt-3 text-xs md:text-sm">
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Study Room</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Room Service</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Mineral Water</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Air Conditioning</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>• Housekeeping</span>
                </div>
              </div>

              <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                {/* Room Only Option */}
                <div className="border-b pb-3 md:pb-4">
                  <h4 className="font-medium text-sm md:text-base mb-1 md:mb-2">
                    Room Only
                  </h4>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                    <Ban size={14} className="md:w-4 md:h-4" />
                    <span>No meals included</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="text-gray-500 line-through text-xs md:text-sm">
                        ₹5,500
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        ₹2,382
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        +₹581 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast Option */}
                <div>
                  <h4 className="font-medium text-sm md:text-base mb-1 md:mb-2">
                    Room with Breakfast
                  </h4>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                    <Utensils size={14} className="md:w-4 md:h-4" />
                    <span>Breakfast included</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="text-gray-500 line-through text-xs md:text-sm">
                        ₹5,500
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        ₹2,555
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        +₹624 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-md hover:bg-[#4a0a63] text-xs md:text-sm w-full md:w-auto">
                      SELECT ROOM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default roomDetails;
