"use client"

import { useState } from "react"

interface TaxDetailsFormProps {
  setCurrentForm: (form: string) => void
  updateFinalDetailsData: (data: any) => void
  finalDetailsData: any
}

export default function TaxDetailsForm({
  setCurrentForm,
  updateFinalDetailsData,
  finalDetailsData,
}: TaxDetailsFormProps) {
  const [taxData, setTaxData] = useState({
    isGstRegistered: finalDetailsData.isGstRegistered !== undefined ? finalDetailsData.isGstRegistered : false,
    tradeName: finalDetailsData.tradeName || "",
    gstin: finalDetailsData.gstin || "",
    pan: finalDetailsData.pan || "",
    state: finalDetailsData.state || "",
    isFourthCharP: finalDetailsData.isFourthCharP !== undefined ? finalDetailsData.isFourthCharP : false,
    aadhaarNumber: finalDetailsData.aadhaarNumber || "",
  })

  const handleInputChange = (field: string, value: any) => {
    setTaxData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContinue = () => {
    updateFinalDetailsData(taxData)
    setCurrentForm("propertySummary")
  }

  const handleBack = () => {
    setCurrentForm("partnerVerification")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Goods and Services Tax</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <p className="mb-6">
          Due to regulations established by the Indian government, we need the following details. By submitting this
          information, you are confirming that your PAN and state registration are accurate.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Are you registered for GST purposes?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="isGstRegistered"
                checked={taxData.isGstRegistered === true}
                onChange={() => handleInputChange("isGstRegistered", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isGstRegistered"
                checked={taxData.isGstRegistered === false}
                onChange={() => handleInputChange("isGstRegistered", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {taxData.isGstRegistered ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="tradeName" className="block text-sm font-medium text-gray-700 mb-1">
                Trade name
              </label>
              <input
                type="text"
                id="tradeName"
                value={taxData.tradeName}
                onChange={(e) => handleInputChange("tradeName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>

            <div>
              <label htmlFor="gstin" className="block text-sm font-medium text-gray-700 mb-1">
                GSTIN
              </label>
              <input
                type="text"
                id="gstin"
                value={taxData.gstin}
                onChange={(e) => handleInputChange("gstin", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>

            <div>
              <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">
                PAN
              </label>
              <input
                type="text"
                id="pan"
                value={taxData.pan}
                onChange={(e) => handleInputChange("pan", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                id="state"
                value={taxData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
              >
                <option value="">Select a state</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">
                PAN
              </label>
              <input
                type="text"
                id="pan"
                value={taxData.pan}
                onChange={(e) => handleInputChange("pan", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              />
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t">
          <h3 className="font-medium mb-3">Important information:</h3>
          <p className="text-sm text-gray-600 mb-4">
            {taxData.isGstRegistered
              ? "Please ensure your GSTIN and PAN details are accurate."
              : "Even if you're not GST registered, we need your PAN for tax purposes."}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-3">Is the fourth character of your PAN a 'P' or an 'H'?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="isFourthCharP"
                checked={taxData.isFourthCharP === true}
                onChange={() => handleInputChange("isFourthCharP", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isFourthCharP"
                checked={taxData.isFourthCharP === false}
                onChange={() => handleInputChange("isFourthCharP", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {taxData.isFourthCharP && (
          <div className="mt-4">
            <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Please enter your 12-digit Aadhaar number
            </label>
            <input
              type="text"
              id="aadhaarNumber"
              value={taxData.aadhaarNumber}
              onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              maxLength={12}
            />
          </div>
        )}
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
