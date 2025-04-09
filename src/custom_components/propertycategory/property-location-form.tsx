"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MapComponent from "./map-component"

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col min-h-screen bg-gray-50"
    >
      <div className="p-6 md:p-8 bg-white shadow-sm">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#0071c2] to-[#00487a] bg-clip-text text-transparent"
        >
          Where is your property?
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-2xl"
        >
          <div className="group">
            <label htmlFor="street" className="block text-sm font-medium mb-2 text-gray-700">
              Find your address
            </label>
            <input
              type="text"
              id="street"
              placeholder="Start typing your address"
              value={address.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071c2] focus:border-transparent transition-all group-hover:border-gray-300"
            />
          </div>

          <div className="group">
            <label htmlFor="apartment" className="block text-sm font-medium mb-2 text-gray-700">
              Apartment or floor number (optional)
            </label>
            <input
              type="text"
              id="apartment"
              placeholder="Apartment or floor number"
              value={address.apartment}
              onChange={(e) => handleInputChange("apartment", e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071c2] focus:border-transparent transition-all group-hover:border-gray-300"
            />
          </div>

          <div className="group">
            <label htmlFor="country" className="block text-sm font-medium mb-2 text-gray-700">
              Country/region
            </label>
            <div className="relative">
              <select
                id="country"
                value={address.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071c2] focus:border-transparent transition-all appearance-none group-hover:border-gray-300"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                value={address.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071c2] focus:border-transparent transition-all group-hover:border-gray-300"
              />
            </div>

            <div className="group">
              <label htmlFor="postalCode" className="block text-sm font-medium mb-2 text-gray-700">
                Post code / Zip code
              </label>
              <input
                type="text"
                id="postalCode"
                placeholder="Post code / Zip code"
                value={address.postalCode}
                onChange={(e) => handleInputChange("postalCode", e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071c2] focus:border-transparent transition-all group-hover:border-gray-300"
              />
            </div>
          </div>

          <div className="flex items-center bg-blue-50 p-4 rounded-xl">
            <input
              type="checkbox"
              id="updateWhenMoving"
              checked={updateWhenMoving}
              onChange={(e) => setUpdateWhenMoving(e.target.checked)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
            />
            <label htmlFor="updateWhenMoving" className="ml-3 block text-sm text-gray-700">
              Update the address when moving the pin on the map
            </label>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex-1 relative min-h-[400px] md:min-h-[500px] m-6 rounded-xl overflow-hidden shadow-lg"
      >
        <MapComponent />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-2 h-12 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            onClick={handleBack}
          >
            <span className="text-[#0071c2] text-xl">←</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 md:flex-none md:min-w-[200px] bg-gradient-to-r from-[#0071c2] to-[#00487a] hover:from-[#00487a] hover:to-[#003558] text-white h-12 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
            onClick={handleContinue}
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}