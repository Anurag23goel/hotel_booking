"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FourMore from "./FourMore";

interface GeneralServicesFormData {
  foodAndDrinks: {
    bar: boolean;
    barbeque: {
      available: boolean;
      type: "free" | "paid";
    };
    cafe: {
      available: boolean;
      hours: "24x7" | "limited";
    };
    coffeeShop: boolean;
    diningArea: boolean;
    kidsMeals: boolean;
    restaurant: {
      available: boolean;
      halal: boolean;
      kosher: boolean;
    };
    bakery: boolean;
  };
  healthAndWellness: {
    activityCentre: boolean;
    gym: {
      available: boolean;
      twentyFourHours: boolean;
      personalTrainer: boolean;
    };
    reflexology: boolean;
    yoga: boolean;
    meditationRoom: boolean;
    firstAidServices: boolean;
  };
  businessCentre: {
    banquet: boolean;
    businessCenter: boolean;
    conferenceRoom: boolean;
    photocopying: boolean;
    faxService: boolean;
    printer: boolean;
  };
  beautyAndSpa: {
    massage: {
      available: boolean;
      coupleMassage: boolean;
      footMassage: boolean;
    };
    salon: {
      available: boolean;
      waxing: boolean;
      hairCut: boolean;
    };
    spa: {
      available: boolean;
      type: "free" | "paid";
    };
    steamAndSauna: {
      available: boolean;
      type: "free" | "paid";
    };
    openAirBath: boolean;
    hammam: {
      available: boolean;
      womenOnly: boolean;
      availableForCouple: boolean;
    };
  };
}

interface ThreeMoreAmenitiesProps { 
  onComplete: () => void;
}

