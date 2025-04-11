"use client"

import { useState } from "react"

interface BathroomDetailsFormProps {
  setCurrentForm: (form: string) => void
  updateRoomData: (data: any) => void
  roomData: any
}

export default function BathroomDetailsForm({ setCurrentForm, updateRoomData, roomData }: BathroomDetailsFormProps) {
  const [bathroomDetails, setBathroomDetails] = useState({
    isPrivate: roomData.bathroom?.isPrivate !== undefined ? roomData.bathroom?.isPrivate : true,
    amenities: roomData.bathroom?.amenities || [],
  })

  const [showInfoBox, setShowInfoBox] = useState(true)

  const handlePrivateChange = (isPrivate: boolean) => {
    setBathroomDetails((prev) => ({
      ...prev,
      isPrivate,
    }))
  }

  const handleAmenityToggle = (amenity: string) => {
    setBathroomDetails((prev) => {
      const amenities = [...prev.amenities]
      if (amenities.includes(amenity)) {
        return { ...prev, amenities: amenities.filter((a) => a !== amenity) }
      } else {
        return { ...prev, amenities: [...amenities, amenity] }
      }
    })
  }

  const handleContinue = () => {
    updateRoomData({ bathroom: bathroomDetails })
    setCurrentForm("roomName")
  }

  const handleBack = () => {
    setCurrentForm("roomDetails")
  }

  const bathroomAmenities = [
    "Toilet paper",
    "Shower",
    "Toilet",
    "Hairdryer",
    "Bath",
    "Free toiletries",
    "Bidet",
    "Slippers",
    "Bathrobe",
    "Spa bath",
  ]

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Bathroom details</h1>

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
                <h3 className="font-medium">Still deciding?</h3>
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
              Don&apos;t worry, you can update the bathroom items available at your place later.
            </p>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Is the bathroom private?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="isPrivate"
                checked={bathroomDetails.isPrivate === true}
                onChange={() => handlePrivateChange(true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isPrivate"
                checked={bathroomDetails.isPrivate === false}
                onChange={() => handlePrivateChange(false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">No, it&apos;s shared</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Which bathroom items are available in this room?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bathroomAmenities.map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  checked={bathroomDetails.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
                />
                <span className="ml-2">{amenity}</span>
              </label>
            ))}
          </div>
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
