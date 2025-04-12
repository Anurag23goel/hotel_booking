"use client"

import { useState } from "react"

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

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Please tell us your licence number</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <p className="mb-6">
          According to the local regulations in New Delhi, properties that provide guest accommodation must be
          registered in the Licensing of Lodging and Boarding establishments in the NCT of Delhi. Please provide us with
          your License number, premises name and premises address as shown in your license certificate and make sure
          that your property is listed in the{" "}
          <a href="#" className="text-[#0071c2]">
            government list of licensed properties
          </a>
          .
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="premisesName" className="block text-sm font-medium text-gray-700 mb-1">
              Premises name
            </label>
            <input
              type="text"
              id="premisesName"
              value={licenseData.premisesName}
              onChange={(e) => handleInputChange("premisesName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
          </div>

          <div>
            <label htmlFor="premisesAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Premises address
            </label>
            <input
              type="text"
              id="premisesAddress"
              value={licenseData.premisesAddress}
              onChange={(e) => handleInputChange("premisesAddress", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
          </div>

          <div>
            <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              value={licenseData.licenseNumber}
              onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
            />
          </div>

          <div>
            <label htmlFor="issuingDate" className="block text-sm font-medium text-gray-700 mb-1">
              Issuing date
            </label>
            <input
              type="date"
              id="issuingDate"
              value={licenseData.issuingDate}
              onChange={(e) => handleInputChange("issuingDate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              placeholder="dd-mm-yyyy"
            />
          </div>

          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration date
            </label>
            <input
              type="date"
              id="expirationDate"
              value={licenseData.expirationDate}
              onChange={(e) => handleInputChange("expirationDate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              placeholder="dd-mm-yyyy"
            />
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
