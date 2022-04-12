let mongoose = require('mongoose')
// import mongoose from 'mongoose'

//Connect to MongoDB
const MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/book'

// const DATABASE = "book"
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`, mongooseConfig)
mongoose.connect(MONGODB_URI,mongooseConfig).catch(error =>{
  console.log('unable to connect :  ', error.message)
})


//event listeners
mongoose.connection.on('connected', () => { console.log('connected to database') })
mongoose.connection.on('disconnected', () => { console.log('connected to database') })
mongoose.connection.on('error', error => { console.error(' database error', error) })
// export default mongoose.connection
module.exports=mongoose.connection