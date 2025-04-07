"use client";
import React, { useState } from "react";
import { Home, CheckCircle2, MapPin } from "lucide-react";
import Confirmation from "./confirmation";

interface BookingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LocationOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface OneOrMultipleModalProps {
  selectedCategory: string;
  selectedChoice: string;
}

function OneOrMultipleModal( { selectedCategory , selectedChoice }: OneOrMultipleModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>("one");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [showMainCategory, setShowMainCategory] = useState(false);

  const getBookingOptions = (): BookingOption[] => [
    {
      id: "one",
      title: `One ${selectedCategory}`,
      description: `You have one ${selectedCategory} available for booking.`,
      icon: <Home className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "multiple",
      title: `Multiple ${selectedCategory}s`,
      description: `You have multiple ${selectedCategory}s available for booking.`,
      icon: <Home className="w-8 h-8 text-gray-600" />,
    },
  ];

  const locationOptions: LocationOption[] = [
    {
      id: "same",
      title: "Same Location",
      description: "All your properties are at the same location",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "different",
      title: "Different Locations",
      description: "Your properties are spread across different locations",
      icon: <MapPin className="w-8 h-8 text-gray-600" />,
    },
  ];

  const bookingOptions = getBookingOptions();

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === "one") {
      setSelectedLocation("");
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  if (showMainCategory) {
    return <Confirmation selectedChoice={selectedChoice} selectedCategory={selectedCategory} selectedOption={selectedOption} selectedLocation={selectedLocation} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl p-8 rounded-xl shadow-2xl border border-white/20 w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          How many {selectedCategory}s are you listing?
        </h1>

        <div className="space-y-4">
          {bookingOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedOption === option.id
                  ? "border-[#040928] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{option.icon}</div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {option.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{option.description}</p>
                </div>
                {selectedOption === option.id && (
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedOption === "multiple" && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Where are your properties located?
            </h2>
            <div className="space-y-4">
              {locationOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleLocationSelect(option.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedLocation === option.id
                      ? "border-[#040928] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{option.icon}</div>
                    <div className="flex-grow">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {option.title}
                      </h2>
                      <p className="text-gray-600 mt-1">{option.description}</p>
                    </div>
                    {selectedLocation === option.id && (
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Back
          </button>
          <button
            onClick={() => setShowMainCategory(true)}
            className="flex-1 px-4 py-2 bg-[#040928] text-white rounded-lg hover:bg-[#26293d] transition-colors font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneOrMultipleModal;
