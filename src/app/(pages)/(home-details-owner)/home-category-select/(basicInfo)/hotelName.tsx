import React, { useState } from "react";
import { useForm } from "react-hook-form";

import GuestCanUse from "../(servicesAtProperty)/guestCanUse";

interface FormData {
  propertyName: string;
  propertyDescription: string;
}

const HotelName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showGuestCanUse, setShowGuestCanUse] = useState(false);

  if (showGuestCanUse) {
    return <GuestCanUse />;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowGuestCanUse(true);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">
              What is the name of your property?
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Property Details Section */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Property Name
                  </label>
                  <input
                    type="text"
                    {...register("propertyName", {
                      required: "Property name is required",
                    })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter property name"
                  />
                  {errors.propertyName && (
                    <p className="text-sm text-red-600">
                      {errors.propertyName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Property Description
                  </label>
                  <textarea
                    {...register("propertyDescription", {
                      required: "Property description is required",
                    })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows={4}
                    placeholder="Enter property description"
                  />
                  {errors.propertyDescription && (
                    <p className="text-sm text-red-600">
                      {errors.propertyDescription.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
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

export default HotelName;
