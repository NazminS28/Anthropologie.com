
import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import userRoute from "./Routes/UserRoutes.js"

dotenv.config();
connectDatabase();
const app= express();
app.use(express.json())

//API
app.use("/api/import",ImportData);
app.use("/api/users",userRoute);



const PORT= process.env.port; 
app.listen(PORT,console.log(`server running... port ${PORT} `)) 