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
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Services at your property</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Breakfast</h2>
        <div className="space-y-3 mb-4">
          <p className="font-medium">Do you serve guests breakfast?</p>
          <label className="flex items-center">
            <input
              type="radio"
              name="breakfast"
              checked={formData.services.breakfast === true}
              onChange={() => handleBreakfastChange(true)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">Yes</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="breakfast"
              checked={formData.services.breakfast === false}
              onChange={() => handleBreakfastChange(false)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Parking</h2>
        <div className="space-y-3 mb-4">
          <p className="font-medium">Is parking available to guests?</p>
          <label className="flex items-center">
            <input
              type="radio"
              name="parking"
              value="free"
              checked={formData.services.parking === "free"}
              onChange={() => handleParkingChange("free")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">Yes, free</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="parking"
              value="paid"
              checked={formData.services.parking === "paid"}
              onChange={() => handleParkingChange("paid")}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">Yes, paid</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="parking"
              value="none"
              checked={formData.services.parking === "none"}
              onChange={() => handleParkingChange("none")}
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
