import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CookingFrom from "./cookingFrom";

interface GuestAmenities {
  swimmingPool: boolean;
  parking: boolean;
  driversRoom: boolean;
  terrace: boolean;
  garden: boolean;
  diningArea: boolean;
  bar: boolean;
  sauna: boolean;
  hotTub: boolean;
  heating: boolean;
  freeWifi: boolean;
  airConditioning: boolean;
}

const GuestCanUse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestAmenities>({
    defaultValues: {
      swimmingPool: false,
      parking: false,
      driversRoom: false,
      terrace: false,
      garden: false,
      diningArea: false,
      bar: false,
      sauna: false,
      hotTub: false,
      heating: false,
      freeWifi: false,
      airConditioning: false,
    },
  });
  // rn its demo finalDataForBackend will be used later
  const [showServicesAtProperty, setShowServicesAtProperty] = useState(false);

  if (showServicesAtProperty) {
    return <CookingFrom />;
  }

  const onSubmit = (data: GuestAmenities) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen  relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen  flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">
              What can guest use at your place?
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {/* First Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="swimmingPool"
                      {...register("swimmingPool")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="swimmingPool"
                      className="text-md text-gray-700"
                    >
                      Swimming Pool
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="parking"
                      {...register("parking")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="parking" className="text-md text-gray-700">
                      Parking
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="driversRoom"
                      {...register("driversRoom")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="driversRoom"
                      className="text-md text-gray-700"
                    >
                      Drivers Room
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terrace"
                      {...register("terrace")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terrace" className="text-md text-gray-700">
                      Terrace
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="garden"
                      {...register("garden")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="garden" className="text-md text-gray-700">
                      Garden
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="diningArea"
                      {...register("diningArea")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="diningArea"
                      className="text-md text-gray-700"
                    >
                      Dining Area
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="bar"
                      {...register("bar")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="bar" className="text-md text-gray-700">
                      Bar
                    </label>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="sauna"
                      {...register("sauna")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="sauna" className="text-md text-gray-700">
                      Sauna
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="hotTub"
                      {...register("hotTub")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="hotTub" className="text-md text-gray-700">
                      Hot tub/Jacuzzi
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="heating"
                      {...register("heating")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="heating" className="text-md text-gray-700">
                      Heating
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="freeWifi"
                      {...register("freeWifi")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="freeWifi" className="text-md text-gray-700">
                      Free WiFi
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="airConditioning"
                      {...register("airConditioning")}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="airConditioning"
                      className="text-md text-gray-700"
                    >
                      Air Conditioning
                    </label>
                  </div>
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
                  onClick={() => {
                    setShowServicesAtProperty(true);
                  }}
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

export default GuestCanUse;
