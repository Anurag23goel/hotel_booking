import React, { useState } from "react";
import { useForm } from "react-hook-form";
import KitchenAmenities from "./kitchenAmenities";
interface ServicesFormData {
  servesBreakfast: "yes" | "no";
  parkingOption: "free" | "paid" | "no";
  hasCook: "yes" | "no";
  mealsPrepared: {
    breakfast: boolean;
    lunch: boolean;
    eveningSnacks: boolean;
    dinner: boolean;
  };
  canPrepareNonVeg: "yes" | "no";
  cuisines: {
    northIndian: boolean;
    southIndian: boolean;
    chinese: boolean;
    continental: boolean;
    local: boolean;
  };
  cookCharges: "free" | "paid";
  cookChargesAmount: string;
  // New kitchen fields
  hasKitchen: "yes" | "no";
  kitchenAccess: "private" | "shared";
  canPrepareNonVegInKitchen: "yes" | "no";
  propertyStaffHelp: {
    dishwashing: boolean;
    purchasingGroceries: boolean;
  };
  propertyStaffCharges: "free" | "paid";
  propertyStaffChargesAmount: string;
}

const CookingFrom  = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ServicesFormData>({
    defaultValues: {
      servesBreakfast: "no",
      parkingOption: "no",
      hasCook: "no",
      mealsPrepared: {
        breakfast: false,
        lunch: false,
        eveningSnacks: false,
        dinner: false,
      },
      canPrepareNonVeg: "no",
      cuisines: {
        northIndian: false,
        southIndian: false,
        chinese: false,
        continental: false,
        local: false,
      },
      cookCharges: "free",
      cookChargesAmount: "",
      // New kitchen default values
      hasKitchen: "no",
      kitchenAccess: "private",
      canPrepareNonVegInKitchen: "no",
      propertyStaffHelp: {
        dishwashing: false,
        purchasingGroceries: false,
      },
      propertyStaffCharges: "free",
      propertyStaffChargesAmount: "",
    },
  });

  const [showKitchenAmenities, setShowKitchenAmenities] = useState(false);
  if(showKitchenAmenities){
    return <KitchenAmenities />
  }

  const hasCook = watch("hasCook");
  const cookCharges = watch("cookCharges");
  const hasKitchen = watch("hasKitchen");
  const propertyStaffCharges = watch("propertyStaffCharges");

  const onSubmit = (data: ServicesFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">
              Services at your property
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Services Cards Container */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Cook Information Card */}
                <div className="bg-white rounded-lg p-6 space-y-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Cook Information
                    </h2>
                  </div>

                  {/* Has Cook */}
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Do you have a cook to prepare meals for the Guests?
                    </p>
                    <p className="text-sm text-gray-500">
                      (select yes if you have a personal cook to prepare
                      customised meals)
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="yes"
                          {...register("hasCook", {
                            required: "Please select an option",
                          })}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="no"
                          {...register("hasCook", {
                            required: "Please select an option",
                          })}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {hasCook === "yes" && (
                    <>
                      {/* Meals Prepared */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Meals Prepared by the Cook
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select all the meals that the cook can prepare)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("mealsPrepared.breakfast")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Breakfast
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("mealsPrepared.lunch")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Lunch</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("mealsPrepared.eveningSnacks")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Evening snacks
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("mealsPrepared.dinner")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Dinner
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Non-veg Meals */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Can the cook prepare non-veg meals for the guests?
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select YES if the cook will prepare non-veg meals
                          including eggs)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="yes"
                              {...register("canPrepareNonVeg", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="no"
                              {...register("canPrepareNonVeg", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      {/* Cuisines */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Cuisines Prepared by the Cook
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select all the cuisines that the cook can prepare)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("cuisines.northIndian")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              North Indian
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("cuisines.southIndian")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              South Indian
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("cuisines.chinese")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Chinese
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("cuisines.continental")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Continental
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("cuisines.local")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Local</span>
                          </label>
                        </div>
                      </div>

                      {/* Cook Charges */}
                      <div className="space-y-2">
                        <p className="text-gray-700">Cook Charges</p>
                        <p className="text-sm text-gray-500">
                          (Mention the cook charges applicable for your
                          property`&apos;`s Base Occupancy. These charges are payable
                          at the property. Please DO NOT include the cost of
                          ingredients.)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="free"
                              {...register("cookCharges", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Free</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="paid"
                              {...register("cookCharges", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Paid</span>
                          </label>
                        </div>

                        {cookCharges === "paid" && (
                          <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Enter The Charges
                            </label>
                            <input
                              type="text"
                              {...register("cookChargesAmount", {
                                required:
                                  cookCharges === "paid"
                                    ? "Please enter the charges"
                                    : false,
                              })}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter amount"
                            />
                            {errors.cookChargesAmount && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.cookChargesAmount.message}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Kitchen Information Card */}
                <div className="bg-white rounded-lg p-6 space-y-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Kitchen
                    </h2>
                  </div>

                  {/* Has Kitchen */}
                  <div className="space-y-2">
                    <p className="text-gray-700">Do you have a kitchen?</p>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="yes"
                          {...register("hasKitchen", {
                            required: "Please select an option",
                          })}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="no"
                          {...register("hasKitchen", {
                            required: "Please select an option",
                          })}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {hasKitchen === "yes" && (
                    <>
                      {/* Kitchen Access */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Do Guests have access to the kitchen to cook their
                          meals?
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="yes"
                              {...register("kitchenAccess", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="no"
                              {...register("kitchenAccess", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      {/* Type of Kitchen Access */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Type of access for the kitchen
                        </p>
                        <p className="text-sm text-gray-500">
                          (Place specify if the access to the kitchen is private
                          or shared for guests)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="private"
                              {...register("kitchenAccess", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Private Access to the kitchen (Guests will have
                              private access to the kitchen space & amenities)
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="shared"
                              {...register("kitchenAccess", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Shared Access to the kitchen (Guests will have to
                              shared the kitchen space & amenities with other
                              guests, who might be present at the property)
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Non-veg in Kitchen */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Are Guests allowed to prepare non veg meals in the
                          kitchen?
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select yes if guests can cook non veg meals including
                          eggs)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="yes"
                              {...register("canPrepareNonVegInKitchen", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="no"
                              {...register("canPrepareNonVegInKitchen", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      {/* Property Staff Help */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Property staff will help with (optional)
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select the relevant options)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register("propertyStaffHelp.dishwashing")}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Dishwashing
                            </span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              {...register(
                                "propertyStaffHelp.purchasingGroceries"
                              )}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Purchasing Groceries
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Property Staff Charges */}
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          Property staff charges (Per day)
                        </p>
                        <p className="text-sm text-gray-500">
                          (Select paid if guests will have to pay extra charges
                          for the services selected above. Guests will pay this
                          amount directly at the property.)
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="free"
                              {...register("propertyStaffCharges", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Free</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="paid"
                              {...register("propertyStaffCharges", {
                                required: "Please select an option",
                              })}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Paid</span>
                          </label>
                        </div>

                        {propertyStaffCharges === "paid" && (
                          <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Enter charges
                            </label>
                            <input
                              type="text"
                              {...register("propertyStaffChargesAmount", {
                                required:
                                  propertyStaffCharges === "paid"
                                    ? "Please enter the charges"
                                    : false,
                              })}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter amount"
                            />
                            {errors.propertyStaffChargesAmount && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.propertyStaffChargesAmount.message}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {setShowKitchenAmenities(true)}}
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors font-medium"
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

export default CookingFrom;
