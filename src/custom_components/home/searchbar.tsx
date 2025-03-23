"use client";
import { Calendar, ChevronDown, SearchIcon, User, MapPin } from "lucide-react";
import { useRef, useState } from "react";

export default function Searchbar() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [location, setLocation] = useState("");

  // Refs for the input fields
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-auto md:h-[100px] flex-row items-center justify-evenly bg-white opacity-100 rounded-full py-2 md:py-3 px-4 md:px-6 w-full shadow-md">
      
      {/* Location Input */}
      <div className="flex items-center justify-center flex-1 border border-gray-400 rounded-full px-3 md:px-4 py-2 mx-2">
        <span className="text-gray-500">
          <MapPin className="h-5 w-5 md:h-6 md:w-6" color="black" />
        </span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="hidden md:block w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black"
        />
      </div>
      
      {/* Check-in Date Picker */}
      <div className="flex items-center justify-center flex-1 border border-gray-400 rounded-full px-3 md:px-4 py-2 mx-2">
        <span
          className="text-gray-500 cursor-pointer"
          onClick={() => checkInRef.current?.showPicker()}
        >
          <Calendar className="h-5 w-5 md:h-6 md:w-6" color="black" />
        </span>
        <input
          type="date"
          ref={checkInRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="hidden md:block w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black"
          style={{ appearance: "none" }}
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="flex items-center justify-center flex-1 border border-gray-400 rounded-full px-3 md:px-4 py-2 mx-2">
        <span
          className="text-gray-500 cursor-pointer"
          onClick={() => checkOutRef.current?.showPicker()}
        >
          <Calendar className="h-5 w-5 md:h-6 md:w-6" color="black" />
        </span>
        <input
          type="date"
          ref={checkOutRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="hidden md:block w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black"
          style={{ appearance: "none" }}
        />
      </div>

      {/* Guest Selection */}
      <div className="flex items-center justify-center flex-1 border border-gray-400 rounded-full px-3 md:px-4 py-2 mx-2">
        <span className="text-gray-500">
          <User className="h-5 w-5 md:h-6 md:w-6" color="black" />
        </span>
        <input
          type="text"
          placeholder="2 Adults · 0 Children · 1 Room"
          className="hidden md:block w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black truncate"
        />
        <span className="hidden md:inline-block text-gray-500">
          <ChevronDown color="black" size={20} />
        </span>
      </div>

      {/* Search Button */}
      <button className="flex-none bg-[#040928] text-white px-3 md:px-6 flex items-center justify-center gap-2 py-2 rounded-full hover:bg-[#0a1545] transition-all ml-2">
        <SearchIcon className="h-5 w-5 md:h-6 md:w-6" />
        <span className="hidden md:inline-block text-sm md:text-base">Search</span>
      </button>
    </div>
  );
}
