"use client"

interface PropertyServicesFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { services: any }) => void
  formData: any
}

export default function PropertyServicesForm({ setCurrentForm, updateFormData, formData }: PropertyServicesFormProps) {
  const handleBreakfastChange = (hasBreakfast: boolean) => {
    updateFormData({
      services: {
        ...formData.services,
        breakfast: hasBreakfast,
      },
    })
  }

  const handleParkingChange = (parkingOption: string) => {
    updateFormData({
      services: {
        ...formData.services,
        parking: parkingOption,
      },
    })
  }

  const handleContinue = () => {
    setCurrentForm("propertyLanguages")
  }

  const handleBack = () => {
    setCurrentForm("propertyAmenities")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Services at your property
      </h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-amber-100 text-amber-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
          Breakfast Options
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Let guests know if breakfast is available at your property.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className={`flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 ${formData.services.breakfast === true ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all flex-1`}>
            <input
              type="radio"
              name="breakfast"
              checked={formData.services.breakfast === true}
              onChange={() => handleBreakfastChange(true)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${formData.services.breakfast === true ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg font-medium block">Yes</span>
              <span className="text-sm text-gray-500">We serve breakfast</span>
            </div>
          </label>

          <label className={`flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 ${formData.services.breakfast === false ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all flex-1`}>
            <input
              type="radio"
              name="breakfast"
              checked={formData.services.breakfast === false}
              onChange={() => handleBreakfastChange(false)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${formData.services.breakfast === false ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-lg font-medium block">No</span>
              <span className="text-sm text-gray-500">No breakfast available</span>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="bg-indigo-100 text-indigo-800 p-1.5 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </span>
          Parking Availability
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Guests often need to know about parking options when they travel.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <label className={`flex flex-col items-center justify-between p-4 rounded-lg cursor-pointer border-2 ${formData.services.parking === "free" ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all h-full`}>
            <input
              type="radio"
              name="parking"
              value="free"
              checked={formData.services.parking === "free"}
              onChange={() => handleParkingChange("free")}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <div className="bg-green-100 text-green-700 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-lg font-medium block">Free Parking</span>
              <span className="text-sm text-gray-500">Available at no charge</span>
            </div>
          </label>

          <label className={`flex flex-col items-center justify-between p-4 rounded-lg cursor-pointer border-2 ${formData.services.parking === "paid" ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all h-full`}>
            <input
              type="radio"
              name="parking"
              value="paid"
              checked={formData.services.parking === "paid"}
              onChange={() => handleParkingChange("paid")}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-lg font-medium block">Paid Parking</span>
              <span className="text-sm text-gray-500">Available for a fee</span>
            </div>
          </label>

          <label className={`flex flex-col items-center justify-between p-4 rounded-lg cursor-pointer border-2 ${formData.services.parking === "none" ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} transition-all h-full`}>
            <input
              type="radio"
              name="parking"
              value="none"
              checked={formData.services.parking === "none"}
              onChange={() => handleParkingChange("none")}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 hidden"
            />
            <div className="bg-red-100 text-red-700 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-lg font-medium block">No Parking</span>
              <span className="text-sm text-gray-500">Not available</span>
            </div>
          </label>
        </div>
      </div>

      {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center text-gray-700">
          <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Service Information</h3>
            <p className="text-sm text-gray-500 mt-1">
              You'll be able to add more services and details after completing registration.
            </p>
          </div>
        </div>
      </div> */}

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