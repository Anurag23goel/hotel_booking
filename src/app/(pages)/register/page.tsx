"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { Label } from "@/custom_components/loginPage/label";
import { Input } from "@/custom_components/loginPage/input";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const images = [
  {
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    title: "Capturing Moments",
    subtitle: "Creating Memories",
  },
  {
    url: "/assets/swimmingGirl.avif",
    title: "Share Stories",
    subtitle: "Connect with Others",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    title: "Explore Places",
    subtitle: "Discover the World",
  },
];

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterSubmit = async (data: RegisterData) => {
    try {
      const response = await axios.post("/api/auth/register", data);
      if (response.data.success) {
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Registration failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#6b6680] flex items-center justify-center px-2 py-4">
      <div className="w-full max-w-5xl bg-[#232231] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Carousel */}
        <div className="hidden md:block w-1/2 relative max-h-[700px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-16 left-8 text-white drop-shadow-lg">
                <h2 className="text-2xl font-semibold mb-1">{image.title}</h2>
                <p className="text-sm">{image.subtitle}</p>
              </div>
              <div className="absolute bottom-6 left-8 flex space-x-2">
                {images.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full ${
                      dotIndex === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-md space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="mt-1 text-sm text-gray-400">
                Please enter your details to sign up
              </p>
            </div>

            <form
              onSubmit={handleSubmit(handleRegisterSubmit)}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="name" className="text-gray-300 text-sm">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-gray-400 text-sm"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-gray-400 text-sm"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300 text-sm">
                  Password
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters",
                      },
                    })}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-gray-400 text-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-[#6c5dd3] hover:bg-[#5e4fa2] text-white rounded-lg font-medium text-sm transition-colors"
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-[#232231] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors">
                <IconBrandGoogle className="h-5 w-5 text-white" />
              </button>
              <button className="flex items-center justify-center py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors">
                <IconBrandApple className="h-5 w-5 text-white" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
