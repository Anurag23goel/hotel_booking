"use client";

import { Tooltip } from "@mui/material";
import { CircleHelp, CircleUserRound } from "lucide-react";

export default function Navbar(){
  return(
    <nav className="flex justify-between items-center px-4 md:px-6 w-full">
      <h1 className="text-white font-bold text-xl md:text-2xl">
        Booking.com
      </h1>

      <ul className="flex items-center">
        <li>
          <Tooltip title="Contact Customer Service" arrow>
            <div className="flex items-center gap-2">
              <button className="rounded-full border bg-black p-1 h-10 w-10">
                <img 
                src="data:image/png;base64,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" 
                alt="flag" 
                className="object-cover"
               />
              </button>
              <div className="hidden md:flex items-center gap-2">
                <p className="text-white text-sm">Help</p>
                <CircleHelp color="white" />
                <CircleUserRound color="white" />
              </div>
              <div className="flex md:hidden">
                <CircleHelp color="white" />
              </div>
            </div>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}