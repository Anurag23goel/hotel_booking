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
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden snap-x snap-mandatory"
          onScroll={handleScroll}
        >
          {hotelImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 snap-center">
              <Image
                src={image}
                alt={`Hotel Image ${index + 1}`}
                width={1200}
                height={768}
                className="w-full h-48 md:h-64 object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => scrollToImage("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scrollToImage("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image counter */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-blue-600 text-white px-2 md:px-3 py-1 rounded flex items-center gap-1">
          <Camera size={14} className="md:w-4 md:h-4" />
          <span className="text-xs md:text-sm">
            {hotelImages.length} Property Photos
          </span>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {hotelImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const imageWidth = container.clientWidth;
                  container.scrollTo({
                    left: imageWidth * index,
                    behavior: "smooth",
                  });
                  setCurrentImageIndex(index);
                }
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-3 md:p-6">
        <div className="flex flex-row md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Valentines Retreat - Near Candolim Beach ⭐⭐⭐
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Well-appointed hotel near Candolim beach offering city-view rooms,
              a plush pool, dining area & sit-outs on the lawn.
            </p>
          </div>
          <div className="text-right">
            <div className="md:bg-blue-100 p-2 md:p-3 rounded-lg inline-block">
              <div className="text-xl md:text-2xl font-bold text-blue-700">
                4.1
              </div>
              <div className="text-xs md:text-sm text-blue-600">Very Good</div>
              <div className="text-xs text-gray-500">(897 ratings)</div>
            </div>
          </div>
        </div>

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
