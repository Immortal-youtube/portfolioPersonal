const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const db = require("./db");

app.get("/", (req, res) => {  
    db.useDb("Questions").collection("questions").insertOne({name: "ansh"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);