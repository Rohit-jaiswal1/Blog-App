const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const app = express()
const path=require('path')
//middlewatrs
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
dotenv.config();
const userRoutes= require('./routes/userRoutes')
const blogRoutes= require('./routes/blogRoutes')
//routes
connectDB()

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/blog',blogRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server Running  on ${process.env.DEV_MODE} mode port no ${PORT} `.bgCyan.white);
})