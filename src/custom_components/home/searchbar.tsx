import { Calendar, ChevronDown, Search, User } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex items-center justify-between bg-white border-4 border-yellow-500 rounded-md p-3 w-full shadow-md">
      {/* Check-in Date Picker */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span className="text-gray-500 text-lg">
          <Calendar color="black"/>
        </span>
        <input
          type="text"
          placeholder="Check-in Date"
          className="w-full ml-2 outline-none bg-transparent text-md text-black"
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span className="text-gray-500 text-lg">
          <Calendar color="black"/>
        </span>
        <input
          type="text"
          placeholder="Check-out Date"
          className="w-full ml-2 outline-none bg-transparent text-md text-black"
        />
      </div>

      {/* Guest Selection */}
      <div className="flex items-center flex-1 border-r border-gray-300 px-3 py-2">
        <span className="text-gray-500 text-lg">
          <User color="black"/>
        </span>
        <input
          type="text"
          placeholder="2 Adults · 0 Children · 1 Room"
          className="w-full ml-2 outline-none bg-transparent text-md text-black"
        />
        <span className="text-gray-500"><ChevronDown color="black" size={20}/></span> {/* Dropdown Icon */}
      </div>

      {/* Search Button */}
      <button className="bg-[#057d23] text-white lg:mx-2 px-6 py-2 rounded-md hover:bg-green-700 transition-all hidden lg:block">
        Search
      </button>

      {/* Search Button */}
      <button className="bg-[#057d23] text-white mx-2 py-2 rounded-md hover:bg-green-700 transition-all block lg:hidden">
        <Search />
      </button>
    </div>
  );
}
