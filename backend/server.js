//====================================================//Require
const express = require("express");
const PORT = 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
//====================================================//import database
const connection = require("./database/db");

//====================================================// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
