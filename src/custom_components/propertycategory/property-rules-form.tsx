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
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">House rules</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6 relative">
        <div className="absolute right-6 top-6 bg-gray-50 border border-gray-200 p-4 rounded-md w-full md:w-64 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <h3 className="font-medium">What if my house rules change?</h3>
            </div>
            <button className="text-gray-500 hover:text-gray-700" aria-label="Close">
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600">
            You can easily customise these house rules later and additional house rules can be set on the Policies page
            of the extranet after you complete registration.
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-4">What are your check-in and check-out times?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="font-medium mb-2">Check in</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkInFrom" className="block text-sm text-gray-600 mb-1">
                  From
                </label>
                <div className="relative">
                  <select
                    id="checkInFrom"
                    value={formData.rules.checkInFrom}
                    onChange={(e) => handleTimeChange("checkInFrom", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkin-from-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
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
              </div>
              <div>
                <label htmlFor="checkInUntil" className="block text-sm text-gray-600 mb-1">
                  Until
                </label>
                <div className="relative">
                  <select
                    id="checkInUntil"
                    value={formData.rules.checkInUntil}
                    onChange={(e) => handleTimeChange("checkInUntil", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkin-until-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
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
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Check out</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkOutFrom" className="block text-sm text-gray-600 mb-1">
                  From
                </label>
                <div className="relative">
                  <select
                    id="checkOutFrom"
                    value={formData.rules.checkOutFrom}
                    onChange={(e) => handleTimeChange("checkOutFrom", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkout-from-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
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
              </div>
              <div>
                <label htmlFor="checkOutUntil" className="block text-sm text-gray-600 mb-1">
                  Until
                </label>
                <div className="relative">
                  <select
                    id="checkOutUntil"
                    value={formData.rules.checkOutUntil}
                    onChange={(e) => handleTimeChange("checkOutUntil", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071c2] appearance-none"
                  >
                    {timeOptions.map((time) => (
                      <option key={`checkout-until-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
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
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-medium mb-3">Do you allow children?</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="allowChildren"
                  checked={formData.rules.allowChildren === true}
                  onChange={() => handleChildrenChange(true)}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="allowChildren"
                  checked={formData.rules.allowChildren === false}
                  onChange={() => handleChildrenChange(false)}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div>
            <p className="font-medium mb-3">Do you allow pets?</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules.allowPets === true}
                  onChange={() => handlePetsChange(true)}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules.allowPets === "request"}
                  onChange={() => handlePetsChange("request")}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
                />
                <span className="ml-2">Upon request</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="allowPets"
                  checked={formData.rules.allowPets === false}
                  onChange={() => handlePetsChange(false)}
                  className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
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
 