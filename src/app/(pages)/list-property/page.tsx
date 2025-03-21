"use client";

import { Building2, CheckCircle, Globe2, Heart, Puzzle, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import LoginForm from "../hotelOwnerSignIn/loginForm";
import { useState } from "react";
import RegisterForm from "../hotelOwnerSignIn/registerForm";

export default function Home() {

  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#06104d] text-white p-4">
        <div className=" max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/home" className="text-2xl font-bold" >
          Booking.com
          </Link>
         
          <div className="flex items-center gap-4">
            <div className=" flex items-center gap-2">
              <Image
                src="https://t-cf.bstatic.com/design-assets/assets/v3.85.0/images-flags/En-us@3x.png"
                alt="English"
                width={24}
                height={24}
                className="rounded"
              />
              <span>Already a partner?</span>
            </div>
          
            <Link href="/hotelOwnerSignIn"   className="bg-white text-[#003580] px-4 py-2 rounded font-medium">
              Sign in
            </Link>
            <button className="border border-white px-4 py-2 rounded">
              Help
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* i want to put background image in the section */}
      <section className="border-4 border-black  bg-[#1f9704] text-white pb-16 "
        style={{ backgroundImage: "url('/assets/dark.jpg')" , backgroundSize: 'cover', backgroundPosition: 'center' }}>


        <div className=" max-w-7xl mx-auto px-4">
          <div className="py-8">
            <button className="bg-[#008009] text-white px-6 py-3 rounded-md mb-8">
              Join 29,279,209 other listings already on Booking.com
            </button>
            <h1 className="text-6xl font-bold mb-4">List</h1>
            <h2 className="text-6xl text-[#00b4ff] font-bold mb-4">anything</h2>
            <h2 className="text-6xl font-bold mb-8">on Booking.com</h2>
            <p className="text-2xl max-w-2xl">
              Whether hosting is your sideline passion or full-time job, list your home today and quickly start earning more income.
            </p>
          </div>
        </div>
      </section>

      {/* Register Card */}
      <section className="max-w-7xl mx-auto px-4 -mt-108">
        <div className="border-4 border-black   bg-white rounded-lg shadow-xl p-8 max-w-md ml-auto">
        {showLogin ? (
              <div>
                <LoginForm onRegisterClick={toggleForm} />
              </div>
            ) : (
              <div>
                <RegisterForm onLoginClick={toggleForm} />
              </div>
            )}
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-12">List with peace of mind</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Damage payments</h3>
                <p>Our damage programme covers your property in case of damages.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Your own house rules</h3>
                <p>Communicate your house rules to potential guests who must agree to them in order to book.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Choose how you prefer to receive bookings</h3>
                <p>Either by letting guests book instantly, or by reviewing booking requests before accepting them.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Protection from liability claims</h3>
                <p>Receive protection against liability claims from guests and neighbours of up to €/£/$1,000,000 for each reservation.</p>
              </div>
            </div>
            <button className="bg-[#0071c2] text-white px-6 py-3 rounded-md">
              List with peace of mind today
            </button>
          </div>
          <div className="space-y-12">
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Get paid and secure your finances</h3>
                <p>Get guaranteed payouts and fraud protection through Payments by Booking.com.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Verified guests</h3>
                <p>We verify guests email addresses and credit cards for partners on Payments by Booking.com.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-[#008009] h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Robust support</h3>
                <p>Access support in 45 languages and manage your property through Pulse, our app for partners like you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stand Out Section */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Stand out from the start</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="h-16 w-16 text-[#0071c2]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Import your reviews</h3>
              <p>We import your review score from other platforms and display it on your Booking.com property page, so you don't start at zero reviews.</p>
              <button className="bg-[#0071c2] text-white px-6 py-3 rounded-md mt-6">
                Import your listing
              </button>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Puzzle className="h-16 w-16 text-[#0071c2]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Import your property details</h3>
              <p>Seamlessly import your property details and sync your availability calendar with other platforms to make it easy to list and avoid double bookings.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Search className="h-16 w-16 text-[#0071c2]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Stand out in the market</h3>
              <p>The 'New to Booking.com' label helps you stand out in our search results.</p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Global Reach Section */}
<section 
  className="py-3 relative bg-cover bg-center bg-no-repeat" 

>
  <div className="max-w-7xl mx-auto px-4 bg-white/80 backdrop-blur-md p-12 rounded-lg"
  style={{ backgroundImage: "url('/assets/WorldMap.jpg')" }}>
    <h2 className="text-4xl font-bold mb-16">Reach a unique global customer base</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <div className="mb-12">
          <div className="text-5xl font-bold mb-2">2/3</div>
          <p>of holiday rental guests return to book with us again</p>
        </div>
        <div>
          <div className="text-5xl font-bold mb-2">33%</div>
          <p>of holiday rental customers are at Genius Level 2 or 3. These travellers tend to spend more and book directly on our platform.</p>
        </div>
        <button className="bg-[#0071c2] text-white px-6 py-3 rounded-md mt-8">
          Grow your customer base
        </button>
      </div>
      <div>
        <div className="mb-12">
          <div className="text-5xl font-bold mb-2">48%</div>
          <p>of nights booked by travellers at the end of 2023 were for international stays.</p>
        </div>
        <div>
          <div className="text-5xl font-bold mb-2">30%</div>
          <p>of all nights booked on our platform were at a holiday rental. More and more travellers flex book both hotels and alternative accommodation.</p>
        </div>
      </div>
     
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">What hosts like you say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const testimonials = [
  {
    quote: "I was able to list within 15 minutes, and no more than two hours later, I had my first booking!",
    name: "Parley Rose",
    title: "UK-based host",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
  },
  {
    quote: "Booking.com is the most straightforward [OTA] to work with. Everything is clear. It's easy. And it frees us up to focus on the aspects that we can really add value to, like the guest experience.",
    name: "Martin Fieldman",
    title: "Managing Director, Abodebed",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100"
  },
  {
    quote: "Booking.com accounts for our largest share of guests and has helped get us where we are today.",
    name: "Michel and Asja",
    title: "Owners of La Maison de Souhey",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=100"
  },
  {
    quote: "Travellers come to Charming Lofts from all over the world. Booking.com really helps with that. Unlike some other platforms, it's multinational and caters to a much larger audience. For me, that was a real game-changer.",
    name: "Louis Gonzalez",
    title: "Charming Lofts, Los Angeles",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100~"
    
  },
  {
    quote: "After joining Booking.com and setting up the listing, my occupancy went up significantly and bookings were coming in five to six months in advance.",
    name: "Zoey Berghoff",
    title: "US-based host",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100"
  },
  {
    quote: "Getting started with Booking.com was super simple and took no time at all.",
    name: "Shawn Ritzenthaler",
    title: "Owner of The Hollywood Hills Mansion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100"
  }

];