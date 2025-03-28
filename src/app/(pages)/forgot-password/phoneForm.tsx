"use client";
import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, Check, X } from "lucide-react";

interface PhoneFormData {
  phone: string;
}

const PhoneForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { handleSubmit } = useForm<PhoneFormData>();

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}${digits.slice(3)}`;
    return `${digits.slice(0, 3)}${digits.slice(3, 6)}${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
    const digitsOnly = formattedNumber.replace(/\D/g, "");
    setIsValid(digitsOnly.length === 10);
  };

  const onSubmit = () => {
    if (isValid) {
      setCurrentForm("otp");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-PlayfairDisplay-Bold">
        Forgot your password?
      </h2>
      <p className="text-black opacity-55 font-bold mt-2">
        Enter number associated with your account.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-11 space-y-4">
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              +91
            </span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className={`w-full p-3 pl-12 bg-transparent outline-none ${
                isValid ? "border-green-500" : ""
              }`}
              placeholder="XXXXXXXXXX"
              maxLength={12}
            />
            {phoneNumber && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {isValid ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </div>
            )}
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
              Phone Number
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#06104d] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>
      </form>

      <div className="relative my-7 mb-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-gray-500">Or</span>
        </div>
      </div>

      <button
        onClick={() => setCurrentForm("email")}
        className="p-4 mt-2 hover:text-blue-600 hover:underline text-[#06104d] cursor-pointer transition-colors flex items-center justify-center gap-2 text-1xl font-bold "
      >
        send via email
      </button>
    </div>
  );
};

export default PhoneForm;
