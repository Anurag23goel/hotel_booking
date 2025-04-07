"use client";
import React, { useState } from "react";
import { ChevronLeft, HelpCircle, CheckCircle2 } from "lucide-react";
import OneOrMultipleModal from "./one-multiple";

interface PropertyCategory {
  id: string;
  title: string;
  description: string;
}

function MainCategorySelect({selectedChoice}: {selectedChoice: string}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showOneOrMultiple, setShowOneOrMultiple] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const categories: PropertyCategory[] = [
    {
      id: "apartment",
      title: "Apartment",
      description:
        "Furnished and self-catering accommodation available for short- and long-term rental",
    },
    {
      id: "homeStay",
      title: "HomeStay",
      description:
        "Free-standing home with private, external entrance and rented specifically for holidays",
    },
    {
      id: "villa",
      title: "Villa",
      description:
        "Private self-standing and self-catering home with luxury feel",
    },
    {
      id: "apart-hotel",
      title: "Apart-hotel",
      description:
        "A self-catering apartment with some hotel facilities like a reception desk",
    },
    {
      id: "cottage",
      title: "Cottage",
      description:
        "Free-standing home characterized by sloped roof and rented specifically for holidays",
    },
    {
      id: "hostel",
      title: "Hostel",
      description:
        "Private self-catering residences located on a shared grounds with shared facilities or recreational activities",
    },
    {
      id: "bed and breakfast",
      title: "Bed and Breakfast",
      description:
        "Private self-catering residences located on a shared grounds with shared facilities or recreational activities",
    },
    {
      id: "farmhouse",
      title: "Farmhouse",
      description:
        "Private self-catering residences located on a shared grounds with shared facilities or recreational activities",
    },
    {
      id: "camp",
      title: "Camp",
      description:
        "Private self-catering residences located on a shared grounds with shared facilities or recreational activities",
    },
    {
      id: "luxury-camp",
      title: "Luxury Camp",
      description:
        "Private self-catering residences located on a shared grounds with shared facilities or recreational activities",
    },
  ];

  if (showOneOrMultiple) {
    return <OneOrMultipleModal selectedChoice={selectedChoice} selectedCategory={selectedCategory} />;
  }

  return (
    <div className="min-h-screen  bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-5xl p-8 rounded-xl shadow-2xl border border-white/20 w-full space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          From the list below, which property category is most similar to your
          place?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all relative ${
                selectedCategory === category.id
                  ? "border-[#040928] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h2>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              {selectedCategory === category.id && (
                <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-blue-500" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center text-sm text-blue-600 hover:text-blue-700 cursor-pointer gap-1">
          <HelpCircle className="w-4 h-4" />
          <span>I don`&apos;`t see my property type on the list</span>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={() => setShowOneOrMultiple(true)}
            className="flex-1 px-4 py-2 bg-[#040928] text-white rounded-lg hover:bg-[#202335] transition-colors font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainCategorySelect;
