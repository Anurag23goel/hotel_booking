"use client"

import { useState } from "react"

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

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Invoicing</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <p className="mb-6">
          We&apos;ll send you your payouts every month by bank transfer. This payout includes all reservations that
          checked out in the previous month.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">What name should be on the invoice?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="invoiceNameType"
                checked={invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Sharma"}
                onChange={() => {
                  handleInputChange("invoiceNameType", "personal")
                  handleInputChange("invoiceName", "Avaya Sharma")
                }}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Avaya Sharma</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="invoiceNameType"
                checked={invoiceData.invoiceNameType === "personal" && invoiceData.invoiceName === "Avaya Niwas"}
                onChange={() => {
                  handleInputChange("invoiceNameType", "personal")
                  handleInputChange("invoiceName", "Avaya Niwas")
                }}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Avaya Niwas</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="invoiceNameType"
                checked={invoiceData.invoiceNameType === "company"}
                onChange={() => {
                  handleInputChange("invoiceNameType", "company")
                  handleInputChange("invoiceName", "")
                }}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Legal company name (please specify)</span>
            </label>
            {invoiceData.invoiceNameType === "company" && (
              <div className="ml-7 mt-2">
                <input
                  type="text"
                  value={invoiceData.invoiceName}
                  onChange={(e) => handleInputChange("invoiceName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
                  placeholder="Enter company name"
                />
              </div>
            )}
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-3">Does this recipient have the same address as your property?</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="sameAddress"
                checked={invoiceData.sameAddress === true}
                onChange={() => handleInputChange("sameAddress", true)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sameAddress"
                checked={invoiceData.sameAddress === false}
                onChange={() => handleInputChange("sameAddress", false)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>

          {invoiceData.sameAddress === false && (
            <div className="mt-4">
              <label htmlFor="invoiceAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Invoice address
              </label>
              <textarea
                id="invoiceAddress"
                value={invoiceData.invoiceAddress}
                onChange={(e) => handleInputChange("invoiceAddress", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
                placeholder="Enter full address"
              />
            </div>
          )}
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
