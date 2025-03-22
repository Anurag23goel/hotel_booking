"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';  

const EmailForm = ({setCurrentForm}:{setCurrentForm: (form: string) => void}) => {
  const {
    register,
    watch,
  } = useForm();

  const emailValue = watch("email");

  return (
    <div>
      <h2 className="text-2xl font-bold ">Forgot your password ? </h2>
      <p className="text-gray-600 mt-2">
            Enter email address associated with your account.
          </p>

          <form className="mt-6 space-y-4">

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", { required: "Email is necessary" })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your email address"
                />
                {emailValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setCurrentForm('otp')}
              type="submit"
              className="w-full bg-black text-white rounded-md py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              Next
            </button>

          </form>

          <div className="relative my-7 mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-gray-500">Or</span>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentForm('phone')}
            className='bg-black p-4 text-white rounded-full opacity-75 py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-1xl font-bold mt-5'>
            send via sms
          </button>
    </div>
  )
}

export default EmailForm
