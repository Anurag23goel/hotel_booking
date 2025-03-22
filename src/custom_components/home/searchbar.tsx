"use client";
import { Calendar, ChevronDown, SearchIcon, User } from "lucide-react";
import { useRef, useState } from "react";

export default function Searchbar() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Refs for the input fields
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-[100px] flex-col md:flex-row items-center justify-between bg-white opacity-90 border-2 border-[#060f58bd] rounded-md py-3 px-4 w-full shadow-md gap-3 md:gap-0">
      
      {/* Check-in Date Picker */}
      <div className="flex items-center w-full md:flex-1 border border-gray-300 rounded-md px-4 py-2 md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-2 md:border-gray-300 md:rounded-none">
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
          className="w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black block"
          style={{ appearance: "none" }} // Hides default icon
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="flex items-center w-full md:flex-1 border border-gray-300 rounded-md px-4 py-2 md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-2 md:border-gray-300 md:rounded-none">
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
          className="w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black block"
          style={{ appearance: "none" }} // Hides default icon
        />
      </div>

      {/* Guest Selection */}
      <div className="flex items-center w-full md:flex-1 border border-gray-300 rounded-md px-4 py-2 md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-2 md:border-gray-300 md:rounded-none">
        <span className="text-gray-500 text-lg">
          <User color="black" />
        </span>
        <input
          type="text"
          placeholder="2 Adults · 0 Children · 1 Room"
          className="w-full ml-3 outline-none bg-transparent text-sm md:text-base text-black truncate"
        />
        <span className="text-gray-500">
          <ChevronDown color="black" size={20} />
        </span>
      </div>

      {/* Search Button */}
      <button className="w-full md:w-auto bg-[#057d23] text-white px-5 flex items-center justify-center gap-2 py-2 ml-3 rounded-md hover:bg-green-700 transition-all">
        <SearchIcon size={20} />
        <span className="text-sm md:text-md">Search</span>
      </button>
    </div>
  );
}
