import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Cors from "cors";
import Messages from "./dbMessages.js";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGO_URI;

//Middleware
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url);

//API endpoint
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));
