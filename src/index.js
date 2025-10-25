import dotenv from "dotenv"

import connectDB from "./db/index.js"
 
dotenv.config({
    path: "./env"
})
connectDB()
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