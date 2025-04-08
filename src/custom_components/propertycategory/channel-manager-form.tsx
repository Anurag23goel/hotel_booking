"use client"

interface ChannelManagerFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { channelManager: boolean }) => void
  formData: any
}

export default function ChannelManagerForm({ setCurrentForm, updateFormData, formData }: ChannelManagerFormProps) {
  const handleOptionChange = (useChannelManager: boolean) => {
    updateFormData({ channelManager: useChannelManager })
  }

  const handleContinue = () => {
    setCurrentForm("propertyDetails")
  }

  const handleBack = () => {
    setCurrentForm("propertyLocation")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Connect to a channel manager</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Do you want to connect this listing to your channel manager?</h2>

        <p className="text-gray-600 mb-6">
          A channel manager is a third-party tool that lets you manage rates and availability across different sites you
          might list your place on, including Booking.com. If you&apos;re already using a channel manager, you can
          select &apos;Yes&apos; to connect it to your listing.
        </p>

        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="channelManager"
              checked={formData.channelManager === true}
              onChange={() => handleOptionChange(true)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">Yes, I will connect this listing to my channel manager</span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="channelManager"
              checked={formData.channelManager === false}
              onChange={() => handleOptionChange(false)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-2">No, I won&apos;t be using a channel manager at this time</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
