import connectDB from './db/index.js';
import dotenv from 'dotenv'



//  FFFFFFFFFFFFFFFFFFIRST APPROACHHHHHHHHHHHHHHHHHHHH
// import express from 'express'
// const app = express()

// ;( async () => {
    //     try{
        //         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //         app.on("ERROR: ",(err)=>{
            //             console.log("error: ",err);
            //             throw err
            //         })
            
//         app.listen(process.env.PORT,()=>{
    //             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
    //         console.log("error: ",error);
    //         throw err
    //     }
    // })()
    
    dotenv.config({
        path: './env'
    })
    
    connectDB();