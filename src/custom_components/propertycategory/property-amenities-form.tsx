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

  // Grouped amenities for better organization
  const amenitiesGroups = {
    "Basic Amenities": [
      "Free WiFi",
      "Air conditioning",
      "Non-smoking rooms",
      "24-hour front desk",
      "Family rooms",
    ],
    "Food & Relaxation": [
      "Restaurant",
      "Room service",
      "Bar",
      "Terrace",
      "Garden",
    ],
    "Wellness & Recreation": [
      "Swimming pool",
      "Spa and wellness centre",
      "Fitness centre",
      "Sauna",
      "Hot tub/Jacuzzi", 
      "Beach",
      "Water park",
    ],
    "Additional Services": [
      "Airport shuttle",
      "Electric vehicle charging station",
    ],
  }

  // Flatten the grouped amenities for state handling
  const amenitiesList = Object.values(amenitiesGroups).flat()

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
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        What can guests use at your {formData.propertyType}?
      </h1>

      {showInfoBox && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mb-6 shadow-sm flex items-start">
          <div className="mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className="flex-grow pr-8">
            <h3 className="font-medium text-blue-800 mb-1">What if I don&apos;t see a facility I offer?</h3>
            <p className="text-sm text-blue-800 opacity-90">
              The facilities listed here are the ones most searched for by guests. After registration, 
              you can add more facilities from a larger list in the extranet, the platform you&apos;ll use to manage
              your property.
            </p>
          </div>
          <button
            onClick={() => setShowInfoBox(false)}
            className="flex-shrink-0 text-blue-500 hover:text-blue-700 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-purple-100 text-purple-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </span>
          Amenities & Facilities
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Select all the amenities and facilities available at your property. These will be displayed to guests when they're browsing accommodations.
        </p>

        <div className="space-y-8">
          {Object.entries(amenitiesGroups).map(([groupName, groupAmenities]) => (
            <div key={groupName} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <h3 className="font-medium text-gray-700 mb-3">{groupName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {groupAmenities.map((amenity) => (
                  <label 
                    key={amenity} 
                    className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                      amenities.includes(amenity) 
                        ? 'bg-blue-50 border-blue-300' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className={`ml-3 ${amenities.includes(amenity) ? 'text-blue-700' : 'text-gray-700'}`}>
                      {amenity}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center text-gray-700">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Selected amenities: <span className="text-blue-600">{amenities.length}</span></h3>
            {amenities.length === 0 && (
              <p className="text-sm text-gray-500 mt-1">You haven't selected any amenities yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          className="px-6 py-3 h-14 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-lg transition-colors flex items-center justify-center font-medium"
          onClick={handleContinue}
        >
          <span>Continue</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}