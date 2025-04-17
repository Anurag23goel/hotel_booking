"use client";

import { useState } from "react";

interface BedroomDetailsFormProps {
  setCurrentForm: (form: string) => void;
  updateRoomData: (data: any) => void;
  roomData: any;
}

interface BedroomDetails {
  hasAttachedBathroom: boolean;
  bathroomType: string;
  hasAttachedBalcony: boolean;
  balconyFurniture: boolean;
  amenities: {
    recommended: {
      bedsAndBlanket: string[];
      roomFeatures: string[];
      popularWithGuests: {
        housekeeping: string[];
        kettle: boolean;
        mineralWater: string;
        roomService: string[];
        wifi: string;
      };
    };
    allAmenities: {
      popularWithGuests: {
        airConditioning: string[];
        heater: string;
        housekeeping: string[];
        inRoomDining: string[];
        ironIroningBoard: boolean;
        mineralWater: string;
        roomService: string[];
        kettle: boolean;
        wifi: string;
        airPurifier: boolean;
        bathroom: string;
      };
      basicFacilities: {
        ironingServices: string;
        kitchenKitchenette: string[];
        lan: string;
        laundry: string;
        parking: string;
        powerBackup: string[];
        smokeDetector: string[];
        smokingRooms: boolean;
      };
      bathroom: string[];
      generalServices: {
        bellboyService: boolean;
        caretaker: boolean;
        luggageAssistance: boolean;
        luggageStorage: boolean;
        speciallyAbledAssistance: string[];
        wheelchair: string;
        butlerServices: string[];
      };
      roomFeatures: string[];
      mediaAndEntertainment: {
        tv: string[];
      };
      commonArea: string[];
      foodAndDrink: string[];
      bedsAndBlanket: string[];
      safetyAndSecurity: string[];
      childcare: string[];
      otherFacilities: string[];
      familyAndKids: string[];
    };
  };
}

