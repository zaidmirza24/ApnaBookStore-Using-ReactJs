import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookroute from './routes/book.route.js'
import cors from 'cors'


dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const URI = process.env.MongoDBURI 

// middleware
app.use(cors())



// MongoDB Connection
try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB")
    
} catch (error) {
    console.log("Error",error)
    
}
//defining routes

app.use('/book',bookroute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})