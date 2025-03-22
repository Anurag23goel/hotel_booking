import GetInspiration from "@/custom_components/home/getInspiration";
import HomesForGuests from "@/custom_components/home/homesForGuests";
import HotelDeals from "@/custom_components/home/hotelDeals";
import Navbar from "@/custom_components/home/navbar";
import Offers from "@/custom_components/home/offers";
import PopularAttractions from "@/custom_components/home/popularAttractions";
import PropertyCarousel from "@/custom_components/home/propertyCarousel";
import Searchbar from "@/custom_components/home/searchbar";
import TrendingHotels from "@/custom_components/home/trendingHotels";
import UniqueProperties from "@/custom_components/home/uniqueProperties";
// #057d23

export default function Home() {
  return (
    <div className="w-full bg-[#d9dae8bd] overflow-hidden">
      {/* NAVBAR AND TOP-MOST DIV */}
      <div className="bg-[#24328e] md:min-h-[45vh] min-h-[25vh] w-full">
        {/* NAVBAR DIV */}
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar />
        </div>

        {/* IMAGE AND TEXT DIV */}
        <div
          className="max-w-7xl mx-auto flex items-center bg-cover bg-center relative h-[250px] md:h-[400px]"
          style={{ backgroundImage: "url('/assets/pool.jpg')" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Aligned content wrapper */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl w-full mx-auto px-4 flex flex-col gap-2">
              <h1 className="text-[#ffffff] md:text-6xl text-3xl font-PlayfairDisplay-Bold">
                Find Your Next Stay With Us
              </h1>
              <p className="text-white md:text-2xl">
                Search low prices on hotels...
              </p>
              <button className="bg-[#057d23] flex items-center font-semibold gap-2 text-white px-6 py-3 rounded-sm w-fit">Find Yours</button>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR SECTION */}
      <div className="md:max-w-5xl w-[80%] mx-auto transform -translate-y-1/2">
        <Searchbar />
      </div>

      {/* OFFERS SECTION */}
      <div className=" max-w-5xl mx-auto mt-5 px-3  md:px-0"
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
