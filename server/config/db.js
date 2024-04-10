const mongoose = require("mongoose")
const colors = require("colors")
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Conncted to mongodb database`.bgMagenta.white)
        
    }
    catch(error){
        console.log(`Mongo connection error`.bgRed.white)
    }
};

module.exports = connectDB