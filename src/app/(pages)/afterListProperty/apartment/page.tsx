"use client"
import Navbar from '@/custom_components/listProperty/navbar'
import React from 'react'
import { useState } from 'react'

function ApartmentOption({ 
  icon, 
  text, 
  selected, 
  onClick 
}: { 
  icon: string, 
  text: string, 
  selected: boolean,
  onClick: () => void 
}) 
{
  return (

    <div 
      className={`flex items-center p-6 cursor-pointer ${
        selected 
          ? 'border-2 border-blue-500 rounded-lg' 
          : 'border border-gray-200 rounded-lg'
      }`}
      onClick={onClick}
    >
      <img src={icon} alt="" className="w-12 h-12" />
      <span className="ml-4 text-lg">{text}</span>
      {selected && (
        <div className="ml-auto">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            {/* tick button  */}
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function LocationOption({
  icon,
  text,
  selected,
  onClick
}: {
  icon: string,
  text: string,
  selected: boolean,
  onClick: () => void
}) {
  return (
    <div 
      className={`flex items-center p-6 cursor-pointer ${
        selected 
          ? 'border-2 border-blue-500 rounded-lg' 
          : 'border border-gray-200 rounded-lg'
      }`}
      onClick={onClick}
    >
      <img src={icon} alt="" className="w-12 h-12" />
      <span className="ml-4 text-lg">{text}</span>
      {selected && (
        <div className="ml-auto">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}


const Page = () => {
  const [selected, setSelected] = useState<'one' | 'multiple'>('one');
  const [location, setLocation] = useState<'same' | 'different'>('same');



  return (
    <div>
      <div className="bg-[#274905] w-full py-2">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar/>
        </div>
      </div>

      <div className=" mt-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          How many apartments are you listing?
        </h1>
        
        <div className=" space-y-4 mb-8">
          <ApartmentOption
            icon="https://q.bstatic.com/static/img/join/segmentation/accomm_single_home@2x.png"
            text="One apartment"
            selected={selected === 'one'}
            onClick={() => setSelected('one')}
          />
          <ApartmentOption
            icon="https://q.bstatic.com/static/img/join/segmentation/accomm_multiple_homes@2x.png"
            text="Multiple apartments"
            selected={selected === 'multiple'}
            onClick={() => setSelected('multiple')}
          />
        </div>

        {selected === 'multiple' ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Are these properties at the same address or building?
            </h2>
            <div className="space-y-4 mb-8">
              <LocationOption
                icon="/location-icon.svg"
                text="Yes, these apartments are at the same address or building"
                selected={location === 'same'}
                onClick={() => setLocation('same')}
              />
              
              <LocationOption
                icon="/multiple-location-icon.svg"
                text="No, these apartments are at different addresses or buildings"
                selected={location === 'different'}
                onClick={() => setLocation('different')}
              />
            </div>

            <div className="flex justify-between">
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg 
                  className="w-6 h-6 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
              <button className="px-16 py-3 bg-[#274905] text-white rounded-md hover:bg-[#6c894e] font-medium">
                Continue
              </button>
            </div>
          </>
        ):(
          <div className="flex justify-between">
          <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          <button className="px-16 py-3 bg-[#274905] text-white rounded-md hover:bg-[#86a962] font-medium">
            Continue
          </button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Page
