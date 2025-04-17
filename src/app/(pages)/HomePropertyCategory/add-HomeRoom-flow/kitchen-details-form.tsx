"use client";

import { useState } from "react";

interface KitchenDetailsFormProps {
  setCurrentForm: (form: string) => void;
  updateRoomData: (data: any) => void;
  roomData: any;
  formData: any;
}

interface KitchenDetails {
  hasKitchen: boolean;
  kitchenAccess: {
    guestsCanCook: boolean;
    accessType: string;
    allowNonVegMeals: boolean;
  };
  cookInformation: {
    hasCook: boolean;
    meals: string[];
    canPrepareNonVeg: boolean;
    cuisines: string[];
    charges: {
      type: string;
      amount: string;
    };
  };
  staffServices: {
    dishwashing: {
      enabled: boolean;
      chargeType: string;
      charges: string;
    };
    groceryShopping: boolean;
  };
  amenities: {
    recommended: {
      roomFeatures: string[];
      kitchenAppliances: string[];
      cookingBasics: string[];
    };
    allAmenities: {
      basicFacilities: {
        smokeDetector: string[];
      };
      generalServices: {
        butlerServices: string[];
      };
      roomFeatures: string[];
      foodAndDrinks: string[];
      kitchenAppliances: string[];
      security: string[];
    };
  };
}

