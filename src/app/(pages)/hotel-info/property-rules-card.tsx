"use client";

import React from "react";
import { Clock, Users, Ban, Coffee, Cigarette } from "lucide-react";

const PropertyRules = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-indigo-600" />
            Property Rules
          </h2>

          <div className="space-y-8">
            {/* Check-in/Check-out Times */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                Check-in & Check-out
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>Check-in: 1 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>Check-out: 11 AM</span>
                </div>
              </div>
            </div>

            {/* Guest Rules */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                Guest Policies
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-indigo-600 text-sm">
                      COUPLE FRIENDLY
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Unmarried couples and guests with local IDs are welcome.
                    </p>
                  </div>
                </div>
                <div className="pl-8 text-sm text-gray-600">
                  <p>Accepted IDs: Passport, Aadhar, Driving License, or Government-issued ID</p>
                </div>
              </div>
            </div>

            {/* Restrictions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Ban className="w-5 h-5 mr-2 text-indigo-600" />
                Restrictions
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Ban className="w-5 h-5 text-red-500" />
                  <span>Pets are not allowed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-gray-600" />
                  <span>Outside food is not permitted</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cigarette className="w-5 h-5 text-gray-600" />
                  <span>Smoking within the premises is prohibited</span>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-indigo-600" />
                Additional Information
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <button className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">
                  Must Read Rules
                </button>
                <button className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">
                  Guest Profile
                </button>
                <button className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">
                  Guest Profile (Hourly)
                </button>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors underline">
                  Read All Property Rules
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRules;