import mongoose from "mongoose";

export const connectToDatabase = async (client: string) => {
  await mongoose
    .connect(client)
    .then(() => console.log("CONNECTED TO THE DATABASE"))
    .catch((err) => {
      console.log("ERROR CONNECTING TO THE DATABASE");
      console.error(err);
    });
};
