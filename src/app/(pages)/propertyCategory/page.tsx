"use client"
import { useState } from "react"
import PropertyTypeSelection from "@/custom_components/propertycategory/property-type-selection"
import PropertyQuantityForm from "@/custom_components/propertycategory/property-quantity-form"
import PropertyConfirmationForm from "@/custom_components/propertycategory/property-confirmation-form"
import PropertyLocationForm from "@/custom_components/propertycategory/property-location-form"
import ChannelManagerForm from "@/custom_components/propertycategory/channel-manager-form"
import PropertyDetailsForm from "@/custom_components/propertycategory/property-details-form"
import PropertyAmenitiesForm from "@/custom_components/propertycategory/property-amenities-form"
import PropertyServicesForm from "@/custom_components/propertycategory/property-services-form"
import PropertyLanguagesForm from "@/custom_components/propertycategory/property-languages-form"
import PropertyRulesForm from "@/custom_components/propertycategory/property-rules-form"
import PropertySummaryForm from "@/custom_components/propertycategory/property-summary-form"
import ProgressBar from "@/custom_components/propertycategory/progress-bar"
import Navbar from "@/custom_components/navbar"

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
    <Navbar/>

      <ProgressBar percentage={getProgressPercentage()} />

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </main>
  )
}
