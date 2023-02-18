// const express = require("express");
// const { MongoClient } = require("mongodb");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());

// const db = require("./db");

// app.get("/", (req, res) => {  
//     db.useDb("Questions").collection("questions").insertOne({name: "ansh"});
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//     }
// );

const conncetToDatabase = require("./db")

export default async function handler(){
    console.log("HUIIHIHIHUOIHUOIHIUH")
    if(req.method === "POST"){
        const question = req.body.question
        const data = {
            question
        }
        if(!question){
            res.status(400).json({ message: "Please enter an question" })
        }
        const { db, coll } = await conncetToDatabase();
        const result = await coll.insertOne(data)
    }
}

