import AddRoomProgressBar from "./add-room-progress-bar"
import RoomDetailsForm from "./room-details-form"
import BathroomDetailsForm from "./bathroom-details-forms"
import RoomNameForm from "./room-name-form"
import RoomPriceForm from "./room-price-form"

interface AddRoomFlowProps {
  currentForm: string
  setCurrentForm: (form: string) => void
  roomData: any
  updateRoomData: (data: any) => void
  onFinish: () => void
  onCancel: () => void
}

export default function AddRoomFlow({
  currentForm,
  setCurrentForm,
  roomData,
  updateRoomData,
  onFinish,
  onCancel,
}: AddRoomFlowProps) {
  const handleSetCurrentForm = (form: string) => {
    if (form === "propertySummary") {
      onFinish()
    } else {
      setCurrentForm(form)
    }
  }

  const renderForm = () => {
    switch (currentForm) {
      case "roomDetails":
        return (
          <RoomDetailsForm setCurrentForm={handleSetCurrentForm} updateRoomData={updateRoomData} roomData={roomData} />
        )
      case "bathroomDetails":
        return (
          <BathroomDetailsForm
            setCurrentForm={handleSetCurrentForm}
            updateRoomData={updateRoomData}
            roomData={roomData}
          />
        )
      case "roomName":
        return (
          <RoomNameForm setCurrentForm={handleSetCurrentForm} updateRoomData={updateRoomData} roomData={roomData} />
        )
      case "roomPrice":
        return (
          <RoomPriceForm setCurrentForm={handleSetCurrentForm} updateRoomData={updateRoomData} roomData={roomData} />
        )
      default:
        return (
          <RoomDetailsForm setCurrentForm={handleSetCurrentForm} updateRoomData={updateRoomData} roomData={roomData} />
        )
    }
  }

  return (
    <div className="flex-1 flex flex-col">


      <div className="p-4 bg-white border-b">
        <AddRoomProgressBar currentForm={currentForm} />
      </div>

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </div>
  )
}
