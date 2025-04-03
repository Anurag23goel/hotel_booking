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

interface Landmark {
  name: string;
  type: string;
  distance: string;
  isPopular?: boolean;
}

const landmarks: Landmark[] = [
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
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search distance from any location in Goa"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showNearby}
                onChange={() => setShowNearby(!showNearby)}
                className="rounded text-blue-500"
              />
              <span className="text-sm text-gray-600">
                Show Nearby Properties
              </span>
            </label>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <MapPin className="text-blue-500 mr-2" />
              <span className="font-semibold">Key Landmarks</span>
            </div>
            <ChevronUp className="text-gray-400" />
          </div>

          <div className="space-y-4">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {landmark.type === "Religious Place" ? (
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">{landmark.name}</span>
                      {landmark.isPopular && (
                        <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
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
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible sections */}
          {["Attractions", "Transport", "Restaurants", "Other Landmarks"].map(
            (section, index) => (
              <div key={section} className="mt-4 border-t pt-4">
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
                  <div className="flex items-center space-x-2">
                    {section === "Attractions" && (
                      <Camera className="text-gray-500" />
                    )}
                    {section === "Transport" && (
                      <Bus className="text-gray-500" />
                    )}
                    {section === "Restaurants" && (
                      <Utensils className="text-gray-500" />
                    )}
                    {section === "Other Landmarks" && (
                      <MapPin className="text-gray-500" />
                    )}
                    <span className="font-medium">{section}</span>
                  </div>
                  {expandedSections[
                    section
                      .toLowerCase()
                      .replace(" ", "") as keyof typeof expandedSections
                  ] ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
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
