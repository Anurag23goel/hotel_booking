import React from 'react'
import Navbar from '@/custom_components/listProperty/navbar'
import { PropertyCard } from './PropertyCard'

// import Image from 'next/image'
// import image from '../../../../../public/assets/india-flag.png'


const Page = () => {

  const properties = [
    {
      icon: 'https://q.bstatic.com/static/img/join/segmentation/accomm_one_apt_main@2x.png',
      title: 'Apartment',
      description: 'Furnished and self-catering accommodations '
    },
    {
      icon: 'https://q.bstatic.com/static/img/join/segmentation/accomm_single_home@2x.png',
      title: 'Homes',
      description: 'A residential building for one family to live in'
    },
    {
      icon: 'https://q.bstatic.com/static/img/join/segmentation/accomm_hotels_main_v2@2x.png',
      title: 'Hotel, B&Bs & More',
      description: 'A hotel, bed and breakfast, or other type of accommodation'
    },
    {
      icon: 'https://q.bstatic.com/static/img/join/segmentation/tent-big@2x.png',
      title: 'Alternative Places',
      description: 'A tent, campervan, or other type of accommodation'
    },

    
  ];
  
  return (
    <div >
      <div className="bg-[#274905] w-full py-2">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar/>
        </div>
      </div>
      <div className=" mt-8 p-9 max-w-6xl mx-auto">
        <div className=" w-[90%] mb-8">
          <h1 className="text-3xl font-bold mb-2">
            List your property on Booking.com and start welcoming guests in no time!
          </h1>
          <p className="text-xl text-black">
            To get started, select the type of property you want to list on Booking.com
          </p>
        </div>

        {/* <div className='relative'>
          <Image className='w-1/2 absolute top-0 left-0 z-50' src={image} alt="image" />
          <p className='absolute top-0 left-0'>hdahdahdahdahdadjoiadnaiodnaoid</p>
        </div> */}





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {properties.map((property, index) => (
            <div key={index} className={`${index === 0 ? 'mr-[10%]' : ''}`}>
              <PropertyCard
                icon={property.icon}
                title={property.title}
                description={property.description}
              />
            </div>
          ))}
        </div>
      </div>
      
      












      <a href="/afterListProperty/AppartmentPage">Go to Page 2</a>
    </div>
  )
}

export default Page
