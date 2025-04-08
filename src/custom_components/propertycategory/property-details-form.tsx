"use client"

interface PropertyDetailsFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { propertyDetails: any }) => void
  formData: any
}

export default function PropertyDetailsForm({ setCurrentForm, updateFormData, formData }: PropertyDetailsFormProps) {
  const handleNameChange = (name: string) => {
    updateFormData({
      propertyDetails: {
        ...formData.propertyDetails,
        name,
      },
    })
  }

  const handleStarRatingChange = (starRating: string) => {
    updateFormData({
      propertyDetails: {
        ...formData.propertyDetails,
        starRating,
      },
    })
  }

  const handleManagementCompanyChange = (isManagementCompany: boolean) => {
    updateFormData({
      propertyDetails: {
        ...formData.propertyDetails,
        isManagementCompany,
      },
    })
  }

  const handleContinue = () => {
    setCurrentForm("propertyAmenities")
  }

  const handleBack = () => {
    setCurrentForm("channelManager")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Tell us about your {formData.propertyType}</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">What&apos;s the name of your {formData.propertyType}?</h2>
        <div className="mb-4">
          <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-1">
            Property name
          </label>
          <input
            type="text"
            id="propertyName"
            value={formData.propertyDetails.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2]"
          />
          <p className="text-sm text-gray-500 mt-1">
            This name will be seen by guests when they search for a place to stay.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">What is the star rating of your {formData.propertyType}?</h2>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="N/A"
              checked={formData.propertyDetails.starRating === "N/A"}
              onChange={() => handleStarRatingChange("N/A")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">N/A</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="1"
              checked={formData.propertyDetails.starRating === "1"}
              onChange={() => handleStarRatingChange("1")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">1 star ⭐</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="2"
              checked={formData.propertyDetails.starRating === "2"}
              onChange={() => handleStarRatingChange("2")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">2 stars ⭐⭐</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="3"
              checked={formData.propertyDetails.starRating === "3"}
              onChange={() => handleStarRatingChange("3")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">3 stars ⭐⭐⭐</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="4"
              checked={formData.propertyDetails.starRating === "4"}
              onChange={() => handleStarRatingChange("4")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">4 stars ⭐⭐⭐⭐</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="starRating"
              value="5"
              checked={formData.propertyDetails.starRating === "5"}
              onChange={() => handleStarRatingChange("5")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">5 stars ⭐⭐⭐⭐⭐</span>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">
          Are you a property management company or part of a group or chain?
        </h2>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="managementCompany"
              checked={formData.propertyDetails.isManagementCompany === true}
              onChange={() => handleManagementCompanyChange(true)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">Yes</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="managementCompany"
              checked={formData.propertyDetails.isManagementCompany === false}
              onChange={() => handleManagementCompanyChange(false)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">No</span>
          </label>
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
