"use client";
import { useState } from "react";
import { CheckCircle, Info } from "lucide-react";
import PropertyNameForm from "./(basicInfo)/hotelName";
import PropertyLocationForm from "./(basicInfo)/location-form";
import HouseRules from "./(servicesAtProperty)/houseRules";
import GuestCanUse from "./guestCanUse";
import CookingFrom from "./(servicesAtProperty)/cookingFrom";
import KitchenAmenities from "./(servicesAtProperty)/kitchenAmenities";
import BasicAmenities from "./(Amenities)/BasicAmenities";
import Photos from "./photos";
import PricingAndAvailability from "./pricingAndAvailability";
import FinanceAndLegal from "./FinanceAndLegal";

type FormStep = {
  id: string;
  title: string;
  completed: boolean;
  hasWarning?: boolean;
};

export default function PropertyListingForm() {
  const [currentStep, setCurrentStep] = useState("basic-info");
  const [activeSubForm, setActiveSubForm] = useState("property-name");

  const steps: FormStep[] = [
    { id: "basic-info", title: "Basic information", completed: false },
    {
      id: "property-setup",
      title: "Property setup",
      completed: false,
      hasWarning: true,
    },
    { id: "photos", title: "Photos", completed: false },
    { id: "pricing", title: "Pricing and availability", completed: true },
    {
      id: "legal",
      title: "Legal information",
      completed: false,
      hasWarning: true,
    },
  ];

  const basicInfoForms = [
    { id: "property-name", component: <PropertyNameForm /> },
    { id: "property-location", component: <PropertyLocationForm /> },
  ];

  const propertySetupForms = [
    { id: "house-rules", component: <HouseRules /> },
    { id: "guest-amenities", component: <GuestCanUse /> },
    { id: "services", component: <CookingFrom /> },
    { id: "kitchen-amenities", component: <KitchenAmenities /> },
    { id: "basic-amenities", component: <BasicAmenities /> },
  ];

  const renderStepIcon = (step: FormStep) => {
    if (step.completed) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (step.hasWarning) {
      return <Info className="h-5 w-5 text-amber-500" />;
    }
    return null;
  };

  const renderActiveForm = () => {
    if (currentStep === "basic-info") {
      const form = basicInfoForms.find((form) => form.id === activeSubForm);
      return form?.component;
    } else if (currentStep === "property-setup") {
      const form = propertySetupForms.find((form) => form.id === activeSubForm);
      return form?.component;
    } else if (currentStep === "photos") {
      return <Photos />;
    } else if (currentStep === "pricing") {
      return <PricingAndAvailability />;
    } else if (currentStep === "legal") {
      return <FinanceAndLegal />;
    }
    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentStep(step.id)}
          >
            <span
              className={`${
                currentStep === step.id
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              {step.title}
            </span>
            {renderStepIcon(step)}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-200 mb-12 relative">
        <div className="absolute left-0 top-0 h-1 bg-blue-500 w-1/5"></div>
        <div className="absolute left-[20%] top-0 h-1 bg-green-500 w-[10%]"></div>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">{renderActiveForm()}</div>

        {/* Sub-form Navigation for Basic Info */}
        {currentStep === "basic-info" && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Basic Information Sections</h3>
            {basicInfoForms.map((form) => (
              <div
                key={form.id}
                className={`p-3 border rounded-md cursor-pointer ${
                  activeSubForm === form.id ? "border-blue-500 bg-blue-50" : ""
                }`}
                onClick={() => setActiveSubForm(form.id)}
              >
                {form.id
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
            ))}
          </div>
        )}

        {/* Sub-form Navigation for Property Setup */}
        {currentStep === "property-setup" && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Property Setup Sections</h3>
            {propertySetupForms.map((form) => (
              <div
                key={form.id}
                className={`p-3 border rounded-md cursor-pointer ${
                  activeSubForm === form.id ? "border-blue-500 bg-blue-50" : ""
                }`}
                onClick={() => setActiveSubForm(form.id)}
              >
                {form.id
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
