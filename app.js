//all imports
import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

//express connection
export const app = express();

config({
    path:"./data/config.env"
})


//using middlewares
app.use(express.json()); //used is used to parse incoming requests with JSON payloads, making the JSON data available in req.body.
app.use("/users",userRouter);

app.get("/",(req,res)=>
{
    res.send("Nice Working Dude....");
})


