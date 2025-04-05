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

const Location = () => {
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
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        {/* Key Landmarks */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
            Key Landmarks
          </h3>
          <div className="space-y-4">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      landmark.type === "Religious Place"
                        ? "bg-indigo-100"
                        : "bg-green-100"
                    }`}
                  >
                    {landmark.type === "Religious Place" ? (
                      <MapPin className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <Camera className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-sm text-gray-900">
                        {landmark.name}
                      </span>
                      {landmark.isPopular && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {landmark.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {landmark.distance}
                  </span>
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible Sections */}
          <div className="mt-6 space-y-4">
            {[
              { name: "Attractions", icon: Camera, key: "attractions" },
              { name: "Transport", icon: Bus, key: "transport" },
              { name: "Restaurants", icon: Utensils, key: "restaurants" },
              { name: "Other Landmarks", icon: MapPin, key: "others" },
            ].map((section) => (
              <div key={section.key} className="border-t border-gray-200 pt-4">
                <button
                  onClick={() =>
                    toggleSection(section.key as keyof typeof expandedSections)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-2">
                    <section.icon className="w-5 h-5 text-indigo-600" />
                    <span className="text-lg font-semibold text-gray-900">
                      {section.name}
                    </span>
                  </div>
                  {expandedSections[
                    section.key as keyof typeof expandedSections
                  ] ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSections[
                  section.key as keyof typeof expandedSections
                ] && (
                  <div className="mt-4 text-sm text-gray-600">
                    {/* Placeholder content; replace with actual data */}
                    <p>No {section.name.toLowerCase()} data available yet.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
