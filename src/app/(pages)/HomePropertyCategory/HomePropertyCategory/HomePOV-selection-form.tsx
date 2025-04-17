"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PropertyPOVSelectionProps {
  setCurrentForm: (form: string) => void;
  updateFormData: (data: { accommodationType: string }) => void;

  formData: {
    accommodationType: string;
  };
}

export default function PropertyPOVSelection({
  setCurrentForm,
  updateFormData,
  formData,
  }: PropertyPOVSelectionProps) {
  const [selectedOption, setSelectedOption] = useState<string>(
    formData.accommodationType || "entire"
  );

  const handleContinue = () => {
    if (selectedOption) {
      updateFormData({ accommodationType: selectedOption });
      setCurrentForm("propertyType");
    }
  };

  const handleBack = () => {
    setCurrentForm("propertyType");
  };

  const getTitle = () => {
    return "What type of accommodation are you listing?";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#0071c2] to-[#00487a] bg-clip-text text-transparent"
      >
        {getTitle()}
      </motion.h1>

      <div className="space-y-6 max-w-xl">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all shadow-sm hover:shadow-md ${
            selectedOption === "entire"
              ? "border-[#0071c2] bg-blue-50/30"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelectedOption("entire")}
        >
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Image
                  src="/assets/house.png"
                  alt="Entire property"
                  width={40}
                  height={40}
                  className="text-[#0071c2]"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Entire Property
                  </h3>
                  <p className="text-gray-600">
                    Guests will have the whole place to themselves, including a
                    private entrance
                  </p>
                </div>
                {selectedOption === "entire" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-[#0071c2] rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all shadow-sm hover:shadow-md ${
            selectedOption === "private"
              ? "border-[#0071c2] bg-blue-50/30"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelectedOption("private")}
        >
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Image
                  src="/assets/multipleHouse.jpg"
                  alt="Private room"
                  width={50}
                  height={50}
                  className="text-[#0071c2]"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Private Room</h3>
                  <p className="text-gray-600">
                    Guests will have their own private room for sleeping, but
                    other areas could be shared
                  </p>
                </div>
                {selectedOption === "private" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-[#0071c2] rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 flex gap-4"
      >
        <button
          className="px-8 py-2 h-12 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          onClick={handleBack}
        >
          <span className="text-[#0071c2] text-xl">←</span>
        </button>
        <button
          className={`flex-1 h-12 rounded-xl text-white font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
            selectedOption
              ? "bg-gradient-to-r from-[#0071c2] to-[#00487a] hover:from-[#00487a] hover:to-[#003558]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedOption}
          onClick={handleContinue}
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
}
