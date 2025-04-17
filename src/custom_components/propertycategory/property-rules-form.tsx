"use client"

interface PropertyRulesFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { rules: any }) => void
  formData: any
}

export default function PropertyRulesForm({ setCurrentForm, updateFormData, formData }: PropertyRulesFormProps) {
  const handleTimeChange = (field: string, value: string) => {
    updateFormData({
      rules: {
        ...formData.rules,
        [field]: value,
      },
    })
  }

  const handleChildrenChange = (allowChildren: boolean) => {
    updateFormData({
      rules: {
        ...formData.rules,
        allowChildren,
      },
    })
  }

  const handlePetsChange = (allowPets: boolean | string) => {
    updateFormData({
      rules: {
        ...formData.rules,
        allowPets,
      },
    })
  }

  const handleContinue = () => {
    setCurrentForm("propertySummary")
  }

  const handleBack = () => {
    setCurrentForm("propertyLanguages")
  }

  const timeOptions = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", 
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
  ]

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">House Rules</h1>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">What are your check-in and check-out times?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700 mb-3">Check in</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkInFrom" className="block text-sm font-medium text-gray-600 mb-2">
                  From
                </label>
                <div className="relative">
                  <select
                    id="checkInFrom"
                    value={formData.rules?.checkInFrom || "14:00"}
                    onChange={(e) => handleTimeChange("checkInFrom", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkin-from-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="checkInUntil" className="block text-sm font-medium text-gray-600 mb-2">
                  Until
                </label>
                <div className="relative">
                  <select
                    id="checkInUntil"
                    value={formData.rules?.checkInUntil || "22:00"}
                    onChange={(e) => handleTimeChange("checkInUntil", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkin-until-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700 mb-3">Check out</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkOutFrom" className="block text-sm font-medium text-gray-600 mb-2">
                  From
                </label>
                <div className="relative">
                  <select
                    id="checkOutFrom"
                    value={formData.rules?.checkOutFrom || "06:00"}
                    onChange={(e) => handleTimeChange("checkOutFrom", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkout-from-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="checkOutUntil" className="block text-sm font-medium text-gray-600 mb-2">
                  Until
                </label>
                <div className="relative">
                  <select
                    id="checkOutUntil"
                    value={formData.rules?.checkOutUntil || "12:00"}
                    onChange={(e) => handleTimeChange("checkOutUntil", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkout-until-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700 mb-4">Do you allow children?</p>
            <div className="space-y-3">
              <label className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="allowChildren"
                  checked={formData.rules?.allowChildren === true}
                  onChange={() => handleChildrenChange(true)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-3 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="allowChildren"
                  checked={formData.rules?.allowChildren === false}
                  onChange={() => handleChildrenChange(false)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-3 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700 mb-4">Do you allow pets?</p>
            <div className="space-y-3">
              <label className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules?.allowPets === true}
                  onChange={() => handlePetsChange(true)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-3 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules?.allowPets === "request"}
                  onChange={() => handlePetsChange("request")}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-3 text-gray-700">Upon request</span>
              </label>
              <label className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules?.allowPets === false}
                  onChange={() => handlePetsChange(false)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-3 text-gray-700">No</span>
              </label>
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
          onClick={handleContinue}
        >
          Continue
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}