"use client";
import React, { useState } from "react";
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
import { cn } from "@/lib/utils";
import { IconBrandGoogle, IconBrandApple, IconBrandFacebook } from "@tabler/icons-react";
import Navbar from "@/custom_components/navbar";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <Navbar/>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8">
            <div className="flex justify-center mb-8">
              <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 12h-8m0 0l4 4m-4-4l4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-center mb-2">Sign in with email</h1>
            <p className="text-gray-500 text-center mb-8">
              Make a new doc to bring your words, data, and teams together. For free
            </p>

            <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-6">
              <div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10 w-full"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                  </svg>
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 w-full"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters",
                      },
                    })}
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm10-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
~
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                {isSubmitting ? "Signing in..." : "Get Started"}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/80 text-gray-500">Or sign in with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <IconBrandGoogle className="h-5 w-5" />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <IconBrandFacebook className="h-5 w-5" />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <IconBrandApple className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-black hover:text-gray-800">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}