"use client";
import { useState } from "react";
import { CheckCircle, Info, ChevronDown } from "lucide-react";
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
import CommonArea from "./(Amenities)/CommonArea";
import GeneralServices from "./(Amenities)/GeneralServices";
import ThreeMore from "./(Amenities)/ThreeMoreAmenities";
import FourMore from "./(Amenities)/FourMore";
import FiveMore from "./(Amenities)/FiveMore";
import HotelBedroom from "./hotelBedroom";

type FormStep = {
  id: string;
  title: string;
  completed: boolean;
  hasWarning?: boolean;
};

export default function PropertyListingForm() {
  const [currentStep, setCurrentStep] = useState("basic-info");
  const [activeSubForm, setActiveSubForm] = useState("property-name");
  const [activeAmenitiesForm, setActiveAmenitiesForm] =
    useState("basic-amenities");

  const [completedForms, setCompletedForms] = useState<Record<string, boolean>>(
    {
      "property-name": false,
      "property-location": false,
      "house-rules": false,
      "guest-amenities": false,
      "servicesAtProperty": false,
      "kitchen-amenities": false,
      "basic-amenities": false,
      "GeneralServices": false,
      "CommonArea": false,
      "ThreeMore": false,
      "FourMore": false,
      "FiveMore": false,
      "photos": false,
      "pricing": false,
      "legal": false,
    }
  );

  const steps: FormStep[] = [
    {
      id: "basic-info",
      title: "Basic information",
      completed:
        completedForms["property-name"] && completedForms["property-location"],
    },
    {
      id: "property-setup",
      title: "Property setup",
      completed:
        completedForms["house-rules"] &&
        completedForms["guest-amenities"] &&
        completedForms["servicesAtProperty"] &&
        completedForms["kitchen-amenities"] &&
        completedForms["basic-amenities"] &&
        completedForms["CommonArea"] &&
        completedForms["GeneralServices"] &&
        completedForms["ThreeMore"] &&
        completedForms["FourMore"] &&
        completedForms["FiveMore"],
      hasWarning: true,
    },
    {
      id: "photos",
      title: "Photos",
      completed: completedForms["photos"],
      hasWarning: true,
    },
    {
      id: "pricing",
      title: "Pricing and availability",
      completed: completedForms["pricing"],
    },
    {
      id: "legal",
      title: "Legal information",
      completed: completedForms["legal"],
      hasWarning: true,
    },
  ];

  const basicInfoForms = [
    {
      id: "property-name",
      component: (
        <PropertyNameForm
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, "property-name": true }));
            setActiveSubForm("property-location");
          }}
        />
      ),
    },
    {
      id: "property-location",
      component: (
        <PropertyLocationForm
          onComplete={() => {
            setCompletedForms((prev) => ({
              ...prev,
              "property-location": true,
            }));
            setCurrentStep("property-setup");
            setActiveSubForm("house-rules");
          }}
        />
      ),
    },
  ];

  const propertySetupForms = [
    {
      id: "hotelBedroom",
      component: (
        <HotelBedroom
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, "hotelBedroom": true   }));
            setActiveSubForm("house-rules");
          }}
        />
      ),
    },
  
    {
      id: "house-rules",
      component: (
        <HouseRules
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, "house-rules": true }));
            setActiveSubForm("guest-amenities");
          }}
        />
      ),
    },
    {
      id: "guest-amenities",
      component: (
        <GuestCanUse
          onComplete={() => {
            setCompletedForms((prev) => ({
              ...prev,
              "guest-amenities": true,
            }));
            setActiveSubForm("servicesAtProperty");
          }}
        />
      ),
    },
    {
      id: "servicesAtProperty",
      component: (
        <CookingFrom
          onComplete={() => {
            setCompletedForms((prev) => ({
              ...prev,
              servicesAtProperty: true,
            }));
            setActiveSubForm("kitchen-amenities");
          }}
        />
      ),
    },
    {
      id: "kitchen-amenities",
      component: (
        <KitchenAmenities
          onComplete={() => {
            setCompletedForms((prev) => ({
              ...prev,
              "kitchen-amenities": true,
            }));
            setActiveSubForm("basic-amenities");
          }}
        />
      ),
    },
    {
      id: "basic-amenities",
      component: (
        <BasicAmenities
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, "basic-amenities": true }));
            setActiveAmenitiesForm("GeneralServices");
          }}
        />
      ),
    },
    {
      id: "GeneralServices",
      component: (
        <GeneralServices
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, GeneralServices: true }));
            setActiveAmenitiesForm("CommonArea");
          }}
        />
      ),
    },
    {
      id: "CommonArea",
      component: (
        <CommonArea
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, CommonArea: true }));
            setActiveAmenitiesForm("ThreeMore");
          }}
        />
      ),
    },
    {
      id: "ThreeMore",
      component: (
        <ThreeMore
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, ThreeMore: true }));
            setActiveAmenitiesForm("FourMore");
          }}
        />
      ),
    },
    {
      id: "FourMore",
      component: (
        <FourMore
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, FourMore: true }));
            setActiveAmenitiesForm("FiveMore");
          }}
        />
      ),
    },
    {
      id: "FiveMore",
      component: (
        <FiveMore
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, FiveMore: true }));
            setCurrentStep("photos");
          }}
        />
      ),
    },
  ];

  const photosForms = [
    {
      id: "photos",
      component: (
        <Photos
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, photos: true }));
            setCurrentStep("pricing");
          }}
        />
      ),
    },
  ];

  const pricingForms = [
    {
      id: "pricing",
      component: (
        <PricingAndAvailability
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, pricing: true }));
            setCurrentStep("legal");
          }}
        />
      ),
    },
  ];

  const legalForms = [
    {
      id: "legal",
      component: (
        <FinanceAndLegal
          onComplete={() => {
            setCompletedForms((prev) => ({ ...prev, legal: true }));
            setCurrentStep("photos");
          }}
        />
      ),
    },
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
      // Check if we're in the amenities section
      if (
        [
          "basic-amenities",
          "GeneralServices",
          "CommonArea",
          "ThreeMore",
          "FourMore",
          "FiveMore",
        ].includes(activeSubForm)
      ) {
        const form = propertySetupForms.find(
          (form) => form.id === activeAmenitiesForm
        );
        return form?.component;
      } else {
        const form = propertySetupForms.find(
          (form) => form.id === activeSubForm
        );
        return form?.component;
      }
    } else if (currentStep === "photos") {
      const form = photosForms.find((form) => form.id === "photos");
      return form?.component;
    } else if (currentStep === "pricing") {
      const form = pricingForms.find((form) => form.id === "pricing");
      return form?.component;
    } else if (currentStep === "legal") {
      const form = legalForms.find((form) => form.id === "legal");
      return form?.component;
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
            onClick={() => {
              setCurrentStep(step.id);
              if (step.id === "property-setup") {
                setActiveSubForm("hotelBedroom");
              }
              if (step.id === "basic-info") {
                setActiveSubForm("property-name");
              }
            }}
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
                className={`p-3 border rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
                  activeSubForm === form.id
                    ? "border-[#0f1506] shadow-lg text-white bg-[#040928] transform -translate-y-1 scale-105 z-10"
                    : "ml-10 hover:shadow-md hover:-translate-y-0.5"
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
                className={`p-3 border rounded-md cursor-pointer transition-all duration-300 ease-in-out relative ${
                  activeSubForm === form.id ||
                  ([
                    "basic-amenities",
                    "GeneralServices",
                    "CommonArea",
                    "ThreeMore",
                    "FourMore",
                    "FiveMore",
                  ].includes(activeSubForm) &&
                    activeAmenitiesForm === form.id)
                    ? "border-[#0f1506] shadow-lg text-white bg-[#040928] transform -translate-y-1 scale-105 z-10"
                    : "ml-10 hover:shadow-md hover:-translate-y-0.5"
                }`}
                onClick={() => {
                  if (
                    [
                      "basic-amenities",
                      "GeneralServices",
                      "CommonArea",
                      "ThreeMore",
                      "FourMore",
                      "FiveMore",
                    ].includes(form.id)
                  ) {
                    setActiveSubForm("basic-amenities");
                    setActiveAmenitiesForm(form.id);
                  } else {
                    setActiveSubForm(form.id);
                  }
                }}
              >
                {form.id
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                {[
                  "basic-amenities",
                  "GeneralServices",
                  "CommonArea",
                  "ThreeMore",
                  "FourMore",
                  "FiveMore",
                ].includes(form.id) &&
                  activeAmenitiesForm === form.id && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <ChevronDown className="h-6 w-6 text-white" />
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
