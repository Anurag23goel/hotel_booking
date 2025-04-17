"use client"

import { motion } from "framer-motion"
import { Info } from "lucide-react"

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#0071c2] to-[#00487a] bg-clip-text text-transparent"
      >
        Connect to a channel manager
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl border-2 border-gray-200 p-8 mb-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-start gap-4 mb-6">
          <Info className="w-6 h-6 text-[#0071c2] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Do you want to connect this listing to your channel manager?
            </h2>
            <p className="text-gray-600">
              A channel manager is a third-party tool that lets you manage rates and availability across different sites you
              might list your place on, including Booking.com. If you&apos;re already using a channel manager, you can
              select &apos;Yes&apos; to connect it to your listing.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <motion.label 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors hover:bg-gray-50"
          >
            <input
              type="radio"
              name="channelManager"
              checked={formData.channelManager === true}
              onChange={() => handleOptionChange(true)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-3 font-medium">Yes, I will connect this listing to my channel manager</span>
          </motion.label>

          <motion.label 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors hover:bg-gray-50"
          >
            <input
              type="radio"
              name="channelManager"
              checked={formData.channelManager === false}
              onChange={() => handleOptionChange(false)}
              className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300"
            />
            <span className="ml-3 font-medium">No, I won&apos;t be using a channel manager at this time</span>
          </motion.label>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-4"
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-2 h-12 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          onClick={handleBack}
        >
          <span className="text-[#0071c2] text-xl">←</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 md:flex-none md:min-w-[200px] bg-gradient-to-r from-[#0071c2] to-[#00487a] hover:from-[#00487a] hover:to-[#003558] text-white h-12 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          onClick={handleContinue}
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  )
}