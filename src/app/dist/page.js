"use strict";
exports.__esModule = true;
var getInspiration_1 = require("@/custom_components/home/getInspiration");
var homesForGuests_1 = require("@/custom_components/home/homesForGuests");
var hotelDeals_1 = require("@/custom_components/home/hotelDeals");
var navbar_1 = require("@/custom_components/home/navbar");
var offers_1 = require("@/custom_components/home/offers");
var popularAttractions_1 = require("@/custom_components/home/popularAttractions");
var propertyCarousel_1 = require("@/custom_components/home/propertyCarousel");
var searchbar_1 = require("@/custom_components/home/searchbar");
var trendingHotels_1 = require("@/custom_components/home/trendingHotels");
var uniqueProperties_1 = require("@/custom_components/home/uniqueProperties");
// #057d23
function Home() {
    return (React.createElement("div", { className: "w-full overflow-hidden" },
        React.createElement("div", { className: "bg-[#057d23] lg:min-h-[45vh] min-h-[25vh] " },
            React.createElement("div", { className: "flex flex-col gap-4 lg:gap-14 container max-w-5xl mx-auto px-4" },
                React.createElement(navbar_1["default"], null),
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("h1", { className: "text-white lg:text-5xl text-2xl font-bold" }, "Find Your Next Stay With Us"),
                    React.createElement("p", { className: "text-white lg:text-2xl" }, "Search low prices on hotels....")))),
        React.createElement("div", { className: "lg:max-w-5xl w-[80%] mx-auto transform -translate-y-1/2" },
            React.createElement(searchbar_1["default"], null)),
        React.createElement("div", { className: " max-w-5xl mx-auto mt-6 px-3 lg:px-0" },
            React.createElement("div", { className: "flex flex-col gap-3" },
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("h1", { className: "text-2xl font-bold" }, "Offers"),
                    React.createElement("p", { className: "text-sm lg:text-base text-gray-600" }, "Promotions, deals and special offers for you...")),
                React.createElement("div", { className: "h-fit" },
                    React.createElement(offers_1["default"], null)))),
        React.createElement("div", { className: "flex flex-col gap-2  max-w-5xl mx-auto mt-10  px-3 lg:px-0" },
            React.createElement("h1", { className: "text-2xl font-bold" }, "Browse by property type"),
            React.createElement("div", { className: "w-full" },
                React.createElement(propertyCarousel_1["default"], null))),
        React.createElement("div", { className: "flex flex-col  gap-3 max-w-5xl mx-auto mt-10  px-3 lg:px-0" },
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "Trending Hotels"),
                React.createElement("p", { className: " text-gray-600" }, "Most popular choices for travellers from India")),
            React.createElement(trendingHotels_1["default"], null)),
        React.createElement("div", { className: "flex flex-col gap-3 max-w-5xl mx-auto mt-10 px-3 lg:px-0" },
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "Stay at our top unique properties"),
                React.createElement("p", { className: " text-gray-600" }, "From castles and villas to boats and igloos, we've got it all")),
            React.createElement(uniqueProperties_1["default"], null)),
        React.createElement("div", { className: "flex gap-3 flex-col  max-w-5xl mx-auto mt-10 px-3 lg:px-0" },
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "Popular attractions in Mahabaleshwar"),
                React.createElement("p", { className: " text-gray-600" }, "Experience everything this city has to offer")),
            React.createElement(popularAttractions_1["default"], null)),
        React.createElement("div", { className: "flex gap-3 flex-col max-w-5xl mx-auto mt-10 px-3 lg:px-0" },
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "Deals for the weekend"),
                React.createElement("p", { className: " text-gray-600" }, "Save on stays for 14 March - 16 March")),
            React.createElement(hotelDeals_1["default"], null)),
        React.createElement("div", { className: "flex flex-col gap-4  max-w-5xl mx-auto mt-10 px-3 lg:px-0" },
            React.createElement("h1", { className: "text-2xl font-bold" }, "Get inspiration for your next trip"),
            React.createElement(getInspiration_1["default"], null)),
        React.createElement("div", { className: "flex flex-col gap-2  max-w-5xl mx-auto mt-10 px-3 lg:px-0" },
            React.createElement("h1", { className: "text-2xl font-bold" }, "Homes guests love"),
            React.createElement(homesForGuests_1["default"], null)),
        React.createElement("div", null)));
}
exports["default"] = Home;
