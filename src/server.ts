import mongoose from "mongoose";
import app from "./app";

const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/SuperAutoPets")
    app.listen(911, () => console.log("Listening on port 911"))
}

startServer()