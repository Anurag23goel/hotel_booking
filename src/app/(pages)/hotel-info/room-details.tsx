import React from "react";
import { Camera, Utensils, Ban } from "lucide-react";

const roomDetails = () => {
  return (
    <div>
      <div className="max-w-5xl  mx-auto space-y-4">
        {/* First Room */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              MMT RECOMMENDS
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Enjoy Free Breakfast throughout your stay for just ₹85 more!
          </p>

          <div className="flex gap-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200"
                alt="Superior Room"
                className="rounded-lg w-72 h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1">
                <Camera size={16} />
                <span>6 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-lg">
                Superior Room With Balcony
              </h3>
              <p className="text-sm text-gray-600">
                (280 sq ft (26 sq mt)) | Garden View | Queen Bed
              </p>

              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>• Mineral Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Bathroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Telephone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Closet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Chair</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <Utensils size={16} className="text-gray-600" />
                  <span>Breakfast Included</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <Ban size={16} />
                  <span>Non-Refundable</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-end">
                <div>
                  <div className="text-gray-500 line-through">₹4,500</div>
                  <div className="text-2xl font-semibold">₹1,894</div>
                  <div className="text-sm text-gray-600">
                    +₹476 Taxes & Fees per night
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  SELECT ROOM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Room Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <div className="flex gap-4 mb-2">
              <button className="px-4 py-2 bg-gray-100 rounded-md text-sm">
                Breakfast Included
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-md text-sm">
                Breakfast & Lunch/Dinner Included
              </button>
            </div>
            <div className="bg-green-50 text-green-700 p-2 rounded-md text-sm">
              Deal Applied: MMTDEAL | Great Discounts for You. Get INR674 Off
            </div>
          </div>

          <div className="flex gap-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&h=200"
                alt="Superior Room"
                className="rounded-lg w-72 h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1">
                <Camera size={16} />
                <span>4 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-4">
                {/* Room Only Option */}
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Room Only</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Ban size={16} />
                    <span>No meals included</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-gray-500 line-through">₹4,500</div>
                      <div className="text-2xl font-semibold">₹1,809</div>
                      <div className="text-sm text-gray-600">
                        +₹454 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast Option */}
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Room with Breakfast</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Utensils size={16} />
                    <span>Breakfast included</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-gray-500 line-through">₹4,500</div>
                      <div className="text-2xl font-semibold">₹1,894</div>
                      <div className="text-sm text-gray-600">
                        +₹476 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast + Lunch/Dinner Option */}
                <div>
                  <h3 className="font-medium mb-2">
                    Room with Breakfast + Lunch/Dinner
                  </h3>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Utensils size={16} />
                      <span>Breakfast included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Utensils size={16} />
                      <span>Lunch Or Dinner included</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-gray-500 line-through">₹7,700</div>
                      <div className="text-2xl font-semibold">₹3,336</div>
                      <div className="text-sm text-gray-600">
                        +₹814 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                      SELECT ROOM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Room */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex gap-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&h=200"
                alt="Executive Suite"
                className="rounded-lg w-72 h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1">
                <Camera size={16} />
                <span>8 PHOTOS</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-lg">
                Executive suite - Pool View
              </h3>
              <p className="text-sm text-gray-600">
                (451 sq ft (40 sq mt)) | Swimming Pool View | Double Bed
              </p>

              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>• Study Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Room Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Mineral Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>• Housekeeping</span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {/* Room Only Option */}
                <div className="border-b pb-4">
                  <h4 className="font-medium mb-2">Room Only</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Ban size={16} />
                    <span>No meals included</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-gray-500 line-through">₹5,500</div>
                      <div className="text-2xl font-semibold">₹2,382</div>
                      <div className="text-sm text-gray-600">
                        +₹581 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                      SELECT ROOM
                    </button>
                  </div>
                </div>

                {/* Room with Breakfast Option */}
                <div>
                  <h4 className="font-medium mb-2">Room with Breakfast</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Utensils size={16} />
                    <span>Breakfast included</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-gray-500 line-through">₹5,500</div>
                      <div className="text-2xl font-semibold">₹2,555</div>
                      <div className="text-sm text-gray-600">
                        +₹624 Taxes & Fees per night
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
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
