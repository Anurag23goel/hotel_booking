"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, ImageIcon } from "lucide-react"

interface PropertyPhotosFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { photos: any[] }) => void
  formData: any
}

export default function PropertyPhotosForm({ setCurrentForm, updateFormData, formData }: PropertyPhotosFormProps) {
  const [photos, setPhotos] = useState<any[]>(formData.photos || [])
  const [mainPhotoIndex, setMainPhotoIndex] = useState<number>(0)
  const [showInfoBox, setShowInfoBox] = useState(true)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const newPhotos = [...photos]

    Array.from(files).forEach((file) => {
      // In a real app, you would upload the file to a server
      // For this demo, we'll just create an object with the file info
      const photoUrl = URL.createObjectURL(file)
      newPhotos.push({
        name: file.name,
        url: photoUrl,
        size: file.size,
        type: file.type,
      })
    })

    setPhotos(newPhotos)
    updateFormData({ photos: newPhotos })
  }

  const removePhoto = (index: number) => {
    const newPhotos = [...photos]
    newPhotos.splice(index, 1)
    setPhotos(newPhotos)
    updateFormData({ photos: newPhotos })

    // Update main photo index if needed
    if (index === mainPhotoIndex) {
      setMainPhotoIndex(0)
    } else if (index < mainPhotoIndex) {
      setMainPhotoIndex(mainPhotoIndex - 1)
    }
  }

  const setAsMainPhoto = (index: number) => {
    setMainPhotoIndex(index)
    // In a real app, you would update the main photo in your data
  }

  const handleContinue = () => {
    setCurrentForm("propertySummary")
  }

  const handleBack = () => {
    setCurrentForm("propertySummary")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">What does your hotel look like?</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <p className="mb-4">
          <strong>Upload at least 5 photos of your property.</strong> The more you upload, the more likely you are to
          get bookings. You can add more later.
        </p>

        <div
          className={`border-2 border-dashed rounded-md p-8 mb-6 text-center ${
            dragActive ? "border-[#0071c2] bg-blue-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
            <p className="mb-4">Drag and drop or</p>
            <label className="bg-[#0071c2] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#00487a] flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              <span>Upload photos</span>
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/jpg"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">jpg/jpeg or png, maximum 47MB each</p>
          </div>
        </div>

        {photos.length > 0 && (
          <div>
            <div className="mb-4">
              <p className="font-medium mb-2">Choose a main photo that will make a good first impression.</p>
              <p className="text-sm text-gray-600">
                Click and drag the photos to arrange them in the order you would like guests to see them.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative border rounded-md overflow-hidden ${
                    index === mainPhotoIndex ? "ring-2 ring-[#0071c2]" : ""
                  }`}
                >
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={`Property photo ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />

                  {index === mainPhotoIndex && (
                    <div className="absolute top-2 left-2 bg-[#0071c2] text-white text-xs px-2 py-1 rounded">
                      Main photo
                    </div>
                  )}

                  <div className="absolute top-2 right-2 flex space-x-1">
                    {index !== mainPhotoIndex && (
                      <button
                        onClick={() => setAsMainPhoto(index)}
                        className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                        title="Set as main photo"
                      >
                        <ImageIcon className="h-4 w-4 text-gray-700" />
                      </button>
                    )}
                    <button
                      onClick={() => removePhoto(index)}
                      className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                      title="Remove photo"
                    >
                      <X className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {photos.length > 0 && photos.length < 5 && (
          <div className="mt-4 flex items-center text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>Upload at least {5 - photos.length} more photos to continue</span>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className={`flex-1 md:flex-none md:min-w-[200px] h-12 rounded-md text-white ${
            photos.length >= 5 ? "bg-[#0071c2] hover:bg-[#00487a]" : "bg-[#0071c2] opacity-50 cursor-not-allowed"
          }`}
          onClick={handleContinue}
          disabled={photos.length < 5}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
