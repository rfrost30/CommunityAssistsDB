import express from "express"
import facilitiesRoute from "./routes/facilities.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/facilities", facilitiesRoute)
app.use("/api/auth", authRoute)

app.listen(8800,()=>{
    console.log("Connected!")
})