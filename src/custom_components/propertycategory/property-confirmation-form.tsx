"use client"

import Image from "next/image"

interface PropertyConfirmationFormProps {
  setCurrentForm: (form: string) => void
  formData: { propertyType: string; quantity: string; address: {
    street: string
    apartment: string
    country: string
    city: string
    postalCode: string
  } }
}

export default function PropertyConfirmationForm({ setCurrentForm, formData }: PropertyConfirmationFormProps) {
  const propertyType = formData.propertyType || "hotel"
  const quantity = formData.quantity || "single"

  const handleContinue = () => {
    setCurrentForm("propertyLocation")
  }

  const handleChange = () => {
    setCurrentForm("propertyQuantity")
  }

  const getPropertyTitle = () => {
    const isSingle = quantity === "single"

    switch (propertyType) {
      case "hotel":
        return `One ${isSingle ? "hotel" : "hotels"} where guests can book a room`
      case "guest-house":
        return `One guest house where guests can book a room`
      case "bed-and-breakfast":
        return `One bed and breakfast where guests can book a room`
      default:
        return `One ${propertyType} where guests can book a room`
    }
  }

  return (
    <div className="flex-1 max-w-xl mx-auto w-full px-4 py-8 md:py-12">
      <div className="border rounded-md p-8 flex flex-col items-center">
        <p className="text-gray-600 mb-4">You&apos;re listing:</p>

        <div className="mb-4">
          <Image
            src="/assets/house2.png"
            alt="Property icon"
            width={80}
            height={80}
            className="text-[#0071c2]"
          />
        </div>

        <h2 className="text-xl font-bold text-center mb-8">{getPropertyTitle()}</h2>

        <p className="text-gray-600 mb-6">Does this sound like your property?</p>

        <div className="w-full space-y-4">
          <button
            className="w-full bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
            onClick={handleContinue}
          >
            Continue
          </button>

          <button
            className="w-full h-12 border border-gray-300 rounded-md text-[#0071c2] hover:bg-gray-50"
            onClick={handleChange}
          >
            No, I need to make a change
          </button>
        </div>
      </div>
    </div>
  )
}

