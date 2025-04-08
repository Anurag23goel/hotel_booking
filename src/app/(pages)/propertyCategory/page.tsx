"use client"
import { useState } from "react"
import PropertyTypeSelection from "@/custom_components/propertycategory/property-type-selection"
import PropertyQuantityForm from "@/custom_components/propertycategory/property-quantity-form"
import PropertyConfirmationForm from "@/custom_components/propertycategory/property-confirmation-form"
import PropertyLocationForm from "@/custom_components/propertycategory/property-location-form"
import Navbar from "@/custom_components/navbar"

export default function Home() {
  const [currentForm, setCurrentForm] = useState<string>("propertyType")
  const [formData, setFormData] = useState({
    propertyType: "",
    quantity: "",
    address: "",
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
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
      default:
        return (
          <PropertyTypeSelection setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
        )
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
        <Navbar/>
      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </main>
  )
}

