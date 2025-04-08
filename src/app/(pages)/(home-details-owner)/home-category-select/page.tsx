import React from "react";
import Navbar from "@/custom_components/navbar";
import EntirePrivateModal from "./entire-private";
import MainDetailPage from "./mainDetailPage";
import FinanceAndLegal from "./FinanceAndLegal";
import BasicAmenities from "./(Amenities)/BasicAmenities";
import GeneralServices from "./(Amenities)/GeneralServices";
import CommonArea from "./(Amenities)/CommonArea";
import ThreeMoreAmenities from "./(Amenities)/ThreeMoreAmenities";
import FourMore from "./(Amenities)/FourMore";
import FiveMore from "./(Amenities)/FiveMore";
const page = () => {
  
  return (
    <div>
      <Navbar />
      <MainDetailPage />  
      {/* <EntirePrivateModal /> */}
      {/* <FinanceAndLegal /> */}
      {/* <BasicAmenities /> */}
      {/* <GeneralServices /> */}
      {/* <CommonArea /> */}
      {/* <ThreeMoreAmenities /> */}
      {/* <FourMore /> */}
      {/* <FiveMore /> */}
    </div>
  );
};

export default page;
