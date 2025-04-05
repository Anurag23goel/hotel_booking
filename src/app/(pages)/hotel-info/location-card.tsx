"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Camera,
  Bus,
  Utensils,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { LANDMARK_TYPE } from "@/Types";  

const landmarks: LANDMARK_TYPE[] = [
  {
    name: "Shri Shantadurga Mandir",
    type: "Religious Place",
    distance: "0.2 Km",
  },
  {
    name: "Candolim Beach",
    type: "Tourist Attraction",
    distance: "0.7 Km",
    isPopular: true,
  },
  {
    name: "Our Lady Of Hope Church, Candolim",
    type: "Tourist Attraction",
    distance: "1.5 Km",
  },
];

function Location() {
  const [showNearby, setShowNearby] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    attractions: false,
    transport: false,
    restaurants: false,
    others: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-3 md:p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-3 md:p-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            Location
          </h2>
          <div className="relative">
            <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
            <input
              type="text"
              placeholder="Search distance from any location in Goa"
              className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-sm"
            />
          </div>
          <div className="mt-2 md:mt-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showNearby}
                onChange={() => setShowNearby(!showNearby)}
                className="rounded text-blue-500 w-3 h-3 md:w-4 md:h-4"
              />
              <span className="text-xs md:text-sm text-gray-600">
                Show Nearby Properties
              </span>
            </label>
          </div>
        </div>

        <div className="p-3 md:p-4">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center">
              <MapPin className="text-blue-500 mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">
                Key Landmarks
              </span>
            </div>
            <ChevronUp className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          </div>

          <div className="space-y-3 md:space-y-4">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-3">
                  {landmark.type === "Religious Place" ? (
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Camera className="w-3 h-3 md:w-5 md:h-5 text-green-500" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-xs md:text-sm">
                        {landmark.name}
                      </span>
                      {landmark.isPopular && (
                        <span className="ml-1 md:ml-2 text-[10px] md:text-xs bg-green-100 text-green-600 px-1 md:px-2 py-0.5 rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <span className="text-xs md:text-sm text-gray-500">
                      {landmark.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <span className="text-xs md:text-sm text-gray-600">
                    {landmark.distance}
                  </span>
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible sections */}
          {["Attractions", "Transport", "Restaurants", "Other Landmarks"].map(
            (section, index) => (
              <div key={section} className="mt-3 md:mt-4 border-t pt-3 md:pt-4">
                <button
                  onClick={() =>
                    toggleSection(
                      section
                        .toLowerCase()
                        .replace(" ", "") as keyof typeof expandedSections
                    )
                  }
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center space-x-1 md:space-x-2">
                    {section === "Attractions" && (
                      <Camera className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                    {section === "Transport" && (
                      <Bus className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                    {section === "Restaurants" && (
                      <Utensils className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                    {section === "Other Landmarks" && (
                      <MapPin className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                    <span className="font-medium text-xs md:text-sm">
                      {section}
                    </span>
                  </div>
                  {expandedSections[
                    section
                      .toLowerCase()
                      .replace(" ", "") as keyof typeof expandedSections
                  ] ? (
                    <ChevronUp className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  )}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Location;
