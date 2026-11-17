// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";

dotenv.config()
connectDB()













// ( async () =>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
//     } catch (error) {
//         console.error("Error : ", error);
//         throw err
        
        
//     }
// })()