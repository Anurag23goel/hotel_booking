import AddRoomProgressBar from "./add-room-progress-bar";
import RoomDetailsForm from "./room-details-form";
import BathroomDetailsForm from "./facilities-details-forms";
import RoomNameForm from "./room-name-form";
import RoomPriceForm from "./room-price-form";
import KitchenDetailsForm from "./kitchen-details-form";
import ApartRoomAmenitiesForm from "./apartRoom-amenities-form";

interface AddRoomFlowProps {
  currentForm: string;
  setCurrentForm: (form: string) => void;
  roomData: any;
  updateRoomData: (data: any) => void;
  onFinish: () => void;
  onCancel: () => void;
  formData: any;
}

export default function AddRoomFlow({
  currentForm,
  formData,
  setCurrentForm,
  roomData,
  updateRoomData,
  onFinish,
  onCancel,
}: AddRoomFlowProps) {
  const handleSetCurrentForm = (form: string) => {
    if (form === "propertySummary") {
      if (currentForm === "roomDetails") {
        onCancel();
      } else {
        onFinish();
      }
    } else {
      setCurrentForm(form);
    }
  };

  console.log("this is form data -> ", formData);

  const renderForm = () => {
    switch (currentForm) {
      case "roomDetails":
        return (
          <RoomDetailsForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        );
      //this is facilities details form dont get confused by name will change later
      case "bathroomDetails":
        return formData?.accommodationType === "entire" &&
          (formData?.propertyType === "apart-hotel" ||
            formData?.propertyType === "hostel") ? (
          <ApartRoomAmenitiesForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        ) : (
          <BathroomDetailsForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        );
      case "kitchenDetails":
        return (
          <KitchenDetailsForm
            formData={formData}
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        );
      case "roomName":
        return (
          <RoomNameForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
            formData={formData}
          />
        );
      case "roomPrice":
        return (
          <RoomPriceForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        );
      default:
        return (
          <RoomDetailsForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-white border-b">
        <AddRoomProgressBar currentForm={currentForm} formData={formData} />
      </div>

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </div>
  );
}
