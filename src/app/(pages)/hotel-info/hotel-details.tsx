import { useState, useRef } from "react";
import { Camera, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HotelDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample hotel images - replace with your actual images
  const hotelImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
  ];

  const scrollToImage = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : hotelImages.length - 1
        );
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentImageIndex((prev) =>
          prev < hotelImages.length - 1 ? prev + 1 : 0
        );
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const imageWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <div>
      {/* Hotel Name Above Images */}
      <div className="p-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Valentines Retreat - Near Candolim Beach ⭐⭐⭐
        </h1>
      </div>

      {/* Image Grid and Rating Section */}
      <div className="flex flex-col md:flex-row gap-4 px-4">
        {/* Image Grid */}
        <div className="relative md:w-3/4">
          <div className="grid grid-cols-3 gap-2 h-[300px]">
            {/* Main large image */}
            <div className="col-span-2 row-span-1 relative">
              <Image
                src={hotelImages[0]}
                alt="Main Hotel Image"
                layout="fill"
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Right side smaller images */}
            <div className="grid grid-rows-2 gap-2">
              <div className="relative">
                <Image
                  src={hotelImages[1]}
                  alt="Hotel Image 2"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src={hotelImages[2]}
                  alt="Hotel Image 3"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* View all photos button */}
            <div className="absolute bottom-4 right-4 z-10">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-colors">
                <Camera size={16} />
                <span className="text-sm">
                  View all {hotelImages.length} photos
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="md:w-1/4">
          <div className="p-4 rounded-lg">
            <div className="text-4xl font-bold text-blue-700 mb-2">4.1</div>
            <div className="text-lg text-blue-600 mb-1">Very Good</div>
            <div className="text-sm text-gray-500 mb-4">(897 ratings)</div>
            <button className="w-full bg-[#310744]  text-white px-4 py-5 rounded-lg hover:bg-[#4a0d66] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <span className="font-medium">Reserve Now</span>
              <span className="text-sm"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Description Section - Moved below images */}
      <div className="px-4 mt-6">
        <div className=" p-6 ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            About the Property
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 leading-relaxed mb-4">
                Nestled in the heart of Candolim, this charming retreat offers a
                perfect blend of comfort and convenience. Just 9 minutes from
                the pristine Candolim Beach, our hotel features modern amenities
                and exceptional service to ensure a memorable stay.
              </p>
            </div>
            <div className="md:w-1/3">
              <h4 className="font-semibold text-gray-700 mb-3">
                Key Features:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Elegant rooms with modern amenities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Stunning pool with lounging area
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  In-house restaurant & bar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Easy access to popular attractions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  24/7 friendly staff assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="p-3 md:p-6">
        <div className="flex gap-4 md:gap-6 my-4 md:my-6">
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
            <div>
              <div className="font-semibold text-sm md:text-base">Candolim</div>
              <div className="text-xs md:text-sm text-gray-500">
                9 minutes walk to Candolim Beach
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-b py-3 md:py-4 my-3 md:my-4">
          <h2 className="font-semibold text-base md:text-lg mb-2 md:mb-3">
            Superior Room With Balcony
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 md:mb-2">
                <Users size={16} className="md:w-5 md:h-5" />
                <span>Fits 2 Adults</span>
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                • No meals included
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                • Non-Refundable
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 line-through text-sm md:text-base">
                ₹4,300
              </div>
              <div className="text-xl md:text-2xl font-bold">₹1,809</div>
              <div className="text-xs md:text-sm text-gray-500">
                + ₹454 taxes & fees
              </div>
              <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded mt-2 hover:bg-[#310744] transition-colors text-xs md:text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h2 className="font-semibold text-base md:text-lg">Amenities</h2>
          <div className="grid grid-cols-2 md:flex md:gap-6 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm md:text-base">🏊‍♂️</span>
              </div>
              <span className="text-xs md:text-sm">Swimming Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm md:text-base">🍽️</span>
              </div>
              <span className="text-xs md:text-sm">Restaurant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm md:text-base">🍸</span>
              </div>
              <span className="text-xs md:text-sm">Bar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm md:text-base">🛋️</span>
              </div>
              <span className="text-xs md:text-sm">Lounge</span>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-6 bg-blue-50 p-3 md:p-4 rounded-lg">
          <h3 className="font-semibold text-sm md:text-base mb-2">
            Login to unlock deals & manage your bookings!
          </h3>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <div className="flex border rounded bg-white">
                <span className="px-2 md:px-3 py-1.5 md:py-2 bg-gray-50 border-r text-xs md:text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="px-2 md:px-3 py-1.5 md:py-2 flex-1 outline-none text-xs md:text-sm"
                />
              </div>
            </div>
            <button className="bg-[#310744] text-white px-3 md:px-6 py-1.5 md:py-2 rounded hover:bg-blue-600 transition-colors text-xs md:text-sm">
              LOGIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
