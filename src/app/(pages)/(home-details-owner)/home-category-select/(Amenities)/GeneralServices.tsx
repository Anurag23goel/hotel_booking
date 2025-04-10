"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonArea from "./CommonArea";

interface GeneralServicesFormData {
  bellboyService: boolean;
  caretaker: boolean;
  concierge: boolean;
  multilingualStaff: {
    hindi: boolean;
    english: boolean;
    marathi: boolean;
  };
  luggageAssistance: boolean;
  luggageStorage: boolean;
  especiallyAbledAssistance: {
    auditoryGuidance: boolean;
    wheelchair: boolean;
    braille: boolean;
    tactileSigns: boolean;
  };
  wakeUpCall: boolean;
  wheelchair: {
    available: boolean;
    type: "free" | "paid";
  };
  butlerServices: {
    personal: boolean;
    forEachFloor: boolean;
  };
  doctorOnCall: boolean;
  medicalCenter: boolean;
  poolBeachTowels: boolean;
  outdoorActivities: {
    beach: {
      available: boolean;
      private: boolean;
      beachfront: boolean;
    };
    bonfire: {
      available: boolean;
      onRequest: boolean;
      paid: boolean;
    };
    golf: boolean;
    kayaks: boolean;
    outdoorSports: {
      cricket: boolean;
      volleyball: boolean;
      basketball: boolean;
      tennis: boolean;
      badminton: boolean;
      swings: boolean;
      rockClimbing: boolean;
      archery: boolean;
      horseRiding: boolean;
      hiking: boolean;
      squash: boolean;
    };
    snorkelling: {
      available: boolean;
      type: "free" | "paid";
    };
    telescope: boolean;
    waterSports: {
      windSkiing: boolean;
      diving: boolean;
      fishing: boolean;
      waterSlides: boolean;
      waterPark: boolean;
      trainer: boolean;
    };
    canoeing: {
      available: boolean;
      type: "free" | "paid";
    };
    skiing: {
      available: boolean;
      trainer: boolean;
      equipment: boolean;
    };
    jungleSafari: {
      available: boolean;
      type: "free" | "paid";
    };
    cycling: boolean;
  };
}

interface GeneralServicesProps {
  onComplete: () => void;
}

