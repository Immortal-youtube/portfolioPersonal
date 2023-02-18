 const mongoose = require('mongoose')

 mongoose
     .connect('mongodb+srv://ansh:ansh070708@cluster0.3akkk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
         console.error('Connection error', e.message)
     })

 const db = mongoose.connection

 module.exports = db

const MongoClient = require("monogodb")
export async function conncetToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://ansh:ansh070708@cluster0.3akkk.mongodb.net/?retryWrites=true&w=majority')

    const db = client.db("Questions");

    const coll = client.collection("questions");
    return {db,coll}

}
