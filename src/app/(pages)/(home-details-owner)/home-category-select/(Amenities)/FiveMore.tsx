"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BasicAmenities from "./BasicAmenities";

interface GeneralServicesFormData {
  paymentServices: {
    atm: boolean;
    currencyExchange: boolean;
  };
  indoorActivitiesAndSports: {
    casino: {
      available: boolean;
      entry: "free" | "paid";
    };
    indoorGames: {
      boardGame: boolean;
      poolTable: boolean;
      airHockey: boolean;
      dart: boolean;
      tableTennis: boolean;
      carromBoard: boolean;
      foosball: boolean;
      bowling: boolean;
      puzzles: boolean;
    };
  };
  familyAndKids: {
    childCareService: {
      available: boolean;
      babysitting: boolean;
      cribs: boolean;
    };
    childrensPlayArea: {
      available: boolean;
      books: boolean;
      dvd: boolean;
      swings: boolean;
      music: boolean;
      videoGame: boolean;
    };
    kidsClub: boolean;
    strollers: boolean;
  };
  petEssentials: {
    petBowls: boolean;
    petBaskets: boolean;
  };
}

const FiveMore = () => {
  const [showBasicAmenities, setShowBasicAmenities] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GeneralServicesFormData>({
    defaultValues: {
      paymentServices: {
        atm: false,
        currencyExchange: false,
      },
      indoorActivitiesAndSports: {
        casino: { available: false, entry: "free" },
        indoorGames: {
          boardGame: false,
          poolTable: false,
          airHockey: false,
          dart: false,
          tableTennis: false,
          carromBoard: false,
          foosball: false,
          bowling: false,
          puzzles: false,
        },
      },
      familyAndKids: {
        childCareService: { available: false, babysitting: false, cribs: false },
        childrensPlayArea: {
          available: false,
          books: false,
          dvd: false,
          swings: false,
          music: false,
          videoGame: false,
        },
        kidsClub: false,
        strollers: false,
      },
      petEssentials: {
        petBowls: false,
        petBaskets: false,
      },
    },
  });

  if(showBasicAmenities){
    return <BasicAmenities />
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
                {/* Payment Services Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Payment Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ATM */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="atm"
                        {...register("paymentServices.atm")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="atm" className="text-sm font-medium">
                        ATM
                      </label>
                    </div>

                    {/* Currency Exchange */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="currencyExchange"
                        {...register("paymentServices.currencyExchange")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="currencyExchange" className="text-sm font-medium">
                        Currency Exchange
                      </label>
                    </div>
                  </div>
                </div>

                {/* Indoor Activities and Sports Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Indoor Activities and Sports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Casino */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Casino</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="casinoAvailable"
                            {...register("indoorActivitiesAndSports.casino.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="casinoAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("indoorActivitiesAndSports.casino.available") && (
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="free"
                                {...register("indoorActivitiesAndSports.casino.entry")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Free Entry</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                value="paid"
                                {...register("indoorActivitiesAndSports.casino.entry")}
                                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm">Paid Entry</span>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Indoor Games */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Indoor Games</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="boardGame"
                            {...register("indoorActivitiesAndSports.indoorGames.boardGame")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="boardGame" className="text-sm">
                            Board Game
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="poolTable"
                            {...register("indoorActivitiesAndSports.indoorGames.poolTable")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="poolTable" className="text-sm">
                            Pool Table
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="airHockey"
                            {...register("indoorActivitiesAndSports.indoorGames.airHockey")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="airHockey" className="text-sm">
                            Air Hockey
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="dart"
                            {...register("indoorActivitiesAndSports.indoorGames.dart")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="dart" className="text-sm">
                            Dart
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="tableTennis"
                            {...register("indoorActivitiesAndSports.indoorGames.tableTennis")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="tableTennis" className="text-sm">
                            Table Tennis
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="carromBoard"
                            {...register("indoorActivitiesAndSports.indoorGames.carromBoard")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="carromBoard" className="text-sm">
                            Carrom Board
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="foosball"
                            {...register("indoorActivitiesAndSports.indoorGames.foosball")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="foosball" className="text-sm">
                            Foosball
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="bowling"
                            {...register("indoorActivitiesAndSports.indoorGames.bowling")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="bowling" className="text-sm">
                            Bowling
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="puzzles"
                            {...register("indoorActivitiesAndSports.indoorGames.puzzles")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="puzzles" className="text-sm">
                            Puzzles
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Family and Kids Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Family and Kids</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Child Care Service */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Child Care Service</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="childCareAvailable"
                            {...register("familyAndKids.childCareService.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="childCareAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("familyAndKids.childCareService.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="babysitting"
                                {...register("familyAndKids.childCareService.babysitting")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="babysitting" className="text-sm">
                                Babysitting
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="cribs"
                                {...register("familyAndKids.childCareService.cribs")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="cribs" className="text-sm">
                                Cribs
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Children's Play Area */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Children's Play Area</label>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="playAreaAvailable"
                            {...register("familyAndKids.childrensPlayArea.available")}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="playAreaAvailable" className="text-sm">
                            Available
                          </label>
                        </div>
                        {watch("familyAndKids.childrensPlayArea.available") && (
                          <>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="books"
                                {...register("familyAndKids.childrensPlayArea.books")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="books" className="text-sm">
                                Books
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="dvd"
                                {...register("familyAndKids.childrensPlayArea.dvd")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="dvd" className="text-sm">
                                DVD
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="swings"
                                {...register("familyAndKids.childrensPlayArea.swings")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="swings" className="text-sm">
                                Swings
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="music"
                                {...register("familyAndKids.childrensPlayArea.music")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="music" className="text-sm">
                                Music
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="videoGame"
                                {...register("familyAndKids.childrensPlayArea.videoGame")}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="videoGame" className="text-sm">
                                Video Game
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Kids Club */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="kidsClub"
                        {...register("familyAndKids.kidsClub")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="kidsClub" className="text-sm font-medium">
                        Kids Club
                      </label>
                    </div>

                    {/* Strollers */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="strollers"
                        {...register("familyAndKids.strollers")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="strollers" className="text-sm font-medium">
                        Strollers
                      </label>
                    </div>
                  </div>
                </div>

                {/* Pet Essentials Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Pet Essentials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Pet Bowls */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="petBowls"
                        {...register("petEssentials.petBowls")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="petBowls" className="text-sm font-medium">
                        Pet Bowls
                      </label>
                    </div>

                    {/* Pet Baskets */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="petBaskets"
                        {...register("petEssentials.petBaskets")}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="petBaskets" className="text-sm font-medium">
                        Pet Baskets
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
                  onClick={() => setShowBasicAmenities(true)}
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

export default FiveMore;