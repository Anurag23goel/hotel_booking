export default function GetInspiration() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
      <div className="col-span-2 relative group cursor-pointer overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=600"
          alt="New Year's Eve in New York"
          className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              New Year's Eve in New York City
            </h2>
            <p className="text-sm text-gray-200">
              Ring in the new year with iconic moments and unforgettable
              memories in New York City
            </p>
          </div>
        </div>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=600"
          alt="Ryokans in Japan"
          className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-4 text-white">
            <h2 className="text-lg font-bold mb-2">
              6 best ryokans in Japan to rejuvenate yourself
            </h2>
            <p className="text-xs text-gray-200">
              Discover unmissable ryokans to relax and unwind in style.
            </p>
          </div>
        </div>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&q=80&w=600"
          alt="Christmas in Asia"
          className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-4 text-white">
            <h2 className="text-lg font-bold mb-2">
              7 best places in Asia to celebrate Christmas
            </h2>
            <p className="text-xs text-gray-200">
              Discover the shimmering lights and festive sights of Asia's
              holiday season.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
