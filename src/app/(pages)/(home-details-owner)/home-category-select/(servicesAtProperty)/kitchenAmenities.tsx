import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HouseRules from "./houseRules";
interface KitchenAmenitiesFormData {
  // Recommended Section
  recommended: {
    roomFeatures: {
      coffeeMachine: boolean;
    };
    kitchenAndAppliances: {
      cookingBasics: {
        pots: boolean;
        pans: boolean;
        cookingOil: boolean;
        cooker: boolean;
        dishes: boolean;
        silverware: boolean;
        saltAndPepper: boolean;
        seasoning: boolean;
        tableware: boolean;
        microwaveOven: boolean;
      };
      dishwasher: "free" | "paid" | "none";
      microwave: boolean;
      refrigerator: boolean;
      riceCooker: boolean;
      stoveInduction: {
        type: "lpg" | "induction";
      };
      toaster: boolean;
    };
    popularWithGuests: {
      kettle: boolean;
    };
  };
  // All Amenities Section
  allAmenities: {
    basicFacilities: {
      smokeDetector: {
        inRoom: boolean;
        lobby: boolean;
      };
    };
    popularWithGuests: {
      kettle: boolean;
    };
    generalService: {
      butlerServices: "personal" | "floor" | "none";
    };
    roomFeatures: {
      diningArea: boolean;
      coffeeMachine: boolean;
    };
    foodAndDrinks: {
      kidsMeals: boolean;
      bakery: boolean;
    };
    kitchenAndAppliances: {
      stoveInduction: boolean;
      dishwasher: boolean;
      refrigerator: boolean;
      cookingBasics: boolean;
      toaster: boolean;
      microwave: boolean;
      riceCooker: boolean;
    };
    security: {
      carbonMonoxideDetector: boolean;
    };
  };
}

const KitchenAmenities = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<KitchenAmenitiesFormData>({
    defaultValues: {
      recommended: {
        roomFeatures: {
          coffeeMachine: false,
        },
        kitchenAndAppliances: {
          cookingBasics: {
            pots: false,
            pans: false,
            cookingOil: false,
            cooker: false,
            dishes: false,
            silverware: false,
            saltAndPepper: false,
            seasoning: false,
            tableware: false,
            microwaveOven: false,
          },
          dishwasher: "none",
          microwave: false,
          refrigerator: false,
          riceCooker: false,
          stoveInduction: {
            type: "lpg",
          },
          toaster: false,
        },
        popularWithGuests: {
          kettle: false,
        },
      },
      allAmenities: {
        basicFacilities: {
          smokeDetector: {
            inRoom: false,
            lobby: false,
          },
        },
        popularWithGuests: {
          kettle: false,
        },
        generalService: {
          butlerServices: "none",
        },
        roomFeatures: {
          diningArea: false,
          coffeeMachine: false,
        },
        foodAndDrinks: {
          kidsMeals: false,
          bakery: false,
        },
        kitchenAndAppliances: {
          stoveInduction: false,
          dishwasher: false,
          refrigerator: false,
          cookingBasics: false,
          toaster: false,
          microwave: false,
          riceCooker: false,
        },
        security: {
          carbonMonoxideDetector: false,
        },
      },
    },
  });
  const [showHouseRules, setShowHouseRules] = useState(false);
  if (showHouseRules) {
    return <HouseRules />;
  }

  const onSubmit = (data: KitchenAmenitiesFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl w-full space-y-4 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-gray-900">
              Kitchen Amenities
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Recommended Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
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
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Recommended
                  </h2>
                </div>

                {/* Room Features */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Room Features
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("recommended.roomFeatures.coffeeMachine")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Coffee Machine
                      </span>
                    </label>
                  </div>
                </div>

                {/* Kitchen and Appliances */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Kitchen and Appliances
                  </h3>

                  {/* Cooking Basics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">
                      Cooking Basics
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.pots"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Pots</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.pans"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Pans</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.cookingOil"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Cooking oil
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.cooker"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Cooker</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.dishes"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Dishes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.silverware"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Silverware
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.saltAndPepper"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Salt & pepper
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.seasoning"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Seasoning</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.tableware"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Tableware</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.cookingBasics.microwaveOven"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Microwave oven
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Dishwasher */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">
                      Dishwasher
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="free"
                          {...register(
                            "recommended.kitchenAndAppliances.dishwasher"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Free</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="paid"
                          {...register(
                            "recommended.kitchenAndAppliances.dishwasher"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Paid</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="none"
                          {...register(
                            "recommended.kitchenAndAppliances.dishwasher"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">None</span>
                      </label>
                    </div>
                  </div>

                  {/* Other Appliances */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.microwave"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Microwave</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.refrigerator"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Refrigerator
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.riceCooker"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Rice cooker
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.stoveInduction.type"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Stove/Induction (LPG)
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "recommended.kitchenAndAppliances.toaster"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Toaster</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Popular with Guests */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Popular with Guests
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("recommended.popularWithGuests.kettle")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Kettle</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* All Amenities Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    All Amenities
                  </h2>
                </div>

                {/* Basic Facilities */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Basic Facilities
                  </h3>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">
                      Smoke Detector
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "allAmenities.basicFacilities.smokeDetector.inRoom"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">In room</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          {...register(
                            "allAmenities.basicFacilities.smokeDetector.lobby"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Lobby</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Popular with Guests */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Popular with Guests
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("allAmenities.popularWithGuests.kettle")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Kettle</span>
                    </label>
                  </div>
                </div>

                {/* General Service */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    General Service
                  </h3>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">
                      Butler services
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="personal"
                          {...register(
                            "allAmenities.generalService.butlerServices"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Personal</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="floor"
                          {...register(
                            "allAmenities.generalService.butlerServices"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          For each floor
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="none"
                          {...register(
                            "allAmenities.generalService.butlerServices"
                          )}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">None</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Room Features */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Room Features
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("allAmenities.roomFeatures.diningArea")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Dining area</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("allAmenities.roomFeatures.coffeeMachine")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Coffee machine
                      </span>
                    </label>
                  </div>
                </div>

                {/* Food and Drinks */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Food and Drinks
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("allAmenities.foodAndDrinks.kidsMeals")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Kids meals</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register("allAmenities.foodAndDrinks.bakery")}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Bakery</span>
                    </label>
                  </div>
                </div>

                {/* Kitchen and Appliances */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Kitchen and Appliances
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.stoveInduction"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Stove/Induction
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.dishwasher"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Dishwasher</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.refrigerator"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Refrigerator
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.cookingBasics"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Cooking basics
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.toaster"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Toaster</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.microwave"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Microwave</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.kitchenAndAppliances.riceCooker"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Rice Cooker</span>
                    </label>
                  </div>
                </div>

                {/* Security */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Security
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register(
                          "allAmenities.security.carbonMonoxideDetector"
                        )}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Carbon Monoxide Detector
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setShowHouseRules(true);
                  }}
                  type="submit"
                  className="flex-1 px-3 py-1.5 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors font-medium text-sm"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenAmenities;
