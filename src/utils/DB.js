import mongoose from "mongoose";

console.log("db")

export const DBConnection = ()=>{
 return mongoose
  .connect(
    process.env.DATABASE_URL
  )
  .then(() => console.log("Connected to the DB."))
  .catch((e) => console.log("DB ERROR: ", e));
}