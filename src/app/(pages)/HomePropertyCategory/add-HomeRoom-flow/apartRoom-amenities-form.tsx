"use client";

import { useState } from "react";

interface ApartRoomAmenitiesFormProps {
  setCurrentForm: (form: string) => void;
  updateRoomData: (data: any) => void;
  roomData: any;
}

interface AmenitiesState {
  popularWithGuests: {
    airConditioning: string[];
    heater: string;
    housekeeping: string[];
    inRoomDining: string[];
    ironIroningBoard: boolean;
    mineralWater: string;
    roomService: string[];
    studyRoom: boolean;
    kettle: boolean;
    wifi: string;
    bathroom: string;
    airPurifier: boolean;
  };
  bathroom: {
    bathroomPhone: boolean;
    bathtub: boolean;
    bubbleBath: boolean;
    dentalKit: boolean;
    geyser: boolean;
    hairdryer: boolean;
    hotColdWater: boolean;
    slippers: boolean;
    toiletries: {
      premium: boolean;
      moisturiser: boolean;
      shampoo: boolean;
      conditioner: boolean;
      showerGel: boolean;
      soap: boolean;
      comb: boolean;
    };
    showerCap: boolean;
    hammam: boolean;
    bathrobes: boolean;
    westernToiletSeat: boolean;
    showerCubicle: boolean;
    weighingScale: boolean;
    shavingMirror: boolean;
    sewingKit: boolean;
    bidet: boolean;
    toiletWithGrabRails: boolean;
    ensuiteBathroom: string;
  };
  roomFeatures: {
    closet: boolean;
    blackoutCurtains: boolean;
    centerTable: boolean;
    chargingPoints: {
      internationalAdaptors: boolean;
    };
    couch: boolean;
    diningTable: boolean;
    fireplace: boolean;
    miniBar: string;
    miniFridge: boolean;
    sofa: {
      sofaChair: boolean;
      sofaCumBed: boolean;
    };
    telephone: {
      local: boolean;
      internationalCalls: boolean;
    };
    workDesk: boolean;
    pillowMenu: boolean;
    hypoallergenic: boolean;
    livingArea: boolean;
    diningArea: boolean;
    seatingArea: boolean;
    chair: boolean;
    fireplaceGuards: boolean;
    coffeeMachine: boolean;
    jaccuzi: boolean;
  };
  mediaAndEntertainment: {
    tv: {
      led: boolean;
      lcd: boolean;
      flatScreen: boolean;
      cable: boolean;
      satelliteChannels: boolean;
      payPerViewMovie: boolean;
    };
    smartControls: boolean;
    soundSpeakers: boolean;
    smartphone: boolean;
  };
  foodAndDrinks: {
    bbqGrill: string;
    cookButlerService: string;
  };
  kitchenAndAppliances: {
    dishwasher: boolean;
    induction: boolean;
    kitchenette: string;
    refrigerator: boolean;
    washingMachine: boolean;
    cookingBasics: {
      pots: boolean;
      pans: boolean;
      cookingOil: boolean;
      cooker: boolean;
      dishes: boolean;
      silverware: boolean;
    };
    stoveInduction: {
      lpg: boolean;
    };
    dishesAndSilverware: boolean;
    toaster: boolean;
    microwave: boolean;
    riceCooker: boolean;
  };
  bedsAndBlanket: {
    blanket: string;
  };
  safetyAndSecurity: {
    cupboardsWithLocks: boolean;
    safe: {
      electronic: boolean;
    };
  };
  childcare: {
    childSafetySocketCovers: boolean;
  };
  otherFacilities: {
    mosquitoNet: boolean;
    newspaper: boolean;
    balcony: string;
    jacuzzi: boolean;
    privatePool: boolean;
    terrace: boolean;
    fan: {
      ceiling: boolean;
      table: boolean;
    };
  };
}

