import express, { Request, Response } from "express";
const App = express();
import cors from "cors";
import availability from "../data";

const port = 5000;
App.use(cors());
App.get("/availability", (req: Request, res: Response) => {
  const { query } = req;
  const chosenDate = req.query.date;
  console.log(chosenDate);
  const availabilityForChosenDate = availability.find(
    (elm: { date: string; slots: Array<object> }) => elm.date === chosenDate
  );
  console.log(typeof availabilityForChosenDate);
  res.send(availabilityForChosenDate ? availabilityForChosenDate.slots : []);
});

App.listen(port, () => {
  console.log("server is listening at ", port);
});

/*
const express = require("express");
const cors = require("cors");
const availability = require("./data");
const app = express();
const port = 5000;
app.use(cors());

app.get("/availability", (req, res) => {
  const chosenDate = req.query.date;
  const availabilityForChosenDate = availability.find(elem => )
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/
