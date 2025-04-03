import React from "react";
import { Camera, MapPin, Users } from "lucide-react";

const hoteldetails = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
          alt="Valentines Retreat"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1">
          <Camera size={16} />
          <span className="text-sm">134 Property Photos</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Valentines Retreat - Near Candolim Beach ⭐⭐⭐
            </h1>
            <p className="text-gray-600 mb-4">
              Well-appointed hotel near Candolim beach offering city-view rooms,
              a plush pool, dining area & sit-outs on the lawn.
            </p>
          </div>
          <div className="text-right">
            <div className="bg-blue-100 p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">4.1</div>
              <div className="text-sm text-blue-600">Very Good</div>
              <div className="text-xs text-gray-500">(897 ratings)</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 my-6">
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600" size={20} />
            <div>
              <div className="font-semibold">Candolim</div>
              <div className="text-sm text-gray-500">
                9 minutes walk to Candolim Beach
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-b py-4 my-4">
          <h2 className="font-semibold mb-3">Superior Room With Balcony</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Users size={18} />
                <span>Fits 2 Adults</span>
              </div>
              <div className="text-sm text-gray-500">• No meals included</div>
              <div className="text-sm text-gray-500">• Non-Refundable</div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 line-through">₹4,300</div>
              <div className="text-2xl font-bold">₹1,809</div>
              <div className="text-sm text-gray-500">+ ₹454 taxes & fees</div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded mt-2 hover:bg-blue-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Amenities</h2>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">🏊‍♂️</span>
              </div>
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">🍽️</span>
              </div>
              <span>Restaurant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">🍸</span>
              </div>
              <span>Bar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">🛋️</span>
              </div>
              <span>Lounge</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">
            Login to unlock deals & manage your bookings!
          </h3>
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="flex border rounded bg-white">
                <span className="px-3 py-2 bg-gray-50 border-r">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="px-3 py-2 flex-1 outline-none"
                />
              </div>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              LOGIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hoteldetails;
