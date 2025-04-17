"use client";

import { useState } from "react";

interface PropertyAmenitiesFormProps {
  setCurrentForm: (form: string) => void;
  updateFormData: (data: { amenities: string[] }) => void;
  formData: any;
}

export default function PropertyAmenitiesForm({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyAmenitiesFormProps) {
  const [amenities, setAmenities] = useState<string[]>(
    formData.amenities || []
  );
  const [showInfoBox, setShowInfoBox] = useState(true);

  // Updated amenities groups with your complete list
  const amenitiesGroups = {
    "Basic Facilities": {
      "Elevator/Lift": null,
      "Air Conditioning": ["Room controlled", "Centralized"],
      Housekeeping: null,
      "Ironing Service": ["Free", "Paid"],
      "Kitchen/Kitchenette": [
        "Cooking Appliances",
        "Microwave",
        "Utensils",
        "Toaster",
        "Induction",
        "Cutlery",
      ],
      LAN: ["Free", "Paid"],
      Laundry: ["Free", "Paid"],
      Newspaper: ["Local language", "English"],
      Parking: ["Free", "Paid"],
      "Power Backup": ["Genset", "Inverter"],
      Refrigerator: null,
      "Room Service": ["24 hours", "Limited duration"],
      "Smoke Detector": ["In room", "Lobby"],
      "Smoking Rooms": null,
      "Swimming Pool": [
        "Common Pool",
        "Kids Pool",
        "Infinity Pool",
        "Indoor pool",
        "Heated pool",
        "Roof Top Pool",
        "Sunny Swimming",
        "Plunge Pool",
        "Pool Cover",
        "Pool with a view",
        "Saltwater pool",
        "Shallow end",
        "Fully secluded outdoor pool",
        "Women-only pool",
      ],
      Umbrellas: null,
      "Washing Machine": null,
      Wifi: ["Free", "Paid"],
      Laundromat: null,
      "EV Charging Station": null,
    },
    "General Services": {
      "Bellboy Service": null,
      Caretaker: null,
      Concierge: null,
      "Multilingual Staff": ["Hindi", "English", "Marathi"],
      "Luggage Assistance": null,
      "Luggage Storage": null,
      "Especially Abled Assistance": [
        "Auditory Guidance",
        "Wheelchair",
        "Braille",
        "Tactile Signs",
      ],
      "Wake-up Call/Service": null,
      Wheelchair: ["Free", "Paid"],
      "Butler Services": ["Personal", "For each Floor"],
      "Doctor on Call": null,
      "Medical Center": null,
      "Pool/Beach Towels": null,
    },
    "Outdoor Activities and Sports": {
      Beach: ["Private", "Beachfront"],
      Bonfire: ["On request", "Paid"],
      Golf: null,
      Kayaks: null,
      "Outdoor Sports": [
        "Cricket",
        "Volleyball",
        "Basketball",
        "Tennis",
        "Badminton",
        "Swings",
        "Rock climbing",
        "Archery",
        "Horse riding",
        "Hiking",
        "Squash",
      ],
      Snorkelling: ["Free", "Paid"],
      Telescope: null,
      "Water Sports": [
        "Wind skiing",
        "Diving",
        "Fishing",
        "Water slides",
        "Water park",
        "Trainer",
      ],
      Canoeing: ["Free", "Paid"],
      Skilling: ["Trainer", "Equipment"],
      "Jungle Safari": ["Free", "Paid"],
      Cycling: null,
    },
    "Common Area": {
      "Balcony/Terrace": null,
      Fireplace: ["Outdoor", "Indoor", "Common"],
      Lawn: null,
      Library: null,
      Lounge: ["Cigar lounge", "Private", "Shared"],
      Reception: null,
      "Seating Area": null,
      "Sun Deck": null,
      Verandah: null,
      Jacuzzi: ["For women only", "Available for couple"],
      "Prayer Room": null,
      "Living Room": null,
      "Outdoor Furniture": null,
      "Picnic Area": null,
      "Game Room": null,
      "Sitout Area": [
        "Balcony",
        "Verandah",
        "Seating arrangement on the lawn",
        "Poolside sit-out-area",
        "Patio",
      ],
      "Bonfire Pit": null,
    },
    "Food and Drinks": {
      Bar: null,
      Barbeque: ["Free", "Paid"],
      Café: ["24 x 7", "Limited hours"],
      "Coffee Shop": null,
      "Dining Area": null,
      "Kids Meals": null,
      Restaurant: ["Halal", "Kosher"],
      Bakery: null,
    },
    "Health and Wellness": {
      "Activity Centre": null,
      "Gym/Fitness Centre": ["24 hours", "Personal trainer"],
      Reflexology: null,
      Yoga: null,
      "Meditation Room": null,
      "First Aid Services": null,
    },
    "Business Centre and Conferences": {
      Banquet: null,
      "Business Center": null,
      "Conference Room": null,
      Photocopying: null,
      "Fax Service": null,
      Printer: null,
    },
    "Beauty and Spa": {
      Massage: ["Couple massage", "Foot massage"],
      Salon: ["Waxing", "Hair Cut"],
      Spa: ["Free", "Paid"],
      "Steam and Sauna": ["Free", "Paid"],
      "Open Air Bath": null,
      Hammam: ["Women only", "Available for couple"],
    },
    Security: {
      CCTV: null,
      "Fire Extinguishers": null,
      "Security Alarms": null,
      "Security Guard": null,
      "Carbon Monoxide Detector": null,
    },
    Transfers: {
      "Airport Transfers": ["Free", "Paid"],
      "Shuttle Service": ["Free", "Paid"],
    },
    Shopping: {
      "Book Shop": null,
      "Souvenir Shop": null,
      "Jewellery Shop": null,
    },
    Entertainment: {
      "Movie Room": null,
      "Music System": null,
      Events: [
        "Live Band",
        "Live Singer",
        "Live Ghazal",
        "Live Music",
        "Puppet Show",
        "Magic",
        "Fire Show",
        "Karaoke",
        "Movies",
        "DJ",
        "Stand-up Comedy",
        "Folk Dance",
      ],
      Pub: null,
      "Photo Session": null,
      "Night Club": null,
      "Beach Club": null,
    },
    "Payment Services": {
      ATM: null,
      "Currency Exchange": null,
    },
    "Indoor Activities and Sports": {
      Casino: ["Free entry", "Paid entry"],
      "Indoor Games": [
        "Board Game",
        "Pool Table",
        "Air Hockey",
        "Dart",
        "Table Tennis",
        "Carrom Board",
        "FoosBall",
        "Bowling",
        "Puzzles",
      ],
    },
    "Family and Kids": {
      "Child Care Service": ["Babysitting", "Cribs"],
      "Children's Play Area": ["Books", "DVD", "Swings", "Music", "Video Game"],
      "Kids Club": null,
      Strollers: null,
    },
    "Pet Essentials": {
      "Pet Bowls": null,
      "Pet Baskets": null,
    },
  };

  // Function to flatten the nested amenities structure for state management
  const flattenAmenities = (
    amenity: string,
    subAmenity: string | null = null
  ) => {
    return subAmenity ? `${amenity} - ${subAmenity}` : amenity;
  };

  const handleAmenityToggle = (
    amenity: string,
    subAmenity: string | null = null
  ) => {
    const amenityKey = flattenAmenities(amenity, subAmenity);
    setAmenities((prev) => {
      if (prev.includes(amenityKey)) {
        return prev.filter((a) => a !== amenityKey);
      } else {
        return [...prev, amenityKey];
      }
    });
  };

  const handleContinue = () => {
    updateFormData({ amenities });
    setCurrentForm("propertyServices");
  };

  const handleBack = () => {
    setCurrentForm("propertyDetails");
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        What amenities are available at your {formData.propertyType}?
      </h1>

      {showInfoBox && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mb-6 shadow-sm flex items-start">
          <div className="mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className="flex-grow pr-8">
            <h3 className="font-medium text-blue-800 mb-1">
              Important Information
            </h3>
            <p className="text-sm text-blue-800 opacity-90">
              Select all amenities that are available to guests. Make sure to
              only select amenities that are currently installed and ready to
              use.
            </p>
          </div>
          <button
            onClick={() => setShowInfoBox(false)}
            className="flex-shrink-0 text-blue-500 hover:text-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(amenitiesGroups).map(([groupName, groupAmenities]) => (
          <div
            key={groupName}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {groupName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(groupAmenities).map(([amenity, subAmenities]) => (
                <div key={amenity} className="space-y-2">
                  <label
                    className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                      amenities.includes(amenity)
                        ? "bg-blue-50 border-blue-300"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className={`ml-3 ${
                        amenities.includes(amenity)
                          ? "text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      {amenity}
                    </span>
                  </label>

                  {subAmenities && amenities.includes(amenity) && (
                    <div className="ml-8 space-y-2">
                      {subAmenities.map((subAmenity: string) => (
                        <label
                          key={subAmenity}
                          className={`flex items-center p-2 rounded-lg border transition-colors cursor-pointer ${
                            amenities.includes(
                              flattenAmenities(amenity, subAmenity)
                            )
                              ? "bg-blue-50 border-blue-300"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={amenities.includes(
                              flattenAmenities(amenity, subAmenity)
                            )}
                            onChange={() =>
                              handleAmenityToggle(amenity, subAmenity)
                            }
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span
                            className={`ml-3 text-sm ${
                              amenities.includes(
                                flattenAmenities(amenity, subAmenity)
                              )
                                ? "text-blue-700"
                                : "text-gray-600"
                            }`}
                          >
                            {subAmenity}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
        <div className="flex items-center text-gray-700">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">
              Selected amenities:{" "}
              <span className="text-blue-600">{amenities.length}</span>
            </h3>
            {amenities.length === 0 && (
              <p className="text-sm text-gray-500 mt-1">
                You haven`&apos;`t selected any amenities yet.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-3 h-14 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-lg transition-colors flex items-center justify-center font-medium"
          onClick={handleContinue}
        >
          <span>Continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
