import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/api/user",router);
mongoose.connect("mongodb+srv://Tasnim:lkwnoplbauR7wTth@techweb.6zzxtnh.mongodb.net/techNews?retryWrites=true&w=majority&appName=TechWeb")
.then(() => app.listen(5000))
.then(()=>
    console.log("connected to database and listening to localhost 5000")
)
.catch((err)=>console.log(err));