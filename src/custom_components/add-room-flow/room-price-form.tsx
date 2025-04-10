"use client"

import { useState } from "react"

interface RoomPriceFormProps {
  setCurrentForm: (form: string) => void
  updateRoomData: (data: any) => void
  roomData: any
}

export default function RoomPriceForm({ setCurrentForm, updateRoomData, roomData }: RoomPriceFormProps) {
  const [priceDetails, setPriceDetails] = useState({
    price: roomData.price?.amount || "",
    currency: roomData.price?.currency || "INR",
  })
  const [showInfoBox, setShowInfoBox] = useState(true)
  const [showRatePlans, setShowRatePlans] = useState(false)

  const handlePriceChange = (value: string) => {
    setPriceDetails((prev) => ({
      ...prev,
      price: value,
    }))
  }

  const handleCurrencyChange = (value: string) => {
    setPriceDetails((prev) => ({
      ...prev,
      currency: value,
    }))
  }

  const handleContinue = () => {
    updateRoomData({
      price: {
        amount: priceDetails.price,
        currency: priceDetails.currency,
      },
    })
    if (showRatePlans) {
      setCurrentForm("ratePlans")
    } else {
      setShowRatePlans(true)
    }
  }

  const handleBack = () => {
    if (showRatePlans) {
      setShowRatePlans(false)
    } else {
      setCurrentForm("roomName")
    }
  }

  const handleFinish = () => {
    updateRoomData({
      price: {
        amount: priceDetails.price,
        currency: priceDetails.currency,
      },
    })
    setCurrentForm("propertySummary")
  }

  // Calculate commission and earnings
  const commission = priceDetails.price ? Number.parseFloat(priceDetails.price) * 0.69 : 0
  const earnings = priceDetails.price ? Number.parseFloat(priceDetails.price) - commission : 0

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      {!showRatePlans ? (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Set the price per night for this room</h1>

          <div className="bg-white rounded-md border border-gray-200 p-6 mb-6 relative">
            {/* {showInfoBox && (
              <div className="absolute right-6 top-6 bg-gray-50 border border-gray-200 p-4 rounded-md w-full md:w-64 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
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
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <h3 className="font-medium">What if I&apos;m not sure about my price?</h3>
                  </div>
                  <button
                    onClick={() => setShowInfoBox(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Don&apos;t worry, you can always change it later. You can even set weekend, midweek and seasonal
                  prices, giving you more control over what you earn.
                </p>
              </div>
            )} */}

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">How much do you want to charge per night?</h2>
              <div className="mb-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price guests pay
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">{priceDetails.currency}</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-[#0071c2] focus:border-[#0071c2] block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                    placeholder="0"
                    value={priceDetails.price}
                    onChange={(e) => handlePriceChange(e.target.value)}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Including taxes, commission and charges</p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <span className="font-medium">69.00% Booking.com commission</span>
                </div>

                <div className="flex items-center text-sm text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>24/7 help in your language</span>
                </div>

                <div className="flex items-center text-sm text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Save time with automatically confirmed bookings</span>
                </div>

                <div className="flex items-center text-sm text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>We promote your place on Google</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {priceDetails.currency}
                    {earnings.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-600">Your earnings (including taxes)</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Rate plans</h1>

          <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
            <p className="text-gray-600 mb-6">
              To attract a wider range of guests, we suggest setting up multiple rate plans. The recommended prices and
              policies for each plan are based on data from properties like yours, but they can be edited now or after
              you complete registration.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Standard rate plan</h2>

              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Price per group size</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <button className="text-[#0071c2] text-sm font-medium">Edit</button>
              </div>

              <div className="mb-6">
                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="mr-2">Occupancy</span>
                  </div>
                  <div>
                    <span className="font-medium">Guests pay</span>
                  </div>
                </div>

                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>× 2</span>
                  </div>
                  <div>
                    <span >
                      {priceDetails.currency} {Number.parseFloat(priceDetails.price).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between py-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>× 1</span>
                  </div>
                  <div>
                    <span>
                      {priceDetails.currency} {(Number.parseFloat(priceDetails.price) * 0.9).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Cancellation policy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <button className="text-[#0071c2] text-sm font-medium">Edit</button>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                This policy is set at the property level – any changes made will be applied to all rooms.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">
                    Guests can cancel their bookings for free before 18:00 on the day of arrival. The guests will be
                    charged cost of the first night if they cancel after this.
                  </p>
                </div>

                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">Guests who cancel within 24 hours will have their cancellation fee waived</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Non-refundable rate plan</h2>

              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Price and cancellation policy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <button className="text-[#0071c2] text-sm font-medium">Edit</button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">Guests will pay 10% less than the standard rate for a non-refundable rate</p>
                </div>

                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">Guests cannot cancel their bookings for free at any time</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Weekly rate plan</h2>

              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Price and cancellation policy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <button className="text-[#0071c2] text-sm font-medium">Edit</button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">
                    Guests will pay 15% less than the standard rate when they book for at least 7 nights
                  </p>
                </div>

                <div className="flex items-start">
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
                    className="text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">
                    Guests can cancel their bookings for free before 18:00 on the day of arrival. The guests will be
                    charged cost of the first night if they cancel after this (based on the standard rate cancellation
                    policy).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        {showRatePlans ? (
          <button
            className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
            onClick={handleFinish}
          >
            Continue
          </button>
        ) : (
          <button
            className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
            onClick={handleContinue}
            disabled={!priceDetails.price}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  )
}
