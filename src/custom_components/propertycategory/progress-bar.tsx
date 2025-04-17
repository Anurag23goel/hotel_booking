interface ProgressBarProps {
    percentage: number
  }
  
  export default function ProgressBar({ percentage }: ProgressBarProps) {
    return (
      <div className="w-full bg-gray-200 h-2">
        <div
          className="bg-[#0071c2] h-2 transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    )
  }
  