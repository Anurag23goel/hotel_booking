"use client"

import { useState } from "react"

interface RoomDetailsFormProps {
  setCurrentForm: (form: string) => void
  updateRoomData: (data: any) => void
  roomData: any
}

export default function RoomDetailsForm({ setCurrentForm, updateRoomData, roomData }: RoomDetailsFormProps) {
  const [roomDetails, setRoomDetails] = useState({
    roomType: roomData.roomType || "Double",
    roomCount: roomData.roomCount || 1,
    beds: roomData.beds || {
      singleBed: 0,
      doubleBed: 1,
      largeBed: 0,
      extraLargeBed: 0,
    },
    guestCount: roomData.guestCount || 2,
    roomSize: roomData.roomSize || "",
    roomSizeUnit: roomData.roomSizeUnit || "square metres",
    smokingAllowed: roomData.smokingAllowed || false,
  })

  const [showInfoBox, setShowInfoBox] = useState(true)

  const handleInputChange = (field: string, value: any) => {
    setRoomDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBedChange = (bedType: string, value: number) => {
    setRoomDetails((prev) => ({
      ...prev,
      beds: {
        ...prev.beds,
        [bedType]: value,
      },
    }))
  }

  const handleContinue = () => {
    updateRoomData(roomDetails)
    setCurrentForm("bathroomDetails")
  }

  const roomTypes = ["Single", "Double", "Twin", "Triple", "Quad", "Family", "Suite", "Studio"]

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Room details</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">What type of unit is this?</h2>
          <div className="relative">
            <select
              value={roomDetails.roomType}
              onChange={(e) => handleInputChange("roomType", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
            >
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">How many rooms of this type do you have?</h2>
          <input
            type="number"
            min="1"
            value={roomDetails.roomCount}
            onChange={(e) => handleInputChange("roomCount", Number.parseInt(e.target.value) || 1)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Which beds are available in this room?</h2>
          {showInfoBox && (
            <div className="relative mb-4 bg-gray-50 border border-gray-200 p-4 rounded-md">
              <div className="flex justify-between items-start">
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
                  <h3 className="font-medium">Do you offer other sleeping arrangements?</h3>
                </div>
                <button
                  onClick={() => setShowInfoBox(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Right now, you just need to add your basic sleeping arrangements. Cots, additional beds and other
                sleeping arrangements can be added in the extranet, the platform you&apos;ll use to manage your
                property.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="2" y1="16" x2="22" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Single bed</p>
                  <p className="text-sm text-gray-500">90 - 130 cm wide</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleBedChange("singleBed", Math.max(0, roomDetails.beds.singleBed - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                  disabled={roomDetails.beds.singleBed === 0}
                >
                  -
                </button>
                <span className="w-8 text-center">{roomDetails.beds.singleBed}</span>
                <button
                  onClick={() => handleBedChange("singleBed", roomDetails.beds.singleBed + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="2" y1="16" x2="22" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Double bed</p>
                  <p className="text-sm text-gray-500">131 - 150 cm wide</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleBedChange("doubleBed", Math.max(0, roomDetails.beds.doubleBed - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                  disabled={roomDetails.beds.doubleBed === 0}
                >
                  -
                </button>
                <span className="w-8 text-center">{roomDetails.beds.doubleBed}</span>
                <button
                  onClick={() => handleBedChange("doubleBed", roomDetails.beds.doubleBed + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="2" y1="16" x2="22" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Large bed (King size)</p>
                  <p className="text-sm text-gray-500">151 - 180 cm wide</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleBedChange("largeBed", Math.max(0, roomDetails.beds.largeBed - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                  disabled={roomDetails.beds.largeBed === 0}
                >
                  -
                </button>
                <span className="w-8 text-center">{roomDetails.beds.largeBed}</span>
                <button
                  onClick={() => handleBedChange("largeBed", roomDetails.beds.largeBed + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="2" y1="16" x2="22" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Extra-large double bed (Super-king size)</p>
                  <p className="text-sm text-gray-500">181 - 210 cm wide</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleBedChange("extraLargeBed", Math.max(0, roomDetails.beds.extraLargeBed - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                  disabled={roomDetails.beds.extraLargeBed === 0}
                >
                  -
                </button>
                <span className="w-8 text-center">{roomDetails.beds.extraLargeBed}</span>
                <button
                  onClick={() => handleBedChange("extraLargeBed", roomDetails.beds.extraLargeBed + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <button className="text-[#0071c2] text-sm font-medium flex items-center mt-2">
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
                className="mr-1"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              More bed options
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">How many guests can stay in this room?</h2>
          <div className="flex items-center">
            <button
              onClick={() => handleInputChange("guestCount", Math.max(1, roomDetails.guestCount - 1))}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
              disabled={roomDetails.guestCount <= 1}
            >
              -
            </button>
            <span className="w-8 text-center">{roomDetails.guestCount}</span>
            <button
              onClick={() => handleInputChange("guestCount", roomDetails.guestCount + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">How big is this room?</h2>
          <p className="text-sm text-gray-600 mb-2">Room size - optional</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={roomDetails.roomSize}
              onChange={(e) => handleInputChange("roomSize", e.target.value)}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
            <div className="relative">
              <select
                value={roomDetails.roomSizeUnit}
                onChange={(e) => handleInputChange("roomSizeUnit", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none pr-8"
              >
                <option value="square metres">square metres</option>
                <option value="square feet">square feet</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Is smoking allowed in this room?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="smokingAllowed"
                checked={roomDetails.smokingAllowed === true}
                onChange={() => handleInputChange("smokingAllowed", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="smokingAllowed"
                checked={roomDetails.smokingAllowed === false}
                onChange={() => handleInputChange("smokingAllowed", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => setCurrentForm("propertySummary")}
        >
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
