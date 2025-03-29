"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

interface PasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
}

const NewPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>();

  const newPasswordValue = watch("newPassword");

  // State to toggle password visibility
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const newPasswordSubmit = async (data: PasswordFormData) => {
    if (data.newPassword !== data.confirmNewPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/reset-password",
        { newPassword: data.newPassword },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success("Password updated successfully");
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl font-PlayfairDisplay-Bold">
        Update Password
      </h2>
      <p className="text-black/60 font-medium mt-2">Enter your new password.</p>

      <form
        className="mt-11 space-y-4"
        onSubmit={handleSubmit(newPasswordSubmit)}
      >
        {/* New Password Input */}
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showNewPassword ? "text" : "password"}
              {...register("newPassword", {
                required: "New Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Enter your new password"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showNewPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
              New Password
            </label>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm New Password Input */}
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmNewPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === newPasswordValue || "Passwords do not match",
              })}
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Confirm your new password"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
              Confirm New Password
            </label>
          </div>
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#06104d] p-4 mt-7 text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
