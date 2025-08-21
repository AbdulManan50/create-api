import "dotenv/config.js"
import express from "express"
import { db } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js"


const app = express();


const PORT = process.env.PORT || 3005


app.use(express.json())

app.use("/api/user", userRoutes)

db().then(() => {
    app.listen(PORT, () => {
        console.log(`server is started ${PORT}`)
    })
})



