//page is of no use but we have to keep it for now for check 

"use client"
import React, { useState } from 'react'
import Navbar from '@/custom_components/listProperty/navbar'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

const Page = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#048413] w-full py-3">
        <div className=" mx-auto px-4 lg:px-0">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-4 flex-grow">
        <div className="w-full max-w-md p-6 h-auto">
          <div className="transition-all duration-300 transform">
            {showLogin ? (
              <div>
                {/* this page is of no use but we have to keep it for now for check  */}
                <LoginForm onRegisterClick={toggleForm} />
              </div>
            ) : (
              <div>
                <RegisterForm onLoginClick={toggleForm} />
              </div>
            )}
          </div>

          <div className="mt-4 text-center">
            <div className="pb-2">
              <p className='text-sm'>
                By signing in or creating an account, you agree with our
              </p>
              <p className='text-sm'>Terms & Conditions and Privacy Statements</p>

              <div className="text-center mt-4">
                <p className='text-sm'>All rights reserved.</p>
                <p className='text-sm'>Copyright (2006-2025) – Booking.com™</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
