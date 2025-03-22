"use client";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";

interface LoginFormProps {
  onRegisterClick: () => void;
}

export default function LoginForm({ onRegisterClick }: LoginFormProps) {
  const { register, watch } = useForm();

  const emailValue = watch("email");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">
          Sign in to manage your property
        </h1>
        <p className="font-semibold text-md">
          Welcome back! Please enter your details.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-md font-medium text-black mb-1">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              {...register("email", { required: "email is neccessary" })}
              className="border border-gray-300 w-full p-2 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
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
          type="submit"
          className="w-full  bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>

        <div className=" text-center text-sm">
          <p>Having trouble signing in?</p>
        </div>

        <button
          type="button"
          onClick={onRegisterClick}
          className="w-full bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Create Your Partner Account
        </button>
      </form>
    </div>
  );
}
