"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GeneralServices from "./GeneralServices";

interface BasicFacilitiesFormData {
  elevator: boolean;
  airConditioning: {
    roomControlled: boolean;
    centralized: boolean;
  };
  housekeeping: boolean;
  ironingService: {
    available: boolean;
    type: "free" | "paid";
  };
  kitchen: {
    available: boolean;
    cookingAppliances: boolean;
    microwave: boolean;
    utensils: boolean;
    toaster: boolean;
    induction: boolean;
    cutlery: boolean;
  };
  lan: {
    available: boolean;
    type: "free" | "paid";
  };
  laundry: {
    available: boolean;
    type: "free" | "paid";
  };
  newspaper: {
    localLanguage: boolean;
    english: boolean;
  };
  parking: {
    available: boolean;
    type: "free" | "paid";
  };
  powerBackup: {
    genset: boolean;
    inverter: boolean;
  };
  refrigerator: boolean;
  roomService: {
    available: boolean;
    type: "24hours" | "limited";
  };
  smokeDetector: {
    inRoom: boolean;
    lobby: boolean;
  };
  smokingRooms: boolean;
  swimmingPool: {
    available: boolean;
    commonPool: boolean;
    kidsPool: boolean;
    infinityPool: boolean;
    indoorPool: boolean;
    heatedPool: boolean;
    roofTopPool: boolean;
    sunnySwimming: boolean;
    plungePool: boolean;
    poolCover: boolean;
    poolWithView: boolean;
    saltwaterPool: boolean;
    shallowEnd: boolean;
    fullySecludedOutdoorPool: boolean;
    womenOnlyPool: boolean;
  };
  umbrellas: boolean;
  washingMachine: boolean;
  wifi: {
    available: boolean;
    type: "free" | "paid";
  };
  laundromat: boolean;
  evChargingStation: boolean;
}

