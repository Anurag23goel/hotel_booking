import React from "react";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Clock,
  Wifi,
  Camera,
  Utensils,
  Ban,
} from "lucide-react";
import Navbar from "@/custom_components/navbar";
import Location from "./location-card";
import PropertyRules from "./property-rules-card";
import ReviewSystem from "./review-system";
import { PropertyCard } from "./property-details-card";
import HotelDetails from "./hotel-details";
import RoomDetails from "./room-details";

function App() {
  const properties = [
    {
      name: "Valentines Retreat- Near Candolim Beach",
      price: 1849,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      distance: "150m from Candolim Beach",
      amenities: [
        "Free Cancellation",
        "Free Breakfast Available at Higher Price",
      ],
      isMmtValueStays: true,
      taxesAndFees: "+ ₹454 taxes & fees Per Night",
    },
    {
      name: "Resort Primo Bom Terra Verde",
      price: 1752,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      distance: "4.8 km from Valentines Retreat",
      amenities: ["Free Cancellation", "Free Breakfast"],
      isMmtValueStays: true,
      taxesAndFees: "+ ₹274 taxes & fees Per Night",
    },
    {
      name: "SinQ Beach Resort",
      price: 1813,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      distance: "2.7 km from Valentines Retreat",
      amenities: [
        "Free Cancellation",
        "Free Breakfast Available at Higher Price",
      ],
      isMmtValueStays: false,
      taxesAndFees: "+ ₹315 taxes & fees Per Night",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      <div className="bg-[#040928]">
        <Navbar />
      </div>
      {/* Search Bar */}
      <div className="bg-[#310744] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-8">
            <div>
              <div className="text-sm opacity-80">
                Select City, Location or Hotel Name
              </div>
              <div className="font-semibold">Bogmallo Beach Resort</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Check-in Date</div>
              <div className="font-semibold">03 April' 25</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Check-out Date</div>
              <div className="font-semibold">04 April' 25</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Room & Guest</div>
              <div className="font-semibold">1 Room, 2 Guests</div>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-[#8B1F41] rounded font-semibold hover:bg-gray-100">
            Modify Search
          </button>
        </div>
      </div>

      {/* Hotel Details */}
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
          <HotelDetails />
        </div>
      </div>

      {/* Room Details */}
      <div className="min-h-screen  bg-gray-100 p-4">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full mx-auto">
          <RoomDetails />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-8">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full mx-auto">
          <Location />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-8">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full mx-auto">
          <PropertyRules />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-8">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full mx-auto">
          <ReviewSystem />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-8">
        <div className="bg-white  rounded-lg shadow-lg overflow-hidden max-w-5xl w-full mx-auto">
          <div className="max-w-7xl mx-auto p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Similar Properties</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        active ? "text-red-600 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

export default App;
