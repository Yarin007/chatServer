require('dotenv').config()
const userRouter = require("./Router/user.route")
const roomChatRouter = require("./Router/roomChat.route")


const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())

PORT = process.env.PORT || 5000


app.use("/user", userRouter)
app.use("/chat", roomChatRouter)


require("./DL/db").connect()

app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`))