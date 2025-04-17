"use client"

import { useState } from "react"
import { ChevronDown, Plus, ArrowLeft, X } from "lucide-react"

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
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleInputChange = (field: string, value: any) => {
    setVerificationData((prev) => ({
      ...prev,
      [field]: value,
    }))
    
    // Clear error when field is changed
    if (errors[field]) {
      setErrors(prev => ({...prev, [field]: false}))
    }
  }

  const handleOwnerChange = (index: number, field: string, value: string) => {
    setVerificationData((prev) => {
      const newOwners = [...prev.owners]
      newOwners[index] = { ...newOwners[index], [field]: value }
      return { ...prev, owners: newOwners }
    })
    
    // Clear error when field is changed
    const errorKey = `owner-${index}-${field}`
    if (errors[errorKey]) {
      setErrors(prev => ({...prev, [errorKey]: false}))
    }
  }

  const addOwner = () => {
    setVerificationData((prev) => ({
      ...prev,
      owners: [...prev.owners, { firstName: "", lastName: "", dateOfBirth: "" }],
    }))
    setShowAddOwner(false)
  }

  const removeOwner = (index: number) => {
    if (verificationData.owners.length > 1) {
      setVerificationData((prev) => {
        const newOwners = [...prev.owners]
        newOwners.splice(index, 1)
        return { ...prev, owners: newOwners }
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {}
    
    // Validate owners
    verificationData.owners.forEach((owner, index) => {
      if (!owner.firstName.trim()) {
        newErrors[`owner-${index}-firstName`] = true
      }
      if (!owner.lastName.trim()) {
        newErrors[`owner-${index}-lastName`] = true
      }
      if (!owner.dateOfBirth) {
        newErrors[`owner-${index}-dateOfBirth`] = true
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateForm()) {
      updateFinalDetailsData(verificationData)
      setCurrentForm("taxDetails")
    }
  }

  const handleBack = () => {
    setCurrentForm("licenseNumber")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Partner Verification</h1>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-700">
            In order to comply with various legal and regulatory requirements, we need to collect and verify some
            information about you and your property.
          </p>
        </div>

        <div className="mb-8">
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Is the accommodation owned by an individual or a business entity?
          </label>
          <div className="relative">
            <select
              id="businessType"
              value={verificationData.businessType}
              onChange={(e) => handleInputChange("businessType", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="individual">I am an individual running a business</option>
              <option value="company">I represent a registered company</option>
              <option value="partnership">I represent a partnership</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Please provide the full names and dates of birth of all individuals who own 25% or more of the
            accommodation.
          </h2>

          {verificationData.owners.map((owner, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-700">Owner {index + 1}</h3>
                {verificationData.owners.length > 1 && (
                  <button 
                    onClick={() => removeOwner(index)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    aria-label="Remove owner"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={`firstName-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id={`firstName-${index}`}
                    value={owner.firstName}
                    onChange={(e) => handleOwnerChange(index, "firstName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors[`owner-${index}-firstName`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter first name"
                  />
                  {errors[`owner-${index}-firstName`] && (
                    <p className="text-red-500 text-xs mt-1">First name is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor={`lastName-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id={`lastName-${index}`}
                    value={owner.lastName}
                    onChange={(e) => handleOwnerChange(index, "lastName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors[`owner-${index}-lastName`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter last name"
                  />
                  {errors[`owner-${index}-lastName`] && (
                    <p className="text-red-500 text-xs mt-1">Last name is required</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor={`dateOfBirth-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                  Date of birth
                </label>
                <input
                  type="date"
                  id={`dateOfBirth-${index}`}
                  value={owner.dateOfBirth}
                  onChange={(e) => handleOwnerChange(index, "dateOfBirth", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors[`owner-${index}-dateOfBirth`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors[`owner-${index}-dateOfBirth`] && (
                  <p className="text-red-500 text-xs mt-1">Date of birth is required</p>
                )}
              </div>
            </div>
          ))}

          {!showAddOwner ? (
            <button 
              onClick={() => setShowAddOwner(true)} 
              className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add another owner
            </button>
          ) : (
            <button 
              onClick={addOwner} 
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Add owner
            </button>
          )}

          <div className="mt-8">
            <label htmlFor="alternativeNames" className="block text-sm font-medium text-gray-700 mb-2">
              If any owners go by an alternative name or names, please provide those details.
            </label>
            <input
              type="text"
              id="alternativeNames"
              value={verificationData.alternativeNames}
              onChange={(e) => handleInputChange("alternativeNames", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Alternative names (optional)"
            />
            <p className="text-gray-500 text-xs mt-1">This field is optional</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button 
          className="order-2 md:order-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5 mr-2 text-blue-600" />
          <span className="text-blue-600 font-medium">Back</span>
        </button>
        <button
          className="order-1 md:order-2 flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-sm"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}