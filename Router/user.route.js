const express = require("express")
const router = express.Router();
const userService = require("../BL/user.service")
router.post("/login", async (req, res) => {
    try {

    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
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
        let newUser = await userService.createNewUser(user)
        res.send(newUser)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})



module.exports = router