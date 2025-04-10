interface AddRoomProgressBarProps {
    currentForm: string
  }
  
  export default function AddRoomProgressBar({ currentForm }: AddRoomProgressBarProps) {
    const formSteps = ["roomDetails", "bathroomDetails", "roomName", "roomPrice"]
  
    const getProgressPercentage = () => {
      const currentIndex = formSteps.indexOf(currentForm)
      if (currentIndex === -1) return 100 // If not in the list, assume completed
      return Math.round((currentIndex / (formSteps.length - 1)) * 100)
    }
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1 text-xs text-gray-600 px-4">
          <span>Room Details</span>
          <span>Bathroom</span>
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
    )
  }
  