let mongoose = require('mongoose')
let BookModel = mongoose.model("book", new mongoose.Schema({
  name: String,
  author: String,
  year: Number,
  image: String,
  description: String
}))

module.exports = BookModel
// export default BookModel