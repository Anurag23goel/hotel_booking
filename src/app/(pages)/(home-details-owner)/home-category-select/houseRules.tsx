import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface HouseRulesFormData {
  checkInOut: {
    checkInTime: string;
    checkOutTime: string;
  };
  cancellationPolicy: "24hrs" | "48hrs" | "72hrs" | "nonRefundable";
  propertyRules: {
    guestProfile: {
      allowedGuests: string;
      restrictions: string;
    };
    identityProofs: {
      accepted: string[];
      rejected: string[];
    };
    propertyRestrictions: string;
    petPolicy: {
      hasPets: boolean;
      allowGuestPets: boolean;
      details: string;
    };
    caretakerInfo: {
      checkInTiming: string;
      checkOutTiming: string;
      additionalInfo: string;
    };
    customPolicy: string;
    guestProfileHourly: {
      allowedGuests: string;
      restrictions: string;
    };
  };
}

const HouseRules = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HouseRulesFormData>({
    defaultValues: {
      checkInOut: {
        checkInTime: "12:00",
        checkOutTime: "11:00",
      },
      cancellationPolicy: "24hrs",
      propertyRules: {
        guestProfile: {
          allowedGuests: "",
          restrictions: "",
        },
        identityProofs: {
          accepted: [],
          rejected: [],
        },
        propertyRestrictions: "",
        petPolicy: {
          hasPets: false,
          allowGuestPets: false,
          details: "",
        },
        caretakerInfo: {
          checkInTiming: "",
          checkOutTiming: "",
          additionalInfo: "",
        },
        customPolicy: "",
        guestProfileHourly: {
          allowedGuests: "",
          restrictions: "",
        },
      },
    },
  });

  const onSubmit = (data: HouseRulesFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl w-full space-y-4 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-gray-900">House Rules</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Check-in/Check-out Time Section */}
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Check-in/Check-out Time
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Check-in Time
                    </label>
                    <input
                      type="time"
                      {...register("checkInOut.checkInTime", {
                        required: "Check-in time is required",
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.checkInOut?.checkInTime && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.checkInOut.checkInTime.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Check-out Time
                    </label>
                    <input
                      type="time"
                      {...register("checkInOut.checkOutTime", {
                        required: "Check-out time is required",
                      })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.checkInOut?.checkOutTime && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.checkInOut.checkOutTime.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Cancellation Policy Section */}
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Cancellation Policy
                  </h2>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="24hrs"
                      {...register("cancellationPolicy")}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free cancellation up to 24 hrs
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="48hrs"
                      {...register("cancellationPolicy")}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free cancellation up to 48 hrs
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="72hrs"
                      {...register("cancellationPolicy")}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Free cancellation up to 72 hrs
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="nonRefundable"
                      {...register("cancellationPolicy")}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-md text-gray-700">
                      Non refundable
                    </span>
                  </label>
                </div>
              </div>

              {/* Property Rules Section */}
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Property Rules
                  </h2>
                </div>

                {/* Guest Profile */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Guest Profile
                  </h3>
                  <p className="text-xs text-gray-500">
                    Got a preference for guests allowed to stay at your
                    property? Fill this section to specify the details.
                  </p>
                  <div className="space-y-2">
                    <textarea
                      {...register("propertyRules.guestProfile.allowedGuests")}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify guest preferences..."
                    />
                    <textarea
                      {...register("propertyRules.guestProfile.restrictions")}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify any restrictions..."
                    />
                  </div>
                </div>

                {/* Identity Proofs */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Acceptable Identity Proofs
                  </h3>
                  <p className="text-xs text-gray-500">
                    Specify the type of Identify Proofs accepted or rejected at
                    your property during check-in.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Accepted IDs
                      </label>
                      <textarea
                        {...register("propertyRules.identityProofs.accepted")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        placeholder="List accepted ID types..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Rejected IDs
                      </label>
                      <textarea
                        {...register("propertyRules.identityProofs.rejected")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        placeholder="List rejected ID types..."
                      />
                    </div>
                  </div>
                </div>

                {/* Property Restrictions */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Property Restrictions
                  </h3>
                  <p className="text-xs text-gray-500">
                    If there are some restrictions for the guests staying at
                    your property, please mention it in this section.
                  </p>
                  <textarea
                    {...register("propertyRules.propertyRestrictions")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="List property restrictions..."
                  />
                </div>

                {/* Pet Policy */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Pet Policy
                  </h3>
                  <p className="text-xs text-gray-500">
                    Do you have any pets living at your property? Do you allow
                    guests to bring along their pets during their stay?
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...register("propertyRules.petPolicy.hasPets")}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">
                          Property has pets
                        </span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...register(
                            "propertyRules.petPolicy.allowGuestPets"
                          )}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">
                          Allow guest pets
                        </span>
                      </label>
                    </div>
                    <textarea
                      {...register("propertyRules.petPolicy.details")}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify pet policy details..."
                    />
                  </div>
                </div>

                {/* Caretaker Information */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Caretaker Information
                  </h3>
                  <p className="text-xs text-gray-500">
                    Do you follow any check-in and check-out timings? Please
                    mention it in this section.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Check-in Timing
                      </label>
                      <input
                        type="text"
                        {...register(
                          "propertyRules.caretakerInfo.checkInTiming"
                        )}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 24/7 or specific hours"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Check-out Timing
                      </label>
                      <input
                        type="text"
                        {...register(
                          "propertyRules.caretakerInfo.checkOutTiming"
                        )}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 24/7 or specific hours"
                      />
                    </div>
                  </div>
                  <textarea
                    {...register("propertyRules.caretakerInfo.additionalInfo")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Additional caretaker information..."
                  />
                </div>

                {/* Custom Policy */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Custom Policy
                  </h3>
                  <p className="text-xs text-gray-500">
                    Please connect with your BDM to update your custom policy.
                  </p>
                  <textarea
                    {...register("propertyRules.customPolicy")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Enter custom policy details..."
                  />
                </div>

                {/* Guest Profile Hourly */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-700">
                    Guest Profile Hourly
                  </h3>
                  <p className="text-xs text-gray-500">
                    Got a preference for guests allowed to stay in your hourly
                    rooms? Fill this section to specify the details.
                  </p>
                  <div className="space-y-2">
                    <textarea
                      {...register(
                        "propertyRules.guestProfileHourly.allowedGuests"
                      )}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify hourly guest preferences..."
                    />
                    <textarea
                      {...register(
                        "propertyRules.guestProfileHourly.restrictions"
                      )}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Specify hourly guest restrictions..."
                    />
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

export default HouseRules;
