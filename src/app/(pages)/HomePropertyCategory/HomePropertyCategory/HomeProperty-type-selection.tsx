"use client";

import { useState } from "react";
import { Check, HelpCircle, ChevronLeft, ChevronDown } from "lucide-react";

type PropertyType = {
  id: string;
  title: string;
  description: string;
};

const propertyTypes: PropertyType[] = [
  {
    id: "villa",
    title: "Villa",
    description:
      "Accommodation for travellers with restaurants and guest services",
  },
  {
    id: "homeStay",
    title: "Home Stay",
    description:
      "Private home with separate living facilities for host and guest",
  },
  {
    id: "cottage",
    title: "Cottage",
    description: "Private home offering overnight stays and breakfast",
  },
  {
    id: "apartment",
    title: "Apartment",
    description:
      "Shared home where guests have private rooms and some shared facilities",
  },
  {
    id: "hostel",
    title: "Hostel",
    description:
      "Budget accommodation with dorm-style bedding and social atmosphere",
  },
  {
    id: "apart-hotel",
    title: "Apart-Hotel",
    description:
      "Self-catering apartment with hotel facilities like reception desk",
  },
  {
    id: "farmhouse",
    title: "Farmhouse",
    description: "Small units offering basic overnight accommodation",
  },
  {
    id: "Bed and Breakfast",
    title: "Bed and Breakfast",
    description: "Private farm with simple accommodation",
  },
  {
    id: "camp",
    title: "Camp",
    description: "Private farm with simple accommodation",
  },
  {
    id: "luxury-camps",
    title: "Luxury Camps",
    description: "Private farm with simple accommodation",
  },
];

interface PropertyTypeSelectionProps {
  setCurrentForm: (form: string) => void;
  updateFormData: (data: { propertyType: string }) => void;

  formData: {
    propertyType: string;
    quantity: string;
    address: {
      street: string;
      apartment: string;
      country: string;
      city: string;
      postalCode: string;
    };
  };
}



export default function PropertyTypeSelection({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>(
    formData.propertyType || ""
  );
  const [showMore, setShowMore] = useState(false);
  
  const displayedTypes = showMore ? propertyTypes : propertyTypes.slice(0, 6);

  const handleContinue = () => {
    if (selectedType) {
      updateFormData({ propertyType: selectedType });
      setCurrentForm("propertyQuantity");
    }
  };

  const handleBack = () => {
    setCurrentForm("propertyPOV")
  }

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 md:py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Which property category best describes your place?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayedTypes.map((type) => (
          <div
            key={type.id}
            className={`border rounded-lg p-3 cursor-pointer transition-all hover:shadow-sm ${
              selectedType === type.id
                ? "border-blue-600 border-2 bg-blue-50"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{type.title}</h3>
              {selectedType === type.id && (
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-1 text-xs">{type.description}</p>
          </div>
        ))}

        {!showMore && propertyTypes.length > 6 && (
          <div
            className="border border-gray-200 rounded-lg p-3 cursor-pointer flex items-center justify-center hover:bg-gray-50"
            onClick={() => setShowMore(true)}
          >
            <div className="text-blue-600 font-medium flex items-center text-sm">
              <ChevronDown className="h-4 w-4 mr-1" />
              Show more options
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <button className="flex items-center text-xs text-blue-600 font-medium">
          <HelpCircle className="h-3 w-3 mr-1" />I don`&apos;`t see my property
          type
        </button>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          className="p-2 h-10 w-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
          onClick={handleBack}
        >
          <ChevronLeft className="h-5 w-5 text-blue-600" />
        </button>
        <button
          className={`flex-1 h-10 rounded-md text-white font-medium ${
            selectedType
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
          disabled={!selectedType}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
