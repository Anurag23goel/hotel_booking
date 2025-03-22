"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';  

const PhoneForm = ({setCurrentForm}:{setCurrentForm: (form: string) => void}) => {
  const {
    register,
    watch,
  } = useForm();

  const phoneValue = watch("phone");

  return (
    <div>
      <h2 className="text-2xl font-PlayfairDisplay-Bold  ">Forgot your password ? </h2>
      <p className="text-black opacity-55 font-bold  mt-2">
            Enter number associated with your account.
          </p>

          <form className="mt-6 space-y-4">

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="phone"
                  {...register("phone", { required: "phone number is necessary" })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your email address"
                />
                {phoneValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setCurrentForm('otp')}
              type="submit"
              className="w-full bg-[#06104d] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              Next
            </button>

          </form>

          <div className="relative my-7 mb-[50px]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-gray-500">Or</span>
            </div>
          </div>

            <button 
            onClick={() => setCurrentForm('email')}
            className='bg-[#06104d] opacity-50 p-4 mt-7 text-white rounded-full  py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-1xl font-bold '>
              send via email
            </button>
    </div>
  )
}

export default PhoneForm
