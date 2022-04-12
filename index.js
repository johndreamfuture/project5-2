console.log("he")

let mongoose = require('mongoose')

//Connect to MongoDB
const DATABASE = "book"
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`, mongooseConfig)


//event listeners
mongoose.connection.on('connected', () => { console.log('connected to database') })
mongoose.connection.on('disconnected', () => { console.log('connected to database') })
mongoose.connection.on('error', error => { console.error(' database error', error) })


let BookModel = mongoose.model("book", new mongoose.Schema({
  name: String,
  author: String,
  year: Number
}))


BookModel.create({
  name: "xxxx",
  author: "yyy",
  year: 1000
})





let express = require('express')
// let router = require('../router/router')

let app = express()
////


// app.get("/", (req, res) => {
//   res.send("hello!")
// })
// app.get("/books", (req, res) => {
//   res.send("books!")
// })

let router = require("./router")

app.use('/api', router)

////

// app.use('/api', router)

const PORT = 9000
let server = app.listen(PORT)
server.on('listening', () => console.log("Listening on port" + PORT))
server.on('error', error => console.error("something is wrong", error))









// let controller = require('../controller/controller')

// let router = new express.Router()


// router.post('/', controller.create)
// router.get('/books', controller.getAll)
// router.get('/books/:id', controller.getById)
// router.put('/books/:id', controller.updateById)
// router.delete('/books/:id', controller.deleteById)

// module.exports = router