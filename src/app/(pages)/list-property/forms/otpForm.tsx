"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shadcn_components/ui/input-otp";
import { Button } from "@/shadcn_components/ui/button";

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

      if (response.data.success) {
        toast.success("OTP verified successfully");
        router.push("/owner-registration-form");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error(error.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl text-[#040928] font-bold">Enter OTP</h2>
        <p className="text-sm text-gray-500">
          Please enter the OTP sent to your email address
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mx-5 space-y-2">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
            className="flex justify-center text-black "
          >
            <InputOTPGroup>
              <InputOTPSlot className="text-black" index={0} />
              <InputOTPSlot className="text-black" index={1} />
              <InputOTPSlot className="text-black" index={2} />
              <InputOTPSeparator className="text-gray-600" />
              <InputOTPSlot className="text-black" index={3} />
              <InputOTPSlot className="text-black" index={4} />
              <InputOTPSlot className="text-black" index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type="submit"
          disabled={otp.length !== 6 || isSubmitting}
          className="w-full bg-[#040928] text-white hover:bg-black transition-colors"
        >
          {isSubmitting ? "Verifying..." : "Verify OTP"}
        </Button>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Didn&apos;t receive the code?</p>
          <Button
            type="button"
            variant="link"
            className="text-[#0091EA] hover:text-[#0077c0]"
          >
            Resend OTP
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => setCurrentForm("login")}
          className="w-full bg-white text-[#040928] border-[#040928] hover:bg-gray-50"
        >
          Back to Login
        </Button>
      </form>
    </div>
  );
};

export default OtpForm;
