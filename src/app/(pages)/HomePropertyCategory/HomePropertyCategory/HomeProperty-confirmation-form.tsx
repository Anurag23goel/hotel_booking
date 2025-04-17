"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PropertyConfirmationFormProps {
  setCurrentForm: (form: string) => void
  formData: {
    propertyType: string
    quantity: string
    address: {
      street: string
      apartment: string
      country: string
      city: string
      postalCode: string
    }
  }
}

export default function PropertyConfirmationForm({ setCurrentForm, formData }: PropertyConfirmationFormProps) {
  const propertyType = formData.propertyType || "hotel"
  const quantity = formData.quantity || "single"

  const handleContinue = () => {
    setCurrentForm("propertyLocation")
  }

  const handleChange = () => {
    setCurrentForm("propertyQuantity")
  }

  const getPropertyTitle = () => {
    const isSingle = quantity === "single"

    switch (propertyType) {
      case "hotel":
        return `One ${isSingle ? "hotel" : "hotels"} where guests can book a room`
      case "guest-house":
        return `One guest house where guests can book a room`
      case "bed-and-breakfast":
        return `One bed and breakfast where guests can book a room`
      default:
        return `One ${propertyType} where guests can book a room`
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 max-w-xl mx-auto w-full px-4 py-8 md:py-12"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="border-2 rounded-xl p-8 flex flex-col items-center bg-white shadow-lg"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-6 text-lg"
        >
          You&apos;re listing:
        </motion.p>

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="mb-6 p-4 bg-blue-50 rounded-full"
        >
          <Image
            src="/assets/house2.png"
            alt="Property icon"
            width={100}
            height={100}
            className="text-[#0071c2]"
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#0071c2] to-[#00487a] bg-clip-text text-transparent"
        >
          {getPropertyTitle()}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Does this sound like your property?
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#0071c2] to-[#00487a] hover:from-[#00487a] hover:to-[#003558] text-white h-12 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
            onClick={handleContinue}
          >
            Continue
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-12 border-2 border-gray-300 rounded-xl text-[#0071c2] hover:bg-gray-50 font-medium transition-colors"
            onClick={handleChange}
          >
            No, I need to make a change
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}