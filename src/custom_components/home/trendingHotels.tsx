import Image from "next/image";

const trendingHotels = [
  {
    city: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200",
    flag: "🇮🇳",
  },
  {
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?auto=format&fit=crop&q=80&w=1200",
    flag: "🇮🇳",
  },
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1200",
    flag: "🇮🇳",
  },
  {
    city: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200",
    flag: "🇮🇳",
  },
  {
    city: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200",
    flag: "🇮🇳",
  },
];

export default function TrendingHotels() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full space-y-3">
        {/* Top grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {trendingHotels.slice(0, 2).map((hotel, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl aspect-[16/9] group"
            >
              <Image
                src={hotel.image}
                alt={hotel.city}
                width={600}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {hotel.city} <span>{hotel.flag}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom grid - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {trendingHotels.slice(2).map((hotel, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group"
            >
              <Image
                src={hotel.image}
                alt={hotel.city}
                width={600}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {hotel.city} <span>{hotel.flag}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
