const express = require("express");
const app = express();
const cors = require("cors");
require("colors");
require("dotenv").config();
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const connectDB = require("./dbinit");
const tour = require("./routes/tour");
connectDB();
//
app.use("/tours", tour);
const PORT = process.env.PORT || 8085;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`.bgGreen);
});
