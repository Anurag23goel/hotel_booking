"use client"

import { useState } from "react"

interface PropertyAmenitiesFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { amenities: string[] }) => void
  formData: any
}

export default function PropertyAmenitiesForm({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyAmenitiesFormProps) {
  const [amenities, setAmenities] = useState<string[]>(formData.amenities || [])
  const [showInfoBox, setShowInfoBox] = useState(true)

  const amenitiesList = [
    "Restaurant",
    "Room service",
    "Bar",
    "24-hour front desk",
    "Sauna",
    "Fitness centre",
    "Garden",
    "Terrace",
    "Non-smoking rooms",
    "Airport shuttle",
    "Family rooms",
    "Spa and wellness centre",
    "Hot tub/Jacuzzi",
    "Free WiFi",
    "Air conditioning",
    "Water park",
    "Electric vehicle charging station",
    "Swimming pool",
    "Beach",
  ]

  const handleAmenityToggle = (amenity: string) => {
    setAmenities((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((a) => a !== amenity)
      } else {
        return [...prev, amenity]
      }
    })
  }

  const handleContinue = () => {
    updateFormData({ amenities })
    setCurrentForm("propertyServices")
  }

  const handleBack = () => {
    setCurrentForm("propertyDetails")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">What can guests use at your {formData.propertyType}?</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6 relative">
        {showInfoBox && (
          <div className="absolute right-6 top-6 bg-gray-50 border border-gray-200 p-4 rounded-md w-full md:w-64 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
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
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <h3 className="font-medium">What if I don&apos;t see a facility I offer?</h3>
              </div>
              <button
                onClick={() => setShowInfoBox(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600">
              The facilities listed here are the ones most searched for by guests. After you complete your registration,
              you can add more facilities from a larger list in the extranet, the platform you&apos;ll use to manage
              your property.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
              />
              <span className="ml-2">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
