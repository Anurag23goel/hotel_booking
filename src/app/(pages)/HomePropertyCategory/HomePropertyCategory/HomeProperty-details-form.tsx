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

  // Function to render stars based on rating
  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5 text-yellow-400"
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Tell us about your {formData.propertyType}
      </h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-blue-100 text-blue-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          Property Name
        </h2>
        <div className="mb-4">
          <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-2">
            What's the name of your {formData.propertyType}?
          </label>
          <input
            type="text"
            id="propertyName"
            value={formData.propertyDetails.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder={`Enter ${formData.propertyType} name`}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            This name will be seen by guests when they search for a place to stay.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-yellow-100 text-yellow-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </span>
          Star Rating
        </h2>
        <p className="text-sm text-gray-600 mb-4">What is the star rating of your {formData.propertyType}?</p>
        <div className="space-y-3 pl-2">
          {["N/A", "1", "2", "3", "4", "5"].map((rating) => (
            <label key={rating} className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="radio"
                name="starRating"
                value={rating}
                checked={formData.propertyDetails.starRating === rating}
                onChange={() => handleStarRatingChange(rating)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-3 flex items-center">
                {rating === "N/A" ? (
                  "Not Applicable"
                ) : (
                  <>
                    <span className="mr-2">{rating} star{rating !== "1" ? "s" : ""}</span>
                    <span className="flex">
                      {rating !== "N/A" && renderStars(parseInt(rating))}
                    </span>
                  </>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-green-100 text-green-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          Management Information
        </h2>
        <p className="text-sm text-gray-600 mb-4">Are you a property management company or part of a group or chain?</p>
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <label className={`flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 ${formData.propertyDetails.isManagementCompany === true ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all flex-1`}>
            <input
              type="radio"
              name="managementCompany"
              checked={formData.propertyDetails.isManagementCompany === true}
              onChange={() => handleManagementCompanyChange(true)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <span className="text-center">
              <span className="text-lg font-medium block">Yes</span>
              <span className="text-sm text-gray-500">I represent a management company or chain</span>
            </span>
          </label>

          <label className={`flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 ${formData.propertyDetails.isManagementCompany === false ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all flex-1`}>
            <input
              type="radio"
              name="managementCompany"
              checked={formData.propertyDetails.isManagementCompany === false}
              onChange={() => handleManagementCompanyChange(false)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <span className="text-center">
              <span className="text-lg font-medium block">No</span>
              <span className="text-sm text-gray-500">I'm an individual property owner</span>
            </span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          className="px-6 py-3 h-14 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-lg transition-colors flex items-center justify-center font-medium"
          onClick={handleContinue}
        >
          <span>Continue</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}