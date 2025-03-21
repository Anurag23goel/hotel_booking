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
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
      <Link href="/home" className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0 w-full sm:w-auto text-center sm:text-left">
        Booking.com
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 justify-center w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <Image
            src="https://t-cf.bstatic.com/design-assets/assets/v3.85.0/images-flags/En-us@3x.png"
            alt="English"
            width={24}
            height={24}
            className="rounded"
          />
          <span className="text-sm md:text-base hidden sm:block">Already a partner?</span>
        </div>
        <Link href="/hotelOwnerSignIn" className="bg-white text-[#003580] px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base font-medium">
          Sign in
        </Link>
        <button className="border border-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hidden sm:block">
          Help
        </button>
      </div>
    </div>
  </header>

  {/* Hero Section */}
  <section
    className="bg-[#1f9704] text-white pb-16 sm:pb-24 md:pb-20 bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/dark.jpg')" }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="py-8 sm:py-12 text-center md:text-left">
        <button className="bg-[#008009] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md mb-4 sm:mb-8 text-sm sm:text-base">
          Join 29,279,209 other listings already on Booking.com
        </button>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">List</h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#00b4ff] font-bold">anything</h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8">on Booking.com</h2>
        <p className="text-base sm:text-xl md:text-2xl max-w-2xl mx-auto md:mx-0">
          Whether hosting is your sideline passion or full-time job, list your home today and quickly start earning more income.
        </p>
      </div>
    </div>
  </section>

  {/* Register Card */}
  <section className="max-w-7xl mx-auto px-4 mt-4 sm:mt-6 md:-mt-14 relative z-10">
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-md mx-auto">
      {showLogin ? <LoginForm onRegisterClick={toggleForm} /> : <RegisterForm onLoginClick={toggleForm} />}
    </div>
  </section>

  {/* Peace of Mind Section */}
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-16">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
      List with peace of mind
    </h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      {[
        "Damage payments",
        "Your own house rules",
        "Choose how you prefer to receive bookings",
        "Protection from liability claims",
      ].map((title, index) => (
        <div key={index} className="flex gap-3 sm:gap-4">
          <CheckCircle className="text-[#008009] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
            <p className="text-sm sm:text-base">Some description about {title.toLowerCase()}.</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Global Reach Section */}
  <section
    className="py-8 sm:py-12 md:py-16 bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/WorldMap.jpg')" }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-8 bg-white/80 backdrop-blur-md p-4 sm:p-8 md:p-12 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
        Reach a unique global customer base
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {[
          { percent: "2/3", text: "of holiday rental guests return to book with us again" },
          { percent: "33%", text: "of holiday rental customers are Genius Level 2 or 3, spending more and booking directly." },
          { percent: "48%", text: "of nights booked by travellers at the end of 2023 were for international stays." },
          { percent: "30%", text: "of all nights booked were at a holiday rental." },
        ].map((item, index) => (
          <div key={index} className="text-center md:text-left mb-4 sm:mb-0">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">{item.percent}</div>
            <p className="text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-17">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center md:text-left">
        What hosts like you say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <div>
                <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>
  );
};

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