const BasicAmenities = () => {
  const [showGeneralServices, setShowGeneralServices] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BasicFacilitiesFormData>({
    defaultValues: {
      elevator: false,
      airConditioning: {
        roomControlled: false,
        centralized: false,
      },
      housekeeping: false,
      ironingService: {
        available: false,
        type: "free",
      },
      kitchen: {
        available: false,
        cookingAppliances: false,
        microwave: false,
        utensils: false,
        toaster: false,
        induction: false,
        cutlery: false,
      },
      lan: {
        available: false,
        type: "free",
      },
      laundry: {
        available: false,
        type: "free",
      },
      newspaper: {
        localLanguage: false,
        english: false,
      },
      parking: {
        available: false,
        type: "free",
      },
      powerBackup: {
        genset: false,
        inverter: false,
      },
      refrigerator: false,
      roomService: {
        available: false,
        type: "24hours",
      },
      smokeDetector: {
        inRoom: false,
        lobby: false,
      },
      smokingRooms: false,
      swimmingPool: {
        available: false,
        commonPool: false,
        kidsPool: false,
        infinityPool: false,
        indoorPool: false,
        heatedPool: false,
        roofTopPool: false,
        sunnySwimming: false,
        plungePool: false,
        poolCover: false,
        poolWithView: false,
        saltwaterPool: false,
        shallowEnd: false,
        fullySecludedOutdoorPool: false,
        womenOnlyPool: false,
      },
      umbrellas: false,
      washingMachine: false,
      wifi: {
        available: false,
        type: "free",
      },
      laundromat: false,
      evChargingStation: false,
    },
  });

  if (showGeneralServices) {
    return <GeneralServices />;
  }

  const onSubmit = (data: BasicFacilitiesFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">
              Basic Facilities
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Elevator */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="elevator"
                    {...register("elevator")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="elevator" className="text-sm font-medium">
                    Elevator/Lift
                  </label>
                </div>

                {/* Air Conditioning */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Air Conditioning
                  </label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="roomControlled"
                        {...register("airConditioning.roomControlled")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="roomControlled" className="text-sm">
                        Room Controlled
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="centralized"
                        {...register("airConditioning.centralized")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="centralized" className="text-sm">
                        Centralized
                      </label>
                    </div>
                  </div>
                </div>

                {/* Housekeeping */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="housekeeping"
                    {...register("housekeeping")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="housekeeping" className="text-sm font-medium">
                    Housekeeping
                  </label>
                </div>

                {/* Ironing Service */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ironing Service</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="ironingAvailable"
                        {...register("ironingService.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="ironingAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("ironingService.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="free"
                            {...register("ironingService.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="paid"
                            {...register("ironingService.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Paid</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Kitchen */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Kitchen/Kitchenette
                  </label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="kitchenAvailable"
                        {...register("kitchen.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="kitchenAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("kitchen.available") && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cookingAppliances"
                            {...register("kitchen.cookingAppliances")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="cookingAppliances"
                            className="text-sm"
                          >
                            Cooking Appliances
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="microwave"
                            {...register("kitchen.microwave")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="microwave" className="text-sm">
                            Microwave
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="utensils"
                            {...register("kitchen.utensils")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="utensils" className="text-sm">
                            Utensils
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="toaster"
                            {...register("kitchen.toaster")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="toaster" className="text-sm">
                            Toaster
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="induction"
                            {...register("kitchen.induction")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="induction" className="text-sm">
                            Induction
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cutlery"
                            {...register("kitchen.cutlery")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="cutlery" className="text-sm">
                            Cutlery
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* LAN */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">LAN</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="lanAvailable"
                        {...register("lan.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="lanAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("lan.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="free"
                            {...register("lan.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="paid"
                            {...register("lan.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Paid</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Laundry */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Laundry</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="laundryAvailable"
                        {...register("laundry.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="laundryAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("laundry.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="free"
                            {...register("laundry.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="paid"
                            {...register("laundry.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Paid</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Newspaper */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Newspaper</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="localLanguage"
                        {...register("newspaper.localLanguage")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="localLanguage" className="text-sm">
                        Local Language
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="english"
                        {...register("newspaper.english")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="english" className="text-sm">
                        English
                      </label>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Parking</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="parkingAvailable"
                        {...register("parking.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="parkingAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("parking.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="free"
                            {...register("parking.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="paid"
                            {...register("parking.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Paid</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Power Backup */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Power Backup</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="genset"
                        {...register("powerBackup.genset")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="genset" className="text-sm">
                        Genset
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="inverter"
                        {...register("powerBackup.inverter")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="inverter" className="text-sm">
                        Inverter
                      </label>
                    </div>
                  </div>
                </div>

                {/* Refrigerator */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="refrigerator"
                    {...register("refrigerator")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="refrigerator" className="text-sm font-medium">
                    Refrigerator
                  </label>
                </div>

                {/* Room Service */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Room Service</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="roomServiceAvailable"
                        {...register("roomService.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="roomServiceAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("roomService.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="24hours"
                            {...register("roomService.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">24 Hours</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="limited"
                            {...register("roomService.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Limited Duration</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Smoke Detector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Smoke Detector</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="inRoom"
                        {...register("smokeDetector.inRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="inRoom" className="text-sm">
                        In Room
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="lobby"
                        {...register("smokeDetector.lobby")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="lobby" className="text-sm">
                        Lobby
                      </label>
                    </div>
                  </div>
                </div>

                {/* Smoking Rooms */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="smokingRooms"
                    {...register("smokingRooms")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="smokingRooms" className="text-sm font-medium">
                    Smoking Rooms
                  </label>
                </div>

                {/* Swimming Pool */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Swimming Pool</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="poolAvailable"
                        {...register("swimmingPool.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="poolAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("swimmingPool.available") && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="commonPool"
                            {...register("swimmingPool.commonPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="commonPool" className="text-sm">
                            Common Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="kidsPool"
                            {...register("swimmingPool.kidsPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="kidsPool" className="text-sm">
                            Kids Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="infinityPool"
                            {...register("swimmingPool.infinityPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="infinityPool" className="text-sm">
                            Infinity Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="indoorPool"
                            {...register("swimmingPool.indoorPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="indoorPool" className="text-sm">
                            Indoor Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="heatedPool"
                            {...register("swimmingPool.heatedPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="heatedPool" className="text-sm">
                            Heated Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="roofTopPool"
                            {...register("swimmingPool.roofTopPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="roofTopPool" className="text-sm">
                            Roof Top Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="sunnySwimming"
                            {...register("swimmingPool.sunnySwimming")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="sunnySwimming" className="text-sm">
                            Sunny Swimming
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="plungePool"
                            {...register("swimmingPool.plungePool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="plungePool" className="text-sm">
                            Plunge Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="poolCover"
                            {...register("swimmingPool.poolCover")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="poolCover" className="text-sm">
                            Pool Cover
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="poolWithView"
                            {...register("swimmingPool.poolWithView")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="poolWithView" className="text-sm">
                            Pool with a View
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="saltwaterPool"
                            {...register("swimmingPool.saltwaterPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="saltwaterPool" className="text-sm">
                            Saltwater Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="shallowEnd"
                            {...register("swimmingPool.shallowEnd")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="shallowEnd" className="text-sm">
                            Shallow End
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fullySecludedOutdoorPool"
                            {...register(
                              "swimmingPool.fullySecludedOutdoorPool"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="fullySecludedOutdoorPool"
                            className="text-sm"
                          >
                            Fully Secluded Outdoor Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="womenOnlyPool"
                            {...register("swimmingPool.womenOnlyPool")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="womenOnlyPool" className="text-sm">
                            Women-only Pool
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Umbrellas */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="umbrellas"
                    {...register("umbrellas")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="umbrellas" className="text-sm font-medium">
                    Umbrellas
                  </label>
                </div>

                {/* Washing Machine */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="washingMachine"
                    {...register("washingMachine")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="washingMachine"
                    className="text-sm font-medium"
                  >
                    Washing Machine
                  </label>
                </div>

                {/* WiFi */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">WiFi</label>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="wifiAvailable"
                        {...register("wifi.available")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="wifiAvailable" className="text-sm">
                        Available
                      </label>
                    </div>
                    {watch("wifi.available") && (
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="free"
                            {...register("wifi.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="paid"
                            {...register("wifi.type")}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm">Paid</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Laundromat */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="laundromat"
                    {...register("laundromat")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="laundromat" className="text-sm font-medium">
                    Laundromat
                  </label>
                </div>

                {/* EV Charging Station */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="evChargingStation"
                    {...register("evChargingStation")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="evChargingStation"
                    className="text-sm font-medium"
                  >
                    EV Charging Station
                  </label>
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
                  onClick={() => setShowGeneralServices(true)}
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

export default BasicAmenities;
