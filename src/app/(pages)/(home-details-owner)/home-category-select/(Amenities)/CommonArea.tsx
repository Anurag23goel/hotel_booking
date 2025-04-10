"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ThreeMoreAmenities from "./ThreeMoreAmenities";

interface CommonAreaFormData {
  commonArea: {
    balconyTerrace: boolean;
    fireplace: {
      outdoor: boolean;
      indoor: boolean;
      common: boolean;
    };
    lawn: boolean;
    library: boolean;
    lounge: {
      cigarLounge: boolean;
      private: boolean;
      shared: boolean;
    };
    reception: boolean;
    seatingArea: boolean;
    sunDeck: boolean;
    verandah: boolean;
    jacuzzi: {
      womenOnly: boolean;
      availableForCouple: boolean;
    };
    prayerRoom: boolean;
    livingRoom: boolean;
    outdoorFurniture: boolean;
    picnicArea: boolean;
    gameRoom: boolean;
    sitoutArea: {
      balcony: boolean;
      verandah: boolean;
      seatingOnLawn: boolean;
      poolside: boolean;
      patio: boolean;
    };
    bonfirePit: boolean;
  };
}

interface CommonAreaProps {
  onComplete: () => void;
}

const CommonArea = ({ onComplete }: CommonAreaProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CommonAreaFormData>({
    defaultValues: {
      commonArea: {
        balconyTerrace: false,
        fireplace: {
          outdoor: false,
          indoor: false,
          common: false,
        },
        lawn: false,
        library: false,
        lounge: {
          cigarLounge: false,
          private: false,
          shared: false,
        },
        reception: false,
        seatingArea: false,
        sunDeck: false,
        verandah: false,
        jacuzzi: {
          womenOnly: false,
          availableForCouple: false,
        },
        prayerRoom: false,
        livingRoom: false,
        outdoorFurniture: false,
        picnicArea: false,
        gameRoom: false,
        sitoutArea: {
          balcony: false,
          verandah: false,
          seatingOnLawn: false,
          poolside: false,
          patio: false,
        },
        bonfirePit: false,
      },
    },
  });
  const [showThreeMoreServices, setShowThreeMoreServices] = useState(false);

  if (showThreeMoreServices) {
    return <ThreeMoreAmenities onComplete={onComplete} />;
  }

  const onSubmit = (data: CommonAreaFormData) => {
    console.log(data);
    onComplete?.();
    setShowThreeMoreServices(true);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Common Area Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Common Area</h2>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                    

                    {/* Fireplace */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Fireplace</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fireplaceOutdoor"
                            {...register("commonArea.fireplace.outdoor")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="fireplaceOutdoor" className="text-sm">
                            Outdoor
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fireplaceIndoor"
                            {...register("commonArea.fireplace.indoor")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="fireplaceIndoor" className="text-sm">
                            Indoor
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fireplaceCommon"
                            {...register("commonArea.fireplace.common")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="fireplaceCommon" className="text-sm">
                            Common
                          </label>
                        </div>
                      </div>
                    </div>

                    

                    {/* Lounge */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Lounge</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cigarLounge"
                            {...register("commonArea.lounge.cigarLounge")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="cigarLounge" className="text-sm">
                            Cigar Lounge
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="privateLounge"
                            {...register("commonArea.lounge.private")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="privateLounge" className="text-sm">
                            Private
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="sharedLounge"
                            {...register("commonArea.lounge.shared")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="sharedLounge" className="text-sm">
                            Shared
                          </label>
                        </div>
                      </div>
                    </div>

                    

                    {/* Jacuzzi */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Jacuzzi</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="jacuzziWomenOnly"
                            {...register("commonArea.jacuzzi.womenOnly")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="jacuzziWomenOnly" className="text-sm">
                            For Women Only
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="jacuzziCouple"
                            {...register(
                              "commonArea.jacuzzi.availableForCouple"
                            )}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="jacuzziCouple" className="text-sm">
                            Available for Couple
                          </label>
                        </div>
                      </div>
                    </div>

                    

                    {/* Sitout Area */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Sitout Area</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="sitoutBalcony"
                            {...register("commonArea.sitoutArea.balcony")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="sitoutBalcony" className="text-sm">
                            Balcony
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="sitoutVerandah"
                            {...register("commonArea.sitoutArea.verandah")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="sitoutVerandah" className="text-sm">
                            Verandah
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="seatingOnLawn"
                            {...register("commonArea.sitoutArea.seatingOnLawn")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="seatingOnLawn" className="text-sm">
                            Seating on Lawn
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="poolsideSitout"
                            {...register("commonArea.sitoutArea.poolside")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="poolsideSitout" className="text-sm">
                            Poolside Sit-out Area
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="patio"
                            {...register("commonArea.sitoutArea.patio")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="patio" className="text-sm">
                            Patio
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Reception */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="reception"
                        {...register("commonArea.reception")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="reception"
                        className="text-sm font-medium"
                      >
                        Reception
                      </label>
                    </div>

                    {/* Seating Area */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="seatingArea"
                        {...register("commonArea.seatingArea")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="seatingArea"
                        className="text-sm font-medium"
                      >
                        Seating Area
                      </label>
                    </div>

                    {/* Prayer Room */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="prayerRoom"
                        {...register("commonArea.prayerRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="prayerRoom"
                        className="text-sm font-medium"
                      >
                        Prayer Room
                      </label>
                    </div>

                    {/* Living Room */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="livingRoom"
                        {...register("commonArea.livingRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="livingRoom"
                        className="text-sm font-medium"
                      >
                        Living Room
                      </label>
                    </div>

                    {/* Outdoor Furniture */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="outdoorFurniture"
                        {...register("commonArea.outdoorFurniture")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="outdoorFurniture"
                        className="text-sm font-medium"
                      >
                        Outdoor Furniture
                      </label>
                    </div>

                    {/* Picnic Area */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="picnicArea"
                        {...register("commonArea.picnicArea")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="picnicArea"
                        className="text-sm font-medium"
                      >
                        Picnic Area
                      </label>
                    </div>

                    {/* Game Room */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="gameRoom"
                        {...register("commonArea.gameRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="gameRoom" className="text-sm font-medium">
                        Game Room
                      </label>
                    </div>

                    {/* Sun Deck */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="sunDeck"
                        {...register("commonArea.sunDeck")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="sunDeck" className="text-sm font-medium">
                        Sun Deck
                      </label>
                    </div>

                    {/* Verandah */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="verandah"
                        {...register("commonArea.verandah")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="verandah" className="text-sm font-medium">
                        Verandah
                      </label>
                    </div>

                    {/* Bonfire Pit */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bonfirePit"
                        {...register("commonArea.bonfirePit")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bonfirePit"
                        className="text-sm font-medium"
                      >
                        Bonfire Pit
                      </label>
                    </div>

                    {/* Balcony/Terrace */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="balconyTerrace"
                        {...register("commonArea.balconyTerrace")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="balconyTerrace"
                        className="text-sm font-medium"
                      >
                        Balcony/Terrace
                      </label>
                    </div>

                    {/* Lawn */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="lawn"
                        {...register("commonArea.lawn")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="lawn" className="text-sm font-medium">
                        Lawn
                      </label>
                    </div>

                    {/* Library */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="library"
                        {...register("commonArea.library")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="library" className="text-sm font-medium">
                        Library
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

export default CommonArea;
