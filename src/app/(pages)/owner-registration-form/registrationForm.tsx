import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Check, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  hotelName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>();

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
    const digitsOnly = formattedNumber.replace(/\D/g, "");
    setIsPhoneValid(digitsOnly.length === 10);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await axios.post("/api/owner-registration", data);
      if (response.data.success) {
        toast.success("Registration successful!");
        // Handle successful registration (e.g., redirect)
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Hotel Owner Registration
          </h2>
          <p className="mt-2 text-gray-600">Register your property with us</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Personal Information</h3>

            {/* Full Name */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your full name"
                />
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Full Name
                </label>
              </div>
              {errors.fullName && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your email address"
                />
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Email Address
                </label>
              </div>
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full p-3 pl-12 bg-transparent outline-none`}
                  placeholder="XXX-XXX-XXXX"
                />
                {phoneNumber && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isPhoneValid ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                )}
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Phone Number
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Password
                </label>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Hotel Information */}
          <div className="space-y-6 pt-6 border-t">
            <h3 className="text-xl font-semibold">Hotel Information</h3>

            {/* Hotel Name */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="text"
                  {...register("hotelName", {
                    required: "Hotel name is required",
                  })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your hotel name"
                />
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Hotel Name
                </label>
              </div>
              {errors.hotelName && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.hotelName.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <textarea
                  {...register("address", { required: "Address is required" })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter hotel address"
                  rows={3}
                />
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                  Address
                </label>
              </div>
              {errors.address && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    className="w-full p-3 bg-transparent outline-none"
                    placeholder="Enter city"
                  />
                  <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                    City
                  </label>
                </div>
                {errors.city && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className="w-full p-3 bg-transparent outline-none"
                    placeholder="Enter state"
                  />
                  <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
                    State
                  </label>
                </div>
                {errors.state && (
                  <p className="mt-1 text-red-600 text-sm">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isPhoneValid}
            className="w-full bg-[#040928] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Registering..." : "Register Hotel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
