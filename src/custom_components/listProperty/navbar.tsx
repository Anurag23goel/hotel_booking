"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

  export default function Navbar() {
  const router = useRouter();
  return (
    <header className="bg-[#040928] justify-between text-white p-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-PlayfairDisplay-Bold mb-4 md:mb-0"
          >
            Bharat Trips
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-sm md:text-base">Already a partner?</span>
            <Link
              href="/login"
              className="text-sm md:text-base bg-white text-[#003580] px-4 py-2 rounded font-medium"
            >
              Sign in
            </Link>
            <button className="text-sm md:text-base border border-white px-4 py-2 rounded">
              Help
            </button>
          </div>
        </div>
      </header>
  );
}
