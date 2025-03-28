"use client"
import GetInspiration from "@/custom_components/home/getInspiration";
import HomesForGuests from "@/custom_components/home/homesForGuests";
import HotelDeals from "@/custom_components/home/hotelDeals";
import Navbar from "@/custom_components/HomeNavbar/navbar";
import Offers from "@/custom_components/home/offers";
import PopularAttractions from "@/custom_components/home/popularAttractions";
import PropertyCarousel from "@/custom_components/home/propertyCarousel";
import Searchbar from "@/custom_components/home/searchbar";
import TrendingHotels from "@/custom_components/home/trendingHotels";
import UniqueProperties from "@/custom_components/home/uniqueProperties";
import { useEffect } from "react";
import { fetchUserData } from "./loginState/features/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// #057d23


export default function Home() {
  const dispatch = useDispatch();
  const { isLoggedIn,userData, loading } = useSelector(
    (state: any) => state.auth
  );
  useEffect(()=>{
    dispatch(fetchUserData());
  },[dispatch])

    console.log("userData on the home page is  -> ",userData);

  return (

    <div className="w-full bg-[#d9dae8bd] overflow-hidden">
      <div className="bg-[#040928] md:min-h-[45vh] min-h-[25vh] w-full relative">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-0">
          <Navbar />
        </div>

        <div
          className="mx-auto flex items-center bg-cover bg-center relative h-[200px] sm:h-[250px] md:h-[400px]"
          style={{ backgroundImage: "url('/assets/pool.jpg')" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0"></div>x

          {/* Aligned content wrapper */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl w-full mx-auto px-3 sm:px-4 flex flex-col gap-2">
              <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-6xl font-PlayfairDisplay-Bold">
                Find Your Next Stay With Us
              </h1>
              <p className="text-white text-base sm:text-lg md:text-2xl">
                Search low prices on hotels...
              </p>
              <button className="bg-[#202962] flex items-center font-semibold gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm w-fit text-sm sm:text-base">Find Yours</button>
            </div>
          </div>
        </div>

        {/* SEARCH BAR SECTION */}
        <div className="hidden md:block md:gap-2 absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-[95%] max-w-4xl">
          <div className=" w-full">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden w-[100%]  mt-4 ">
        <div className="w-full">
          <Searchbar />
        </div>
      </div>

      {/* OFFERS SECTION */}
      <div className=" mt-[10%] max-w-5xl mx-auto px-3  md:px-0"
      >
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-black">Offers</h1>
            <p className="text-sm md:text-base text-black">
              Promotions, deals and special offers for you...
            </p>
          </div>
          <div className="h-fit">
            <Offers />
          </div>
        </div>
      </div>

      {/* BROWSE PROPERTY BY PROPERTY SECTION */}
      <div className="flex flex-col gap-2  max-w-5xl mx-auto mt-10  px-3 md:px-0">
        <h1 className="text-2xl font-bold">Browse by property type</h1>
        <div className="w-full">
          <PropertyCarousel />
        </div>
      </div>

      {/* TRENDING HOTELS */}
      <div className="flex flex-col  gap-3 max-w-5xl mx-auto mt-10  px-3 md:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Trending Hotels</h1>
          <p className=" text-gray-600">
            Most popular choices for travellers from India
          </p>
        </div>
        <TrendingHotels />
      </div>

      {/* UNIQUE PROPERTIES */}
      <div className="flex flex-col gap-3 max-w-5xl mx-auto mt-10 px-3 md:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Stay at our top unique properties
          </h1>
          <p className=" text-gray-600">
            From castles and villas to boats and igloos, weve got it all
          </p>
        </div>
        <UniqueProperties />
      </div>

      {/* POPULAR ATTRACTIONS */}
      <div className="flex gap-3 flex-col  max-w-5xl mx-auto mt-10 px-3 md:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Popular attractions in Mahabaleshwar
          </h1>
          <p className=" text-gray-600">
            Experience everything this city has to offer
          </p>
        </div>
        <PopularAttractions />
      </div>

      {/* HOTEL DEALS */}
      <div className="flex gap-3 flex-col max-w-5xl mx-auto mt-10 px-3 md:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Deals for the weekend</h1>
          <p className=" text-gray-600">
            Save on stays for 14 March - 16 March
          </p>
        </div>
        <HotelDeals />
      </div>

      {/* GET INSPIRATION */}
      <div className="flex flex-col gap-4  max-w-5xl mx-auto mt-10 px-3 md:px-0">
        <h1 className="text-2xl font-bold">
          Get inspiration for your next trip
        </h1>
        <GetInspiration />
      </div>

      {/* HOME GUESTS LOVE */}
      <div className="flex flex-col gap-2  max-w-5xl mx-auto mt-10 px-3 md:px-0">
        <h1 className="text-2xl font-bold">Homes guests love</h1>
        <HomesForGuests />
      </div>

      {/* FOOTER */}
      <div></div>
    </div>
  );
}
