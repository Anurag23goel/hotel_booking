// import { Search } from "lucide-react"
// import Link from "next/link"
// import FilterSection from "./filter-section"
// import FilterCheckbox from "./filter-checkbox"
// import HotelCard from "./hotel-card"
// // import { hotels } from "./data/hotels"

// export default function HotelSearchPage() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Search Header */}
//       <div className="bg-white shadow-sm py-4 px-4 border-b">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-xl font-semibold">Goa</h1>
//               <p className="text-sm text-gray-600">FRI, 4 APR - SUN, 6 APR (2 NIGHTS) | 1 ROOM | 2 ADULTS</p>
//             </div>
//             <div>
//               <button className="flex items-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50">
//                 <Search className="h-4 w-4" />
//                 <span>Modify Search</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto py-4 px-4">
//         <div className="flex gap-6">
//           {/* Filters Sidebar */}
//           <div className="w-72 flex-shrink-0">
//             <FilterSection title="HOTEL NAME">
//               <div className="relative">
//                 <input type="text" className="w-full border rounded-md p-2 pr-8" placeholder="Search by hotel name" />
//                 <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
//               </div>
//             </FilterSection>

//             <FilterSection title="DEALS">
//               <FilterCheckbox id="exclusive-deals" label="Exclusive Deals" count={2} />
//               <FilterCheckbox id="last-minute" label="Last Minute Deal" count={18} />
//             </FilterSection>

//             <FilterSection title="PRICE FOR 2 NIGHTS">
//               <FilterCheckbox id="price-1" label="Less than Rs. 1,000" count={0} />
//               <FilterCheckbox id="price-2" label="Rs. 1,001 to Rs. 2,000" count={9} />
//               <FilterCheckbox id="price-3" label="Rs. 2,001 to Rs. 4,000" count={107} />
//               <FilterCheckbox id="price-4" label="Rs. 4,001 to Rs. 7,000" count={210} />
//               <FilterCheckbox id="price-5" label="Rs. 7,001 to Rs. 10,000" count={134} />
//               <FilterCheckbox id="price-6" label="Greater than Rs. 10,001" count={614} />
//             </FilterSection>

//             <FilterSection title="SHOW HOTELS WITH">
//               <FilterCheckbox id="free-breakfast" label="Free Breakfast" count={138} />
//               <FilterCheckbox id="free-wifi" label="Free WiFi" count={241} />
//               <FilterCheckbox id="couple-friendly" label="Couple Friendly" count={475} />
//               <FilterCheckbox id="women-friendly" label="Women Friendly" count={218} />
//               <FilterCheckbox id="eco-plus" label="Eco Plus" count={169} />
//               <FilterCheckbox id="pet-friendly" label="Pet Friendly" count={44} />
//             </FilterSection>
//           </div>

//           {/* Hotel Listings */}
//           <div className="flex-1">
//             <div className="bg-white rounded-md shadow-sm border mb-4">
//               <div className="p-4 border-b">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h2 className="font-semibold">ALL HOTELS (1074)</h2>
//                     <p className="text-sm text-gray-600">from ₹1,598</p>
//                   </div>
//                   <div className="flex gap-4">
//                     <Link href="#" className="text-gray-700 hover:underline">
//                       LIST
//                     </Link>
//                     <span>|</span>
//                     <Link href="#" className="text-gray-700 hover:underline">
//                       MAP
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4 border-b">
//                 <div className="flex gap-8">
//                   <div className="font-medium text-sm">SORT BY:</div>
//                   <div className="font-medium text-sm text-red-600">RECOMMENDED</div>
//                   <div className="font-medium text-sm">STAR RATING</div>
//                   <div className="font-medium text-sm">USER RATING</div>
//                   <div className="font-medium text-sm">PRICE (TAXES EXTRA)</div>
//                 </div>
//               </div>
//             </div>

//             {/* Hotel Cards */}
//             <div className="space-y-4">
//               {hotels.map((hotel) => (
//                 <HotelCard
//                   key={hotel.id}
//                   featured={hotel.featured}
//                   name={hotel.name}
//                   location={hotel.location}
//                   stars={hotel.stars}
//                   originalPrice={hotel.originalPrice}
//                   discountedPrice={hotel.discountedPrice}
//                   amenities={hotel.amenities}
//                   viewers={hotel.viewers}
//                   tags={hotel.tags}
//                   savings={hotel.savings}
//                   rating={hotel.rating}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

