interface FinalDetailsProgressBarProps {
    currentForm: string
  }
  
  export default function FinalDetailsProgressBar({ currentForm }: FinalDetailsProgressBarProps) {
    const formSteps = ["invoicing", "licenseNumber", "partnerVerification", "taxDetails"]
  
    const getProgressPercentage = () => {
      const currentIndex = formSteps.indexOf(currentForm)
      if (currentIndex === -1) return 100 // If not in the list, assume completed
      return Math.round((currentIndex / (formSteps.length - 1)) * 100)
    }
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1 text-xs text-gray-600 px-4">
          <span>Invoicing</span>
          <span>License</span>
          <span>Verification</span>
          <span>Tax Details</span>
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
  