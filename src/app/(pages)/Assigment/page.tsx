"use client";
import React, { useEffect } from "react";
import Navbar from "@/custom_components/home/navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "@/app/loginState/features/authSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn,userData, loading } = useSelector(
    (state: any) => state.auth
  );
  // console.log("userData is -> ", userData.data.email);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [router, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <Navbar />
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">
              Welcome to the Assignment Page
            </h1>

            {/* User Profile Section */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
              {userData && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span >Email:</span>
                    <span>{userData.data.email || "Not provided"}</span>
                    <span>{userData.data.id || "Not provided"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Please login to continue</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
