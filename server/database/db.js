import mongoose from 'mongoose';

const Connection = async()=>{
    const URL = "mongodb://localhost:27017/Ecommerce"
    try{
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false});
        console.log("Database connected successfully")
    } catch(error){
        console.log("Error: ",error.message)
    }
}

export default Connection;
