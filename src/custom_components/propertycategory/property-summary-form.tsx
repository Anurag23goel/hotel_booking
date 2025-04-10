"use client"

interface PropertySummaryFormProps {
  setCurrentForm: (form: string) => void
  formData: any
}

export default function PropertySummaryForm({ setCurrentForm, formData }: PropertySummaryFormProps) {
  const handleBack = () => {
    setCurrentForm("propertyRules")
  }

  const handleSubmit = () => {
    // In a real app, this would submit the data to the server
    console.log("Submitting property data:", formData)
    alert("Property listing submitted successfully!")
    // Reset to first form or redirect to dashboard
    setCurrentForm("propertyType")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Final Steps</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-lg text-gray-800">Property Details</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 mb-4 border-b border-gray-100 pb-3">Basic information about your property</p>
          <div className="text-sm text-gray-600 space-y-2">
            <p><span className="font-medium">Type:</span> {formData.propertyType}</p>
            <p><span className="font-medium">Name:</span> {formData.propertyDetails?.name || "Not set"}</p>
            <p><span className="font-medium">Star rating:</span> {formData.propertyDetails?.starRating || "Not set"}</p>
          </div>
          <button
            onClick={() => setCurrentForm("propertyDetails")}
            className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-lg text-gray-800">Rooms</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 mb-4 border-b border-gray-100 pb-3">Add rooms and set pricing</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No rooms added yet</p>
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add rooms
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-lg text-gray-800">Photos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 mb-4 border-b border-gray-100 pb-3">Add photos of your property</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>No photos added yet</p>
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add photos
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border-2 border-blue-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-lg text-gray-800">Final Steps</h2>
            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Current</div>
          </div>
          <p className="text-sm text-gray-600 mb-4 border-b border-gray-100 pb-3">Complete your registration</p>
          <div className="text-sm text-gray-600">
            <p className="flex items-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ready to submit
            </p>
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Complete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Property Summary</h2>
          <div className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Review
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">Location</h3>
            <p className="text-gray-600">
              {formData.address?.street || "Street not set"}, 
              {formData.address?.apartment && ` ${formData.address.apartment},`}{" "}
              {formData.address?.city || "City not set"}, 
              {formData.address?.postalCode || "Postal code not set"}, 
              {formData.address?.country || "Country not set"}
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">Property Type</h3>
            <p className="text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {formData.propertyType || "Not specified"}
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">Amenities</h3>
            <p className="text-gray-600">
              {formData.amenities && formData.amenities.length > 0 
                ? formData.amenities.join(", ") 
                : "None selected"}
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">Services</h3>
            <div className="text-gray-600 space-y-1">
              <p className="flex items-center">
                <span className="w-20 inline-block">Breakfast:</span>
                {formData.services?.breakfast ? 
                  <span className="text-green-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Yes
                  </span> : 
                  <span className="text-red-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No
                  </span>
                }
              </p>
              <p className="flex items-center">
                <span className="w-20 inline-block">Parking:</span>
                {formData.services?.parking === "free" ? 
                  <span className="text-green-600">Free</span> : 
                  formData.services?.parking === "paid" ? 
                    <span className="text-blue-600">Paid</span> : 
                    <span className="text-gray-500">Not available</span>
                }
              </p>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">Languages</h3>
            <p className="text-gray-600">
              {formData.languages && formData.languages.length > 0 ? 
                formData.languages.map((lang: string, i: number) => (
                  <span key={lang} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                    {lang}
                  </span>
                )) : 
                "None selected"
              }
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4 md:border-b-0">
            <h3 className="font-medium text-gray-700 mb-2">House Rules</h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Check-in:</span> {formData.rules?.checkInFrom || "N/A"} - {formData.rules?.checkInUntil || "N/A"}
              </p>
              <p>
                <span className="font-medium">Check-out:</span> {formData.rules?.checkOutFrom || "N/A"} - {formData.rules?.checkOutUntil || "N/A"}
              </p>
              <p>
                <span className="font-medium">Children:</span> {formData.rules?.allowChildren ? "Allowed" : "Not allowed"}
              </p>
              <p>
                <span className="font-medium">Pets:</span>{" "}
                {formData.rules?.allowPets === true
                  ? "Allowed"
                  : formData.rules?.allowPets === "request"
                    ? "Upon request"
                    : "Not allowed"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button 
          className="px-6 py-3 h-12 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 text-blue-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-blue-600 font-medium">Back</span>
        </button>
        <button
          className="flex-1 sm:flex-none sm:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-md font-medium transition-colors flex items-center justify-center"
          onClick={handleSubmit}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Submit Property
        </button>
      </div>
    </div>
  )
}