import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRoutes from "./routes/posts.routes.js";
import UserRoutes from "./routes/user.routes.js";



dotenv.config();


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

app.use(postsRoutes);
app.use(UserRoutes);



const start = async () => {
    try {
        const coonectDB = await mongoose.connect(process.env.MONGO_URL);
        
        app.listen(5000, () => {
            console.log("server is running on port 5000....");

        })
    } catch (e) {
        console.log(e.message);
    }




}
start();


