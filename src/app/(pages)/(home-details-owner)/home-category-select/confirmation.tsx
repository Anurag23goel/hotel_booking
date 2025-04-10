import React, { useState } from "react";
import { Home } from "lucide-react";
import LocationForm from "./(basicInfo)/location-form";
import MainDetailPage from "./mainDetailPage";
interface ConfirmationProps {
  selectedCategory: string;
  selectedOption: string;
  selectedLocation: string;
  selectedChoice: string;
}

function Confirmation({
  selectedCategory,
  selectedOption,
  selectedLocation,
  selectedChoice,
}: ConfirmationProps) {
  
  const [showMainDetailPage, setShowMainDetailPage] = useState(false);

  if (showMainDetailPage) {
    return <MainDetailPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center space-y-6">
          <p className="text-gray-900">You`&apos;`re listing:</p>

          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <Home className="w-12 h-12 text-[#040928]" />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-900 px-4">
            {selectedOption} {selectedCategory}s in the {selectedLocation}{" "}
            location where guests can book an {selectedChoice} place
          </h1>

          <p className="text-#040928 text-sm">
            Does this sound like your property?
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={() => setShowMainDetailPage(true)}
            className="w-full px-4 py-3 bg-[#040928] text-white rounded-lg hover:bg-[#24273b] transition-colors font-medium"
          >
            Continue
          </button>
          <button className="w-full px-4 py-3 text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            No, I need to make a change
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
