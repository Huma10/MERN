import mongoose from "mongoose";

async function connectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("Connection extablished");
}
export default connectDb;