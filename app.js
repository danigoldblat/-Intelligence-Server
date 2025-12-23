import express from "express"
import {Auth,verification}from "./ctrls/usersC.js"
import usersRoutes from "./routes/usersR.js"
const app = express()
const port = 3000
app.use(express.json())
app.get("/health",Auth)
app.use("/users",verification,usersRoutes)











app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
    
})