"use client";
import { Calendar, ChevronDown, SearchIcon, User, MapPin } from "lucide-react";
import { useRef, useState } from "react";

export default function Searchbar() {
  const [checkInDate, setCheckInDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [location, setLocation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 3,
    children: 0,
    rooms: 3,
    pets: false,
  });

  // Refs for the input fields
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const guestInputRef = useRef<HTMLInputElement>(null);

  // Update guest selection placeholder
  const guestPlaceholder = `${guests.adults} Adults · ${
    guests.children
  } Children · ${guests.rooms} Room${guests.rooms > 1 ? "s" : ""}`;

  // Handle increment and decrement for guests
  const handleIncrement = (key: keyof typeof guests) => {
    if (key !== "pets") {
      setGuests((prev) => ({
        ...prev,
        [key]: (prev[key] as number) + 1,
      }));
    }
  };

  const handleDecrement = (key: keyof typeof guests) => {
    if (key !== "pets") {
      const value = guests[key] as number;
      if (value > 0) {
        setGuests((prev) => ({
          ...prev,
          [key]: value - 1,
        }));
      }
    }
  };

  // const togglePets = () => {
  //   setGuests((prev) => ({
  //     ...prev,
  //     pets: !prev.pets,
  //   }));
  // };

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between bg-white opacity-100 rounded-3xl py-2 sm:py-3 px-2 sm:px-4 w-[90%] md:w-full shadow-md mx-auto h-auto">
      {/* Location Input */}
      <div className="flex items-center w-full sm:w-auto sm:flex-1 min-w-0 border border-gray-400 rounded-full px-2 sm:px-3 py-1 sm:py-2 mx-1 my-1 sm:my-0 sm:mx-2">
        <span className="text-gray-500 flex-shrink-0">
          <MapPin className="h-5 w-5 sm:h-6 sm:w-6" color="black" />
        </span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Destination"
          className="w-full min-w-0 ml-2 outline-none bg-transparent text-sm sm:text-base text-black"
        />
      </div>

      {/* Check-in Date Picker */}
      <div className="flex items-center w-full sm:w-auto sm:flex-1 min-w-0 border border-gray-400 rounded-full px-2 sm:px-3 py-1 sm:py-2 mx-1 my-1 sm:my-0 sm:mx-2">
        <span
          className="text-gray-500 cursor-pointer flex-shrink-0"
          onClick={() => checkInRef.current?.showPicker()}
        >
          <Calendar className="h-5 w-5 sm:h-6 sm:w-6" color="black" />
        </span>
        <input
          type="date"
          ref={checkInRef}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="w-full min-w-0 ml-2 sm:ml-3 outline-none bg-transparent text-sm sm:text-base text-black"
          style={{ appearance: "none" }}
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="flex items-center w-full sm:w-auto sm:flex-1 min-w-0 border border-gray-400 rounded-full px-2 sm:px-3 py-1 sm:py-2 mx-1 my-1 sm:my-0 sm:mx-2">
        <span
          className="text-gray-500 cursor-pointer flex-shrink-0"
          onClick={() => checkOutRef.current?.showPicker()}
        >
          <Calendar className="h-5 w-5 sm:h-6 sm:w-6" color="black" />
        </span>
        <input
          type="date"
          ref={checkOutRef}
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="w-full min-w-0 ml-2 sm:ml-3 outline-none bg-transparent text-sm sm:text-base text-black"
          style={{ appearance: "none" }}
        />
      </div>

      {/* Guest Selection */}
      <div className="relative flex items-center w-full sm:w-auto sm:flex-1 min-w-0 border border-gray-400 rounded-full px-2 sm:px-3 py-1 sm:py-2 mx-1 my-1 sm:my-0 sm:mx-2">
        <span className="text-gray-500 flex-shrink-0">
          <User className="h-5 w-5 sm:h-6 sm:w-6" color="black" />
        </span>
        <input
          ref={guestInputRef}
          type="text"
          placeholder={guestPlaceholder}
          className="w-full min-w-0 ml-2 sm:ml-3 outline-none bg-transparent text-sm sm:text-base text-black cursor-pointer"
          onClick={() => setIsModalOpen((prev) => !prev)}
          readOnly
        />
        <span className="text-gray-500 flex-shrink-0 ml-1">
          <ChevronDown color="black" size={20} />
        </span>

        {/* Modal */}
        {isModalOpen && (
          <div className="absolute top-full mt-2  right-0 sm:left-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 sm:w-64 md:w-50  z-10">
            {/* Adults */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Adults</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement("adults")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  -
                </button>
                <span className="text-sm">{guests.adults}</span>
                <button
                  onClick={() => handleIncrement("adults")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Children</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement("children")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  -
                </button>
                <span className="text-sm">{guests.children}</span>
                <button
                  onClick={() => handleIncrement("children")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Rooms</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement("rooms")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  -
                </button>
                <span className="text-sm">{guests.rooms}</span>
                <button
                  onClick={() => handleIncrement("rooms")}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Travelling with pets */}
            {/* <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Travelling with pets?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={guests.pets}
                  onChange={togglePets}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-600">
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      guests.pets ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
            </div> */}

            {/* Assistance animals note */}
            {/* <p className="text-xs text-gray-500 mb-3">
              Assistance animals aren’t considered pets.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Read more about travelling with assistance animals
              </a>
            </p> */}

            {/* Done Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              DONE
            </button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="flex-none w-full sm:w-auto bg-[#040928] text-white px-3 sm:px-6 flex items-center justify-center gap-2 py-2 sm:py-3 rounded-full hover:bg-[#0a1545] transition-all mx-1 my-1 sm:my-0 sm:mx-2">
        <SearchIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-sm sm:text-base">Search</span>
      </button>
    </div>
  );
}
