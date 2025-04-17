"use client";
import { useState } from "react";
import PropertyTypeSelection from "./HomePropertyCategory/HomeProperty-type-selection";
import PropertyQuantityForm from "./HomePropertyCategory/HomeProperty-quantity-form";
import PropertyConfirmationForm from "./HomePropertyCategory/HomeProperty-confirmation-form";
import PropertyLocationForm from "./HomePropertyCategory/HomeProperty-location-form";
import ChannelManagerForm from "./HomePropertyCategory/HomeChannel-manager-form";
import PropertyDetailsForm from "./HomePropertyCategory/HomeProperty-details-form";
import PropertyAmenitiesForm from "./HomePropertyCategory/HomeProperty-amenities-form";
import PropertyServicesForm from "./HomePropertyCategory/HomeProperty-services-form";
import PropertyLanguagesForm from "./HomePropertyCategory/HomeProperty-languages-form";
import PropertyRulesForm from "./HomePropertyCategory/HomeProperty-rules-form";
import PropertySummaryForm from "./HomePropertyCategory/HomeProperty-summary-form";
import PropertyPhotosForm from "./HomePropertyCategory/HomeProperty-photos-form";
import AddRoomFlow from "./add-HomeRoom-flow";
import FinalDetailsFlow from "./final-HomeDetails-flow";
import ProgressBar from "./HomePropertyCategory/progress-bar";
import Navbar from "@/custom_components/navbar";
import PropertyPOVSelection from "./HomePropertyCategory/HomePOV-selection-form";

export default function Home() {
  const [currentForm, setCurrentForm] = useState<string>("propertyPOV");
  const [showAddRoomFlow, setShowAddRoomFlow] = useState(false);
  const [showFinalDetailsFlow, setShowFinalDetailsFlow] = useState(false);
  const [currentRoomForm, setCurrentRoomForm] = useState("roomDetails");
  const [currentFinalDetailsForm, setCurrentFinalDetailsForm] =
    useState("invoicing");

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
    photos: [] as any[],
    rooms: [] as any[],
    finalDetails: {
      invoicing: {},
      licenseNumber: {},
      partnerVerification: {},
      taxDetails: {},
    },
  });

  const [roomData, setRoomData] = useState({});
  const [finalDetailsData, setFinalDetailsData] = useState<{
    invoicing?: Record<string, any>;
    licenseNumber?: Record<string, any>;
    partnerVerification?: Record<string, any>;
    taxDetails?: Record<string, any>;
  }>({});

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const updateRoomData = (data: any) => {
    setRoomData((prev) => ({ ...prev, ...data }));
  };

  const updateFinalDetailsData = (data: any) => {
    setFinalDetailsData((prev) => ({ ...prev, ...data }));
  };
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const handleFinishAddingRoom = () => {
    setFormData((prev) => ({
      ...prev,
      rooms: [...prev.rooms, roomData],
    }));
    setShowAddRoomFlow(false);
    setRoomData({});
  };

  const handleFinishFinalDetails = () => {
    setFormData((prev) => ({
      ...prev,
      finalDetails: {
        invoicing: finalDetailsData.invoicing || {},
        licenseNumber: finalDetailsData.licenseNumber || {},
        partnerVerification: finalDetailsData.partnerVerification || {},
        taxDetails: finalDetailsData.taxDetails || {},
      },
    }));
    setShowFinalDetailsFlow(false);
    setCurrentForm("propertySummary");
  };

  const handleDeleteRoom = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms.filter((_, i) => i !== index),
    }));
  };

  const getProgressPercentage = () => {
    const formSteps = [
      "propertyPOV",
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
      "propertyPhotos",
    ];

    const currentIndex = formSteps.indexOf(currentForm);

    // If we're at the summary page, show 85% progress
    if (currentForm === "propertySummary" && formData.rooms.length === 0) {
      return 85;
    }

    // If we've added rooms, show 92% progress
    if (
      currentForm === "propertySummary" &&
      formData.rooms.length > 0 &&
      !formData.finalDetails.taxDetails
    ) {
      return 92;
    }

    // If we've completed final details, show 100%
    if (currentForm === "propertySummary" && formData.finalDetails.taxDetails) {
      return 100;
    }

    return Math.round((currentIndex / (formSteps.length - 1)) * 100);
  };

  const renderForm = () => {
    if (showAddRoomFlow) {
      return (
        <AddRoomFlow
          currentForm={currentRoomForm}
          formData={formData}
          setCurrentForm={setCurrentRoomForm}
          roomData={roomData}
          updateRoomData={updateRoomData}
          onFinish={handleFinishAddingRoom}
          onCancel={() => {
            setShowAddRoomFlow(false);
            setRoomData({});
          }}
        />
      );
    }

    if (showFinalDetailsFlow) {
      return (
        <FinalDetailsFlow
          currentForm={currentFinalDetailsForm}
          setCurrentForm={setCurrentFinalDetailsForm}
          finalDetailsData={finalDetailsData}
          updateFinalDetailsData={updateFinalDetailsData}
          onFinish={handleFinishFinalDetails}
          onCancel={() => {
            setShowFinalDetailsFlow(false);
            setFinalDetailsData({});
          }}
        />
      );
    }

    switch (currentForm) {
      case "propertyPOV":
        return (
          <PropertyPOVSelection
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertyType":
        return (
          <PropertyTypeSelection
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertyQuantity":
        return (
          <PropertyQuantityForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertyConfirmation":
        return (
          <PropertyConfirmationForm
            setCurrentForm={setCurrentForm}
            formData={formData}
          />
        );
      case "propertyLocation":
        return (
          <PropertyLocationForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      // case "channelManager":
      //   return (
      //     <ChannelManagerForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
      //   )
      case "propertyDetails":
        return (
          <PropertyDetailsForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertyAmenities":
        return (
          <PropertyAmenitiesForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertyServices":
        return (
          <PropertyServicesForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      // case "propertyLanguages":
      //   return (
      //     <PropertyLanguagesForm setCurrentForm={setCurrentForm} updateFormData={updateFormData} formData={formData} />
      //   )
      case "propertyRules":
        return (
          <PropertyRulesForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case "propertySummary":
        return (
          <PropertySummaryForm
            setCurrentForm={setCurrentForm}
            formData={formData}
            onAddRoom={() => {
              setShowAddRoomFlow(true);
              setCurrentRoomForm("roomDetails");
            }}
            onAddFinalDetails={() => {
              setShowFinalDetailsFlow(true);
              setCurrentFinalDetailsForm("invoicing");
            }}
            onDeleteRoom={handleDeleteRoom}
            onEditRoom={(index: number) => {
              setShowAddRoomFlow(true);
              setCurrentRoomForm("roomDetails");
              // Set the current room data for editing
              const roomToEdit: any = formData.rooms[index];
              if (roomToEdit) {
                updateRoomData(roomToEdit);
              }
            }}
          />
        );
      case "propertyPhotos":
        return (
          <PropertyPhotosForm
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      default:
        return (
          <PropertyTypeSelection
            setCurrentForm={setCurrentForm}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      {!showAddRoomFlow && !showFinalDetailsFlow && (
        <>
          <Navbar />
          <ProgressBar percentage={getProgressPercentage()} />
        </>
      )}

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </main>
  );
}
