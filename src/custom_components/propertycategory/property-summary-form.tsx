"use client"

import { Check, ChevronLeft, Edit, Plus } from "lucide-react"

interface PropertySummaryFormProps {
  setCurrentForm: (form: string) => void
  formData: any
  onAddRoom: () => void
  onAddFinalDetails: () => void
}

export default function PropertySummaryForm({
  setCurrentForm,
  formData,
  onAddRoom,
  onAddFinalDetails,
}: PropertySummaryFormProps) {
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

  const handleAddPhotos = () => {
    setCurrentForm("propertyPhotos")
  }
  
  // Check if each section is complete
  const isPropertyDetailsComplete = formData.propertyDetails && formData.propertyDetails.name
  const isRoomsComplete = formData.rooms && formData.rooms.length > 0
  const isPhotosComplete = formData.photos && formData.photos.length > 0
  const isFinalDetailsComplete = formData.finalDetails && formData.finalDetails.taxDetails
  
  // Check if all required sections are complete to enable submission
  const isReadyToSubmit = isPropertyDetailsComplete && isRoomsComplete && 
                          (isPhotosComplete || formData.skipPhotos) && 
                          isFinalDetailsComplete

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Complete Your Property Listing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition-shadow relative overflow-hidden">
          {isPropertyDetailsComplete && (
            <div className="absolute top-0 right-0">
              <div className="bg-green-500 p-2 rounded-bl-lg">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <h2 className="font-semibold text-lg mb-2">Property Details</h2>
          <p className="text-sm text-gray-600 mb-3">Basic information about your property</p>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Type: <span className="font-medium">{formData.propertyType || "Not set"}</span></p>
            <p>Name: <span className="font-medium">{formData.propertyDetails?.name || "Not set"}</span></p>
            <p>Star rating: <span className="font-medium">{formData.propertyDetails?.starRating || "Not set"}</span></p>
          </div>
          <button
            onClick={() => setCurrentForm("propertyDetails")}
            className="mt-4 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800"
          >
            <Edit className="h-3 w-3 mr-1" /> Edit details
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition-shadow relative overflow-hidden">
          {isRoomsComplete && (
            <div className="absolute top-0 right-0">
              <div className="bg-green-500 p-2 rounded-bl-lg">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <h2 className="font-semibold text-lg mb-2">Rooms</h2>
          <p className="text-sm text-gray-600 mb-3">Add rooms and set pricing</p>
          <div className="text-xs text-gray-500">
            {formData.rooms?.length > 0 ? (
              <ul className="space-y-1">
                {formData.rooms.map((room: any, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {room.name} - {room.price?.currency} {room.price?.amount}/night
                  </li>
                ))}
              </ul>
            ) : (
              <p>No rooms added yet</p>
            )}
          </div>
          <button onClick={onAddRoom} className="mt-4 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
            <Plus className="h-3 w-3 mr-1" /> Add rooms
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition-shadow relative overflow-hidden">
          {isPhotosComplete && (
            <div className="absolute top-0 right-0">
              <div className="bg-green-500 p-2 rounded-bl-lg">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <h2 className="font-semibold text-lg mb-2">Photos</h2>
          <p className="text-sm text-gray-600 mb-3">Add photos of your property</p>
          <div className="text-xs text-gray-500">
            {formData.photos && formData.photos.length > 0 ? (
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2 text-xs">
                  {formData.photos.length}
                </div>
                <span>photos added</span>
              </div>
            ) : (
              <p>No photos added yet</p>
            )}
          </div>
          <button onClick={handleAddPhotos} className="mt-4 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
            <Plus className="h-3 w-3 mr-1" /> Add photos
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition-shadow relative overflow-hidden">
          {isFinalDetailsComplete && (
            <div className="absolute top-0 right-0">
              <div className="bg-green-500 p-2 rounded-bl-lg">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <h2 className="font-semibold text-lg mb-2">Final Details</h2>
          <p className="text-sm text-gray-600 mb-3">Complete your registration</p>
          <div className="text-xs text-gray-500">
            {isFinalDetailsComplete ? (
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                All business details completed
              </p>
            ) : (
              <p>Add your business details</p>
            )}
          </div>
          <button onClick={onAddFinalDetails} className="mt-4 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
            <Plus className="h-3 w-3 mr-1" /> Add final details
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button 
          className="p-2 h-10 w-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center" 
          onClick={handleBack}
        >
          <ChevronLeft className="h-5 w-5 text-blue-600" />
        </button>
        <button
          className={`flex-1 md:flex-none md:min-w-[200px] h-10 rounded-md text-white font-medium 
            ${isReadyToSubmit 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "bg-blue-300 cursor-not-allowed"}`}
          onClick={handleSubmit}
          disabled={!isReadyToSubmit}
        >
          Submit Property 
        </button>
      </div>
      
      {!isReadyToSubmit && (
        <p className="text-sm text-gray-500 mt-3">
          Please complete all required sections before submitting
        </p>
      )}
    </div>
  )
}