export default function KitchenDetailsForm({
  setCurrentForm,
  updateRoomData,
  roomData,
  formData,
}: KitchenDetailsFormProps) {
  const [kitchenDetails, setKitchenDetails] = useState<KitchenDetails>({
    hasKitchen: roomData.hasKitchen || false,
    kitchenAccess: {
      guestsCanCook: roomData.kitchenAccess?.guestsCanCook || false,
      accessType: roomData.kitchenAccess?.accessType || "",
      allowNonVegMeals: roomData.kitchenAccess?.allowNonVegMeals || false,
    },
    cookInformation: {
      hasCook: roomData.cookInformation?.hasCook || false,
      meals: roomData.cookInformation?.meals || [],
      canPrepareNonVeg: roomData.cookInformation?.canPrepareNonVeg || false,
      cuisines: roomData.cookInformation?.cuisines || [],
      charges: {
        type: roomData.cookInformation?.charges?.type || "free",
        amount: roomData.cookInformation?.charges?.amount || "",
      },
    },
    staffServices: {
      dishwashing: {
        enabled: roomData.staffServices?.dishwashing?.enabled || false,
        chargeType: roomData.staffServices?.dishwashing?.chargeType || "free",
        charges: roomData.staffServices?.dishwashing?.charges || "",
      },
      groceryShopping: roomData.staffServices?.groceryShopping || false,
    },
    amenities: {
      recommended: {
        roomFeatures: roomData.amenities?.recommended?.roomFeatures || [],
        kitchenAppliances:
          roomData.amenities?.recommended?.kitchenAppliances || [],
        cookingBasics: roomData.amenities?.recommended?.cookingBasics || [],
      },
      allAmenities: {
        basicFacilities: {
          smokeDetector:
            roomData.amenities?.allAmenities?.basicFacilities?.smokeDetector ||
            [],
        },
        generalServices: {
          butlerServices:
            roomData.amenities?.allAmenities?.generalServices?.butlerServices ||
            [],
        },
        roomFeatures: roomData.amenities?.allAmenities?.roomFeatures || [],
        foodAndDrinks: roomData.amenities?.allAmenities?.foodAndDrinks || [],
        kitchenAppliances:
          roomData.amenities?.allAmenities?.kitchenAppliances || [],
        security: roomData.amenities?.allAmenities?.security || [],
      },
    },
  });

  console.log("this is form data -> ", formData.accommodationType);

  const mealOptions = ["Breakfast", "Lunch", "Evening snacks", "Dinner"];
  const cuisineOptions = [
    "North India",
    "South India",
    "Chinese",
    "Continental",
    "Local",
  ];
  const cookingBasics = [
    "Pots",
    "Pans",
    "Cooking oil",
    "Cooker",
    "Dishes",
    "Silverware",
    "Salt & pepper",
    "Seasoning",
    "Tableware",
  ];
  const kitchenAppliances = [
    "Microwave oven",
    "Dishwasher",
    "Microwave",
    "Refrigerator",
    "Rice cooker",
    "Stove/Induction",
    "LPG",
    "Toaster",
  ];

  const handleKitchenAccessChange = (field: string, value: any) => {
    setKitchenDetails((prev) => ({
      ...prev,
      kitchenAccess: {
        ...prev.kitchenAccess,
        [field]: value,
      },
    }));
  };

  const handleStaffServiceChange = (
    service: string,
    field: string,
    value: any
  ) => {
    setKitchenDetails((prev) => ({
      ...prev,
      staffServices: {
        ...prev.staffServices,
        [service]: {
          ...prev.staffServices[service],
          [field]: value,
        },
      },
    }));
  };

  const handleCookInformationChange = (field: string, value: any) => {
    setKitchenDetails((prev) => ({
      ...prev,
      cookInformation: {
        ...prev.cookInformation,
        [field]: value,
      },
    }));
  };

  const handleArrayToggle = (array: string[], item: string): string[] => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const handleContinue = () => {
    updateRoomData(kitchenDetails);
    setCurrentForm("roomName");
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Kitchen Details</h1>

      {/* Kitchen Availability Section - Always shown */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Does your property have a kitchen?
          </h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={kitchenDetails.hasKitchen === true}
                onChange={() =>
                  setKitchenDetails((prev) => ({ ...prev, hasKitchen: true }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={kitchenDetails.hasKitchen === false}
                onChange={() =>
                  setKitchenDetails((prev) => ({ ...prev, hasKitchen: false }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Show additional sections only for entire accommodations */}
      {(formData.accommodationType === "entire" ||
        (formData.accommodationType === "private" &&
          (formData.propertyType === "apart-hotel" ||
            formData.propertyType === "hostel"))) &&
        kitchenDetails.hasKitchen && (
          <>
            {/* Kitchen Access Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="text-lg font-semibold mb-4">
                Kitchen Access & Restrictions for Guests
              </h2>

              <div className="space-y-6">
                {/* Guest Cooking Access */}
                <div>
                  <h3 className="font-medium mb-2">
                    Do guests have access to the kitchen to cook their meals?
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.guestsCanCook === true
                        }
                        onChange={() =>
                          handleKitchenAccessChange("guestsCanCook", true)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.guestsCanCook === false
                        }
                        onChange={() =>
                          handleKitchenAccessChange("guestsCanCook", false)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                {/* Access Type */}
                <div>
                  <h3 className="font-medium mb-2">
                    Type of access for the kitchen
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Please specify if the access to the kitchen is private or
                    shared for guests
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.accessType === "private"
                        }
                        onChange={() =>
                          handleKitchenAccessChange("accessType", "private")
                        }
                        className="h-5 w-5 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <span className="font-medium block">
                          Private Access to the kitchen
                        </span>
                        <span className="text-sm text-gray-500">
                          Guests will have private access to the kitchen space &
                          amenities
                        </span>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.accessType === "shared"
                        }
                        onChange={() =>
                          handleKitchenAccessChange("accessType", "shared")
                        }
                        className="h-5 w-5 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <span className="font-medium block">
                          Shared Access to the kitchen
                        </span>
                        <span className="text-sm text-gray-500">
                          Guests will have to share the kitchen space &
                          amenities with other guests
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Non-veg Meals */}
                <div>
                  <h3 className="font-medium mb-2">
                    Are guests allowed to prepare non-veg meals in the kitchen?
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Select yes if guests can cook non-veg meals including eggs
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.allowNonVegMeals === true
                        }
                        onChange={() =>
                          handleKitchenAccessChange("allowNonVegMeals", true)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          kitchenDetails.kitchenAccess.allowNonVegMeals ===
                          false
                        }
                        onChange={() =>
                          handleKitchenAccessChange("allowNonVegMeals", false)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                {/* Staff Services */}
                <div>
                  <h3 className="font-medium mb-2">
                    Property staff will help with (optional)
                  </h3>
                  <div className="space-y-4">
                    {/* Dishwashing */}
                    <div className="border-b pb-4">
                      <label className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          checked={
                            kitchenDetails.staffServices.dishwashing.enabled
                          }
                          onChange={(e) =>
                            handleStaffServiceChange(
                              "dishwashing",
                              "enabled",
                              e.target.checked
                            )
                          }
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2">Dishwashing</span>
                      </label>

                      {kitchenDetails.staffServices.dishwashing.enabled && (
                        <div className="ml-7 space-y-3">
                          <p className="text-sm text-gray-500">
                            Property staff charges (Per day)
                          </p>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                checked={
                                  kitchenDetails.staffServices.dishwashing
                                    .chargeType === "free"
                                }
                                onChange={() =>
                                  handleStaffServiceChange(
                                    "dishwashing",
                                    "chargeType",
                                    "free"
                                  )
                                }
                                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2">Free</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                checked={
                                  kitchenDetails.staffServices.dishwashing
                                    .chargeType === "paid"
                                }
                                onChange={() =>
                                  handleStaffServiceChange(
                                    "dishwashing",
                                    "chargeType",
                                    "paid"
                                  )
                                }
                                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2">Paid</span>
                            </label>
                            {kitchenDetails.staffServices.dishwashing
                              .chargeType === "paid" && (
                              <div className="ml-7">
                                <input
                                  type="number"
                                  placeholder="Enter charges"
                                  value={
                                    kitchenDetails.staffServices.dishwashing
                                      .charges
                                  }
                                  onChange={(e) =>
                                    handleStaffServiceChange(
                                      "dishwashing",
                                      "charges",
                                      e.target.value
                                    )
                                  }
                                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Grocery Shopping */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={kitchenDetails.staffServices.groceryShopping}
                        onChange={(e) =>
                          setKitchenDetails((prev) => ({
                            ...prev,
                            staffServices: {
                              ...prev.staffServices,
                              groceryShopping: e.target.checked,
                            },
                          }))
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2">Purchasing Groceries</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cook Information Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="text-lg font-semibold mb-6">Cook Information</h2>

              <div className="space-y-6">
                {/* Has Cook */}
                <div>
                  <h3 className="font-medium mb-2">
                    Do you have a cook to prepare meals for the Guests?
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Select yes if you have a personal cook to prepare customised
                    meals
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={kitchenDetails.cookInformation.hasCook}
                        onChange={() =>
                          handleCookInformationChange("hasCook", true)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!kitchenDetails.cookInformation.hasCook}
                        onChange={() =>
                          handleCookInformationChange("hasCook", false)
                        }
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                {kitchenDetails.cookInformation.hasCook && (
                  <>
                    {/* Meals Prepared */}
                    <div>
                      <h3 className="font-medium mb-2">
                        Meals Prepared by the Cook
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Select all the meals that the cook can prepare
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mealOptions.map((meal) => (
                          <label
                            key={meal}
                            className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                              kitchenDetails.cookInformation.meals.includes(
                                meal
                              )
                                ? "bg-blue-50 border-blue-300"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={kitchenDetails.cookInformation.meals.includes(
                                meal
                              )}
                              onChange={() =>
                                handleCookInformationChange(
                                  "meals",
                                  handleArrayToggle(
                                    kitchenDetails.cookInformation.meals,
                                    meal
                                  )
                                )
                              }
                              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-3">{meal}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Non-veg Meals */}
                    <div>
                      <h3 className="font-medium mb-2">
                        Can the cook prepare non-veg meals for the guests?
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Select YES if the cook will prepare non-veg meals
                        including eggs
                      </p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={
                              kitchenDetails.cookInformation.canPrepareNonVeg
                            }
                            onChange={() =>
                              handleCookInformationChange(
                                "canPrepareNonVeg",
                                true
                              )
                            }
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={
                              !kitchenDetails.cookInformation.canPrepareNonVeg
                            }
                            onChange={() =>
                              handleCookInformationChange(
                                "canPrepareNonVeg",
                                false
                              )
                            }
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    {/* Cuisines */}
                    <div>
                      <h3 className="font-medium mb-2">
                        Cuisines Prepared by the Cook
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Select all the cuisines that the cook can prepare
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cuisineOptions.map((cuisine) => (
                          <label
                            key={cuisine}
                            className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                              kitchenDetails.cookInformation.cuisines.includes(
                                cuisine
                              )
                                ? "bg-blue-50 border-blue-300"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={kitchenDetails.cookInformation.cuisines.includes(
                                cuisine
                              )}
                              onChange={() =>
                                handleCookInformationChange(
                                  "cuisines",
                                  handleArrayToggle(
                                    kitchenDetails.cookInformation.cuisines,
                                    cuisine
                                  )
                                )
                              }
                              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-3">{cuisine}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Cook Charges */}
                    <div>
                      <h3 className="font-medium mb-2">Cook Charges</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Mention the cook charges applicable for your
                        property`&apos;`s Base Occupancy
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={
                              kitchenDetails.cookInformation.charges.type ===
                              "free"
                            }
                            onChange={() =>
                              handleCookInformationChange("charges", {
                                type: "free",
                                amount: "",
                              })
                            }
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2">Free</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={
                              kitchenDetails.cookInformation.charges.type ===
                              "paid"
                            }
                            onChange={() =>
                              handleCookInformationChange("charges", {
                                type: "paid",
                                amount: "",
                              })
                            }
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2">Paid</span>
                        </label>
                        {kitchenDetails.cookInformation.charges.type ===
                          "paid" && (
                          <div className="ml-7">
                            <input
                              type="number"
                              placeholder="Enter charges"
                              value={
                                kitchenDetails.cookInformation.charges.amount
                              }
                              onChange={(e) =>
                                handleCookInformationChange("charges", {
                                  type: "paid",
                                  amount: e.target.value,
                                })
                              }
                              className="mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Kitchen Amenities Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="text-lg font-semibold mb-6">Kitchen Amenities</h2>

              {/* Recommended Amenities */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Recommended Amenities</h3>

                {/* Cooking Basics */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Cooking Basics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cookingBasics.map((item) => (
                      <label
                        key={item}
                        className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                          kitchenDetails.amenities.recommended.cookingBasics.includes(
                            item
                          )
                            ? "bg-blue-50 border-blue-300"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={kitchenDetails.amenities.recommended.cookingBasics.includes(
                            item
                          )}
                          onChange={() => {
                            const newBasics = handleArrayToggle(
                              kitchenDetails.amenities.recommended
                                .cookingBasics,
                              item
                            );
                            setKitchenDetails((prev) => ({
                              ...prev,
                              amenities: {
                                ...prev.amenities,
                                recommended: {
                                  ...prev.amenities.recommended,
                                  cookingBasics: newBasics,
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

                {/* Kitchen Appliances */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Kitchen Appliances
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {kitchenAppliances.map((item) => (
                      <label
                        key={item}
                        className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                          kitchenDetails.amenities.recommended.kitchenAppliances.includes(
                            item
                          )
                            ? "bg-blue-50 border-blue-300"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={kitchenDetails.amenities.recommended.kitchenAppliances.includes(
                            item
                          )}
                          onChange={() => {
                            const newAppliances = handleArrayToggle(
                              kitchenDetails.amenities.recommended
                                .kitchenAppliances,
                              item
                            );
                            setKitchenDetails((prev) => ({
                              ...prev,
                              amenities: {
                                ...prev.amenities,
                                recommended: {
                                  ...prev.amenities.recommended,
                                  kitchenAppliances: newAppliances,
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
          </>
        )}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={() => setCurrentForm("bathroomDetails")}
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