const ThreeMoreAmenities = ({ onComplete }: ThreeMoreAmenitiesProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GeneralServicesFormData>({
    defaultValues: {
      foodAndDrinks: {
        bar: false,
        barbeque: { available: false, type: "free" },
        cafe: { available: false, hours: "24x7" },
        coffeeShop: false,
        diningArea: false,
        kidsMeals: false,
        restaurant: { available: false, halal: false, kosher: false },
        bakery: false,
      },
      healthAndWellness: {
        activityCentre: false,
        gym: {
          available: false,
          twentyFourHours: false,
          personalTrainer: false,
        },
        reflexology: false,
        yoga: false,
        meditationRoom: false,
        firstAidServices: false,
      },
      businessCentre: {
        banquet: false,
        businessCenter: false,
        conferenceRoom: false,
        photocopying: false,
        faxService: false,
        printer: false,
      },
      beautyAndSpa: {
        massage: { available: false, coupleMassage: false, footMassage: false },
        salon: { available: false, waxing: false, hairCut: false },
        spa: { available: false, type: "free" },
        steamAndSauna: { available: false, type: "free" },
        openAirBath: false,
        hammam: {
          available: false,
          womenOnly: false,
          availableForCouple: false,
        },
      },
    },
  });
  const [showFourMoreServices, setShowFourMoreServices] = useState(false);

  if (showFourMoreServices) {
    return <FourMore onComplete={onComplete} />;
  }

  const onSubmit = (data: GeneralServicesFormData) => {
    console.log(data);
    onComplete?.();
    setShowFourMoreServices(true);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Food and Drinks Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Food and Drinks
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    

                    {/* Barbeque */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Barbeque</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="barbequeAvailable"
                            {...register("foodAndDrinks.barbeque.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="barbequeAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("foodAndDrinks.barbeque.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("foodAndDrinks.barbeque.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("foodAndDrinks.barbeque.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Cafe */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Café</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cafeAvailable"
                            {...register("foodAndDrinks.cafe.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="cafeAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("foodAndDrinks.cafe.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="24x7"
                                {...register("foodAndDrinks.cafe.hours")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">24 x 7</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="limited"
                                {...register("foodAndDrinks.cafe.hours")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Limited Hours</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Restaurant */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Restaurant</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="restaurantAvailable"
                            {...register("foodAndDrinks.restaurant.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="restaurantAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("foodAndDrinks.restaurant.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="halal"
                                {...register("foodAndDrinks.restaurant.halal")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="halal" className="text-sm">
                                Halal
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="kosher"
                                {...register("foodAndDrinks.restaurant.kosher")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="kosher" className="text-sm">
                                Kosher
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bar */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bar"
                        {...register("foodAndDrinks.bar")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="bar" className="text-sm font-medium">
                        Bar
                      </label>
                    </div>

{/* Coffee Shop */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="coffeeShop"
                        {...register("foodAndDrinks.coffeeShop")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="coffeeShop"
                        className="text-sm font-medium"
                      >
                        Coffee Shop
                      </label>
                    </div>

 {/* Kids Meals */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="kidsMeals"
                        {...register("foodAndDrinks.kidsMeals")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="kidsMeals"
                        className="text-sm font-medium"
                      >
                        Kids Meals
                      </label>
                    </div>

{/* Bakery */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bakery"
                        {...register("foodAndDrinks.bakery")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="bakery" className="text-sm font-medium">
                        Bakery
                      </label>
                    </div>

{/* Dining Area */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="diningArea"
                        {...register("foodAndDrinks.diningArea")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="diningArea"
                        className="text-sm font-medium"
                      >
                        Dining Area
                      </label>
                    </div>

                    
                  </div>
                </div>

                {/* Health and Wellness Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Health and Wellness
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Activity Centre */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="activityCentre"
                        {...register("healthAndWellness.activityCentre")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="activityCentre"
                        className="text-sm font-medium"
                      >
                        Activity Centre
                      </label>
                    </div>

                    {/* Gym/Fitness Centre */}
                    <div className=" space-y-2">
                      <label className="text-sm font-medium">
                        Gym/Fitness Centre
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="gymAvailable"
                            {...register("healthAndWellness.gym.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="gymAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("healthAndWellness.gym.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="gym24Hours"
                                {...register(
                                  "healthAndWellness.gym.twentyFourHours"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="gym24Hours" className="text-sm">
                                24 Hours
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="personalTrainer"
                                {...register(
                                  "healthAndWellness.gym.personalTrainer"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="personalTrainer"
                                className="text-sm"
                              >
                                Personal Trainer
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Reflexology */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="reflexology"
                        {...register("healthAndWellness.reflexology")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="reflexology"
                        className="text-sm font-medium"
                      >
                        Reflexology
                      </label>
                    </div>

                    {/* Yoga */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="yoga"
                        {...register("healthAndWellness.yoga")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="yoga" className="text-sm font-medium">
                        Yoga
                      </label>
                    </div>

                    {/* Meditation Room */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="meditationRoom"
                        {...register("healthAndWellness.meditationRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="meditationRoom"
                        className="text-sm font-medium"
                      >
                        Meditation Room
                      </label>
                    </div>

                    {/* First Aid Services */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="firstAidServices"
                        {...register("healthAndWellness.firstAidServices")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="firstAidServices"
                        className="text-sm font-medium"
                      >
                        First Aid Services
                      </label>
                    </div>
                  </div>
                </div>

                {/* Business Centre and Conferences Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Business Centre and Conferences
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Banquet */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="banquet"
                        {...register("businessCentre.banquet")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="banquet" className="text-sm font-medium">
                        Banquet
                      </label>
                    </div>

                    {/* Business Center */}
                    <div className="flex ml-4  items-center space-x-2">
                      <input
                        type="checkbox"
                        id="businessCenter"
                        {...register("businessCentre.businessCenter")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="businessCenter"
                        className="text-sm font-medium"
                      >
                        Business Center
                      </label>
                    </div>

                    {/* Conference Room */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="conferenceRoom"
                        {...register("businessCentre.conferenceRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="conferenceRoom"
                        className="text-sm font-medium"
                      >
                        Conference Room
                      </label>
                    </div>

                    {/* Photocopying */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="photocopying"
                        {...register("businessCentre.photocopying")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="photocopying"
                        className="text-sm font-medium"
                      >
                        Photocopying
                      </label>
                    </div>

                    {/* Fax Service */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="faxService"
                        {...register("businessCentre.faxService")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="faxService"
                        className="text-sm font-medium"
                      >
                        Fax Service
                      </label>
                    </div>

                    {/* Printer */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="printer"
                        {...register("businessCentre.printer")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="printer" className="text-sm font-medium">
                        Printer
                      </label>
                    </div>
                  </div>
                </div>

                {/* Beauty and Spa Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Beauty and Spa</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Massage */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Massage</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="massageAvailable"
                            {...register("beautyAndSpa.massage.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="massageAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("beautyAndSpa.massage.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="coupleMassage"
                                {...register(
                                  "beautyAndSpa.massage.coupleMassage"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="coupleMassage"
                                className="text-sm"
                              >
                                Couple Massage
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="footMassage"
                                {...register(
                                  "beautyAndSpa.massage.footMassage"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="footMassage" className="text-sm">
                                Foot Massage
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Salon */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Salon</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="salonAvailable"
                            {...register("beautyAndSpa.salon.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="salonAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("beautyAndSpa.salon.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="waxing"
                                {...register("beautyAndSpa.salon.waxing")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="waxing" className="text-sm">
                                Waxing
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="hairCut"
                                {...register("beautyAndSpa.salon.hairCut")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="hairCut" className="text-sm">
                                Hair Cut
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Spa */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Spa</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="spaAvailable"
                            {...register("beautyAndSpa.spa.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="spaAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("beautyAndSpa.spa.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("beautyAndSpa.spa.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("beautyAndSpa.spa.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Steam and Sauna */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Steam and Sauna
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="steamSaunaAvailable"
                            {...register(
                              "beautyAndSpa.steamAndSauna.available"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="steamSaunaAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("beautyAndSpa.steamAndSauna.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("beautyAndSpa.steamAndSauna.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("beautyAndSpa.steamAndSauna.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Open Air Bath */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="openAirBath"
                        {...register("beautyAndSpa.openAirBath")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="openAirBath"
                        className="text-sm font-medium"
                      >
                        Open Air Bath
                      </label>
                    </div>

                    {/* Hammam */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hammam</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="hammamAvailable"
                            {...register("beautyAndSpa.hammam.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="hammamAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("beautyAndSpa.hammam.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="hammamWomenOnly"
                                {...register("beautyAndSpa.hammam.womenOnly")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="hammamWomenOnly"
                                className="text-sm"
                              >
                                Women Only
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="hammamCouple"
                                {...register(
                                  "beautyAndSpa.hammam.availableForCouple"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="hammamCouple" className="text-sm">
                                Available for Couple
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
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

export default ThreeMoreAmenities;
