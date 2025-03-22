"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';  
import { useRouter } from 'next/navigation';

const NewPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    watch,
  } = useForm();

  const newPasswordValue = watch("newPassword");
  const confirmNewPasswordValue = watch("confirmNewPassword");
  return (
    <div>
      <h2 className="text-2xl font-PlayfairDisplay-Bold ">Update Password ->-> </h2>
      <p className="text-black opacity-55 font-bold mt-2">
            Enter new password.
          </p>

          <form className="mt-6 space-y-4">

            <div>
              <label className="block text-md font-bold text-black mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type="newPassword"
                  {...register("newPassword", { required: "New Password is necessary" })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your password"
                />
                {newPasswordValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type="confirmNewPassword"
                  {...register("confirmNewPassword", { required: "Confirm New Password is necessary" })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your password"
                />
                {confirmNewPasswordValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => router.push('/')}
              type="submit"
              className="w-full bg-[#06104d] p-4 mt-7 text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              Next
            </button>

          </form>
    </div>
  )
}

export default NewPasswordForm
