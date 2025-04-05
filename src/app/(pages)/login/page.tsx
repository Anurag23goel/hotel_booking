"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/app/redux/slices/authSlice";
import { Label } from "@/custom_components/loginPage/label";
import { Input } from "@/custom_components/loginPage/input";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";
import Navbar from "@/custom_components/navbar";

interface LoginData {
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

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post("/api/auth/login", data, {
        withCredentials: true,
      });

      if (response.data.success) {
        dispatch(login(response.data.data.user));
        toast.success("Login successful");
        router.push("/");
      }
    } catch (error) {
      console.log("Login failed");
      toast.error("Login failed");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#6b6680] flex flex-col overflow-hidden">
      {/* <Navbar /> */}

      <div className="flex-1 flex items-center justify-center px-4 py-6 md:px-10 md:py-10">
        <div className="w-full max-w-5xl h-full bg-[#232231] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Left side - Image Carousel */}
          <div className=" hidden md:block w-full md:w-1/2 relative h-96 md:h-auto sm:hidden">
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
                <div className="absolute bottom-20 left-10 text-white drop-shadow-lg">
                  <h2 className="text-3xl font-bold mb-1">{image.title}</h2>
                  <p className="text-lg">{image.subtitle}</p>
                </div>
                <div className="absolute bottom-10 left-10 flex space-x-2">
                  {images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full ${
                        dotIndex === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white">Welcome back</h2>
                <p className="mt-1 text-gray-400">
                  Please enter your details to sign in
                </p>
              </div>

              <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="email" className="text-gray-300">
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
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-300">
                      Password
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-purple-400 hover:text-purple-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder-gray-400"
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
                      <p className="text-sm text-red-500 mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#6c5dd3] hover:bg-[#5e4fa2] text-white rounded-lg font-medium transition-colors"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#232231] text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-2.5 px-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors">
                  <IconBrandGoogle className="h-5 w-5 text-white" />
                </button>
                <button className="flex items-center justify-center py-2.5 px-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors">
                  <IconBrandApple className="h-5 w-5 text-white" />
                </button>
              </div>

              <p className="text-center text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-purple-400 hover:text-purple-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
