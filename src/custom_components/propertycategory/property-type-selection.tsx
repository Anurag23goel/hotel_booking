"use client"

import { useState } from "react"
import { Check } from "lucide-react"

type PropertyType = {
  id: string
  title: string
  description: string
}

const propertyTypes: PropertyType[] = [
  {
    id: "hotel",
    title: "Hotel",
    description: "Accommodation for travellers often offering restaurants, meeting rooms and other guest services",
  },
  {
    id: "guest-house",
    title: "Guest house",
    description: "Private home with separate living facilities for host and guest",
  },
  {
    id: "bed-and-breakfast",
    title: "Bed and breakfast",
    description: "Private home offering overnight stays and breakfast",
  },
  {
    id: "homestay",
    title: "Homestay",
    description:
      "A shared home where the guest has a private room and the host lives and is on site. Some facilities are shared between hosts and guests.",
  },
  {
    id: "hostel",
    title: "Hostel",
    description: "Budget accommodation with mostly dorm-style bedding and a social atmosphere",
  },
  {
    id: "aparthotel",
    title: "Aparthotel",
    description: "A self-catering apartment with some hotel facilities like a reception desk",
  },
  {
    id: "capsule-hotel",
    title: "Capsule hotel",
    description: "Extremely small units or capsules offering cheap and basic overnight accommodation",
  },
  {
    id: "country-house",
    title: "Country house",
    description: "Private home with simple accommodation in the countryside",
  },
  {
    id: "farm-stay",
    title: "Farm stay",
    description: "Private farm with simple accommodation",
  },
]

interface PropertyTypeSelectionProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { propertyType: string }) => void
  formData: { propertyType: string; quantity: string; 
    address: {
        street: string
        apartment: string
        country: string
        city: string
        postalCode: string
      }
  } }


export default function PropertyTypeSelection({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>(formData.propertyType || "")
  const [showMore, setShowMore] = useState(false)

  const displayedTypes = showMore ? propertyTypes : propertyTypes.slice(0, 6)

  const handleContinue = () => {
    if (selectedType) {
      updateFormData({ propertyType: selectedType })
      setCurrentForm("propertyQuantity")
    }
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        From the list below, which property category is most similar to your place?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedTypes.map((type) => (
          <div
            key={type.id}
            className={`border rounded-md p-4 cursor-pointer transition-all ${
              selectedType === type.id ? "border-[#0071c2] border-2" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedType(type.id)}
          >  
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{type.title}</h3>
              {selectedType === type.id && (
                <div className="bg-[#0071c2] rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-2 text-sm">{type.description}</p>
          </div>
        ))}

        {!showMore && (
          <div
            className="border border-gray-200 rounded-md p-4 cursor-pointer flex items-center justify-center hover:border-gray-300"
            onClick={() => setShowMore(true)}
          >
            <div className="text-[#0071c2] font-medium flex items-center">
              <span className="mr-2">▼</span>
              More options
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-[#0071c2]">
        <button className="flex items-center text-sm font-medium">
          <span className="mr-2">?</span>I don&apos;t see my property type on the list
        </button>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => {
            /* Back action if needed */
          }}
        >
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className={`flex-1 h-12 rounded-md text-white ${
            selectedType ? "bg-[#0071c2] hover:bg-[#00487a]" : "bg-[#0071c2] opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedType}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

