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
      <div className="bg-[#003580] text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Booking.com</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=20&width=30" alt="UK Flag" className="mr-2 h-5 w-7" />
          </div>
          <div className="flex items-center gap-1">
            <span>Help</span>
            <div className="h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-[#003580] font-bold">
              ?
            </div>
          </div>
          <div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-[#003580]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-b">
        <AddRoomProgressBar currentForm={currentForm} />
      </div>

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </div>
  )
}
