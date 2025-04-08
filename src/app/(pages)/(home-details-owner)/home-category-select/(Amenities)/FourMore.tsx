"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FiveMore from "./FiveMore";

interface GeneralServicesFormData {
  security: {
    cctv: boolean;
    fireExtinguishers: boolean;
    securityAlarms: boolean;
    securityGuard: boolean;
    carbonMonoxideDetector: boolean;
  };
  transfers: {
    airportTransfers: {
      available: boolean;
      type: "free" | "paid";
    };
    shuttleService: {
      available: boolean;
      type: "free" | "paid";
    };
  };
  shopping: {
    bookShop: boolean;
    souvenirShop: boolean;
    jewelleryShop: boolean;
  };
  entertainment: {
    movieRoom: boolean;
    musicSystem: boolean;
    events: {
      liveBand: boolean;
      liveSinger: boolean;
      liveGhazal: boolean;
      liveMusic: boolean;
      puppetShow: boolean;
      magic: boolean;
      fireShow: boolean;
      karaoke: boolean;
      movies: boolean;
      dj: boolean;
      standUpComedy: boolean;
      folkDance: boolean;
    };
    pub: boolean;
    photoSession: boolean;
    nightClub: boolean;
    beachClub: boolean;
  };
}

const FourMore = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GeneralServicesFormData>({
    defaultValues: {
      security: {
        cctv: false,
        fireExtinguishers: false,
        securityAlarms: false,
        securityGuard: false,
        carbonMonoxideDetector: false,
      },
      transfers: {
        airportTransfers: { available: false, type: "free" },
        shuttleService: { available: false, type: "free" },
      },
      shopping: {
        bookShop: false,
        souvenirShop: false,
        jewelleryShop: false,
      },
      entertainment: {
        movieRoom: false,
        musicSystem: false,
        events: {
          liveBand: false,
          liveSinger: false,
          liveGhazal: false,
          liveMusic: false,
          puppetShow: false,
          magic: false,
          fireShow: false,
          karaoke: false,
          movies: false,
          dj: false,
          standUpComedy: false,
          folkDance: false,
        },
        pub: false,
        photoSession: false,
        nightClub: false,
        beachClub: false,
      },
    },
  });
  const [showFiveMoreServices, setShowFiveMoreServices] = useState(false);

  if(showFiveMoreServices){
    return <FiveMore />
  }

  const onSubmit = (data: GeneralServicesFormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">Continue Services</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Security Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Security</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* CCTV */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="cctv"
                        {...register("security.cctv")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="cctv" className="text-sm font-medium">
                        CCTV
                      </label>
                    </div>

                    {/* Fire Extinguishers */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="fireExtinguishers"
                        {...register("security.fireExtinguishers")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="fireExtinguishers" className="text-sm font-medium">
                        Fire Extinguishers
                      </label>
                    </div>

                    {/* Security Alarms */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="securityAlarms"
                        {...register("security.securityAlarms")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="securityAlarms" className="text-sm font-medium">
                        Security Alarms
                      </label>
                    </div>

                    {/* Security Guard */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="securityGuard"
                        {...register("security.securityGuard")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="securityGuard" className="text-sm font-medium">
                        Security Guard
                      </label>
                    </div>

                    {/* Carbon Monoxide Detector */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="carbonMonoxideDetector"
                        {...register("security.carbonMonoxideDetector")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="carbonMonoxideDetector" className="text-sm font-medium">
                        Carbon Monoxide Detector
                      </label>
                    </div>
                  </div>
                </div>

                {/* Transfers Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Transfers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Airport Transfers */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Airport Transfers</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="airportTransfersAvailable"
                            {...register("transfers.airportTransfers.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="airportTransfersAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("transfers.airportTransfers.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("transfers.airportTransfers.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("transfers.airportTransfers.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Shuttle Service */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Shuttle Service</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="shuttleServiceAvailable"
                            {...register("transfers.shuttleService.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="shuttleServiceAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("transfers.shuttleService.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("transfers.shuttleService.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("transfers.shuttleService.type")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shopping Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Shopping</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Book Shop */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bookShop"
                        {...register("shopping.bookShop")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="bookShop" className="text-sm font-medium">
                        Book Shop
                      </label>
                    </div>

                    {/* Souvenir Shop */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="souvenirShop"
                        {...register("shopping.souvenirShop")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="souvenirShop" className="text-sm font-medium">
                        Souvenir Shop
                      </label>
                    </div>

                    {/* Jewellery Shop */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="jewelleryShop"
                        {...register("shopping.jewelleryShop")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="jewelleryShop" className="text-sm font-medium">
                        Jewellery Shop
                      </label>
                    </div>
                  </div>
                </div>

                {/* Entertainment Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Entertainment</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Movie Room */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="movieRoom"
                        {...register("entertainment.movieRoom")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="movieRoom" className="text-sm font-medium">
                        Movie Room
                      </label>
                    </div>

                    {/* Music System */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="musicSystem"
                        {...register("entertainment.musicSystem")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="musicSystem" className="text-sm font-medium">
                        Music System
                      </label>
                    </div>

                    {/* Events */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Events</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="liveBand"
                            {...register("entertainment.events.liveBand")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="liveBand" className="text-sm">
                            Live Band
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="liveSinger"
                            {...register("entertainment.events.liveSinger")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="liveSinger" className="text-sm">
                            Live Singer
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="liveGhazal"
                            {...register("entertainment.events.liveGhazal")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="liveGhazal" className="text-sm">
                            Live Ghazal
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="liveMusic"
                            {...register("entertainment.events.liveMusic")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="liveMusic" className="text-sm">
                            Live Music
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="puppetShow"
                            {...register("entertainment.events.puppetShow")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="puppetShow" className="text-sm">
                            Puppet Show
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="magic"
                            {...register("entertainment.events.magic")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="magic" className="text-sm">
                            Magic
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="fireShow"
                            {...register("entertainment.events.fireShow")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="fireShow" className="text-sm">
                            Fire Show
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="karaoke"
                            {...register("entertainment.events.karaoke")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="karaoke" className="text-sm">
                            Karaoke
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="movies"
                            {...register("entertainment.events.movies")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="movies" className="text-sm">
                            Movies
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="dj"
                            {...register("entertainment.events.dj")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="dj" className="text-sm">
                            DJ
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="standUpComedy"
                            {...register("entertainment.events.standUpComedy")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="standUpComedy" className="text-sm">
                            Stand-up Comedy
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="folkDance"
                            {...register("entertainment.events.folkDance")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="folkDance" className="text-sm">
                            Folk Dance
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Pub */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="pub"
                        {...register("entertainment.pub")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="pub" className="text-sm font-medium">
                        Pub
                      </label>
                    </div>

                    {/* Photo Session */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="photoSession"
                        {...register("entertainment.photoSession")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="photoSession" className="text-sm font-medium">
                        Photo Session
                      </label>
                    </div>

                    {/* Night Club */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="nightClub"
                        {...register("entertainment.nightClub")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="nightClub" className="text-sm font-medium">
                        Night Club
                      </label>
                    </div>

                    {/* Beach Club */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="beachClub"
                        {...register("entertainment.beachClub")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="beachClub" className="text-sm font-medium">
                        Beach Club
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
                  onClick={() => setShowFiveMoreServices(true)}
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

export default FourMore;