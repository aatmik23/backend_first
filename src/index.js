import dotenv from "dotenv"

import connectDB from "./db/index.js"
import { app } from "./app.js"
 
dotenv.config({
    path: "./env"
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is listenig at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection FAILED",err)
})
// (async ()=>{
//     try {

//         await mangoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//               console.log(`app is listenig at ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("error",error)
//     }
// })()