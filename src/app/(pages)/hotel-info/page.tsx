import React from 'react';
import { MapPin, Star, Users, Calendar, Clock, Wifi } from 'lucide-react';
import Navbar from '@/custom_components/registerSigninNavbar/navbar';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      
      <div className="bg-[#040928] flex justify-center py-4">
      <Navbar />
      </div>
      {/* Search Bar */}
      <div className="bg-[#310744] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-8">
            <div>
              <div className="text-sm opacity-80">Select City, Location or Hotel Name</div>
              <div className="font-semibold">Bogmallo Beach Resort</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Check-in Date</div>
              <div className="font-semibold">03 April' 25</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Check-out Date</div>
              <div className="font-semibold">04 April' 25</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Room & Guest</div>
              <div className="font-semibold">1 Room, 2 Guests</div>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-[#8B1F41] rounded font-semibold hover:bg-gray-100">
            Modify Search
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <span>Home</span>
          <span>›</span>
          <span>Hotels in Goa</span>
          <span>›</span>
          <span className="text-gray-900">Bogmallo Beach Resort</span>
        </div>
      </div>

      {/* Hotel Details */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Bogmallo Beach Resort
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Bogmalo Rd, South Goa, Bogmalo, Goa, Bogmalo, Goa, 403806, Goa, India</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg inline-block">
              Exceptional
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold">4.1</span>
              <span className="text-gray-600 text-sm">/5</span>
            </div>
            <div className="text-sm text-gray-600">12,928 reviews</div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
              alt="Bogmallo Beach Resort"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="w-[400px] space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Hillside Room - Only Room</h2>
              <div className="flex items-center mt-2">
                <Users className="w-4 h-4 mr-2" />
                <span>2 x Guests | 1 x Room</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Check In: 02:00 PM</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Check Out: 11:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-green-600">
                  <Wifi className="w-4 h-4 mr-2" />
                  <span>Complimentary Wifi</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-600 font-semibold">28% off</span>
                    <span className="ml-2 line-through text-gray-500">₹8,000</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹5,760</div>
                    <div className="text-sm text-gray-600">/night</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-1">+₹1,741 taxes & fees</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        active ? 'text-red-600 font-semibold' : 'hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}

export default App;