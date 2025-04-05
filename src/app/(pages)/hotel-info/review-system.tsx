"use client";
import React, { useState } from "react";
import { Star, ThumbsUp, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { REVIEW_TYPE } from "@/Types";

type ReviewCategory =
  | "Everyone"
  | "Couple"
  | "Family"
  | "Group"
  | "Solo"
  | "Business";
type FilterType =
  | "All Reviews"
  | "Staff Courtesy"
  | "Room Quality"
  | "Service Quality"
  | "Food"
  | "Room Cleanliness"
  | "Pool"
  | "Location"
  | "Distance from Beach"
  | "Breakfast"
  | "Good Food";

function ReviewSystem() {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterType>("All Reviews");

  const filters: FilterType[] = [
    "All Reviews",
    "Staff Courtesy",
    "Room Quality",
    "Service Quality",
    "Food",
    "Room Cleanliness",
    "Pool",
    "Location",
    "Distance from Beach",
    "Breakfast",
    "Good Food",
  ];

  const ratings = {
    overall: 4.1,
    excellent: 43,
    veryGood: 31,
    average: 16,
    poor: 6,
    bad: 5,
    totalReviews: 526,
    categories: {
      location: 4.2,
      cleanliness: 4.0,
      room: 3.6,
      food: 3.9,
      hospitality: 3.3,
      valueForMoney: 4.1,
    },
  };

  const sampleReview: REVIEW_TYPE = {
    id: 1,
    rating: 3.0,
    date: "Feb 02, 2023",
    userType: "Couple",
    title:
      "Clean Rooms Worth Money Paid But Need Little Improvement In Service",
    content:
      "We Liked The Room Which On Ground Floor room No CG8 . Big Premium Room Have Some Maintenance Work But Still Its Fine The Problem Is There Is Piles Of Garbage Bags Kept Behind This Room Which Starts Stinking If You Keep The Door Open For More Than 5 Minutes . Check Out Time Is 11 Am And Check In Is 1 Pm But Still We Got Room By 2.30 Pm . Overall Room Stay Is Good Breakfast Is Good But Only For Reasonable Price Paid",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=100&h=100",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=100&h=100",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=100&h=100",
    ],
    helpful: 12,
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderRatingBar = (percentage: number) => (
    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen  bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Overall Rating */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-blue-600">
                {ratings.overall}
              </div>
              <div className="text-lg font-semibold mt-2">Very Good</div>
              <div className="text-sm text-gray-500">
                {ratings.totalReviews} Ratings,{" "}
                {Math.floor(ratings.totalReviews * 0.8)} Reviews
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Excellent</span>
                {renderRatingBar(ratings.excellent)}
                <span>{ratings.excellent}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Very Good</span>
                {renderRatingBar(ratings.veryGood)}
                <span>{ratings.veryGood}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Average</span>
                {renderRatingBar(ratings.average)}
                <span>{ratings.average}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Poor</span>
                {renderRatingBar(ratings.poor)}
                <span>{ratings.poor}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bad</span>
                {renderRatingBar(ratings.bad)}
                <span>{ratings.bad}%</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Categories */}
          <div>
            <h3 className="font-semibold mb-4">Rating Categories</h3>
            <div className="space-y-3">
              {Object.entries(ratings.categories).map(([category, rating]) => (
                <div
                  key={category}
                  className="flex items-center justify-between"
                >
                  <span className="capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <div className="flex items-center gap-2">
                    {renderStars(rating)}
                    <span className="font-semibold">{rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Traveller Impressions */}
          <div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">
                Traveller Impressions
              </h3>
              <p className="text-sm text-gray-600">
                Guests at the property have praised the clean swimming pool and
                well-maintained garden. The staff, especially Shambhu and Tejas,
                received positive feedback for their helpful and friendly
                service.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mt-8">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filter By:</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Latest first</option>
                  <option>Highest rated</option>
                  <option>Lowest rated</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                    selectedFilter === filter
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="mt-8">
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-xl">{sampleReview.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  {renderStars(sampleReview.rating)}
                  <span className="text-2xl font-bold text-blue-600">
                    {sampleReview.rating}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {sampleReview.userType} • {sampleReview.date}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-4">{sampleReview.content}</p>

            <div className="mt-4 flex md:flex-row flex-row gap-4">
              {sampleReview.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful</span>
              </button>
              <span className="text-gray-500">({sampleReview.helpful})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSystem;
