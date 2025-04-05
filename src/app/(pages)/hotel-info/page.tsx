"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Home,
  BedDouble,
  Map,
  ScrollText,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Users,
  Hotel,
  Heart,
  Share2,
  Star,
  Coffee,
  Wifi,
  Car,
  CookingPotIcon as Kitchen,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/custom_components/navbar";
import Location from "./location-card";
import PropertyRules from "./property-rules-card";
import ReviewSystem from "./review-system";
import PropertyCard from "./property-details-card";
import RoomDetails from "./room-details";
import SearchBar from "./searchBar";

const HotelGallery = ({ hotelImages, setShowAllPhotos }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
      <div className="md:col-span-2 md:row-span-2 h-64 md:h-auto">
        <Image
          src={hotelImages[0].url || "/placeholder.svg"}
          alt={hotelImages[0].alt}
          width={800}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {hotelImages.slice(1, 5).map((image, index) => (
        <div key={index} className="hidden md:block h-48">
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors text-sm font-medium flex items-center gap-2"
      >
        <span>Show all photos</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const PhotoGalleryModal = ({ hotelImages, setShowAllPhotos }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center text-white mb-6">
          <h2 className="text-2xl font-bold">Property Gallery</h2>
          <button
            onClick={() => setShowAllPhotos(false)}
            className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <span className="sr-only">Close gallery</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotelImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HotelDetails = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const hotelImages = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      alt: "Hotel Exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      alt: "Hotel Room",
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      alt: "Hotel Bathroom",
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      alt: "Hotel Restaurant",
    },
    {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80",
      alt: "Hotel Pool",
    },
  ];

  const amenities = [
    { icon: Coffee, name: "Free Breakfast" },
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Airport Shuttle" },
    { icon: Kitchen, name: "Kitchen" },
    { icon: BedDouble, name: "King Size Bed" },
    { icon: Map, name: "Beach Access" },
    { icon: Star, name: "Room Service" },
    { icon: Hotel, name: "24/7 Front Desk" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hotel Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-md">
              HOTEL
            </span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Valentines Retreat - Near Candolim Beach
          </h1>
          <div className="flex items-center text-gray-600 gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              150m from Candolim Beach, Goa, India
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Share</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Save</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <HotelGallery
        hotelImages={hotelImages}
        setShowAllPhotos={setShowAllPhotos}
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Property Description */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-2 text-indigo-600" />
              About this property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Candolim, this beautiful retreat offers a
              perfect blend of comfort and luxury. Just 150 meters from the
              pristine Candolim Beach, the property features modern amenities
              and stunning views of the surrounding area. Enjoy easy access to
              popular restaurants, shops, and entertainment options in the
              vibrant Candolim area.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our rooms are designed with your comfort in mind, featuring
              contemporary furnishings, air conditioning, and private balconies.
              Whether you`&apos;`re traveling for business or pleasure,
              Valentines Retreat provides the perfect setting for a memorable
              stay in Goa.
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Coffee className="w-5 h-5 mr-2 text-indigo-600" />
              Popular amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <amenity.icon className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700 text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Price Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-24">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-3xl font-bold text-gray-900">₹1,849</span>
                <span className="text-gray-600 text-sm">/night</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-900">4.8</span>
                <span className="text-gray-600 text-sm">(128)</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg mb-4">
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-3">
                  <p className="text-xs text-gray-500">Check-in</p>
                  <p className="font-medium">03 Apr</p>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500">Check-out</p>
                  <p className="font-medium">04 Apr</p>
                </div>
              </div>
              <div className="border-t border-gray-200 p-3">
                <p className="text-xs text-gray-500">Guests</p>
                <p className="font-medium">2 Guests, 1 Room</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span>₹1,849 × 1 night</span>
                <span>₹1,849</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taxes & fees</span>
                <span>₹454</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹2,303</span>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Reserve Now
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              You won&apos;t be charged yet
            </p>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {showAllPhotos && (
        <PhotoGalleryModal
          hotelImages={hotelImages}
          setShowAllPhotos={setShowAllPhotos}
        />
      )}
    </div>
  );
};

const StickyNavigation = ({ activeSection, scrollToSection, navItems }) => {
  return (
    <nav className="sticky top-0 z-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-3 lg:hidden">
          <h2 className="font-semibold text-gray-900">Valentines Retreat</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-indigo-600">₹1,849</span>
            <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium">
              Reserve
            </button>
          </div>
        </div>
        <div className=" flex justify-around px-2 py-2 overflow-x-auto hide-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

function Page() {
  const [activeSection, setActiveSection] = useState("hotel");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [searchDetails, setSearchDetails] = useState({
    location: "Valentines Retreat - Near Candolim Beach",
    checkIn: "03 April' 25",
    checkOut: "04 April' 25",
    guests: "1 Room, 2 Guests",
  });

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

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (section.id !== "") {
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
    { id: "hotel", label: "Overview", icon: Home },
    { id: "room", label: "Rooms", icon: BedDouble },
    { id: "location", label: "Location", icon: Map },
    { id: "rules", label: "Rules", icon: ScrollText },
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <Navbar />
      </header>

      {/* Navigation */}
      <StickyNavigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl">
              <SearchBar
                onClose={() => setIsModalOpen(false)}
                searchDetails={searchDetails}
                updateSearchDetails={updateSearchDetails}
              />
            </div>
          </div>
        )}

        {/* Hotel Details */}
        <section id="hotel" className="py-10">
          <HotelDetails />
        </section>

        {/* Room Details */}
        <section id="room" className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BedDouble className="w-6 h-6 mr-2 text-indigo-600" />
              Available Rooms
            </h2>
            <RoomDetails />
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Map className="w-6 h-6 mr-2 text-indigo-600" />
              Location
            </h2>
            <Location />
          </div>
        </section>

        {/* Property Rules */}
        <section id="rules" className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ScrollText className="w-6 h-6 mr-2 text-indigo-600" />
              Property Rules
            </h2>
            <PropertyRules />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-10 bg-gray-50">
          <div className="max-w-7xl  mx-auto px-4">
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-indigo-600" />
              Guest Reviews
            </h2>
            <ReviewSystem />
          </div>
        </section>

        {/* Similar Properties */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Hotel className="w-6 h-6 mr-2 text-indigo-600" />
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">BharatTrips</h3>
              <p className="text-sm text-indigo-200">
                Discover the perfect stay with BharatTrips - your gateway to
                India&apos;s finest hotels and resorts.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Explore</h3>
              <ul className="space-y-2">
                {[
                  "Hotels in Goa",
                  "Beach Resorts",
                  "Luxury Stays",
                  "Weekend Getaways",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-indigo-200 hover:text-white transition-colors flex items-center text-sm"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3 text-sm text-indigo-200">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 98765 43210
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  support@bharattrips.com
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1" />
                  BharatTrips, 123, Faridabadi Kachra On Top - 122002
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-indigo-200">
                Stay updated with our latest offers
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-sm text-indigo-200">
            <p>
              © {new Date().getFullYear()} BharatTrips. All rights reserved.
            </p>
            <div className="mt-2 space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
