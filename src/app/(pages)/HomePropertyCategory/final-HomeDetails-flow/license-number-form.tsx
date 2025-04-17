"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"

interface LicenseNumberFormProps {
  setCurrentForm: (form: string) => void
  updateFinalDetailsData: (data: any) => void
  finalDetailsData: any
}

export default function LicenseNumberForm({
  setCurrentForm,
  updateFinalDetailsData,
  finalDetailsData,
}: LicenseNumberFormProps) {
  const [licenseData, setLicenseData] = useState({
    premisesName: finalDetailsData.premisesName || "",
    premisesAddress: finalDetailsData.premisesAddress || "",
    licenseNumber: finalDetailsData.licenseNumber || "",
    issuingDate: finalDetailsData.issuingDate || "",
    expirationDate: finalDetailsData.expirationDate || "",
  })

  const handleInputChange = (field: string, value: any) => {
    setLicenseData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContinue = () => {
    updateFinalDetailsData(licenseData)
    setCurrentForm("partnerVerification")
  }

  const handleBack = () => {
    setCurrentForm("invoicing")
  }

  // Check if we can enable the continue button
  const isFormValid = () => {
    return (
      licenseData.premisesName.trim() !== "" &&
      licenseData.premisesAddress.trim() !== "" &&
      licenseData.licenseNumber.trim() !== "" &&
      licenseData.issuingDate.trim() !== "" &&
      licenseData.expirationDate.trim() !== ""
    )
  }

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">License Information</h1>
      <p className="text-gray-600 mb-8">Please provide your property license details as required by New Delhi regulations</p>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            According to local regulations in New Delhi, all guest accommodation properties must be
            registered in the Licensing of Lodging and Boarding establishments in the NCT of Delhi. Please ensure your property is listed in the{" "}
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 underline">
              government registry of licensed properties
            </a>.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="premisesName" className="block text-sm font-medium text-gray-700 mb-1">
              Premises Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="premisesName"
              value={licenseData.premisesName}
              onChange={(e) => handleInputChange("premisesName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter the name as shown on your license"
            />
          </div>

          <div>
            <label htmlFor="premisesAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Premises Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="premisesAddress"
              value={licenseData.premisesAddress}
              onChange={(e) => handleInputChange("premisesAddress", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter the full address as shown on your license"
            />
          </div>

          <div>
            <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
              License Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="licenseNumber"
              value={licenseData.licenseNumber}
              onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Enter your official license number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="issuingDate" className="block text-sm font-medium text-gray-700 mb-1">
                Issuing Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="issuingDate"
                  value={licenseData.issuingDate}
                  onChange={(e) => handleInputChange("issuingDate", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors pr-10"
                />
                <CalendarIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
                Expiration Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="expirationDate"
                  value={licenseData.expirationDate}
                  onChange={(e) => handleInputChange("expirationDate", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors pr-10"
                />
                <CalendarIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-between">
        <button 
          className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 transition-colors" 
          onClick={handleBack}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
        
        <button
          className={`px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors
            ${isFormValid() 
              ? "bg-blue-600 hover:bg-blue-700 text-white" 
              : "bg-blue-300 cursor-not-allowed text-white"}`}
          onClick={handleContinue}
          disabled={!isFormValid()}
        >
          <span>Continue</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}