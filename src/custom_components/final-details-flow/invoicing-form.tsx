"use client"

import { useState } from "react"
import { ChevronLeft, Check } from "lucide-react"

interface InvoicingFormProps {
  setCurrentForm: (form: string) => void
  updateFinalDetailsData: (data: any) => void
  finalDetailsData: any
}

export default function InvoicingForm({
  setCurrentForm,
  updateFinalDetailsData,
  finalDetailsData,
}: InvoicingFormProps) {
  const [invoiceData, setInvoiceData] = useState({
    invoiceName: finalDetailsData.invoiceName || "Avaya Sharma",
    invoiceNameType: finalDetailsData.invoiceNameType || "personal",
    sameAddress: finalDetailsData.sameAddress !== undefined ? finalDetailsData.sameAddress : true,
    invoiceAddress: finalDetailsData.invoiceAddress || "",
  })

  const handleInputChange = (field: string, value: any) => {
    setInvoiceData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContinue = () => {
    updateFinalDetailsData(invoiceData)
    setCurrentForm("licenseNumber")
  }

  const handleBack = () => {
    setCurrentForm("propertySummary")
  }

  const isFormValid = invoiceData.invoiceName && 
    (invoiceData.sameAddress || (!invoiceData.sameAddress && invoiceData.invoiceAddress))

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Invoicing Details</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            We'll send you your payouts every month by bank transfer. This payout includes all reservations that
            checked out in the previous month.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-semibold mb-3 text-gray-800">What name should be on the invoice?</h2>
          <div className="space-y-3">
            <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative flex items-center h-5">
                <input
                  type="radio"
                  name="invoiceNameType"
                  checked={invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Sharma"}
                  onChange={() => {
                    handleInputChange("invoiceNameType", "personal")
                    handleInputChange("invoiceName", "Avaya Sharma")
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
                />
                {invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Sharma" && (
                  <div className="absolute -right-5">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              <span className="ml-4 block text-sm font-medium">Avaya Sharma</span>
            </label>
            
            <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative flex items-center h-5">
                <input
                  type="radio"
                  name="invoiceNameType"
                  checked={invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Niwas"}
                  onChange={() => {
                    handleInputChange("invoiceNameType", "personal")
                    handleInputChange("invoiceName", "Avaya Niwas")
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
                />
                {invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Niwas" && (
                  <div className="absolute -right-5">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              <span className="ml-4 block text-sm font-medium">Avaya Niwas</span>
            </label>
            
            <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative flex items-center h-5">
                <input
                  type="radio"
                  name="invoiceNameType"
                  checked={invoiceData.invoiceNameType === "company"}
                  onChange={() => {
                    handleInputChange("invoiceNameType", "company")
                    handleInputChange("invoiceName", "")
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
                />
                {invoiceData.invoiceNameType === "company" && (
                  <div className="absolute -right-5">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              <span className="ml-4 block text-sm font-medium">Legal company name</span>
            </label>
            
            {invoiceData.invoiceNameType === "company" && (
              <div className="ml-8 mt-2">
                <input
                  type="text"
                  value={invoiceData.invoiceName}
                  onChange={(e) => handleInputChange("invoiceName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter company name"
                />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-base font-semibold mb-3 text-gray-800">Does this recipient have the same address as your property?</h2>
          <div className="space-y-3">
            <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative flex items-center h-5">
                <input
                  type="radio"
                  name="sameAddress"
                  checked={invoiceData.sameAddress === true}
                  onChange={() => handleInputChange("sameAddress", true)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
                />
                {invoiceData.sameAddress === true && (
                  <div className="absolute -right-5">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              <span className="ml-4 block text-sm font-medium">Yes</span>
            </label>
            
            <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative flex items-center h-5">
                <input
                  type="radio"
                  name="sameAddress"
                  checked={invoiceData.sameAddress === false}
                  onChange={() => handleInputChange("sameAddress", false)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
                />
                {invoiceData.sameAddress === false && (
                  <div className="absolute -right-5">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              <span className="ml-4 block text-sm font-medium">No</span>
            </label>
          </div>

          {invoiceData.sameAddress === false && (
            <div className="mt-4 bg-gray-50 p-4 rounded-md">
              <label htmlFor="invoiceAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Invoice address
              </label>
              <textarea
                id="invoiceAddress"
                value={invoiceData.invoiceAddress}
                onChange={(e) => handleInputChange("invoiceAddress", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Enter full address"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <button 
          className="p-2 h-10 w-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center" 
          onClick={handleBack}
        >
          <ChevronLeft className="h-5 w-5 text-blue-600" />
        </button>
        <button
          className={`flex-1 md:flex-none md:min-w-[180px] h-10 rounded-md text-white font-medium ${
            isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
          }`}
          onClick={handleContinue}
          disabled={!isFormValid}
        >
          Continue
        </button>
      </div>
    </div>
  )
}