export default function FacilitiesDetailsForm({
  setCurrentForm,
  updateRoomData,
  roomData,
}: BedroomDetailsFormProps) {
  const [bedroomDetails, setBedroomDetails] = useState<BedroomDetails>({
    hasAttachedBathroom: roomData.hasAttachedBathroom || false,
    bathroomType: roomData.bathroomType || "",
    hasAttachedBalcony: roomData.hasAttachedBalcony || false,
    balconyFurniture: roomData.balconyFurniture || false,
    amenities: {
      recommended: {
        bedsAndBlanket: roomData.amenities?.recommended?.bedsAndBlanket || [],
        roomFeatures: roomData.amenities?.recommended?.roomFeatures || [],
        popularWithGuests: {
          housekeeping:
            roomData.amenities?.recommended?.popularWithGuests?.housekeeping ||
            [],
          kettle:
            roomData.amenities?.recommended?.popularWithGuests?.kettle || false,
          mineralWater:
            roomData.amenities?.recommended?.popularWithGuests?.mineralWater ||
            "",
          roomService:
            roomData.amenities?.recommended?.popularWithGuests?.roomService ||
            [],
          wifi: roomData.amenities?.recommended?.popularWithGuests?.wifi || "",
        },
      },
      allAmenities: {
        popularWithGuests: {
          airConditioning:
            roomData.amenities?.allAmenities?.popularWithGuests
              ?.airConditioning || [],
          heater:
            roomData.amenities?.allAmenities?.popularWithGuests?.heater || "",
          housekeeping:
            roomData.amenities?.allAmenities?.popularWithGuests?.housekeeping ||
            [],
          inRoomDining:
            roomData.amenities?.allAmenities?.popularWithGuests?.inRoomDining ||
            [],
          ironIroningBoard:
            roomData.amenities?.allAmenities?.popularWithGuests
              ?.ironIroningBoard || false,
          mineralWater:
            roomData.amenities?.allAmenities?.popularWithGuests?.mineralWater ||
            "",
          roomService:
            roomData.amenities?.allAmenities?.popularWithGuests?.roomService ||
            [],
          kettle:
            roomData.amenities?.allAmenities?.popularWithGuests?.kettle ||
            false,
          wifi: roomData.amenities?.allAmenities?.popularWithGuests?.wifi || "",
          airPurifier:
            roomData.amenities?.allAmenities?.popularWithGuests?.airPurifier ||
            false,
          bathroom:
            roomData.amenities?.allAmenities?.popularWithGuests?.bathroom || "",
        },
        basicFacilities: {
          ironingServices:
            roomData.amenities?.allAmenities?.basicFacilities
              ?.ironingServices || "",
          kitchenKitchenette:
            roomData.amenities?.allAmenities?.basicFacilities
              ?.kitchenKitchenette || [],
          lan: roomData.amenities?.allAmenities?.basicFacilities?.lan || "",
          laundry:
            roomData.amenities?.allAmenities?.basicFacilities?.laundry || "",
          parking:
            roomData.amenities?.allAmenities?.basicFacilities?.parking || "",
          powerBackup:
            roomData.amenities?.allAmenities?.basicFacilities?.powerBackup ||
            [],
          smokeDetector:
            roomData.amenities?.allAmenities?.basicFacilities?.smokeDetector ||
            [],
          smokingRooms:
            roomData.amenities?.allAmenities?.basicFacilities?.smokingRooms ||
            false,
        },
        bathroom: roomData.amenities?.allAmenities?.bathroom || [],
        generalServices: {
          bellboyService:
            roomData.amenities?.allAmenities?.generalServices?.bellboyService ||
            false,
          caretaker:
            roomData.amenities?.allAmenities?.generalServices?.caretaker ||
            false,
          luggageAssistance:
            roomData.amenities?.allAmenities?.generalServices
              ?.luggageAssistance || false,
          luggageStorage:
            roomData.amenities?.allAmenities?.generalServices?.luggageStorage ||
            false,
          speciallyAbledAssistance:
            roomData.amenities?.allAmenities?.generalServices
              ?.speciallyAbledAssistance || [],
          wheelchair:
            roomData.amenities?.allAmenities?.generalServices?.wheelchair || "",
          butlerServices:
            roomData.amenities?.allAmenities?.generalServices?.butlerServices ||
            [],
        },
        roomFeatures: roomData.amenities?.allAmenities?.roomFeatures || [],
        mediaAndEntertainment: {
          tv: roomData.amenities?.allAmenities?.mediaAndEntertainment?.tv || [],
        },
        commonArea: roomData.amenities?.allAmenities?.commonArea || [],
        foodAndDrink: roomData.amenities?.allAmenities?.foodAndDrink || [],
        bedsAndBlanket: roomData.amenities?.allAmenities?.bedsAndBlanket || [],
        safetyAndSecurity:
          roomData.amenities?.allAmenities?.safetyAndSecurity || [],
        childcare: roomData.amenities?.allAmenities?.childcare || [],
        otherFacilities:
          roomData.amenities?.allAmenities?.otherFacilities || [],
        familyAndKids: roomData.amenities?.allAmenities?.familyAndKids || [],
      },
    },
  });

  const bedsAndBlanketOptions = ["Electric", "Woollen"];
  const roomFeatureOptions = ["Charging point", "Seating area", "Work desk"];
  const housekeepingOptions = ["24 hours", "Limited duration", "Daily"];
  const mineralWaterOptions = ["Free", "Paid"];
  const roomServiceOptions = ["24 hours", "Limited duration"];
  const wifiOptions = ["Free", "Paid"];
  const airConditioningOptions = [
    "Centralized",
    "Room controlled",
    "Temperature will be fixed as per Govt. norms",
    "Window AC",
    "Split AC",
  ];
  const heaterOptions = ["Free", "Paid"];
  const kitchenKitchenetteOptions = [
    "Cooking appliances",
    "Microwave",
    "Utensils",
    "Toaster",
    "Induction",
    "Cutlery",
  ];
  const powerBackupOptions = ["Genset", "Inverter"];
  const smokeDetectorOptions = ["In room", "Lobby"];
  const bathroomOptions = ["Bidet", "Toilet with grab rails"];
  const speciallyAbledAssistanceOptions = [
    "Auditory guidance",
    "Wheelchair",
    "Braille",
    "Tactile signs",
  ];
  const butlerServiceOptions = ["Personal", "For each floor"];
  const roomFeaturesAllOptions = [
    "Closet",
    "Blackout curtains",
    "Center Table",
    "Charging points",
    "International Adaptors",
    "Couch",
    "Fireplace",
    "Mini Bar",
    "Mini Fridge",
    "Sofa",
    "Sofa chair",
    "Sofa cum bed",
    "Telephone",
    "Local",
    "International calls",
    "Work Desk",
    "Pillow menu",
    "Hypoallergenic Bedding",
    "Seating Area",
    "Chair",
    "Fireplace Guards",
    "Coffee Machine",
    "Jaccuzi",
  ];
  const tvOptions = [
    "LED",
    "LCD",
    "Flat screen",
    "Cable",
    "Satellite channels",
    "Pay per view movies",
    "Netflix",
    "Hotstar",
    "Other OTT",
    "Pay per view channels",
    "Regional channels",
    "Limited channels",
    "Smart TV",
    "Non-smart LED TV",
    "Non-smart LCD TV",
  ];
  const commonAreaOptions = ["Balcony/terrace", "Verandah"];
  const foodAndDrinkOptions = ["Kids meals"];
  const safetyAndSecurityOptions = [
    "Cupboards with locks",
    "Safe",
    "Electronic",
  ];
  const childcareOptions = ["Child safety socket covers"];
  const otherFacilitiesOptions = [
    "Mosquito Net",
    "Newspaper",
    "Balcony",
    "Private",
    "Shared",
    "Private Pool",
    "Fan",
    "Ceiling",
    "Table",
  ];
  const familyAndKidsOptions = ["Childcare service", "Babysitting", "Cribs"];

  const handleArrayToggle = (array: string[], item: string): string[] => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const handleContinue = () => {
    updateRoomData(bedroomDetails);
    setCurrentForm("kitchenDetails");
  };

  const handleBack = () => {
    setCurrentForm("roomDetails");
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Bedroom Details</h1>

      {/* Attached Bathroom Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Does the room have an attached bathroom?
          </h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={bedroomDetails.hasAttachedBathroom === true}
                onChange={() =>
                  setBedroomDetails((prev) => ({
                    ...prev,
                    hasAttachedBathroom: true,
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={bedroomDetails.hasAttachedBathroom === false}
                onChange={() =>
                  setBedroomDetails((prev) => ({
                    ...prev,
                    hasAttachedBathroom: false,
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {bedroomDetails.hasAttachedBathroom && (
          <div>
            <h3 className="font-medium mb-2">Select the attached bathroom</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bedroomDetails.bathroomType === "private"}
                  onChange={() =>
                    setBedroomDetails((prev) => ({
                      ...prev,
                      bathroomType: "private",
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2">Private</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bedroomDetails.bathroomType === "shared"}
                  onChange={() =>
                    setBedroomDetails((prev) => ({
                      ...prev,
                      bathroomType: "shared",
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2">Shared</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Attached Balcony Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Does the room come with an attached balcony?
        </h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              checked={bedroomDetails.hasAttachedBalcony === true}
              onChange={() =>
                setBedroomDetails((prev) => ({
                  ...prev,
                  hasAttachedBalcony: true,
                }))
              }
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={bedroomDetails.hasAttachedBalcony === false}
              onChange={() =>
                setBedroomDetails((prev) => ({
                  ...prev,
                  hasAttachedBalcony: false,
                }))
              }
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2">No</span>
          </label>
        </div>

        {bedroomDetails.hasAttachedBalcony && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">
              Do you have outdoor furniture on the balcony?
            </h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bedroomDetails.balconyFurniture === true}
                  onChange={() =>
                    setBedroomDetails((prev) => ({
                      ...prev,
                      balconyFurniture: true,
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bedroomDetails.balconyFurniture === false}
                  onChange={() =>
                    setBedroomDetails((prev) => ({
                      ...prev,
                      balconyFurniture: false,
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Amenities Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
        <h2 className="text-lg font-semibold mb-6">Bedroom Amenities</h2>

        {/* Recommended Amenities */}
        <div className="mb-8">
          <h3 className="font-medium mb-4">Recommended Amenities</h3>

          {/* Beds and Blanket */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Beds and Blanket
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {bedsAndBlanketOptions.map((item) => (
                <label
                  key={item}
                  className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                    bedroomDetails.amenities.recommended.bedsAndBlanket.includes(
                      item
                    )
                      ? "bg-blue-50 border-blue-300"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={bedroomDetails.amenities.recommended.bedsAndBlanket.includes(
                      item
                    )}
                    onChange={() => {
                      const newBeds = handleArrayToggle(
                        bedroomDetails.amenities.recommended.bedsAndBlanket,
                        item
                      );
                      setBedroomDetails((prev) => ({
                        ...prev,
                        amenities: {
                          ...prev.amenities,
                          recommended: {
                            ...prev.amenities.recommended,
                            bedsAndBlanket: newBeds,
                          },
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Room Features */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Room Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {roomFeatureOptions.map((item) => (
                <label
                  key={item}
                  className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointerGES 2
                    bedroomDetails.amenities.recommended.roomFeatures.includes(item)
                      ? "bg-blue-50 border-blue-300"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={bedroomDetails.amenities.recommended.roomFeatures.includes(
                      item
                    )}
                    onChange={() => {
                      const newFeatures = handleArrayToggle(
                        bedroomDetails.amenities.recommended.roomFeatures,
                        item
                      );
                      setBedroomDetails((prev) => ({
                        ...prev,
                        amenities: {
                          ...prev.amenities,
                          recommended: {
                            ...prev.amenities.recommended,
                            roomFeatures: newFeatures,
                          },
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Popular with Guests */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Popular with Guests
            </h4>
            <div className="space-y-6">
              {/* Housekeeping */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Housekeeping
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {housekeepingOptions.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                        bedroomDetails.amenities.recommended.popularWithGuests.housekeeping.includes(
                          item
                        )
                          ? "bg-blue-50 border-blue-300"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={bedroomDetails.amenities.recommended.popularWithGuests.housekeeping.includes(
                          item
                        )}
                        onChange={() => {
                          const newHousekeeping = handleArrayToggle(
                            bedroomDetails.amenities.recommended
                              .popularWithGuests.housekeeping,
                            item
                          );
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              recommended: {
                                ...prev.amenities.recommended,
                                popularWithGuests: {
                                  ...prev.amenities.recommended
                                    .popularWithGuests,
                                  housekeeping: newHousekeeping,
                                },
                              },
                            },
                          }));
                        }}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Kettle */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      bedroomDetails.amenities.recommended.popularWithGuests
                        .kettle
                    }
                    onChange={(e) =>
                      setBedroomDetails((prev) => ({
                        ...prev,
                        amenities: {
                          ...prev.amenities,
                          recommended: {
                            ...prev.amenities.recommended,
                            popularWithGuests: {
                              ...prev.amenities.recommended.popularWithGuests,
                              kettle: e.target.checked,
                            },
                          },
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">Kettle</span>
                </label>
              </div>

              {/* Mineral Water */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Mineral Water
                </h5>
                <div className="space-y-2">
                  {mineralWaterOptions.map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          bedroomDetails.amenities.recommended.popularWithGuests
                            .mineralWater === option
                        }
                        onChange={() =>
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              recommended: {
                                ...prev.amenities.recommended,
                                popularWithGuests: {
                                  ...prev.amenities.recommended
                                    .popularWithGuests,
                                  mineralWater: option,
                                },
                              },
                            },
                          }))
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Room Service */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Room Service
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {roomServiceOptions.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                        bedroomDetails.amenities.recommended.popularWithGuests.roomService.includes(
                          item
                        )
                          ? "bg-blue-50 border-blue-300"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={bedroomDetails.amenities.recommended.popularWithGuests.roomService.includes(
                          item
                        )}
                        onChange={() => {
                          const newRoomService = handleArrayToggle(
                            bedroomDetails.amenities.recommended
                              .popularWithGuests.roomService,
                            item
                          );
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              recommended: {
                                ...prev.amenities.recommended,
                                popularWithGuests: {
                                  ...prev.amenities.recommended
                                    .popularWithGuests,
                                  roomService: newRoomService,
                                },
                              },
                            },
                          }));
                        }}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wi-Fi */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Wi-Fi
                </h5>
                <div className="space-y-2">
                  {wifiOptions.map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          bedroomDetails.amenities.recommended.popularWithGuests
                            .wifi === option
                        }
                        onChange={() =>
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              recommended: {
                                ...prev.amenities.recommended,
                                popularWithGuests: {
                                  ...prev.amenities.recommended
                                    .popularWithGuests,
                                  wifi: option,
                                },
                              },
                            },
                          }))
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Amenities */}
        <div>
          <h3 className="font-medium mb-4">All Amenities</h3>

          {/* Popular with Guests */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Popular with Guests
            </h4>
            <div className="space-y-6">
              {/* Air Conditioning */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Air Conditioning
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {airConditioningOptions.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                        bedroomDetails.amenities.allAmenities.popularWithGuests.airConditioning.includes(
                          item
                        )
                          ? "bg-blue-50 border-blue-300"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={bedroomDetails.amenities.allAmenities.popularWithGuests.airConditioning.includes(
                          item
                        )}
                        onChange={() => {
                          const newAC = handleArrayToggle(
                            bedroomDetails.amenities.allAmenities
                              .popularWithGuests.airConditioning,
                            item
                          );
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              allAmenities: {
                                ...prev.amenities.allAmenities,
                                popularWithGuests: {
                                  ...prev.amenities.allAmenities
                                    .popularWithGuests,
                                  airConditioning: newAC,
                                },
                              },
                            },
                          }));
                        }}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Heater */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Heater
                </h5>
                <div className="space-y-2">
                  {heaterOptions.map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          bedroomDetails.amenities.allAmenities
                            .popularWithGuests.heater === option
                        }
                        onChange={() =>
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              allAmenities: {
                                ...prev.amenities.allAmenities,
                                popularWithGuests: {
                                  ...prev.amenities.allAmenities
                                    .popularWithGuests,
                                  heater: option,
                                },
                              },
                            },
                          }))
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add other popularWithGuests fields similarly */}
            </div>
          </div>

          {/* Basic Facilities */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Basic Facilities
            </h4>
            <div className="space-y-6">
              {/* Kitchen/Kitchenette */}
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">
                  Kitchen/Kitchenette
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {kitchenKitchenetteOptions.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                        bedroomDetails.amenities.allAmenities.basicFacilities.kitchenKitchenette.includes(
                          item
                        )
                          ? "bg-blue-50 border-blue-300"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={bedroomDetails.amenities.allAmenities.basicFacilities.kitchenKitchenette.includes(
                          item
                        )}
                        onChange={() => {
                          const newKitchen = handleArrayToggle(
                            bedroomDetails.amenities.allAmenities
                              .basicFacilities.kitchenKitchenette,
                            item
                          );
                          setBedroomDetails((prev) => ({
                            ...prev,
                            amenities: {
                              ...prev.amenities,
                              allAmenities: {
                                ...prev.amenities.allAmenities,
                                basicFacilities: {
                                  ...prev.amenities.allAmenities
                                    .basicFacilities,
                                  kitchenKitchenette: newKitchen,
                                },
                              },
                            },
                          }));
                        }}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Add other allAmenities categories similarly */}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
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
          Back
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
