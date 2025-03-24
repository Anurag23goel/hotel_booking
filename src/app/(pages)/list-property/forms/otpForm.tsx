"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";

interface OtpFormData {
  otp: string;
}

interface OtpFormProps {
  setCurrentForm: (form: string) => void;
}

const OtpForm = ({ setCurrentForm }: OtpFormProps) => {
  const [otp, setOtp] = useState("");
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<OtpFormData>();
  const router = useRouter();

  const onSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits");
      return;
    }

    try {
      const response = await axios.post(
        "/api/owner-verify-otp",
        { otp },
        {
          withCredentials: true,
        }
      );
      console.log("this is otp form response->", response.data);

      if (response.data.success) {
        toast.success("OTP verified successfully");
        router.push("/owner-registration-form");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Enter OTP</h2>
        <p className="text-sm text-gray-500">
          Please enter the OTP sent to your email address
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 p-3">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="!w-[40px] h-[40px] border-gray-300 text-center mx-1"
                />
              )}
              containerStyle="flex justify-between"
            />
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
              OTP Code
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Verify OTP
        </button>

        <div className="mb-6 mt-6 text-center text-sm">
          <p>Didn&apos;t receive the code?</p>
          <button type="button" className="text-[#0091EA] hover:underline">
            Resend OTP
          </button>
        </div>

        <div className="relative mt-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-500"></div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCurrentForm("login")}
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default OtpForm;
