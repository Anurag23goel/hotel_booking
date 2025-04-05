"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  BedDouble,
  Map,
  ScrollText,
  MessageSquare,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Users,
  ChevronDown,
  Hotel,
} from "lucide-react";
import Navbar from "@/custom_components/navbar";
import Location from "./location-card";
import PropertyRules from "./property-rules-card";
import ReviewSystem from "./review-system";
import { PropertyCard } from "./property-details-card";
import HotelDetails from "./hotel-details";
import RoomDetails from "./room-details";
import SearchBar from "./searchBar";

function App() {
  const [activeSection, setActiveSection] = useState("hotel");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Add state for search details
  const [searchDetails, setSearchDetails] = useState({
    location: "Valentines Retreat - Near Candolim Beach",
    checkIn: "03 April' 25",
    checkOut: "04 April' 25",
    guests: "1 Room, 2 Guests",
  });

  // Function to update search details
  const updateSearchDetails = (details: typeof searchDetails) => {
    setSearchDetails(details);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections with IDs
    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      if (section.id !== "") {
        // Only observe elements with non-empty IDs
        observerRef.current?.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navItems = [
    { id: "hotel", label: "Hotel Details", icon: Home },
    { id: "room", label: "Room Details", icon: BedDouble },
    { id: "location", label: "Location", icon: Map },
    { id: "rules", label: "Property Rules", icon: ScrollText },
    { id: "reviews", label: "Reviews", icon: MessageSquare },
  ];

  const scrollToSection = (divId: string) => {
    setActiveSection(divId);
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <div className="bg-[#040928]">
        <Navbar />
      </div>

      {/* Search Bar 1 */}
      {/* <div className=" py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around p-4 rounded-md b2 border-gray-400 shadow-md gap-3 flex-wrap  text-white">
            
            <button className="flex items-center text-gray-700 p-4 hover:text-gray-900 font-medium">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Listings</span>
            </button>

            
            <div className="flex items-center gap-2 px-4 py-2 border bg-[#040928]  p-4 border-gray-400 rounded-md hover:bg-[#3a0a52]">
              <Hotel className="w-5 h-5 text-gray-300" />
              <div className="text-left">
                <div className="text-sm text-gray-300">Hotel Name</div>
                <div className="font-medium">{searchDetails.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-[#040928] x p-4 border border-gray-400 rounded-md hover:bg-[#3a0a52]">
              <Calendar className="w-5 h-5 text-gray-300" />
              <div className="text-left">
                <div className="text-sm text-gray-300">
                  Check-in - Check-out
                </div>
                <div className="font-medium">
                  {searchDetails.checkIn} - {searchDetails.checkOut}
                </div>
              </div>
            </div>

            
            <div className="flex items-center gap-2 px-4 py-2 bg-[#040928]  p-4 border border-gray-400 rounded-md hover:bg-[#3a0a52]">
              <Users className="w-5 h-5 text-gray-300" />
              <div className="text-left">
                <div className="text-sm text-gray-300">Rooms & Guests</div>
                <div className="font-medium flex items-center gap-1">
                  {searchDetails.guests}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-400 hover:bg-[#310744] hover:text-white text-[#310744] px-6 py-2 rounded-md  transition-colors"
            >
              Update Search
            </button>
          </div>
        </div>
      </div> */}

      {/* search bar 2 */}
      <div>
        <div className="max-w-7xl border mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-around p-4 rounded-md gap-3">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-7 w-full md:w-auto">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Listings</span>
              </button>

              <div className="flex items-center shadow-xl p-2 rounded-md gap-2 w-full md:w-auto">
                <Hotel className="w-5 h-5 text-gray-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Hotel Name</div>
                  <div className="font-medium text-gray-800 pb-1 truncate max-w-[200px] md:max-w-none">
                    {searchDetails.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center shadow-xl p-2 rounded-md gap-2 w-full  md:w-auto">
                <Calendar className="w-5 h-5 text-gray-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">
                    Check-in - Check-out
                  </div>
                  <div className="font-medium text-gray-800 pb-1">
                    {searchDetails.checkIn} - {searchDetails.checkOut}
                  </div>
                </div>
              </div>

              <div className="flex items-center shadow-xl p-2 rounded-md gap-2 w-full md:w-auto">
                <Users className="w-5 h-5 text-gray-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Rooms & Guests</div>
                  <div className="font-medium text-gray-800 pb-1">
                    {searchDetails.guests}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center mt-3 md:mt-0 text-black border shadow-xl border-black cursor-pointer space-x-1 md:space-x-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors hover:text-white hover:bg-[#310744] w-full md:w-auto justify-center md:justify-start text-xs md:text-sm"
            >
              <Search className="w-3 h-3 md:w-5 md:h-5" />
              <span>Modify Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-2 md:py-4">
            <div className="flex items-center space-x-1 md:space-x-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1.5 md:py-2 rounded-full transition-colors whitespace-nowrap text-xs md:text-sm ${
                    activeSection === item.id
                      ? "bg-[#310744] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-3 h-3 md:w-5 md:h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-2xl">
              <SearchBar
                onClose={() => setIsModalOpen(false)}
                searchDetails={searchDetails}
                updateSearchDetails={updateSearchDetails}
              />
            </div>
          </div>
        )}

        {/* Hotel Details */}
        <div
          id="hotel"
          className="min-h-screen bg-gray-100 p-4 md:p-6 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
            <HotelDetails />
          </div>
        </div>

        {/* Room Details */}
        <div id="room" className="min-h-screen bg-gray-100 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
            <RoomDetails />
          </div>
        </div>

        <div id="location" className=" bg-gray-100 py-4 md:py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
            <Location />
          </div>
        </div>

        <div id="rules" className="bg-gray-100 py-4 md:py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
            <PropertyRules />
          </div>
        </div>

        <div id="reviews" className="min-h-screen bg-gray-100 py-4 md:py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
            <ReviewSystem />
          </div>
        </div>

        <div className="min-h-screen bg-gray-100 py-4 md:py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
            <div className="max-w-7xl mx-auto p-4 md:p-6">
              <div className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold">
                  Similar Properties
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {properties.map((property, index) => (
                  <PropertyCard key={index} {...property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#040928] text-white pt-8 md:pt-12 pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold">BharatTrips</h3>
              <p className="text-xs md:text-sm text-gray-300">
                Your trusted partner for finding the perfect accommodations
                across India. We offer a wide range of hotels, resorts, and
                properties to suit every budget and preference.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Hotels in Goa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Beach Resorts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Luxury Stays
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Weekend Getaways
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-300 mt-0.5 mr-2" />
                  <span className="text-xs md:text-sm text-gray-300">
                    +91 98765 43210
                  </span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-300 mt-0.5 mr-2" />
                  <span className="text-xs md:text-sm text-gray-300">
                    support@bharattrips.com
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-300 mt-0.5 mr-2" />
                  <span className="text-xs md:text-sm text-gray-300">
                    BharatTrips, 123, Faridabadi Kachra On Top - 122002
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xs md:text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} BharatTrips. All rights reserved.
              </div>
              <div className="flex space-x-4 md:space-x-6">
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
