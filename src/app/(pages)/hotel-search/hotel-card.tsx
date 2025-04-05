import Image from "next/image"
import { Search, MapPin, Star, Users } from "lucide-react"

interface HotelCardProps {
  featured?: boolean
  name: string
  location: string
  stars: number
  originalPrice: number
  discountedPrice: number
  amenities: string[]
  viewers?: number
  tags?: string[]
  savings?: number
  rating?: {
    score: number
    type: string
    reviews: number
  }
}

export default function HotelCard({
  featured = false,
  name,
  location,
  stars,
  originalPrice,
  discountedPrice,
  amenities,
  viewers,
  tags,
  savings,
  rating,
}: HotelCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm border">
      <div className="flex">
        <div className="relative w-80">
          {featured && <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-1 z-10">FEATURED</div>}
          <Image
            src="/public/assets/resortemarinha.avif"
            alt={name}
            width={320}
            height={250}
            className="h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
            <Search className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-red-500 fill-red-500" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="text-blue-500">{location}</span>
                </div>
              </div>

              {rating && (
                <div className="mt-1">
                  <span className="text-green-600 font-medium">{rating.score}/5</span>
                  <span className="ml-1 text-green-600">{rating.type}</span>
                  <span className="text-xs text-gray-500 ml-1">({rating.reviews})</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</div>
              <div className="text-2xl font-bold text-gray-800">₹{discountedPrice.toLocaleString()}</div>
              <div className="text-sm text-gray-600">For 2 nights</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-1">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
                    fill="currentColor"
                  />
                </svg>
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          {viewers && (
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>
                {viewers} {viewers === 1 ? "person" : "people"} viewing
              </span>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              {tags.map((tag, index) => {
                let bgColor = "bg-gray-100"
                let textColor = "text-gray-600"

                if (tag.includes("WOMEN")) {
                  bgColor = "bg-pink-100"
                  textColor = "text-pink-600"
                } else if (tag.includes("COUPLE")) {
                  bgColor = "bg-purple-100"
                  textColor = "text-purple-600"
                } else if (tag.includes("ECO")) {
                  bgColor = "bg-green-100"
                  textColor = "text-green-600"
                }

                return (
                  <div key={index} className={`px-2 py-1 ${bgColor} rounded-md flex items-center gap-1`}>
                    <span className={`text-xs font-medium ${textColor}`}>{tag}</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              {savings && (
                <div className="text-sm">
                  <span className="text-gray-600">You Save</span>
                  <span className="text-green-600 font-medium"> ₹{savings.toLocaleString()}</span>
                </div>
              )}
              <div className="text-sm">
                <span className="text-blue-500 font-medium">Login</span>
                <span className="text-gray-600"> & get additional ₹250 off using </span>
                <span className="text-amber-600 font-medium">eCash</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium">
              Choose Room
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

