const express = require("express")
const router = express.Router();
const roomChatService = require("../BL/roomChat.service")
router.post("/addMsg", async (req, res) => {
    try {

    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})

router.get("/", async (req,res)=>{
    try {
        console.log("cmmc")
        res.send(await roomChatService.ReadRooms())
    } catch (error) {
      res.status(404).send({error})  
    }
})
router.post('/', async (req, res) => {
    try {
        let user = {
            fName: 'david',
            lName: 'derli',
            displayName: 'david Derli',
            email: 'david@gmail.com',
            password: '1q2w3e4r',
        }
        let newUser = await roomChatService.createNewUser(user)
        res.send(newUser)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})
router.post('/delete', async (req, res) => {
    try {
        const {_id, creatorId}=req.body
        console.log(req.body)
        let updateRoom = await roomChatService.DeleteRoom(_id, creatorId)
        res.send(updateRoom)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})
// router.post('/gg', async (req, res) => {
//     try {
//         const {_id, creatorId}=req.body
//         console.log(req.body)
//         let updateRoom = await roomChatService.(_id, creatorId)
//         res.send(updateRoom)
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).json(err)
//     }
router.post('/delmessage', async (req, res) => {
    try {
        const {_id, creatorId}=req.body
        console.log(req.body)
        let updateRoom = await roomChatService.DeleteMessages(_id, creatorId)
        res.send(updateRoom)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})
module.exports = router