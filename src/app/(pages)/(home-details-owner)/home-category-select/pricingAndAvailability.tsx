"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HotelName from "./(basicInfo)/hotelName";

interface PricingAndAvailabilityFormData {
  inventory: {
    totalRooms: number;
    availableRooms: number;
  };
  mealOptions: {
    freeBreakfast: boolean;
    freeBreakfastAndLunch: boolean;
    freeBreakfastAndDinner: boolean;
    freeCookedBreakfast: boolean;
    freeAllMeals: boolean;
    customInclusions: string;
  };
  propertyOccupancy: {
    baseOccupancy: number;
    adultOccupancy: number;
    maxChildren: number;
    maxOccupancy: number;
  };
  basePropertyPrice: {
    baseRate: number;
    extraAdultCharge: number;
    perChildRate: number;
  };
  availability: {
    startDate: string;
    endDate: string;
  };
}

const PricingAndAvailability = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PricingAndAvailabilityFormData>({
    defaultValues: {
      inventory: {
        totalRooms: 1,
        availableRooms: 1,
      },
      mealOptions: {
        freeBreakfast: false,
        freeBreakfastAndLunch: false,
        freeBreakfastAndDinner: false,
        freeCookedBreakfast: false,
        freeAllMeals: false,
        customInclusions: "",
      },
      propertyOccupancy: {
        baseOccupancy: 2,
        adultOccupancy: 2,
        maxChildren: 2,
        maxOccupancy: 4,
      },
      basePropertyPrice: {
        baseRate: 1000,
        extraAdultCharge: 500,
        perChildRate: 300,
      },
      availability: {
        startDate: "",
        endDate: "",
      },
    },
  });
  const [showHotelName, setShowHotelName] = useState(false);

  if (showHotelName) {
    return <HotelName />;
  }

  const onSubmit = (data: PricingAndAvailabilityFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl w-full space-y-4 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-gray-900">
              Pricing and Availability
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Inventory Section */}
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Inventory
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Total Rooms
                    </label>
                    <input
                      type="number"
                      min="1"
                      {...register("inventory.totalRooms", {
                        required: "Total rooms is required",
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.inventory?.totalRooms && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.inventory.totalRooms.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Available Rooms
                    </label>
                    <input
                      type="number"
                      min="1"
                      {...register("inventory.availableRooms", {
                        required: "Available rooms is required",
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.inventory?.availableRooms && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.inventory.availableRooms.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Meal Options Section */}
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Meal Options
                  </h2>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("mealOptions.freeBreakfast")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free breakfast
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("mealOptions.freeBreakfastAndLunch")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free breakfast and lunch
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("mealOptions.freeBreakfastAndDinner")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free breakfast and dinner
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("mealOptions.freeCookedBreakfast")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free cooked breakfast
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("mealOptions.freeAllMeals")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free breakfast, lunch, dinner and custom inclusions
                    </span>
                  </label>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Custom Inclusions
                    </label>
                    <textarea
                      {...register("mealOptions.customInclusions")}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify any custom meal inclusions..."
                    />
                  </div>
                </div>
              </div>

              {/* Property Occupancy Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Property Occupancy
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Base Occupancy (Ideal number of adults)
                    </label>
                    <input
                      type="number"
                      min="1"
                      {...register("propertyOccupancy.baseOccupancy", {
                        required: "Base occupancy is required",
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.propertyOccupancy?.baseOccupancy && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyOccupancy.baseOccupancy.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Adult Occupancy (Total adults & children)
                    </label>
                    <input
                      type="number"
                      min="1"
                      {...register("propertyOccupancy.adultOccupancy", {
                        required: "Adult occupancy is required",
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.propertyOccupancy?.adultOccupancy && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyOccupancy.adultOccupancy.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Maximum Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      {...register("propertyOccupancy.maxChildren", {
                        required: "Maximum children is required",
                        min: { value: 0, message: "Must be at least 0" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.propertyOccupancy?.maxChildren && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyOccupancy.maxChildren.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Maximum Occupancy (Total adults & children)
                    </label>
                    <input
                      type="number"
                      min="1"
                      {...register("propertyOccupancy.maxOccupancy", {
                        required: "Maximum occupancy is required",
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.propertyOccupancy?.maxOccupancy && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyOccupancy.maxOccupancy.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Base Property Price Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Base Property Price
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Base Rate
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        {...register("basePropertyPrice.baseRate", {
                          required: "Base rate is required",
                          min: { value: 0, message: "Must be at least 0" },
                        })}
                        className="pl-7 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {errors.basePropertyPrice?.baseRate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.basePropertyPrice.baseRate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Extra Adult Charge (18+ years)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        {...register("basePropertyPrice.extraAdultCharge", {
                          required: "Extra adult charge is required",
                          min: { value: 0, message: "Must be at least 0" },
                        })}
                        className="pl-7 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {errors.basePropertyPrice?.extraAdultCharge && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.basePropertyPrice.extraAdultCharge.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Per Child Rate (7-17 years)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        {...register("basePropertyPrice.perChildRate", {
                          required: "Per child rate is required",
                          min: { value: 0, message: "Must be at least 0" },
                        })}
                        className="pl-7 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {errors.basePropertyPrice?.perChildRate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.basePropertyPrice.perChildRate.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Availability Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Availability
                  </h2>
                </div>
                <p className="text-sm text-gray-500">
                  Please select date range for which your property is available
                  for booking for guests
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="date"
                      {...register("availability.startDate", {
                        required: "Start date is required",
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.availability?.startDate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.availability.startDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="date"
                      {...register("availability.endDate", {
                        required: "End date is required",
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.availability?.endDate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.availability.endDate.message}
                      </p>
                    )}
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
                    setShowHotelName(true);
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

export default PricingAndAvailability;
