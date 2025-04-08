"use client"

import { useState } from "react"
import MapComponent from "./map-component"
interface PropertyLocationFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { address: string }) => void
  formData: { propertyType: string; quantity: string; address: string }
}

export default function PropertyLocationForm({ setCurrentForm, updateFormData, formData }: PropertyLocationFormProps) {
  const [address, setAddress] = useState(formData.address || "")

  const handleContinue = () => {
    updateFormData({ address })
    // In a real app, this would save the data and proceed to the next step
    console.log("Property data:", { ...formData, address })
    // For demo purposes, just go back to the start
    setCurrentForm("propertyType")
  }

  const handleBack = () => {
    setCurrentForm("propertyConfirmation")
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Where is your property?</h1>

        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Find your address</p>
          <input
            type="text"
            placeholder="Start typing your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
          />
        </div>
      </div>

      <div className="flex-1 relative min-h-[400px]">
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

