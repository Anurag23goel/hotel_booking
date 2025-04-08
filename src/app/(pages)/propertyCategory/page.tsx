"use client"
import { useState } from "react"
import PropertyTypeSelection from "@/components/property-type-selection"
import PropertyQuantityForm from "@/components/property-quantity-form"
import PropertyConfirmationForm from "@/components/property-confirmation-form"
import PropertyLocationForm from "@/components/property-location-form"
import ChannelManagerForm from "@/components/channel-manager-form"
import PropertyDetailsForm from "@/components/property-details-form"
import PropertyAmenitiesForm from "@/components/property-amenities-form"
import PropertyServicesForm from "@/components/property-services-form"
import PropertyLanguagesForm from "@/components/property-languages-form"
import PropertyRulesForm from "@/components/property-rules-form"
import PropertySummaryForm from "@/components/property-summary-form"
import ProgressBar from "@/components/progress-bar"

export default function Home() {
  const [currentForm, setCurrentForm] = useState<string>("propertyType")
  const [formData, setFormData] = useState({
    propertyType: "",
    quantity: "",
    address: {
      street: "",
      apartment: "",
      country: "India",
      city: "",
      postalCode: "",
    },
    channelManager: false,
    propertyDetails: {
      name: "",
      starRating: "N/A",
      isManagementCompany: false,
    },
    amenities: [] as string[],
    services: {
      breakfast: false,
      parking: "none",
    },
    languages: [] as string[],
    rules: {
      checkInFrom: "12:00",
      checkInUntil: "12:00",
      checkOutFrom: "00:00",
      checkOutUntil: "10:00",
      allowChildren: true,
      allowPets: false,
    },
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const getProgressPercentage = () => {
    const formSteps = [
      "propertyType",
      "propertyQuantity",
      "propertyConfirmation",
      "propertyLocation",
      "channelManager",
      "propertyDetails",
      "propertyAmenities",
      "propertyServices",
      "propertyLanguages",
      "propertyRules",
      "propertySummary",
    ]

    const currentIndex = formSteps.indexOf(currentForm)
    return Math.round((currentIndex / (formSteps.length - 1)) * 100)
  }

  const renderForm = () => {
    switch (currentForm) {
      case "propertyType":
        return (
          <PropertyTypeSelection setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyQuantity":
        return (
          <PropertyQuantityForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyConfirmation":
        return <PropertyConfirmationForm setCurrentForm={setCurrentForm} formData={formData} />
      case "propertyLocation":
        return (
          <PropertyLocationForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "channelManager":
        return (
          <ChannelManagerForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyDetails":
        return (
          <PropertyDetailsForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyAmenities":
        return (
          <PropertyAmenitiesForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyServices":
        return (
          <PropertyServicesForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyLanguages":
        return (
          <PropertyLanguagesForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
      case "propertyRules":
        return <PropertyRulesForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
      case "propertySummary":
        return <PropertySummaryForm setCurrentForm={setCurrentForm} formData={formData} />
      default:
        return (
          <PropertyTypeSelection setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-[#003580] text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Booking.com</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=20&width=30" alt="UK Flag" className="mr-2 h-5 w-7" />
          </div>
          <div className="flex items-center gap-1">
            <span>Help</span>
            <div className="h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-[#003580] font-bold">
              ?
            </div>
          </div>
          <div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-[#003580]">
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
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ProgressBar percentage={getProgressPercentage()} />

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </main>
  )
}
