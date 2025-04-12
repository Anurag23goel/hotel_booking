"use client";
import React from "react";
import Navbar from "@/custom_components/navbar";
import EmailForm from "./emailForm";
import PhoneForm from "./phoneForm";
import OtpPageForm from "./otpPageForm";
import NewPasswordForm from "./newPasswordForm";
import { useState } from "react";

const Page = () => {
  const [currentForm, setCurrentForm] = useState<string>("email");

  const renderForm = () => {
    switch (currentForm) {
      case "email":
        return <EmailForm setCurrentForm={setCurrentForm} />;
      case "phone":
        return <PhoneForm setCurrentForm={setCurrentForm} />;
      case "otp":
        return <OtpPageForm setCurrentForm={setCurrentForm} />;
      case "newPasswordForm":
        return <NewPasswordForm  />;
      default:
        return <EmailForm setCurrentForm={setCurrentForm} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#040928] w-full py-3">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar />
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center flex-1 px-4 py-10">
        <div className="shadow-xl w-full max-w-md bg-white p-6 ">
          {renderForm()}

          <div className="border-t mt-8 my-6"></div>

          <div className="text-center text-sm text-gray-600">
            <p>
              By proceeding, you consent to get calls, WhatsApp or SMS/RCS
              messages, including by automated means, from Bharat Trips and its
              affiliates to the number provided.
            </p>
            <p className="font-semibold text-black"></p>
          </div>

          <div className="text-center mt-4 text-gray-500 text-xs">
            <p>Contact us</p>
            <p>Help </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
