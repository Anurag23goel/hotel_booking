"use client";
import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  X,
  Bed,
  Trash2,
  Users,
  Bath,
  Baby,
  Home,
} from "lucide-react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface BedType {
  name: string;
  size: string;
  count: number;
}

interface Room {
  id: string;
  name: string;
  beds: string[];
  expanded?: boolean;
}

// Define validation schema with Zod
const hotelBedroomSchema = z.object({
  guestCapacity: z.number().min(1, "Guest capacity must be at least 1"),
  bathroomCount: z.number().min(1, "Bathroom count must be at least 1"),
  allowChildren: z.boolean(),
  offerCots: z.boolean(),
  villaSize: z.string().optional(),
});

// Infer the type from the schema
type HotelBedroomFormData = z.infer<typeof hotelBedroomSchema>;

interface HotelBedroomProps {
  onComplete: () => void;
}

function HotelBedroom({ onComplete }: HotelBedroomProps) {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: "bedroom1",
      name: "Bedroom 1",
      beds: [
        "1 extra-large double bed",
        "1 large double bed",
        "1 double bed",
        "1 single bed",
      ],
      expanded: true,
    },
    {
      id: "bedroom2",
      name: "Bedroom 2",
      beds: [
        "3 single beds",
        "3 double beds",
        "2 large double beds",
        "2 extra-large double beds",
      ],
      expanded: true,
    },
    {
      id: "living-room",
      name: "Living room",
      beds: [],
      expanded: true,
    },
    {
      id: "other-spaces",
      name: "Other spaces",
      beds: [],
      expanded: true,
    },
  ]);

  const [isAddingBedroom, setIsAddingBedroom] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [selectedBeds, setSelectedBeds] = useState<BedType[]>([
    { name: "Single bed", size: "90 - 130 cm wide", count: 0 },
    { name: "Double bed", size: "131 - 150 cm wide", count: 0 },
    { name: "Large bed (King size)", size: "151 - 180 cm wide", count: 0 },
    {
      name: "Extra-large double bed (Super-king size)",
      size: "181 - 210 cm wide",
      count: 0,
    },
    { name: "Bunk bed", size: "Variable size", count: 0 },
    { name: "Sofa bed", size: "Variable size", count: 0 },
    { name: "Futon Mat", size: "Variable size", count: 0 },
  ]);
  const [editingRoom, setEditingRoom] = useState<string | null>(null);

  // Initialize form with validation
  const methods = useForm<HotelBedroomFormData>({
    resolver: zodResolver(hotelBedroomSchema),
    defaultValues: {
      guestCapacity: 1,
      bathroomCount: 1,
      allowChildren: true,
      offerCots: false,
      villaSize: "",
    },
    mode: "onChange", // Validate on change
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = methods;

  // Watch form values
  const guestCapacity = watch("guestCapacity");
  const bathroomCount = watch("bathroomCount");
  const allowChildren = watch("allowChildren");
  const offerCots = watch("offerCots");
  const villaSize = watch("villaSize");

  const toggleRoom = (roomId: string) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId ? { ...room, expanded: !room.expanded } : room
      )
    );
  };

  const updateBedCount = (index: number, increment: boolean) => {
    setSelectedBeds((beds) =>
      beds.map((bed, i) =>
        i === index
          ? {
              ...bed,
              count: increment ? bed.count + 1 : Math.max(0, bed.count - 1),
            }
          : bed
      )
    );
  };

  const saveBedroom = () => {
    const bedDescriptions = selectedBeds
      .filter((bed) => bed.count > 0)
      .map(
        (bed) =>
          `${bed.count} ${bed.name.toLowerCase()}${bed.count > 1 ? "s" : ""}`
      );

    if (bedDescriptions.length > 0) {
      const newRoom: Room = {
        id: `bedroom${rooms.length + 1}`,
        name: `Bedroom ${rooms.length + 1}`,
        beds: bedDescriptions,
        expanded: true,
      };

      setRooms([...rooms, newRoom]);
    }

    // Reset the form
    setSelectedBeds((beds) => beds.map((bed) => ({ ...bed, count: 0 })));
    setIsAddingBedroom(false);
    setShowMoreOptions(false);
  };

  const removeRoom = (roomId: string) => {
    setRooms(rooms.filter((room) => room.id !== roomId));
  };

  const openEditModal = (roomId: string) => {
    setEditingRoom(roomId);
    // Reset bed counts
    setSelectedBeds((beds) => beds.map((bed) => ({ ...bed, count: 0 })));
    setShowMoreOptions(false);
  };

  const saveEditedRoom = () => {
    if (!editingRoom) return;

    const bedDescriptions = selectedBeds
      .filter((bed) => bed.count > 0)
      .map(
        (bed) =>
          `${bed.count} ${bed.name.toLowerCase()}${bed.count > 1 ? "s" : ""}`
      );

    setRooms(
      rooms.map((room) =>
        room.id === editingRoom ? { ...room, beds: bedDescriptions } : room
      )
    );

    // Reset the form
    setSelectedBeds((beds) => beds.map((bed) => ({ ...bed, count: 0 })));
    setEditingRoom(null);
    setShowMoreOptions(false);
  };

  const getRoomName = (roomId: string) => {
    const room = rooms.find((r) => r.id === roomId);
    return room ? room.name : "";
  };

  const removeBed = (roomId: string, bedIndex: number) => {
    setRooms(
      rooms.map((room) => {
        if (room.id === roomId) {
          const newBeds = [...room.beds];
          newBeds.splice(bedIndex, 1);
          return { ...room, beds: newBeds };
        }
        return room;
      })
    );
  };

  const onSubmit = (data: HotelBedroomFormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    // You can also include the rooms data if needed
    const formData = {
      ...data,
      rooms: rooms.map((room) => ({
        id: room.id,
        name: room.name,
        beds: room.beds,
      })),
    };
    console.log("Complete form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Property details
          </h1>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Where can people sleep?
                </h2>

                {rooms.map((room) => (
                  <div key={room.id} className="border rounded-lg">
                    <div className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50">
                      <button
                        className="flex-1 text-left font-medium text-gray-900"
                        onClick={() => toggleRoom(room.id)}
                      >
                        {room.name}
                      </button>
                      <div className="flex items-center space-x-2">
                        {room.id !== "living-room" &&
                          room.id !== "other-spaces" && (
                            <button
                              onClick={() => removeRoom(room.id)}
                              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Remove bedroom"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        {room.id === "living-room" ||
                        room.id === "other-spaces" ? (
                          <button
                            onClick={() => openEditModal(room.id)}
                            className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                            aria-label="Edit room"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => toggleRoom(room.id)}
                            className="p-1 text-gray-500 hover:text-gray-700"
                          >
                            {room.expanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {room.expanded && (
                      <div className="px-4 pb-3 text-gray-600">
                        {room.beds.length > 0 ? (
                          room.beds.map((bed, index) => (
                            <div
                              key={index}
                              className="py-1 flex justify-between items-center"
                            >
                              <span>{bed}</span>
                              {(room.id === "living-room" ||
                                room.id === "other-spaces") && (
                                <button
                                  onClick={() => removeBed(room.id, index)}
                                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                  aria-label="Remove bed"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="py-1">0 beds</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4"
                  onClick={() => setIsAddingBedroom(true)}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add bedroom
                </button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  How many guests can stay?
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      Maximum number of guests:
                    </span>
                  </div>
                  <Controller
                    name="guestCapacity"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col">
                        <div className="flex items-center border rounded-md">
                          <button
                            type="button"
                            onClick={() =>
                              setValue(
                                "guestCapacity",
                                Math.max(1, field.value - 1)
                              )
                            }
                            className="p-2 text-gray-500 hover:text-gray-700"
                            aria-label="Decrease guest count"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 w-12 text-center">
                            {field.value}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setValue("guestCapacity", field.value + 1)
                            }
                            className="p-2 text-gray-500 hover:text-gray-700"
                            aria-label="Increase guest count"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        {errors.guestCapacity && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.guestCapacity.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  How many bathrooms are there?
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Number of bathrooms:</span>
                  </div>
                  <Controller
                    name="bathroomCount"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col">
                        <div className="flex items-center border rounded-md">
                          <button
                            type="button"
                            onClick={() =>
                              setValue(
                                "bathroomCount",
                                Math.max(1, field.value - 1)
                              )
                            }
                            className="p-2 text-gray-500 hover:text-gray-700"
                            aria-label="Decrease bathroom count"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 w-12 text-center">
                            {field.value}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setValue("bathroomCount", field.value + 1)
                            }
                            className="p-2 text-gray-500 hover:text-gray-700"
                            aria-label="Increase bathroom count"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        {errors.bathroomCount && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.bathroomCount.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Do you allow children?
                </h2>
                <Controller
                  name="allowChildren"
                  control={control}
                  render={({ field }) => (
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => field.onChange(true)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                          field.value
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-gray-100 text-gray-700 border border-gray-300"
                        }`}
                      >
                        <span>Yes</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange(false)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                          !field.value
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-gray-100 text-gray-700 border border-gray-300"
                        }`}
                      >
                        <span>No</span>
                      </button>
                    </div>
                  )}
                />
              </div>

              <div className="border-t pt-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Do you offer cots?
                </h2>
                <p className="text-sm text-gray-500">
                  Cots sleep most infants 0-3 and can be made available to
                  guests on request.
                </p>
                <Controller
                  name="offerCots"
                  control={control}
                  render={({ field }) => (
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => field.onChange(true)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                          field.value
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-gray-100 text-gray-700 border border-gray-300"
                        }`}
                      >
                        <Baby className="w-5 h-5" />
                        <span>Yes</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange(false)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                          !field.value
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-gray-100 text-gray-700 border border-gray-300"
                        }`}
                      >
                        <span>No</span>
                      </button>
                    </div>
                  )}
                />
              </div>

              <div className="border-t pt-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  How big is this villa?
                </h2>
                <p className="text-sm text-gray-500">Villa size - optional</p>
                <Controller
                  name="villaSize"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <Home className="w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          {...field}
                          placeholder="Enter villa size (e.g., 200 sq meters)"
                          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      {errors.villaSize && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors.villaSize.message}
                        </span>
                      )}
                    </div>
                  )}
                />
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
                  disabled={isSubmitting || !isValid}
                  className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors font-medium ${
                    isSubmitting || !isValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#040928] hover:bg-[#1d2030]"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Continue"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>

      {/* Add Bedroom Modal */}
      {isAddingBedroom && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Bedroom {rooms.length + 1}
                </h2>
                <button
                  onClick={() => setIsAddingBedroom(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Which beds are available in this room?
              </h3>

              <div className="space-y-4">
                {selectedBeds
                  .slice(0, showMoreOptions ? undefined : 4)
                  .map((bed, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <Bed className="w-6 h-6 text-gray-400" />
                        <div>
                          <div className="font-medium">{bed.name}</div>
                          <div className="text-sm text-gray-500">
                            {bed.size}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateBedCount(index, false)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{bed.count}</span>
                        <button
                          onClick={() => updateBedCount(index, true)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                <button
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showMoreOptions ? "Fewer bed options" : "More bed options"}
                </button>
              </div>

              <div className="mt-6 flex justify-between border-t pt-4">
                <button
                  onClick={() => setIsAddingBedroom(false)}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={saveBedroom}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Room Modal */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {getRoomName(editingRoom)}
                </h2>
                <button
                  onClick={() => setEditingRoom(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Which beds are available in this room?
              </h3>

              <div className="space-y-4">
                {selectedBeds
                  .slice(0, showMoreOptions ? undefined : 4)
                  .map((bed, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <Bed className="w-6 h-6 text-gray-400" />
                        <div>
                          <div className="font-medium">{bed.name}</div>
                          <div className="text-sm text-gray-500">
                            {bed.size}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateBedCount(index, false)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{bed.count}</span>
                        <button
                          onClick={() => updateBedCount(index, true)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                <button
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showMoreOptions ? "Fewer bed options" : "More bed options"}
                </button>
              </div>

              <div className="mt-6 flex justify-between border-t pt-4">
                <button
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEditedRoom}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelBedroom;
