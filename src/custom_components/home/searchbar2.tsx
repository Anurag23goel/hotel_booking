"use client";
import { Calendar, ChevronDown, X, User, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export default function Searchbar() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-03-30"),
      endDate: new Date("2025-04-22"),
      key: "selection",
    },
  ]);
  const [location, setLocation] = useState("Shimla");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
    pets: false,
  });

  // Refs
  const dateContainerRef = useRef<HTMLDivElement>(null);
  const guestInputRef = useRef<HTMLInputElement>(null);

  // Guest selection placeholder
  const totalGuests = guests.adults + guests.children;
  const guestPlaceholder = `${totalGuests} Guest${
    totalGuests !== 1 ? "s" : ""
  }, ${guests.rooms} Room${guests.rooms !== 1 ? "s" : ""}`;

  // Formatted date display with day of the week
  const checkInDisplay = format(dateRange[0].startDate, "EEE, dd-MM-yyyy");
  const checkOutDisplay = format(dateRange[0].endDate, "EEE, dd-MM-yyyy");

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
      if (key === "adults" && value <= 1) return; // Prevent adults from going below 1
      if (key === "rooms" && value <= 1) return; // Prevent rooms from going below 1
      if (value > 0) {
        setGuests((prev) => ({
          ...prev,
          [key]: value - 1,
        }));
      }
    }
  };

  // Clear location input
  const clearLocation = () => {
    setLocation("");
  };

  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-2xl shadow-sm w-full max-w-5xl mx-auto h-18">
      {/* Location Input */}
      <div className="flex items-center flex-1 px-4 border-r border-gray-300 h-full">
        <span className="text-gray-500 flex-shrink-0">
          <MapPin className="h-5 w-5" color="black" />
        </span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Destination"
          className="w-full ml-2 outline-none bg-transparent text-sm text-black placeholder-gray-400"
        />
        {location && (
          <button onClick={clearLocation} className="ml-2">
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      {/* Check-in Container */}
      <div
        className="flex items-center flex-1 px-4 border-r border-gray-300 h-full cursor-pointer"
        onClick={() => setIsDatePickerOpen((prev) => !prev)}
      >
        <span className="text-gray-500 flex-shrink-0">
          <Calendar className="h-5 w-5" color="black" />
        </span>
        <span className="ml-2 text-sm text-black">{checkInDisplay}</span>
      </div>

      {/* Check-out Container */}
      <div
        className="flex items-center flex-1 px-4 border-r border-gray-300 h-full cursor-pointer"
        onClick={() => setIsDatePickerOpen((prev) => !prev)}
      >
        <span className="text-gray-500 flex-shrink-0">
          <Calendar className="h-5 w-5" color="black" />
        </span>
        <span className="ml-2 text-sm text-black">{checkOutDisplay}</span>
      </div>

      {/* Date Range Picker */}
      {isDatePickerOpen && (
        <div
          className="absolute top-full mt-2 left-1/4 transform -translate-x-1/4 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
          ref={dateContainerRef}
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            months={2}
            direction="horizontal"
            minDate={new Date()}
          />
        </div>
      )}

      {/* Guest Selection */}
      <div className="relative flex items-center flex-1 px-4 h-full">
        <span className="text-gray-500 flex-shrink-0">
          <User className="h-5 w-5" color="black" />
        </span>
        <input
          ref={guestInputRef}
          type="text"
          value={guestPlaceholder}
          className="w-full ml-2 outline-none bg-transparent text-sm text-black cursor-pointer"
          onClick={() => setIsGuestModalOpen((prev) => !prev)}
          readOnly
        />
        <span className="text-gray-500 flex-shrink-0 ml-1">
          <ChevronDown color="black" size={20} />
        </span>

        {/* Guest Modal */}
        {isGuestModalOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64 z-10">
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

            {/* Done Button */}
            <button
              onClick={() => setIsGuestModalOpen(false)}
              className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              DONE
            </button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="h-18 px-6 bg-blue-600 text-white rounded-r-2xl hover:bg-blue-700 transition-all">
        <span className="text-sm font-medium">Search</span>
      </button>
    </div>
  );
}
