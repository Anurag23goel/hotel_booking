"use client";
import React from "react";
import { useForm } from "react-hook-form";
// import { ChevronRight } from 'lucide-react';

const OtpPageForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
 

  return (
    <div>
      <h2 className="text-2xl font-PlayfairDisplay-Bold ">Enter OTP</h2>
      <p className="text-black opacity-55 font-bold mt-2">
            Enter the OTP sent to your email or phone number.
          </p>

          <form className="mt-6 space-y-4">

            <div>
              <label className="block text-md font-medium text-black mb-1">
                OTP
              </label>
              <div className="flex">
                <input className=" border-black border-b h-10 text-1xl text-black text-center" type="text"/>
                
              </div>
            </div>
            {/* backend par call hoga then yeh woh call krega next page kko */}
            <button
              onClick={() => setCurrentForm('newPassword')}
              type="submit"
              className="w-full bg-[#06104d] p-4 mt-7 text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              Next
            </button>

          </form>
    </div>
  );
};

export default OtpPageForm;
