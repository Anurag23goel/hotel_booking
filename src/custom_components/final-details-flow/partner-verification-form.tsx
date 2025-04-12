"use client"

import { useState } from "react"

interface PartnerVerificationFormProps {
  setCurrentForm: (form: string) => void
  updateFinalDetailsData: (data: any) => void
  finalDetailsData: any
}

export default function PartnerVerificationForm({
  setCurrentForm,
  updateFinalDetailsData,
  finalDetailsData,
}: PartnerVerificationFormProps) {
  const [verificationData, setVerificationData] = useState({
    businessType: finalDetailsData.businessType || "individual",
    owners: finalDetailsData.owners || [
      {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
      },
    ],
    alternativeNames: finalDetailsData.alternativeNames || "",
  })

  const [showAddOwner, setShowAddOwner] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setVerificationData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleOwnerChange = (index: number, field: string, value: string) => {
    setVerificationData((prev) => {
      const newOwners = [...prev.owners]
      newOwners[index] = { ...newOwners[index], [field]: value }
      return { ...prev, owners: newOwners }
    })
  }

  const addOwner = () => {
    setVerificationData((prev) => ({
      ...prev,
      owners: [...prev.owners, { firstName: "", lastName: "", dateOfBirth: "" }],
    }))
    setShowAddOwner(false)
  }

  const handleContinue = () => {
    updateFinalDetailsData(verificationData)
    setCurrentForm("taxDetails")
  }

  const handleBack = () => {
    setCurrentForm("licenseNumber")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Partner verification</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <p className="mb-6">
          In order to comply with various legal and regulatory requirements, we need to collect and verify some
          information about you and your property.
        </p>

        <div className="mb-6">
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
            Is the accommodation owned by an individual or a business entity?
          </label>
          <div className="relative">
            <select
              id="businessType"
              value={verificationData.businessType}
              onChange={(e) => handleInputChange("businessType", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
            >
              <option value="individual">I am an individual running a business</option>
              <option value="company">I represent a registered company</option>
              <option value="partnership">I represent a partnership</option>
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
          <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-3">
            Please provide the full names and dates of birth of all individuals who own 25% or more of the
            accommodation.
          </h2>

          {verificationData.owners.map((owner, index) => (
            <div key={index} className="mb-6 space-y-4">
              {index > 0 && <div className="border-t pt-4"></div>}
              <div>
                <label htmlFor={`firstName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id={`firstName-${index}`}
                  value={owner.firstName}
                  onChange={(e) => handleOwnerChange(index, "firstName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
                />
              </div>

              <div>
                <label htmlFor={`lastName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id={`lastName-${index}`}
                  value={owner.lastName}
                  onChange={(e) => handleOwnerChange(index, "lastName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
                />
              </div>

              <div>
                <label htmlFor={`dateOfBirth-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Date of birth
                </label>
                <input
                  type="date"
                  id={`dateOfBirth-${index}`}
                  value={owner.dateOfBirth}
                  onChange={(e) => handleOwnerChange(index, "dateOfBirth", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
                />
              </div>
            </div>
          ))}

          {!showAddOwner ? (
            <button onClick={() => setShowAddOwner(true)} className="flex items-center text-[#0071c2] font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add another
            </button>
          ) : (
            <button onClick={addOwner} className="px-4 py-2 bg-[#0071c2] text-white rounded-md hover:bg-[#00487a]">
              Add owner
            </button>
          )}

          <div className="mt-6">
            <label htmlFor="alternativeNames" className="block text-sm font-medium text-gray-700 mb-1">
              If any owners go by an alternative name or names, please provide those details. - optional
            </label>
            <input
              type="text"
              id="alternativeNames"
              value={verificationData.alternativeNames}
              onChange={(e) => handleInputChange("alternativeNames", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
              placeholder="Alternative names"
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
