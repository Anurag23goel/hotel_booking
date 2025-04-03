"use client";
import React from "react";
import { Clock, Users, Ban, Coffee, Cigarette } from "lucide-react";

function PropertyRules() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Check-in/Check-out Times */}
        <div className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-600" />
            <span>Check-in: 1 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-600" />
            <span>Check-out: 11 AM</span>
          </div>
        </div>

        {/* Guest Rules */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <div>
              <span className="font-medium text-blue-600">COUPLE FRIENDLY</span>
              <p className="text-gray-600">
                Unmarried couples/guests with Local IDs are allowed.
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              Passport, Aadhar, Driving License and Govt. ID are accepted as ID
              proof(s)
            </p>
          </div>
        </div>

        {/* Restrictions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Ban className="w-4 h-4" />
            <span>Pets are not allowed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Coffee className="w-4 h-4" />
            <span>Outside food is not allowed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Cigarette className="w-4 h-4" />
            <span>Smoking within the premises is not allowed</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 text-sm pt-2">
          <button className="text-gray-900 font-medium">Must Read Rules</button>
          <button className="text-gray-900 font-medium">Guest Profile</button>
          <button className="text-gray-900 font-medium">
            Guest Profile (Hourly)
          </button>
          <button className="text-blue-600">Read All Property Rules</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyRules;