const GeneralServices = ({ onComplete }: GeneralServicesProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GeneralServicesFormData>({
    defaultValues: {
      bellboyService: false,
      caretaker: false,
      concierge: false,
      multilingualStaff: {
        hindi: false,
        english: false,
        marathi: false,
      },
      luggageAssistance: false,
      luggageStorage: false,
      especiallyAbledAssistance: {
        auditoryGuidance: false,
        wheelchair: false,
        braille: false,
        tactileSigns: false,
      },
      wakeUpCall: false,
      wheelchair: {
        available: false,
        type: "free",
      },
      butlerServices: {
        personal: false,
        forEachFloor: false,
      },
      doctorOnCall: false,
      medicalCenter: false,
      poolBeachTowels: false,
      outdoorActivities: {
        beach: {
          available: false,
          private: false,
          beachfront: false,
        },
        bonfire: {
          available: false,
          onRequest: false,
          paid: false,
        },
        golf: false,
        kayaks: false,
        outdoorSports: {
          cricket: false,
          volleyball: false,
          basketball: false,
          tennis: false,
          badminton: false,
          swings: false,
          rockClimbing: false,
          archery: false,
          horseRiding: false,
          hiking: false,
          squash: false,
        },
        snorkelling: {
          available: false,
          type: "free",
        },
        telescope: false,
        waterSports: {
          windSkiing: false,
          diving: false,
          fishing: false,
          waterSlides: false,
          waterPark: false,
          trainer: false,
        },
        canoeing: {
          available: false,
          type: "free",
        },
        skiing: {
          available: false,
          trainer: false,
          equipment: false,
        },
        jungleSafari: {
          available: false,
          type: "free",
        },
        cycling: false,
      },
    },
  });
  const [showCommonAreaServices, setShowCommonAreaServices] = useState(false);

  if (showCommonAreaServices) {
    return <CommonArea onComplete={onComplete} />;
  }

  const onSubmit = (data: GeneralServicesFormData) => {
    console.log(data);
    onComplete?.();
    setShowCommonAreaServices(true);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* General Services Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    General Services
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    

                    

                    

                    {/* Multilingual Staff */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Multilingual Staff
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="hindi"
                            {...register("multilingualStaff.hindi")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="hindi" className="text-sm">
                            Hindi
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="english"
                            {...register("multilingualStaff.english")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="english" className="text-sm">
                            English
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="marathi"
                            {...register("multilingualStaff.marathi")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="marathi" className="text-sm">
                            Marathi
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Especially Abled Assistance */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Especially Abled Assistance
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="auditoryGuidance"
                            {...register(
                              "especiallyAbledAssistance.auditoryGuidance"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="auditoryGuidance" className="text-sm">
                            Auditory Guidance
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="wheelchairAssist"
                            {...register(
                              "especiallyAbledAssistance.wheelchair"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="wheelchairAssist" className="text-sm">
                            Wheelchair
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="braille"
                            {...register("especiallyAbledAssistance.braille")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="braille" className="text-sm">
                            Braille
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="tactileSigns"
                            {...register(
                              "especiallyAbledAssistance.tactileSigns"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="tactileSigns" className="text-sm">
                            Tactile Signs
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Wheelchair */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Wheelchair</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="wheelchairAvailable"
                            {...register("wheelchair.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="wheelchairAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("wheelchair.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("wheelchair.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("wheelchair.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Butler Services */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Butler Services
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="personalButler"
                            {...register("butlerServices.personal")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="personalButler" className="text-sm">
                            Personal
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="floorButler"
                            {...register("butlerServices.forEachFloor")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="floorButler" className="text-sm">
                            For each Floor
                          </label>
                        </div>
                      </div>
                    </div>
                        

                    {/* Caretaker */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="caretaker"
                        {...register("caretaker")}
                        className="w-5 h-5   text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="caretaker"
                        className="text-sm font-medium"
                      >
                        Caretaker
                      </label>
                    </div>

                    {/* Bellboy Service */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bellboyService"
                        {...register("bellboyService")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bellboyService"
                        className="text-sm font-medium"
                      >
                        Bellboy Service
                      </label>
                    </div>

                    {/* Concierge */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="concierge"
                        {...register("concierge")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="concierge"
                        className="text-sm font-medium"
                      >
                        Concierge
                      </label>
                    </div>

                    {/* Luggage Assistance */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="luggageAssistance"
                        {...register("luggageAssistance")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="luggageAssistance"
                        className="text-sm font-medium"
                      >
                        Luggage Assistance
                      </label>
                    </div>

                    {/* Luggage Storage */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="luggageStorage"
                        {...register("luggageStorage")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="luggageStorage"
                        className="text-sm font-medium"
                      >
                        Luggage Storage
                      </label>
                    </div>

                    
                    {/* Wake-up Call */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="wakeUpCall"
                        {...register("wakeUpCall")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="wakeUpCall"
                        className="text-sm font-medium"
                      >
                        Wake-up Call/Service
                      </label>
                    </div>

                    

                    {/* Doctor on Call */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="doctorOnCall"
                        {...register("doctorOnCall")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="doctorOnCall"
                        className="text-sm font-medium"
                      >
                        Doctor on Call
                      </label>
                    </div>

                    {/* Medical Center */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="medicalCenter"
                        {...register("medicalCenter")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="medicalCenter"
                        className="text-sm font-medium"
                      >
                        Medical Center
                      </label>
                    </div>

                    {/* Pool/Beach Towels */}
                    <div className="flex ml-4 items-center space-x-2">
                      <input
                        type="checkbox"
                        id="poolBeachTowels"
                        {...register("poolBeachTowels")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="poolBeachTowels"
                        className="text-sm font-medium"
                      >
                        Pool/Beach Towels
                      </label>
                    </div>
                  </div>
                </div>

                {/* Outdoor Activities Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Outdoor Activities and Sports
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {/* Beach */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Beach</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="beachAvailable"
                            {...register("outdoorActivities.beach.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="beachAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.beach.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="privateBeach"
                                {...register("outdoorActivities.beach.private")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="privateBeach" className="text-sm">
                                Private
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="beachfront"
                                {...register(
                                  "outdoorActivities.beach.beachfront"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="beachfront" className="text-sm">
                                Beachfront
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bonfire */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Bonfire</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="bonfireAvailable"
                            {...register("outdoorActivities.bonfire.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="bonfireAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.bonfire.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="onRequest"
                                {...register(
                                  "outdoorActivities.bonfire.onRequest"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="onRequest" className="text-sm">
                                On Request
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="bonfirePaid"
                                {...register("outdoorActivities.bonfire.paid")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="bonfirePaid" className="text-sm">
                                Paid
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    

                    {/* Outdoor Sports */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Outdoor Sports
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cricket"
                            {...register(
                              "outdoorActivities.outdoorSports.cricket"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="cricket" className="text-sm">
                            Cricket
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="volleyball"
                            {...register(
                              "outdoorActivities.outdoorSports.volleyball"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="volleyball" className="text-sm">
                            Volleyball
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="basketball"
                            {...register(
                              "outdoorActivities.outdoorSports.basketball"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="basketball" className="text-sm">
                            Basketball
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="tennis"
                            {...register(
                              "outdoorActivities.outdoorSports.tennis"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="tennis" className="text-sm">
                            Tennis
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="badminton"
                            {...register(
                              "outdoorActivities.outdoorSports.badminton"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="badminton" className="text-sm">
                            Badminton
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="swings"
                            {...register(
                              "outdoorActivities.outdoorSports.swings"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="swings" className="text-sm">
                            Swings
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="rockClimbing"
                            {...register(
                              "outdoorActivities.outdoorSports.rockClimbing"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="rockClimbing" className="text-sm">
                            Rock Climbing
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="archery"
                            {...register(
                              "outdoorActivities.outdoorSports.archery"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="archery" className="text-sm">
                            Archery
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="horseRiding"
                            {...register(
                              "outdoorActivities.outdoorSports.horseRiding"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="horseRiding" className="text-sm">
                            Horse Riding
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="hiking"
                            {...register(
                              "outdoorActivities.outdoorSports.hiking"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="hiking" className="text-sm">
                            Hiking
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="squash"
                            {...register(
                              "outdoorActivities.outdoorSports.squash"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="squash" className="text-sm">
                            Squash
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Snorkelling */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Snorkelling</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="snorkellingAvailable"
                            {...register(
                              "outdoorActivities.snorkelling.available"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="snorkellingAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.snorkelling.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register(
                                  "outdoorActivities.snorkelling.type"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register(
                                  "outdoorActivities.snorkelling.type"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    

                    {/* Water Sports */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Water Sports
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="windSkiing"
                            {...register(
                              "outdoorActivities.waterSports.windSkiing"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="windSkiing" className="text-sm">
                            Wind Skiing
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="diving"
                            {...register(
                              "outdoorActivities.waterSports.diving"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="diving" className="text-sm">
                            Diving
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fishing"
                            {...register(
                              "outdoorActivities.waterSports.fishing"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="fishing" className="text-sm">
                            Fishing
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="waterSlides"
                            {...register(
                              "outdoorActivities.waterSports.waterSlides"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="waterSlides" className="text-sm">
                            Water Slides
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="waterPark"
                            {...register(
                              "outdoorActivities.waterSports.waterPark"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="waterPark" className="text-sm">
                            Water Park
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="waterSportsTrainer"
                            {...register(
                              "outdoorActivities.waterSports.trainer"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="waterSportsTrainer"
                            className="text-sm"
                          >
                            Trainer
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Canoeing */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Canoeing</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="canoeingAvailable"
                            {...register(
                              "outdoorActivities.canoeing.available"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="canoeingAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.canoeing.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("outdoorActivities.canoeing.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("outdoorActivities.canoeing.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Skiing */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Skiing</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="skiingAvailable"
                            {...register("outdoorActivities.skiing.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="skiingAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.skiing.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="skiingTrainer"
                                {...register(
                                  "outdoorActivities.skiing.trainer"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="skiingTrainer"
                                className="text-sm"
                              >
                                Trainer
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="skiingEquipment"
                                {...register(
                                  "outdoorActivities.skiing.equipment"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="skiingEquipment"
                                className="text-sm"
                              >
                                Equipment
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Jungle Safari */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Jungle Safari
                      </label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="jungleSafariAvailable"
                            {...register(
                              "outdoorActivities.jungleSafari.available"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="jungleSafariAvailable"
                            className="text-sm"
                          >
                            Available
                          </label>
                        </div>
                        {watch("outdoorActivities.jungleSafari.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register(
                                  "outdoorActivities.jungleSafari.type"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register(
                                  "outdoorActivities.jungleSafari.type"
                                )}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Cycling */}
                    <div className="flex  items-center space-x-2">
                      <input
                        type="checkbox"
                        id="cycling"
                        {...register("outdoorActivities.cycling")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="cycling" className="text-sm font-medium">
                        Cycling
                      </label>
                    </div>

                    {/* Telescope */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="telescope"
                        {...register("outdoorActivities.telescope")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="telescope"
                        className="text-sm font-medium"
                      >
                        Telescope
                      </label>
                    </div>
                    {/* Golf */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="golf"
                        {...register("outdoorActivities.golf")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="golf" className="text-sm font-medium">
                        Golf
                      </label>
                    </div>

                    {/* Kayaks */}
                    <div className="flex  items-center space-x-2">
                      <input
                        type="checkbox"
                        id="kayaks"
                        {...register("outdoorActivities.kayaks")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="kayaks" className="text-sm font-medium">
                        Kayaks
                      </label>
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

export default GeneralServices;
