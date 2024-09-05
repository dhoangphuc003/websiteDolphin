import cors from "cors"
import express from "express"
import { connectDB } from "./config/db.js"
import fishRouter from "./routes/fishRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connect
connectDB();
// api  endpoint
app.use("/api/fish",fishRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/orders",orderRouter)

app.get("/",(req, res)=>{
    res.send("API working")
})  

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
