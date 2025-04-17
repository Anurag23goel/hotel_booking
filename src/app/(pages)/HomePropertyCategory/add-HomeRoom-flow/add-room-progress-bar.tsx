interface AddRoomProgressBarProps {
  currentForm: string;
  formData: any;
}

export default function AddRoomProgressBar({
  currentForm,
  formData,
}: AddRoomProgressBarProps) {
  const formSteps = [
    "roomDetails",
    "bathroomDetails",
    "kitchenDetails",
    "roomName",
    "roomPrice",
  ];

  const getProgressPercentage = () => {
    const currentIndex = formSteps.indexOf(currentForm);
    if (currentIndex === -1) return 100; // If not in the list, assume completed
    return Math.round((currentIndex / (formSteps.length - 1)) * 100);
  };

  console.log("this is form data in progress bar-> ", formData);

  const isApartHotelOrEntire =
    formData?.accommodationType === "entire" &&
    (formData?.propertyType === "apart-hotel" ||
      formData?.propertyType === "hostel");

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs text-gray-600 px-4">
        <span>Room Details</span>
        <span>{isApartHotelOrEntire ? "Room Amenities" : "Facilities"}</span>
        {!isApartHotelOrEntire && <span>Kitchen</span>}
        <span>Room Name</span>
        <span>Pricing</span>
      </div>
      <div className="w-full bg-gray-200 h-2">
        <div
          className="bg-[#0071c2] h-2 transition-all duration-500 ease-in-out"
          style={{ width: `${getProgressPercentage()}%` }}
        ></div>
      </div>
    </div>
  );
}
