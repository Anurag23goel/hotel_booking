import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://23anuraggoel:hotelBooking123@hotel-booking-db.h1bg2.mongodb.net/TEST"
      )
      .then(() => {
        console.log("Connected to Database");
      })
      .catch((error) => {
        console.log("Error while connecting Database - ", error.message);
      });
  } catch (error) {
    console.log(
      "Error while connecting Database in catch block - ",
      error.message
    );
  }
}
