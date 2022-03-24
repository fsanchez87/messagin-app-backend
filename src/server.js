import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Cors from 'cors'

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGO_URI;

//Middleware
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url);

//API endpoint
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

//Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));