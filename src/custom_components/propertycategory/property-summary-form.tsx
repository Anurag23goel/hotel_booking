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
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Final steps</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <h2 className="font-semibold text-lg mb-2">Property details</h2>
          <p className="text-sm text-gray-600 mb-3">Basic information about your property</p>
          <div className="text-xs text-gray-500">
            <p>Type: {formData.propertyType}</p>
            <p>Name: {formData.propertyDetails.name || "Not set"}</p>
            <p>Star rating: {formData.propertyDetails.starRating}</p>
          </div>
          <button
            onClick={() => setCurrentForm("propertyDetails")}
            className="mt-4 text-[#0071c2] text-sm font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <div className="bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <h2 className="font-semibold text-lg mb-2">Rooms</h2>
          <p className="text-sm text-gray-600 mb-3">Add rooms and set pricing</p>
          <div className="text-xs text-gray-500">
            <p>No rooms added yet</p>
          </div>
          <button className="mt-4 text-[#0071c2] text-sm font-medium hover:underline">Add rooms</button>
        </div>

        <div className="bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <h2 className="font-semibold text-lg mb-2">Photos</h2>
          <p className="text-sm text-gray-600 mb-3">Add photos of your property</p>
          <div className="text-xs text-gray-500">
            <p>No photos added yet</p>
          </div>
          <button className="mt-4 text-[#0071c2] text-sm font-medium hover:underline">Add photos</button>
        </div>

        <div className="bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <h2 className="font-semibold text-lg mb-2">Final steps</h2>
          <p className="text-sm text-gray-600 mb-3">Complete your registration</p>
          <div className="text-xs text-gray-500">
            <p>Review and submit your listing</p>
          </div>
          <button className="mt-4 text-[#0071c2] text-sm font-medium hover:underline">Complete</button>
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Property summary</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-gray-600">
              {formData.address.street}, {formData.address.apartment && formData.address.apartment + ","}{" "}
              {formData.address.city}, {formData.address.postalCode}, {formData.address.country}
            </p>
          </div>

          <div>
            <h3 className="font-medium">Property type</h3>
            <p className="text-gray-600">{formData.propertyType}</p>
          </div>

          <div>
            <h3 className="font-medium">Amenities</h3>
            <p className="text-gray-600">
              {formData.amenities.length > 0 ? formData.amenities.join(", ") : "None selected"}
            </p>
          </div>

          <div>
            <h3 className="font-medium">Services</h3>
            <p className="text-gray-600">
              Breakfast: {formData.services.breakfast ? "Yes" : "No"}
              <br />
              Parking:{" "}
              {formData.services.parking === "free"
                ? "Free"
                : formData.services.parking === "paid"
                  ? "Paid"
                  : "Not available"}
            </p>
          </div>

          <div>
            <h3 className="font-medium">Languages</h3>
            <p className="text-gray-600">
              {formData.languages.length > 0 ? formData.languages.join(", ") : "None selected"}
            </p>
          </div>

          <div>
            <h3 className="font-medium">House rules</h3>
            <p className="text-gray-600">
              Check-in: {formData.rules.checkInFrom} - {formData.rules.checkInUntil}
              <br />
              Check-out: {formData.rules.checkOutFrom} - {formData.rules.checkOutUntil}
              <br />
              Children allowed: {formData.rules.allowChildren ? "Yes" : "No"}
              <br />
              Pets allowed:{" "}
              {formData.rules.allowPets === true
                ? "Yes"
                : formData.rules.allowPets === "request"
                  ? "Upon request"
                  : "No"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
          onClick={handleSubmit}
        >
          Submit Property
        </button>
      </div>
    </div>
  )
}
