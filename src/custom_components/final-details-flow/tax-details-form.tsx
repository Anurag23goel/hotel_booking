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
    isGstRegistered: finalDetailsData.isGstRegistered ?? false,
    tradeName: finalDetailsData.tradeName || "",
    gstin: finalDetailsData.gstin || "",
    pan: finalDetailsData.pan || "",
    state: finalDetailsData.state || "",
    isFourthCharP: finalDetailsData.isFourthCharP ?? false,
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
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Goods and Services Tax</h1>

      <div className="bg-white rounded-xl shadow border border-gray-200 p-8 mb-10 space-y-8">
        <p className="text-gray-700 leading-relaxed">
          Due to regulations established by the Indian government, we need the following details. By submitting this
          information, you are confirming that your PAN and state registration are accurate.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Are you registered for GST purposes?</h2>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isGstRegistered"
                checked={taxData.isGstRegistered === true}
                onChange={() => handleInputChange("isGstRegistered", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isGstRegistered"
                checked={taxData.isGstRegistered === false}
                onChange={() => handleInputChange("isGstRegistered", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="space-y-5">
          {taxData.isGstRegistered && (
            <>
              <Input label="Trade name" id="tradeName" value={taxData.tradeName} onChange={(e) => handleInputChange("tradeName", e.target.value)} />
              <Input label="GSTIN" id="gstin" value={taxData.gstin} onChange={(e) => handleInputChange("gstin", e.target.value)} />
            </>
          )}
          <Input label="PAN" id="pan" value={taxData.pan} onChange={(e) => handleInputChange("pan", e.target.value)} />

          {taxData.isGstRegistered && (
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                id="state"
                value={taxData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              >
                <option value="">Select a state</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          )}
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-2">Important information:</h3>
          <p className="text-sm text-gray-600">
            {taxData.isGstRegistered
              ? "Please ensure your GSTIN and PAN details are accurate."
              : "Even if you're not GST registered, we need your PAN for tax purposes."}
          </p>
        </div>

        <div className="pt-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Is the fourth character of your PAN a 'P' or an 'H'?
          </h2>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isFourthCharP"
                checked={taxData.isFourthCharP === true}
                onChange={() => handleInputChange("isFourthCharP", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isFourthCharP"
                checked={taxData.isFourthCharP === false}
                onChange={() => handleInputChange("isFourthCharP", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span>No</span>
            </label>
          </div>

          {taxData.isFourthCharP && (
            <div className="mt-4">
              <Input
                label="Please enter your 12-digit Aadhaar number"
                id="aadhaarNumber"
                value={taxData.aadhaarNumber}
                onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
                maxLength={12}
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex gap-4 justify-end">
        <button
          className="px-6 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-100 text-[#0071c2]"
          onClick={handleBack}
        >
          ← Back
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

const Input = ({
  label,
  id,
  value,
  onChange,
  maxLength,
}: {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
    />
  </div>
)
