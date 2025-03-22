"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";

const EmailForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
  const { register, watch, handleSubmit } = useForm();

  const emailValue = watch("email");

  const emailHandler = async (data: any) => {
    console.log(data);
    setCurrentForm("otp");
  };

  return (
    <div>
      <h2 className="text-2xl font-PlayfairDisplay-Bold ">Forgot your password ? </h2>
      <p className="text-black opacity-55 font-bold mt-2">
            Enter email address associated with your account.
          </p>

          <form className="mt-6 space-y-4">

            <div>
              <label className="block text-md font-semibold text-black mb-1">
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
              className="w-full bg-[#06104d] text-white rounded-md py-3 hover:bg-black  transition-colors flex items-center justify-center gap-2"
            >
              Next
            </button>

          </form>

          <div className="relative my-7 mb-[50px]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-black">Or</span>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentForm('phone')}
            className='bg-[#06104d] opacity-50 p-4 mt-7 text-white rounded-full py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-1xl font-bold '>
            send via sms
          </button>
    </div>
  )
}

   

export default EmailForm;
