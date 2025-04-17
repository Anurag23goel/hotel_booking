"use client";
import { useState, useEffect } from "react";

interface PropertyServicesFormProps {
  setCurrentForm: (form: string) => void;
  updateFormData: (data: { services: any }) => void;
  formData: any;
}

export default function PropertyServicesForm({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyServicesFormProps) {
  // Initialize local state with proper structure
  const [localServices, setLocalServices] = useState<{
    [key: string]: {
      [key: string]: string | string[];
    };
  }>(formData.services || {});

  // Initialize the form data if it's empty
  useEffect(() => {
    if (!formData.services) {
      updateFormData({ services: {} });
    }
  }, []);

  const servicesGroups = {
    "Breakfast & Dining": {
      "Breakfast Options": {
        type: "single",
        options: [
          {
            id: "free",
            label: "Free Breakfast",
            description: "Complimentary breakfast for all guests",
          },
          {
            id: "paid",
            label: "Paid Breakfast",
            description: "Available for an additional charge",
          },
          {
            id: "none",
            label: "No Breakfast",
            description: "Breakfast not available",
          },
        ],
      },
      "Kitchen Access": {
        type: "single",
        options: [
          {
            id: "private",
            label: "Private Kitchen",
            description: "Exclusive kitchen for guests",
          },
          {
            id: "shared",
            label: "Shared Kitchen",
            description: "Common kitchen facilities",
          },
          {
            id: "none",
            label: "No Kitchen Access",
            description: "No kitchen facilities available",
          },
        ],
      },
      "Cooking Arrangements": {
        type: "multiple",
        options: [
          "Self Cooking Allowed",
          "Professional Chef Available",
          "Room Service",
          "Outside Food Allowed",
        ],
      },
    },
    "Guest Facilities": {
      "Room Access": {
        type: "multiple",
        options: [
          "24/7 Room Access",
          "Key Card Access",
          "Fingerprint Access",
          "Reception Assistance",
        ],
      },
      "Guest Services": {
        type: "multiple",
        options: [
          "Daily Housekeeping",
          "Laundry Service",
          "Room Service",
          "Wake-up Calls",
          "Concierge Service",
        ],
      },
    },
    "Additional Services": {
      Transportation: {
        type: "multiple",
        options: [
          "Airport Pickup/Drop",
          "Car Rental",
          "Bike Rental",
          "Local Transport Assistance",
        ],
      },
      "Special Services": {
        type: "multiple",
        options: [
          "Tour Guide",
          "Currency Exchange",
          "Medical Assistance",
          "Luggage Storage",
        ],
      },
    },
  };

  const handleServiceChange = (
    category: string,
    service: string,
    value: any
  ) => {
    const newServices = {
      ...localServices,
      [category]: {
        ...(localServices[category] || {}),
        [service]: value,
      },
    };

    setLocalServices(newServices);
    updateFormData({ services: newServices });
  };

  const getServiceValue = (category: string, service: string, type: string) => {
    if (type === "single") {
      return localServices[category]?.[service] || "";
    }
    return localServices[category]?.[service] || [];
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Services & Rules at your property
      </h1>

      {Object.entries(servicesGroups).map(([groupName, services]) => (
        <div
          key={groupName}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-all hover:shadow-md"
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            <span className="bg-blue-100 text-blue-800 p-1.5 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            {groupName}
          </h2>

          <div className="space-y-6">
            {Object.entries(services).map(([serviceName, serviceConfig]) => (
              <div key={serviceName} className="border-t pt-4">
                <h3 className="text-md font-medium mb-3">{serviceName}</h3>

                {serviceConfig.type === "single" ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {serviceConfig.options.map((option) => (
                      <label
                        key={option.id}
                        className={`flex flex-col items-center justify-between p-4 rounded-lg cursor-pointer border-2 
                          ${
                            getServiceValue(
                              groupName,
                              serviceName,
                              "single"
                            ) === option.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:bg-gray-50"
                          } 
                          transition-all h-full`}
                      >
                        <input
                          type="radio"
                          name={`${groupName}-${serviceName}`}
                          value={option.id}
                          checked={
                            getServiceValue(
                              groupName,
                              serviceName,
                              "single"
                            ) === option.id
                          }
                          onChange={() =>
                            handleServiceChange(
                              groupName,
                              serviceName,
                              option.id
                            )
                          }
                          className="hidden"
                        />
                        <div className="text-center">
                          <span className="text-lg font-medium block">
                            {option.label}
                          </span>
                          <span className="text-sm text-gray-500">
                            {option.description}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceConfig.options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                          getServiceValue(
                            groupName,
                            serviceName,
                            "multiple"
                          ).includes(option)
                            ? "bg-blue-50 border-blue-300"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={getServiceValue(
                            groupName,
                            serviceName,
                            "multiple"
                          ).includes(option)}
                          onChange={(e) => {
                            const currentServices = getServiceValue( groupName, serviceName, "multiple") || [];
                              // isse select krha h yeh dekhna padega ek baar filter wala error
                            const newServices = e.target.checked
                              ? [...currentServices, option]
                              : currentServices.filter(
                                  (s: string) => s !== option
                                );
                            handleServiceChange(
                              groupName,
                              serviceName,
                              newServices
                            );
                          }}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span
                          className={`ml-3 ${
                            getServiceValue(
                              groupName,
                              serviceName,
                              "multiple"
                            ).includes(option)
                              ? "text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-3 h-14 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={() => setCurrentForm("propertyAmenities")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-lg transition-colors flex items-center justify-center font-medium"
          onClick={() => setCurrentForm("propertyRules")}
        >
          <span>Continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
