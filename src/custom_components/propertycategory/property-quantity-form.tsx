"use client"

import { useState } from "react"
import Image from "next/image"

interface PropertyQuantityFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { quantity: string }) => void
  formData: { propertyType: string; quantity: string; address: {
    street: string
    apartment: string
    country: string
    city: string
    postalCode: string
  } }
}

export default function PropertyQuantityForm({ setCurrentForm, updateFormData, formData }: PropertyQuantityFormProps) {
  const [selectedOption, setSelectedOption] = useState<string>(formData.quantity || "single")
  const propertyType = formData.propertyType || "hotel"

  const handleContinue = () => {
    if (selectedOption) {
      updateFormData({ quantity: selectedOption })
      setCurrentForm("propertyConfirmation")
    }
  }

  const handleBack = () => {
    setCurrentForm("propertyType")
  }

  const getTitle = () => {
    switch (propertyType) {
      case "hotel":
        return "How many hotels are you listing?"
      case "guest-house":
        return "How many guest houses are you listing?"
      default:
        return `How many ${propertyType}s are you listing?`
    }
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">{getTitle()}</h1>

      <div className="space-y-4 max-w-xl">
        <div
          className={`border rounded-md p-4 cursor-pointer transition-all ${
            selectedOption === "single" ? "border-[#0071c2] border-2" : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelectedOption("single")}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/house.png"
                alt="Single property"
                width={40}
                height={40}
                className="text-[#0071c2]"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">One {propertyType} with one or multiple rooms that guests can book</h3>
                </div>
                {selectedOption === "single" && (
                  <div className="bg-[#0071c2] rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border rounded-md p-4 cursor-pointer transition-all ${
            selectedOption === "multiple" ? "border-[#0071c2] border-2" : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelectedOption("multiple")}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 mr-[-0.5rem]">
              <Image
                src="/assets/multipleHouse.jpg"
                alt="Multiple properties"
                width={50}
                height={50}
                className="text-[#0071c2] "
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">
                    Multiple {propertyType}s with one or multiple rooms that guests can book
                  </h3>
                </div>
                {selectedOption === "multiple" && (
                  <div className="bg-[#0071c2] rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className={`flex-1 h-12 rounded-md text-white ${
            selectedOption ? "bg-[#0071c2] hover:bg-[#00487a]" : "bg-[#0071c2] opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedOption}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

