// import db from "../connection/connection.js"
// import BookModel from "../model/bookModel.js"
// import mybooks from "./mybooks.json" assert {type:"json"}
let db =require("../connection/connection.js") 
let BookModel =require("../model/bookModel.js") 
let mybooks =require("./mybooks.json" ) //assert {type:"json"}

const insertData = async () => {
await BookModel.deleteMany({})

await BookModel.insertMany(mybooks);

db.close();
}

insertData()