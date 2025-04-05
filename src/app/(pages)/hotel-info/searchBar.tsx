import { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  Users,
  ChevronLeft,
} from "lucide-react";

interface SearchBarProps {
  onClose: () => void;
  searchDetails: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
  };
  updateSearchDetails: (details: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
  }) => void;
}

const SearchBar = ({
  onClose,
  searchDetails,
  updateSearchDetails,
}: SearchBarProps) => {
  const [location, setLocation] = useState(searchDetails.location);
  const [dates, setDates] = useState({
    checkIn: searchDetails.checkIn,
    checkOut: searchDetails.checkOut,
  });
  const [guests, setGuests] = useState({
    rooms: 1,
    adults: 2,
  });

  // Parse guests string to extract rooms and adults
  useEffect(() => {
    const guestsMatch = searchDetails.guests.match(
      /(\d+)\s*Room,\s*(\d+)\s*Guests/
    );
    if (guestsMatch) {
      setGuests({
        rooms: parseInt(guestsMatch[1]),
        adults: parseInt(guestsMatch[2]),
      });
    }
  }, [searchDetails.guests]);

  // Update local state when props change
  useEffect(() => {
    setLocation(searchDetails.location);
    setDates({
      checkIn: searchDetails.checkIn,
      checkOut: searchDetails.checkOut,
    });
  }, [searchDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the parent component's state
    updateSearchDetails({
      location,
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      guests: `${guests.rooms} Room, ${guests.adults} Guests`,
    });
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Modify Search</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Back Button */}
        <button
          type="button"
          onClick={onClose}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Listings</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#310744] focus:border-transparent"
              placeholder="Where to?"
            />
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in - Check-out
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={dates.checkIn}
                onChange={(e) =>
                  setDates({ ...dates, checkIn: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#310744] focus:border-transparent"
                placeholder="Check-in date"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={dates.checkOut}
                onChange={(e) =>
                  setDates({ ...dates, checkOut: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#310744] focus:border-transparent"
                placeholder="Check-out date"
              />
            </div>
          </div>
        </div>

        {/* Guests Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rooms & Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <div className="flex items-center gap-2 pl-10 pr-4 py-2 border rounded-md">
              <div className="flex-1">
                <div className="font-medium flex items-center gap-1">
                  {guests.rooms} Room, {guests.adults} Adults
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setGuests({
                      ...guests,
                      rooms: Math.max(1, guests.rooms - 1),
                    })
                  }
                  className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setGuests({ ...guests, rooms: guests.rooms + 1 })
                  }
                  className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#310744] text-white rounded-lg hover:bg-[#250533]"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
