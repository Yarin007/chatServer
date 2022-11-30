require('dotenv').config()
require('../DL/db').connect()

const roomDL = require('../DL/room.controller')

async function CreateNewRoom(data) {
    return await roomDL.create(data)
}

async function ReadRooms() {
    return await roomDL.read({})
}
async function DeleteRoom(roomId) {
    if (roomId == roomId){

        console.log("yes");
        return await roomDL.del(roomId)
    }
    else
        throw 'Wrong input'
}

async function ReadMessages() {
    return await roomDL.read({})
}
async function AddMessages() {
    return await roomDL.read({})
}
async function DeleteMessages(_id, arrLocation) {
    return await roomDL.DeleteMessage(_id, arrLocation)
}
async function UpdateMessages() {
    return await roomDL.read({})
}

module.exports={ReadMessages, AddMessages, DeleteMessages, UpdateMessages, DeleteRoom, ReadRooms}

let newRooms = [
    {
        name: 'tocheck is delited!@#$%^&*()P@$$w0rd',
        creator: '638361d95cce81b56929307d',
        messages: [
            {
                user: '638361d95cce81b56929307d',
                message: 'jfjf',
                likes: ['638361da5cce81b569293081'],
                fires: ['638361d95cce81b56929307d'],
            },
            {
                user: '638361d95cce81b56929307d',
                message: 'hiii',
                likes: ['638361da5cce81b569293081'],
                fires: ['638361da5cce81b569293081'],
            },
            {
                user: '638361da5cce81b569293081',
                message: 'helloworld',
                likes: ['638361d95cce81b56929307d','638361da5cce81b569293081'],
                fires: ['638361d95cce81b56929307d'],
            }
        ]
    }
]
// for (let i = 0; i < newRooms.length; i++) {
//     CreateNewRoom(newRooms[i])
// }



// DeleteRoom('638382a0e68487f6963522ec', '638382a0e68487f6963522ec')