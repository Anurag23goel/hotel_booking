"use client"

import { useState } from "react"

interface RoomNameFormProps {
  setCurrentForm: (form: string) => void
  updateRoomData: (data: any) => void
  roomData: any
}

export default function RoomNameForm({ setCurrentForm, updateRoomData, roomData }: RoomNameFormProps) {
  const [roomName, setRoomName] = useState(roomData.name || "")
  const [showDropdown, setShowDropdown] = useState(false)
  const [showInfoBox, setShowInfoBox] = useState(true)

  const handleContinue = () => {
    updateRoomData({ name: roomName })
    setCurrentForm("roomPrice")
  }

  const handleBack = () => {
    setCurrentForm("bathroomDetails")
  }

  const handleSelectName = (name: string) => {
    setRoomName(name)
    setShowDropdown(false)
  }

  const roomNameOptions = [
    "Double Room",
    "Double Room with Balcony",
    "Double Room with Private Bathroom",
    "Double Room with Terrace",
    "Budget Double Room",
    "Business Double Room with Gym Access",
    "Deluxe Double Room",
    "Deluxe Double Room (1 adult + 1 child)",
    "Deluxe Double Room (1 adult + 2 children)",
    "Deluxe Double Room (2 Adults + 1 Child)",
    "Deluxe Double Room with Balcony",
    "Deluxe Double Room with Balcony and Sea View",
    "Deluxe Double Room with Bath",
    "Deluxe Double Room with Castle View",
    "Deluxe Double Room with Extra Bed",
  ]

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">What&apos;s the name of this room?</h1>

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
                <h3 className="font-medium">Why can&apos;t I use a custom room name?</h3>
              </div>
              <button
                onClick={() => setShowInfoBox(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Standardised room names have a lot of benefits over custom names:
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>They&apos;re more descriptive</li>
              <li>They&apos;re consistent across the site, allowing guests to quickly find and compare rooms</li>
              <li>They&apos;re understood by guests from all backgrounds and nationalities</li>
              <li>They&apos;re translated into 43 languages</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              After registration, you&apos;ll have the option to add custom room names. Guests won&apos;t see these, but
              they can be used for your internal reference.
            </p>
          </div>
        )}

        <p className="mb-4">
          This is the name that guests will see on your property page. Choose a name that most accurately describes this
          room.
        </p>

        <div className="mb-6">
          <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-1">
            Room name
          </label>
          <div className="relative">
            <div
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] cursor-pointer flex justify-between items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{roomName || "Select a name for the room"}</span>
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

            {showDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <div className="sticky top-0 z-10 bg-white px-3 py-2 border-b">
                  <p className="font-medium">Select a name for the room</p>
                </div>
                {roomNameOptions.map((option) => (
                  <div
                    key={option}
                    className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                    onClick={() => handleSelectName(option)}
                  >
                    <span className="block truncate">{option}</span>
                    {roomName === option && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5 text-[#0071c2]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}
                <div className="border-t py-2 px-3">
                  <div className="border-t border-dashed my-1"></div>
                </div>
              </div>
            )}
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
          disabled={!roomName}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
