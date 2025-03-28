"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import OtpInput from "react-otp-input";

interface OtpFormData {
  otp: string;
}

const OtpPageForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
  const [otp, setOtp] = useState("");
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormData>();

  const onSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits");
      return;
    }

    try {
      const response = await axios.post(
        "/api/verify-otp",
        { otp },
        {
          withCredentials: true,
        }
      );

      console.log("this is response of the otp page ->", response.data);

      if (response.data.success) {
        toast.success("OTP verified successfully");
        setCurrentForm("newPasswordForm");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl font-PlayfairDisplay-Bold">
        Enter OTP
      </h2>
      <p className="text-black/60 font-medium mt-2">
        Enter the OTP sent to your email or phone number.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-11 space-y-4">
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 p-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} type="text" />}
              shouldAutoFocus
              inputStyle={{
                width: "40px",
                height: "50px",
                margin: "5px",
                fontSize: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
              containerStyle={{ justifyContent: "center" }}
            />
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
              OTP Code
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#06104d] p-4 mt-7 text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpPageForm;
