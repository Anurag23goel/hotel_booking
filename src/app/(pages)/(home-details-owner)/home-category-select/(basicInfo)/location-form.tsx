import React, { useState } from "react";
import { Home, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import locationBg from "../../../../../public/assets/mapsphotu2.jpg";
import HouseRulesForm from "../(servicesAtProperty)/houseRules";

interface FormData {
  address: string;
  apartment: string;
  country: string;
  city: string;
  postcode: string;
  isPrimary: boolean;
}

interface PropertyLocationFormProps {
  onComplete?: () => void;
}

function LocationForm({ onComplete }: PropertyLocationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      isPrimary: false,
    },
  });

  const [showHouseRules, setShowHouseRules] = useState(false);

  if (showHouseRules) {
    return <HouseRulesForm onComplete={onComplete} />;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    onComplete?.();
    setShowHouseRules(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}

      {/* Form Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
          <h1 className="text-2xl font-bold text-gray-900">
            Where is your property located?
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700"
              >
                Find your address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="apartment"
                className="text-sm font-medium text-gray-700"
              >
                Apartment or floor number
              </label>
              <input
                type="text"
                id="apartment"
                placeholder="Enter apartment or floor number"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("apartment")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country/Region
              </label>
              <input
                type="text"
                id="country"
                placeholder="Enter country or region"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <p className="text-sm text-red-600">{errors.country.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="postcode"
                  className="text-sm font-medium text-gray-700"
                >
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  placeholder="Enter postcode"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  {...register("postcode", {
                    required: "Postcode is required",
                  })}
                />
                {errors.postcode && (
                  <p className="text-sm text-red-600">
                    {errors.postcode.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isPrimary"
                className="w-4 h-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("isPrimary")}
              />
              <label
                htmlFor="isPrimary"
                className="text-sm font-medium text-gray-700"
              >
                Is this your primary address?
              </label>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LocationForm;