export default function ApartRoomAmenitiesForm({
  setCurrentForm,
  updateRoomData,
  roomData,
}: ApartRoomAmenitiesFormProps) {
  const [amenities, setAmenities] = useState<AmenitiesState>({
    popularWithGuests: {
      airConditioning: [],
      heater: "",
      housekeeping: [],
      inRoomDining: [],
      ironIroningBoard: false,
      mineralWater: "",
      roomService: [],
      studyRoom: false,
      kettle: false,
      wifi: "",
      bathroom: "",
      airPurifier: false,
    },
    bathroom: {
      bathroomPhone: false,
      bathtub: false,
      bubbleBath: false,
      dentalKit: false,
      geyser: false,
      hairdryer: false,
      hotColdWater: false,
      slippers: false,
      toiletries: {
        premium: false,
        moisturiser: false,
        shampoo: false,
        conditioner: false,
        showerGel: false,
        soap: false,
        comb: false,
      },
      showerCap: false,
      hammam: false,
      bathrobes: false,
      westernToiletSeat: false,
      showerCubicle: false,
      weighingScale: false,
      shavingMirror: false,
      sewingKit: false,
      bidet: false,
      toiletWithGrabRails: false,
      ensuiteBathroom: "",
    },
    roomFeatures: {
      closet: false,
      blackoutCurtains: false,
      centerTable: false,
      chargingPoints: {
        internationalAdaptors: false,
      },
      couch: false,
      diningTable: false,
      fireplace: false,
      miniBar: "",
      miniFridge: false,
      sofa: {
        sofaChair: false,
        sofaCumBed: false,
      },
      telephone: {
        local: false,
        internationalCalls: false,
      },
      workDesk: false,
      pillowMenu: false,
      hypoallergenic: false,
      livingArea: false,
      diningArea: false,
      seatingArea: false,
      chair: false,
      fireplaceGuards: false,
      coffeeMachine: false,
      jaccuzi: false,
    },
    mediaAndEntertainment: {
      tv: {
        led: false,
        lcd: false,
        flatScreen: false,
        cable: false,
        satelliteChannels: false,
        payPerViewMovie: false,
      },
      smartControls: false,
      soundSpeakers: false,
      smartphone: false,
    },
    foodAndDrinks: {
      bbqGrill: "",
      cookButlerService: "",
    },
    kitchenAndAppliances: {
      dishwasher: false,
      induction: false,
      kitchenette: "",
      refrigerator: false,
      washingMachine: false,
      cookingBasics: {
        pots: false,
        pans: false,
        cookingOil: false,
        cooker: false,
        dishes: false,
        silverware: false,
      },
      stoveInduction: {
        lpg: false,
      },
      dishesAndSilverware: false,
      toaster: false,
      microwave: false,
      riceCooker: false,
    },
    bedsAndBlanket: {
      blanket: "",
    },
    safetyAndSecurity: {
      cupboardsWithLocks: false,
      safe: {
        electronic: false,
      },
    },
    childcare: {
      childSafetySocketCovers: false,
    },
    otherFacilities: {
      mosquitoNet: false,
      newspaper: false,
      balcony: "",
      jacuzzi: false,
      privatePool: false,
      terrace: false,
      fan: {
        ceiling: false,
        table: false,
      },
    },
  });

  const handleContinue = () => {
    updateRoomData({ amenities });
    setCurrentForm("roomName");
  };

  const handleBack = () => {
    setCurrentForm("roomDetails");
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        What amenities are available in this room?
      </h1>

      <div className="space-y-6">
        {/* Popular with guests section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Popular with guests
          </h2>
          {/* Air Conditioning */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Air Conditioning</h3>
            <div className="space-y-2">
              {[
                "Centralized",
                "Room controlled",
                "Temperature will be fixed as per govt. norms",
                "Window AC",
                "Split AC",
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.popularWithGuests.airConditioning.includes(
                      option
                    )}
                    onChange={(e) => {
                      const newAC = e.target.checked
                        ? [
                            ...amenities.popularWithGuests.airConditioning,
                            option,
                          ]
                        : amenities.popularWithGuests.airConditioning.filter(
                            (ac) => ac !== option
                          );
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          airConditioning: newAC,
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Heater */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Heater</h3>
            <div className="space-y-2">
              {["Free", "Paid"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    checked={amenities.popularWithGuests.heater === option}
                    onChange={() =>
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          heater: option,
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Housekeeping */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Housekeeping</h3>
            <div className="space-y-2">
              {["24 Hours", "Limited duration", "Daily"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.popularWithGuests.housekeeping.includes(
                      option
                    )}
                    onChange={(e) => {
                      const newHousekeeping = e.target.checked
                        ? [...amenities.popularWithGuests.housekeeping, option]
                        : amenities.popularWithGuests.housekeeping.filter(
                            (hk) => hk !== option
                          );
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          housekeeping: newHousekeeping,
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* In room dining */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">In room dining</h3>
            <div className="space-y-2">
              {["24 hours", "Limited duration"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.popularWithGuests.inRoomDining.includes(
                      option
                    )}
                    onChange={(e) => {
                      const newInRoomDining = e.target.checked
                        ? [...amenities.popularWithGuests.inRoomDining, option]
                        : amenities.popularWithGuests.inRoomDining.filter(
                            (ird) => ird !== option
                          );
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          inRoomDining: newInRoomDining,
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Iron/Ironing board */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.popularWithGuests.ironIroningBoard}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    popularWithGuests: {
                      ...prev.popularWithGuests,
                      ironIroningBoard: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Iron/Ironing board</span>
            </label>
          </div>

          {/* Mineral Water */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Mineral Water</h3>
            <div className="space-y-2">
              {["Free", "Paid"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    checked={
                      amenities.popularWithGuests.mineralWater === option
                    }
                    onChange={() =>
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          mineralWater: option,
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Room services */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Room services</h3>
            <div className="space-y-2">
              {["24 hours", "Limited Duration"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.popularWithGuests.roomService.includes(
                      option
                    )}
                    onChange={(e) => {
                      const newRoomService = e.target.checked
                        ? [...amenities.popularWithGuests.roomService, option]
                        : amenities.popularWithGuests.roomService.filter(
                            (rs) => rs !== option
                          );
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          roomService: newRoomService,
                        },
                      }));
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Study Room */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.popularWithGuests.studyRoom}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    popularWithGuests: {
                      ...prev.popularWithGuests,
                      studyRoom: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Study Room</span>
            </label>
          </div>

          {/* Kettle */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.popularWithGuests.kettle}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    popularWithGuests: {
                      ...prev.popularWithGuests,
                      kettle: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Kettle</span>
            </label>
          </div>

          {/* Wifi */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Wifi</h3>
            <div className="space-y-2">
              {["Free", "Paid"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    checked={amenities.popularWithGuests.wifi === option}
                    onChange={() =>
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          wifi: option,
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bathroom */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Bathroom</h3>
            <div className="space-y-2">
              {["Shared", "Private"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    checked={amenities.popularWithGuests.bathroom === option}
                    onChange={() =>
                      setAmenities((prev) => ({
                        ...prev,
                        popularWithGuests: {
                          ...prev.popularWithGuests,
                          bathroom: option,
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Air Purifier */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.popularWithGuests.airPurifier}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    popularWithGuests: {
                      ...prev.popularWithGuests,
                      airPurifier: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Air Purifier</span>
            </label>
          </div>
        </div>

        {/* Bathroom section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Bathroom</h2>

          {/* Basic bathroom amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.bathroomPhone}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      bathroomPhone: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bathroom phone</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.bathtub}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      bathtub: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bathtub</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.bubbleBath}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      bubbleBath: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bubble bath</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.dentalKit}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      dentalKit: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Dental kit</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.geyser}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      geyser: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Geyser/water heater</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.hairdryer}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      hairdryer: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Hairdryer</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.hotColdWater}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      hotColdWater: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Hot & cold water</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.slippers}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      slippers: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Slippers</span>
            </label>
          </div>

          {/* Toiletries section */}
          <div className="mt-6">
            <h3 className="text-md font-medium mb-2">Toiletries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.premium}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          premium: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Premium</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.moisturiser}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          moisturiser: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Moisturiser</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.shampoo}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          shampoo: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Shampoo</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.conditioner}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          conditioner: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Conditioner</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.showerGel}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          showerGel: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Shower gel</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.soap}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          soap: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Soap</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={amenities.bathroom.toiletries.comb}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      bathroom: {
                        ...prev.bathroom,
                        toiletries: {
                          ...prev.bathroom.toiletries,
                          comb: e.target.checked,
                        },
                      },
                    }))
                  }
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Comb</span>
              </label>
            </div>
          </div>

          {/* Additional bathroom amenities */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.showerCap}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      showerCap: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Shower cap</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.hammam}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      hammam: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Hammam</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.bathrobes}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      bathrobes: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bathrobes</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.westernToiletSeat}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      westernToiletSeat: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Western toilet seat</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.showerCubicle}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      showerCubicle: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Shower cubicle</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.weighingScale}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      weighingScale: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Weighing scale</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.shavingMirror}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      shavingMirror: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Shaving mirror</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.sewingKit}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      sewingKit: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Sewing kit</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.bidet}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      bidet: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bidet</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={amenities.bathroom.toiletWithGrabRails}
                onChange={(e) =>
                  setAmenities((prev) => ({
                    ...prev,
                    bathroom: {
                      ...prev.bathroom,
                      toiletWithGrabRails: e.target.checked,
                    },
                  }))
                }
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Toilet with grab rails</span>
            </label>
          </div>

          {/* Ensuite Bathroom */}
          <div className="mt-6">
            <h3 className="text-md font-medium mb-2">
              Ensuite Bathroom / common bay
            </h3>
            <div className="space-y-2">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    checked={amenities.bathroom.ensuiteBathroom === option}
                    onChange={() =>
                      setAmenities((prev) => ({
                        ...prev,
                        bathroom: {
                          ...prev.bathroom,
                          ensuiteBathroom: option,
                        },
                      }))
                    }
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
