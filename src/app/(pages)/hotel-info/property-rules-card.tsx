"use client";
import React from "react";
import { Clock, Users, Ban, Coffee, Cigarette } from "lucide-react";

function PropertyRules() {
  return (
    <div className="max-w-5xl border-2 md:border-4 mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-4 md:space-y-6">
        {/* Check-in/Check-out Times */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
            <span>Check-in: 1 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
            <span>Check-out: 11 AM</span>
          </div>
        </div>

        {/* Guest Rules */}
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-start gap-2 text-xs md:text-sm">
            <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mt-0.5" />
            <div>
              <span className="font-medium text-blue-600 text-xs md:text-sm">
                COUPLE FRIENDLY
              </span>
              <p className="text-gray-600 mt-0.5">
                Unmarried couples/guests with Local IDs are allowed.
              </p>
            </div>
          </div>

          <div className="text-xs md:text-sm text-gray-600 pl-5 md:pl-6">
            <p>
              Passport, Aadhar, Driving License and Govt. ID are accepted as ID
              proof(s)
            </p>
          </div>
        </div>

        {/* Restrictions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Ban className="w-3 h-3 md:w-4 md:h-4" />
            <span>Pets are not allowed</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Coffee className="w-3 h-3 md:w-4 md:h-4" />
            <span>Outside food is not allowed</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Cigarette className="w-3 h-3 md:w-4 md:h-4" />
            <span>Smoking within the premises is not allowed</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm pt-2">
          <button className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
            Must Read Rules
          </button>
          <button className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
            Guest Profile
          </button>
          <button className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
            Guest Profile (Hourly)
          </button>
          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            Read All Property Rules
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyRules;
