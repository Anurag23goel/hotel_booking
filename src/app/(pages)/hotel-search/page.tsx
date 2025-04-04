"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Search, MapPin, Star, Users, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import FilterSection from "./filter-section"
import FilterCheckbox from "./filter-checkbox"
import Navbar from "@/custom_components/navbar"
import marquis from "../../../../public/assets/marquiss.jpg"
import { Hotel } from "@/Types"
import { hotels } from "./data"


export default function HotelSearchPage() {
  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilters, setPriceFilters] = useState<string[]>([])
  const [amenityFilters, setAmenityFilters] = useState<string[]>([])
  const [mainLocalityFilters, setMainLocalityFilters] = useState<string[]>([])
  const [allLocalityFilters, setAllLocalityFilters] = useState<string[]>([])
  const [paymentModeFilters, setPaymentModeFilters] = useState<string[]>([])
  const [dealFilters, setDealFilters] = useState<string[]>([])
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showAllLocalities, setShowAllLocalities] = useState(false)

  // Refs for sticky sidebar
  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [sidebarHeight, setSidebarHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [stickyTop, setStickyTop] = useState(0)
  const [isStickyBottom, setIsStickyBottom] = useState(false)

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Handle checkbox changes
  const handlePriceFilterChange = (id: string) => {
    if (priceFilters.includes(id)) {
      setPriceFilters(priceFilters.filter((item) => item !== id))
    } else {
      setPriceFilters([...priceFilters, id])
    }
  }

  const handleAmenityFilterChange = (id: string) => {
    if (amenityFilters.includes(id)) {
      setAmenityFilters(amenityFilters.filter((item) => item !== id))
    } else {
      setAmenityFilters([...amenityFilters, id])
    }
  }

  const handleMainLocalityFilterChange = (id: string) => {
    if (mainLocalityFilters.includes(id)) {
      setMainLocalityFilters(mainLocalityFilters.filter((item) => item !== id))
    } else {
      setMainLocalityFilters([...mainLocalityFilters, id])
    }
  }

  const handleAllLocalityFilterChange = (id: string) => {
    if (allLocalityFilters.includes(id)) {
      setAllLocalityFilters(allLocalityFilters.filter((item) => item !== id))
    } else {
      setAllLocalityFilters([...allLocalityFilters, id])
    }
  }

  const handlePaymentModeFilterChange = (id: string) => {
    if (paymentModeFilters.includes(id)) {
      setPaymentModeFilters(paymentModeFilters.filter((item) => item !== id))
    } else {
      setPaymentModeFilters([...paymentModeFilters, id])
    }
  }

  const handleDealFilterChange = (id: string) => {
    if (dealFilters.includes(id)) {
      setDealFilters(dealFilters.filter((item) => item !== id))
    } else {
      setDealFilters([...dealFilters, id])
    }
  }

  // Apply filters when any filter state changes
  useEffect(() => {
    let result = hotels

    // Apply search filter
    if (searchTerm) {
      result = result.filter((hotel) => hotel.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Apply price filters
    if (priceFilters.length > 0) {
      result = result.filter((hotel) => {
        const price = hotel.discountedPrice
        return priceFilters.some((filter) => {
          switch (filter) {
            case "price-1":
              return price < 1000
            case "price-2":
              return price >= 1001 && price <= 2000
            case "price-3":
              return price >= 2001 && price <= 4000
            case "price-4":
              return price >= 4001 && price <= 7000
            case "price-5":
              return price >= 7001 && price <= 10000
            case "price-6":
              return price > 10001
            default:
              return false
          }
        })
      })
    }

    // Apply amenity filters
    if (amenityFilters.length > 0) {
      result = result.filter((hotel) => {
        return amenityFilters.every((filter) => {
          switch (filter) {
            case "free-breakfast":
              return hotel.amenities.includes("Free Breakfast")
            case "free-wifi":
              return hotel.amenities.includes("Free WiFi")
            case "couple-friendly":
              return hotel.tags.includes("COUPLE FRIENDLY")
            case "women-friendly":
              return hotel.tags.includes("WOMEN FRIENDLY")
            case "eco-plus":
              return hotel.tags.includes("ECO+")
            case "pet-friendly":
              return hotel.amenities.includes("Pet Friendly")
            case "central-air-conditioning":
              return hotel.amenities.includes("Central Air Conditioning")
            case "wifi":
              return hotel.amenities.includes("Free WiFi")
            case "airport-transportation":
              return hotel.amenities.includes("Airport transportation")
            case "laundry-facilities":
              return hotel.amenities.includes("Laundry facilities")
            case "airport-transportation-free":
              return hotel.amenities.includes("Airport transportation free")
            case "atm-banking":
              return hotel.amenities.includes("ATM/banking")
            case "bar":
              return hotel.amenities.includes("Bar")
            case "suitable-for-children":
              return hotel.amenities.includes("Suitable for children")
            case "fitness-centre":
              return hotel.amenities.includes("Fitness Centre")
            default:
              return false
          }
        })
      })
    }

    // Apply main locality filters
    if (mainLocalityFilters.length > 0) {
      result = result.filter((hotel) => {
        return mainLocalityFilters.some((filter) => {
          switch (filter) {
            case "central-north-goa":
              return hotel.area === "Central North Goa"
            case "upper-north-goa":
              return hotel.area === "Upper North Goa"
            case "city-center":
              return hotel.area === "City Center"
            case "upper-south-goa":
              return hotel.area === "Upper South Goa"
            case "lower-south-goa":
              return hotel.area === "Lower South Goa"
            case "airport-zone":
              return hotel.area === "Airport Zone"
            case "north-goa":
              return hotel.area === "North Goa"
            case "madgaon":
              return hotel.area === "Madgaon"
            case "ponda":
              return hotel.area === "Ponda"
            default:
              return false
          }
        })
      })
    }

    // Apply all locality filters
    if (allLocalityFilters.length > 0) {
      result = result.filter((hotel) => {
        return allLocalityFilters.some((filter) => {
          switch (filter) {
            case "north-goa-all":
              return hotel.area === "North Goa"
            case "bardez":
              return hotel.location.includes("Bardez")
            case "calangute":
              return hotel.location.includes("Calangute")
            case "candolim":
              return hotel.location.includes("Candolim")
            case "south-goa-all":
              return hotel.area === "South Goa"
            case "anjuna":
              return hotel.location.includes("Anjuna")
            case "panjim":
              return hotel.location.includes("Panjim")
            case "morjim":
              return hotel.location.includes("Morjim")
            case "baga":
              return hotel.location.includes("Baga")
            case "vagator":
              return hotel.location.includes("Vagator")
            default:
              return false
          }
        })
      })
    }

    // Apply payment mode filters
    if (paymentModeFilters.length > 0) {
      // This is a placeholder - in a real app, you'd have payment mode data in your hotel objects
      result = result.filter((hotel) => {
        return paymentModeFilters.some((filter) => {
          switch (filter) {
            case "pay-at-hotel":
              return hotel.id.includes("1") // Placeholder logic
            case "prepay":
              return true // Assuming all hotels accept prepay
            case "booknow-paylater":
              return hotel.id.includes("3") // Placeholder logic
            default:
              return false
          }
        })
      })
    }

    // Apply deal filters
    if (dealFilters.length > 0) {
      result = result.filter((hotel) => {
        return dealFilters.some((filter) => {
          switch (filter) {
            case "exclusive-deals":
              return hotel.featured
            case "last-minute":
              return hotel.savings > 3000 // Just an example condition
            default:
              return false
          }
        })
      })
    }

    setFilteredHotels(result)
  }, [
    searchTerm,
    priceFilters,
    amenityFilters,
    mainLocalityFilters,
    allLocalityFilters,
    paymentModeFilters,
    dealFilters,
  ])

  // Handle sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !contentRef.current) return

      const sidebarRect = sidebarRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()

      // Update heights
      setSidebarHeight(sidebarRef.current.scrollHeight)
      setContentHeight(contentRef.current.scrollHeight)

      const navbarHeight = 64 // Approximate navbar height
      const headerHeight = 72 // Approximate header height
      const topOffset = navbarHeight + headerHeight

      if (sidebarHeight > window.innerHeight - topOffset) {
        // If sidebar is taller than viewport
        if (window.scrollY <= topOffset) {
          // At the top of the page
          setStickyTop(0)
          setIsStickyBottom(false)
        } else if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          // At the bottom of the page
          setStickyTop(-(sidebarHeight - (window.innerHeight - topOffset)))
          setIsStickyBottom(true)
        } else {
          // In between
          setStickyTop(-(window.scrollY - topOffset))
          setIsStickyBottom(false)
        }
      } else {
        // If sidebar is shorter than viewport
        setStickyTop(0)
        setIsStickyBottom(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [sidebarHeight, contentHeight])

  // Function to render amenity icons
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Free WiFi":
        return (
          <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />
    <path d="M5 12.5c3.5-3.5 10.5-3.5 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 16c1-1 6-1 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 9.5c5.5-5.5 14.5-5.5 20 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
        )
      case "Swimming pool":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12h20M2 12c0 5 4 8 10 8s8-3 8-8M2 12c0-5 4-8 10-8s8 3 8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "Free Breakfast":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "Bar":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5 5.5L18 14l-1.5 1.5h-9L6 14 4.5 5.5M4 2.5h16M9 14v5M15 14v5M7 5.5h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
              fill="currentColor"
            />
          </svg>
        )
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Search Header */}
      <div className="bg-white shadow-sm py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h1 className="text-xl font-semibold">Goa</h1>
              <p className="text-sm text-gray-600">FRI, 4 APR - SUN, 6 APR (2 NIGHTS) | 1 ROOM | 2 ADULTS</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <button className="flex items-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50">
                <Search className="h-4 w-4" />
                <span>Modify Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 py-2">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full bg-white border rounded-md py-2 px-4 flex justify-between items-center"
        >
          <span className="font-medium">Filters</span>
          <span className="text-sm text-gray-500">{filteredHotels.length} results</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar - Hidden on mobile unless toggled */}
          <div
            ref={sidebarRef}
            className={`w-full lg:w-72 flex-shrink-0 ${showMobileFilters ? "block" : "hidden lg:block"}`}
            style={{
              position: "sticky",
              top: 0,
              height: "fit-content",
              maxHeight: "100vh",
              overflowY: "auto",
              transform: `translateY(${stickyTop}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <FilterSection title="HOTEL NAME">
              <div className="relative">
                <input
                  type="text"
                  className="w-full border rounded-md p-2 pr-8"
                  placeholder="Search by hotel name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </FilterSection>

            <FilterSection title="PAYMENT MODE">
              <FilterCheckbox
                id="pay-at-hotel"
                label="Pay at Hotel"
                count={0}
                checked={paymentModeFilters.includes("pay-at-hotel")}
                onChange={() => handlePaymentModeFilterChange("pay-at-hotel")}
              />
              <FilterCheckbox
                id="prepay"
                label="PrePay"
                count={782}
                checked={paymentModeFilters.includes("prepay")}
                onChange={() => handlePaymentModeFilterChange("prepay")}
              />
              <FilterCheckbox
                id="booknow-paylater"
                label="BookNow PayLater"
                count={0}
                checked={paymentModeFilters.includes("booknow-paylater")}
                onChange={() => handlePaymentModeFilterChange("booknow-paylater")}
              />
            </FilterSection>

            <FilterSection title="MAIN LOCALITIES">
              <FilterCheckbox
                id="central-north-goa"
                label="Central North Goa(main)"
                count={372}
                checked={mainLocalityFilters.includes("central-north-goa")}
                onChange={() => handleMainLocalityFilterChange("central-north-goa")}
              />
              <FilterCheckbox
                id="upper-north-goa"
                label="Upper North Goa"
                count={84}
                checked={mainLocalityFilters.includes("upper-north-goa")}
                onChange={() => handleMainLocalityFilterChange("upper-north-goa")}
              />
              <FilterCheckbox
                id="city-center"
                label="City Center"
                count={68}
                checked={mainLocalityFilters.includes("city-center")}
                onChange={() => handleMainLocalityFilterChange("city-center")}
              />
              <FilterCheckbox
                id="upper-south-goa"
                label="Upper South Goa"
                count={66}
                checked={mainLocalityFilters.includes("upper-south-goa")}
                onChange={() => handleMainLocalityFilterChange("upper-south-goa")}
              />
              <FilterCheckbox
                id="lower-south-goa"
                label="Lower South Goa"
                count={43}
                checked={mainLocalityFilters.includes("lower-south-goa")}
                onChange={() => handleMainLocalityFilterChange("lower-south-goa")}
              />
              <FilterCheckbox
                id="airport-zone"
                label="Airport Zone"
                count={26}
                checked={mainLocalityFilters.includes("airport-zone")}
                onChange={() => handleMainLocalityFilterChange("airport-zone")}
              />
              <FilterCheckbox
                id="north-goa"
                label="North Goa"
                count={20}
                checked={mainLocalityFilters.includes("north-goa")}
                onChange={() => handleMainLocalityFilterChange("north-goa")}
              />
              <FilterCheckbox
                id="madgaon"
                label="Madgaon"
                count={19}
                checked={mainLocalityFilters.includes("madgaon")}
                onChange={() => handleMainLocalityFilterChange("madgaon")}
              />
              <FilterCheckbox
                id="ponda"
                label="Ponda"
                count={3}
                checked={mainLocalityFilters.includes("ponda")}
                onChange={() => handleMainLocalityFilterChange("ponda")}
              />
            </FilterSection>

            <FilterSection title="ALL LOCALITIES">
              <FilterCheckbox
                id="north-goa-all"
                label="North Goa"
                count={206}
                checked={allLocalityFilters.includes("north-goa-all")}
                onChange={() => handleAllLocalityFilterChange("north-goa-all")}
              />
              <FilterCheckbox
                id="bardez"
                label="Bardez"
                count={180}
                checked={allLocalityFilters.includes("bardez")}
                onChange={() => handleAllLocalityFilterChange("bardez")}
              />
              <FilterCheckbox
                id="calangute"
                label="Calangute"
                count={154}
                checked={allLocalityFilters.includes("calangute")}
                onChange={() => handleAllLocalityFilterChange("calangute")}
              />
              <FilterCheckbox
                id="candolim"
                label="Candolim"
                count={74}
                checked={allLocalityFilters.includes("candolim")}
                onChange={() => handleAllLocalityFilterChange("candolim")}
              />
              <FilterCheckbox
                id="south-goa-all"
                label="South Goa"
                count={66}
                checked={allLocalityFilters.includes("south-goa-all")}
                onChange={() => handleAllLocalityFilterChange("south-goa-all")}
              />
              <FilterCheckbox
                id="anjuna"
                label="Anjuna"
                count={51}
                checked={allLocalityFilters.includes("anjuna")}
                onChange={() => handleAllLocalityFilterChange("anjuna")}
              />
              <FilterCheckbox
                id="panjim"
                label="Panjim"
                count={50}
                checked={allLocalityFilters.includes("panjim")}
                onChange={() => handleAllLocalityFilterChange("panjim")}
              />
              <FilterCheckbox
                id="morjim"
                label="Morjim"
                count={40}
                checked={allLocalityFilters.includes("morjim")}
                onChange={() => handleAllLocalityFilterChange("morjim")}
              />
              <FilterCheckbox
                id="baga"
                label="Baga"
                count={35}
                checked={allLocalityFilters.includes("baga")}
                onChange={() => handleAllLocalityFilterChange("baga")}
              />
              <FilterCheckbox
                id="vagator"
                label="Vagator"
                count={35}
                checked={allLocalityFilters.includes("vagator")}
                onChange={() => handleAllLocalityFilterChange("vagator")}
              />
              {!showAllLocalities && (
                <div className="mt-2">
                  <button
                    onClick={() => setShowAllLocalities(true)}
                    className="text-blue-500 text-sm font-medium flex items-center"
                  >
                    VIEW ALL <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              )}
            </FilterSection>

            <FilterSection title="AMENITIES">
              <FilterCheckbox
                id="central-air-conditioning"
                label="Central Air Conditioning"
                count={117}
                checked={amenityFilters.includes("central-air-conditioning")}
                onChange={() => handleAmenityFilterChange("central-air-conditioning")}
              />
              <FilterCheckbox
                id="wifi"
                label="WIFI"
                count={433}
                checked={amenityFilters.includes("wifi")}
                onChange={() => handleAmenityFilterChange("wifi")}
              />
              <FilterCheckbox
                id="airport-transportation"
                label="Airport transportation"
                count={86}
                checked={amenityFilters.includes("airport-transportation")}
                onChange={() => handleAmenityFilterChange("airport-transportation")}
              />
              <FilterCheckbox
                id="laundry-facilities"
                label="Laundry facilities"
                count={506}
                checked={amenityFilters.includes("laundry-facilities")}
                onChange={() => handleAmenityFilterChange("laundry-facilities")}
              />
              <FilterCheckbox
                id="airport-transportation-free"
                label="Airport transportation free"
                count={2}
                checked={amenityFilters.includes("airport-transportation-free")}
                onChange={() => handleAmenityFilterChange("airport-transportation-free")}
              />
              <FilterCheckbox
                id="atm-banking"
                label="ATM/banking"
                count={10}
                checked={amenityFilters.includes("atm-banking")}
                onChange={() => handleAmenityFilterChange("atm-banking")}
              />
              <FilterCheckbox
                id="bar"
                label="Bar"
                count={215}
                checked={amenityFilters.includes("bar")}
                onChange={() => handleAmenityFilterChange("bar")}
              />
              <FilterCheckbox
                id="suitable-for-children"
                label="Suitable for children"
                count={128}
                checked={amenityFilters.includes("suitable-for-children")}
                onChange={() => handleAmenityFilterChange("suitable-for-children")}
              />
              <FilterCheckbox
                id="fitness-centre"
                label="Fitness Centre"
                count={51}
                checked={amenityFilters.includes("fitness-centre")}
                onChange={() => handleAmenityFilterChange("fitness-centre")}
              />
            </FilterSection>

            <FilterSection title="DEALS">
              <FilterCheckbox
                id="exclusive-deals"
                label="Exclusive Deals"
                count={2}
                checked={dealFilters.includes("exclusive-deals")}
                onChange={() => handleDealFilterChange("exclusive-deals")}
              />
              <FilterCheckbox
                id="last-minute"
                label="Last Minute Deal"
                count={18}
                checked={dealFilters.includes("last-minute")}
                onChange={() => handleDealFilterChange("last-minute")}
              />
            </FilterSection>

            <FilterSection title="PRICE FOR 2 NIGHTS">
              <FilterCheckbox
                id="price-1"
                label="Less than Rs. 1,000"
                count={0}
                checked={priceFilters.includes("price-1")}
                onChange={() => handlePriceFilterChange("price-1")}
              />
              <FilterCheckbox
                id="price-2"
                label="Rs. 1,001 to Rs. 2,000"
                count={9}
                checked={priceFilters.includes("price-2")}
                onChange={() => handlePriceFilterChange("price-2")}
              />
              <FilterCheckbox
                id="price-3"
                label="Rs. 2,001 to Rs. 4,000"
                count={107}
                checked={priceFilters.includes("price-3")}
                onChange={() => handlePriceFilterChange("price-3")}
              />
              <FilterCheckbox
                id="price-4"
                label="Rs. 4,001 to Rs. 7,000"
                count={210}
                checked={priceFilters.includes("price-4")}
                onChange={() => handlePriceFilterChange("price-4")}
              />
              <FilterCheckbox
                id="price-5"
                label="Rs. 7,001 to Rs. 10,000"
                count={134}
                checked={priceFilters.includes("price-5")}
                onChange={() => handlePriceFilterChange("price-5")}
              />
              <FilterCheckbox
                id="price-6"
                label="Greater than Rs. 10,001"
                count={614}
                checked={priceFilters.includes("price-6")}
                onChange={() => handlePriceFilterChange("price-6")}
              />
            </FilterSection>

            <FilterSection title="PROPERTY TYPE">
              <FilterCheckbox id="resort" label="Resort" count={371} />
              <FilterCheckbox id="hotels" label="Hotels" count={182} />
              <FilterCheckbox id="guesthouse" label="Guesthouse" count={74} />
              <FilterCheckbox id="villa" label="Villa" count={41} />
              <FilterCheckbox id="cottage" label="Cottage" count={19} />
              <div className="mt-2">
                <Link href="#" className="text-blue-500 text-sm font-medium">
                  VIEW ALL
                </Link>
              </div>
            </FilterSection>

            <FilterSection title="SHOW HOTELS WITH">
              <FilterCheckbox
                id="free-breakfast"
                label="Free Breakfast"
                count={138}
                checked={amenityFilters.includes("free-breakfast")}
                onChange={() => handleAmenityFilterChange("free-breakfast")}
              />
              <FilterCheckbox
                id="free-wifi"
                label="Free WiFi"
                count={241}
                checked={amenityFilters.includes("free-wifi")}
                onChange={() => handleAmenityFilterChange("free-wifi")}
              />
              <FilterCheckbox
                id="couple-friendly"
                label="Couple Friendly"
                count={475}
                checked={amenityFilters.includes("couple-friendly")}
                onChange={() => handleAmenityFilterChange("couple-friendly")}
              />
              <FilterCheckbox
                id="women-friendly"
                label="Women Friendly"
                count={218}
                checked={amenityFilters.includes("women-friendly")}
                onChange={() => handleAmenityFilterChange("women-friendly")}
              />
              <FilterCheckbox
                id="eco-plus"
                label="Eco Plus"
                count={169}
                checked={amenityFilters.includes("eco-plus")}
                onChange={() => handleAmenityFilterChange("eco-plus")}
              />
              <FilterCheckbox
                id="pet-friendly"
                label="Pet Friendly"
                count={43}
                checked={amenityFilters.includes("pet-friendly")}
                onChange={() => handleAmenityFilterChange("pet-friendly")}
              />
              <FilterCheckbox id="longstay-hotels" label="Longstay Hotels" count={111} />
              <FilterCheckbox id="free-cancellation" label="Free Cancellation" count={9} />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="clean-pass" className="h-4 w-4" />
                <label htmlFor="clean-pass" className="text-sm flex items-center">
                  Clean Pass
                  <span className="ml-2 px-1 text-xs text-white bg-red-500 rounded">New</span>
                </label>
                <span className="text-xs text-gray-500 ml-auto">18</span>
              </div>
            </FilterSection>
          </div>

          {/* Hotel Listings */}
          <div ref={contentRef} className="flex-1">
            {/* Banner Ad */}
            {/* <div className="mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=120&width=800"
                alt="Promotional Banner"
                width={800}
                height={120}
                className="w-full h-auto"
              />
            </div> */}

            <div className="bg-white rounded-md shadow-sm border mb-4">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold">ALL HOTELS ({filteredHotels.length})</h2>
                    <p className="text-sm text-gray-600">
                      from ₹
                      {filteredHotels.length > 0
                        ? Math.min(...filteredHotels.map((h) => h.discountedPrice)).toLocaleString()
                        : 0}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="#" className="text-gray-700 hover:underline">
                      LIST
                    </Link>
                    <span>|</span>
                    <Link href="#" className="text-gray-700 hover:underline">
                      MAP
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b overflow-x-auto">
                <div className="flex gap-4 md:gap-8 min-w-max">
                  <div className="font-medium text-sm">SORT BY:</div>
                  <div className="font-medium text-sm text-red-600">RECOMMENDED</div>
                  <div className="font-medium text-sm">STAR RATING</div>
                  <div className="font-medium text-sm">USER RATING</div>
                  <div className="font-medium text-sm">PRICE (TAXES EXTRA)</div>
                </div>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className="space-y-4">
              {filteredHotels.length === 0 ? (
                <div className="bg-white rounded-md shadow-sm border p-8 text-center">
                  <h3 className="text-xl font-semibold">No hotels found</h3>
                  <p className="text-gray-600 mt-2">Try adjusting your filters to see more results.</p>
                </div>
              ) : (
                filteredHotels.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-md shadow-sm border">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-80">
                        {hotel.featured && (
                          <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-1 z-10">FEATURED</div>
                        )}
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={hotel.image || "/placeholder.svg"}
                            alt={hotel.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
                            <Search className="h-5 w-5 text-white" />
                          </div>
                          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <div className="flex items-start justify-between md:justify-start">
                              <h3 className="text-xl font-semibold">{hotel.name}</h3>
                              {hotel.rating && (
                                <div className="md:ml-4 flex items-center">
                                  <span className="text-green-600 font-medium">{hotel.rating.score}/5</span>
                                  <span className="ml-1 text-green-600">{hotel.rating.type}</span>
                                  <span className="text-xs text-gray-500 ml-1">({hotel.rating.reviews})</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex">
                                {Array.from({ length: hotel.stars }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-red-500 fill-red-500" />
                                ))}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <MapPin className="h-4 w-4 text-blue-500" />
                                <span className="text-blue-500">{hotel.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 md:text-right">
                            <div className="text-sm text-gray-500 line-through">
                              ₹{hotel.originalPrice.toLocaleString()}
                            </div>
                            <div className="text-2xl font-bold text-gray-800">
                              ₹{hotel.discountedPrice.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">For 2 nights</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          {hotel.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-1">
                              {renderAmenityIcon(amenity)}
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>

                        {hotel.bookings && (
                          <div className="mt-2 text-sm text-gray-600">
                            Booked {hotel.bookings.times} times in last {hotel.bookings.hours} hours
                            {hotel.viewers && hotel.viewers > 0 && (
                              <span className="ml-2">
                                | {hotel.viewers} {hotel.viewers === 1 ? "person" : "people"} viewing
                              </span>
                            )}
                          </div>
                        )}

                        {!hotel.bookings && hotel.viewers && hotel.viewers > 0 && (
                          <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>
                              {hotel.viewers} {hotel.viewers === 1 ? "person" : "people"} viewing
                            </span>
                          </div>
                        )}

                        {hotel.tags && hotel.tags.length > 0 && (
                          <div className="flex flex-wrap items-center gap-4 mt-4">
                            {hotel.tags.map((tag, index) => {
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

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-2">
                            {hotel.savings > 0 && (
                              <div className="text-sm">
                                <span className="text-gray-600">You Save</span>
                                <span className="text-green-600 font-medium"> ₹{hotel.savings.toLocaleString()}</span>
                              </div>
                            )}
                            <div className="text-sm">
                              <span className="text-blue-500 font-medium">Login</span>
                              <span className="text-gray-600"> & get additional ₹250 off using </span>
                              <span className="text-amber-600 font-medium">eCash</span>
                            </div>
                          </div>
                          <button className="mt-2 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium">
                            Choose Room
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

