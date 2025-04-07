"use client";
import React, { useState } from "react";
import { Home, CheckCircle2 } from "lucide-react";
import MainCategorySelect from "./main-category-select";

interface BookingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function EntirePrivateModal() {
  const [finalInformationForBackend, setFinalInformationForBackend] = useState(
    {}
  );

  const [selectedChoice, setSelectedChoice] = useState<string>("entire");
  const [showMainCategory, setShowMainCategory] = useState(false);

  const bookingOptions: BookingOption[] = [
    {
      id: "entire",
      title: "Entire place",
      description:
        "Guests are able to use the entire place and do not have to share this with the host or other guests.",
      icon: <Home className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "private",
      title: "A private room",
      description:
        "Guests rent a room within the property. There are common areas that are either shared with the host or other guests.",
      icon: <Home className="w-8 h-8 text-gray-600" />,
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedChoice(optionId);
  };

  if (showMainCategory) {
    return <MainCategorySelect selectedChoice={selectedChoice} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen  flex items-center justify-center p-8">
        <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
          <h1 className="text-2xl font-bold text-gray-900">
            What can guests book?
          </h1>

          <div className="space-y-4">
            {bookingOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`p-6 border-2 cursor-pointer transition-all ${
                  selectedChoice === option.id
                    ? "border-[#040928] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{option.icon}</div>
                  <div className="flex-grow">
                    <h2 className="text-md font-bold text-gray-900">
                      {option.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{option.description}</p>
                  </div>
                  {selectedChoice === option.id && (
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              Back
            </button>
            <button
              onClick={() => setShowMainCategory(true)}
              className="flex-1 px-4 py-2 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntirePrivateModal;
