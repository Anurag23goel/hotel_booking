"use client"

import { useState } from "react"
import MapComponent from "@/components/map-component"

interface PropertyLocationFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { address: any }) => void
  formData: any
}

export default function PropertyLocationForm({ setCurrentForm, updateFormData, formData }: PropertyLocationFormProps) {
  const [address, setAddress] = useState({
    street: formData.address?.street || "",
    apartment: formData.address?.apartment || "",
    country: formData.address?.country || "India",
    city: formData.address?.city || "",
    postalCode: formData.address?.postalCode || "",
  })
  const [updateWhenMoving, setUpdateWhenMoving] = useState(true)

  const handleInputChange = (field: string, value: string) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContinue = () => {
    updateFormData({ address })
    setCurrentForm("channelManager")
  }

  const handleBack = () => {
    setCurrentForm("propertyConfirmation")
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Where is your property?</h1>

        <div className="space-y-4 max-w-2xl">
          <div>
            <label htmlFor="street" className="block text-sm font-medium mb-1">
              Find your address
            </label>
            <input
              type="text"
              id="street"
              placeholder="Start typing your address"
              value={address.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
          </div>

          <div>
            <label htmlFor="apartment" className="block text-sm font-medium mb-1">
              Apartment or floor number (optional)
            </label>
            <input
              type="text"
              id="apartment"
              placeholder="Apartment or floor number"
              value={address.apartment}
              onChange={(e) => handleInputChange("apartment", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country/region
            </label>
            <div className="relative">
              <select
                id="country"
                value={address.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                value={address.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>

            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                Post code / Zip code
              </label>
              <input
                type="text"
                id="postalCode"
                placeholder="Post code / Zip code"
                value={address.postalCode}
                onChange={(e) => handleInputChange("postalCode", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="updateWhenMoving"
              checked={updateWhenMoving}
              onChange={(e) => setUpdateWhenMoving(e.target.checked)}
              className="h-4 w-4 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
            />
            <label htmlFor="updateWhenMoving" className="ml-2 block text-sm text-gray-700">
              Update the address when moving the pin on the map.
            </label>
          </div>
        </div>
      </div>

      <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
        <MapComponent />
      </div>

      <div className="p-4 flex gap-4">
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
