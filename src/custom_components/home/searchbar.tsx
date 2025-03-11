"use client";
import { Calendar, ChevronDown, Search, User } from "lucide-react";
import { useRef, useState } from "react";

export default function Searchbar() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Refs for the input fields
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center justify-between bg-white border-4 border-yellow-500 rounded-md p-3 w-full shadow-md">
      {/* Check-in Date Picker */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span
          className="text-gray-500 text-lg cursor-pointer"
          onClick={() => checkInRef.current?.showPicker()} // Open calendar
        >
          <Calendar color="black" />
        </span>
        <input
          type="date"
          ref={checkInRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full ml-2 outline-none bg-transparent text-md text-black hidden md:block"
          style={{ appearance: "none" }} // Hides default icon
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span
          className="text-gray-500 text-lg cursor-pointer"
          onClick={() => checkOutRef.current?.showPicker()} // Open calendar
        >
          <Calendar color="black" />
        </span>
        <input
          type="date"
          ref={checkOutRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full ml-2 outline-none bg-transparent text-md text-black hidden md:block"
          style={{ appearance: "none" }} // Hides default icon
        />
      </div>

      {/* Guest Selection */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span className="text-gray-500 text-lg">
          <User color="black" />
        </span>
        <input
          type="text"
          placeholder="2 Adults · 0 Children · 1 Room"
          className="w-full ml-2 outline-none bg-transparent text-md text-black"
        />
        <span className="text-gray-500">
          <ChevronDown color="black" size={20} />
        </span>
      </div>

      {/* Search Button */}
      <button className="bg-[#057d23] text-white lg:mx-2 px-6 py-2 rounded-md hover:bg-green-700 transition-all hidden lg:block">
        Search
      </button>

      {/* Mobile Search Button */}
      <button className=" mx-2 py-2 rounded-md transition-all block lg:hidden">
        <Search />
      </button>
    </div>
  );
}
