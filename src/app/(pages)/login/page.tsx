"use client";
import React, { useState } from 'react';
import { Waves, ChevronRight } from 'lucide-react';

function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#edf2eb] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-serif mt-6 mb-2">Log In</h1>
            <p className="text-gray-500">Welcome to Booking.com - Lets Get Started </p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-2 border rounded-full py-3 hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                   alt="Google" className="h-5 object-contain" />
              Log in with Google
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {formData.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {formData.password && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-full py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Waves className="h-5 w-5" />
              Login
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block relative bg-[#edf2eb]">
          <img
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80"
            alt="Peaceful lake with kayak"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 max-w-xs shadow-lg">
            <h3 className="text-2xl font-serif mb-2">Find Your Inner Balance</h3>
            <p className="text-gray-600 text-sm">
              Helping you achieve clarity, harmony, and personal growth. Together, 
              we create lasting change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;