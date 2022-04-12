let mongoose = require('mongoose')

//Connect to MongoDB
const DATABASE = "book"
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`, mongooseConfig)


//event listeners
mongoose.connection.on('connected', () => { console.log('connected to database') })
mongoose.connection.on('disconnected', () => { console.log('connected to database') })
mongoose.connection.on('error', error => { console.error(' database error', error) })