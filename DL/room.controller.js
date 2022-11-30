
const mongoose = require("mongoose");
const { roomData } = require('./room.model');

// C R U D - ROOM
async function create(data) {
    return await roomData.create(data)
}
async function read(filter) {

    return await roomData.find(filter)
}
async function update(filter, data) {
    return await roomData.updateOne(filter, data, { new: true })
}
async function del(_id) {
    return await update({ _id }, { isActive: false })
}

// C R U D - MSG

async function createMsg(roomId, msg) {
    return await roomData.findByIdAndUpdate(roomId, { $push: { messages: msg } })
}

async function delMsg(_id, _idMsg) {
    // return await roomData.findByIdAndUpdate(roomId, { $push: { messages: msg } })
    


    // return await roomData.updateOne({ _id:_id, }, { isActive: false })
}

module.exports = { create, read, update, del, delMsg,createMsg }


// create(newUser)

// read({permission:"admin"})

// del('637f7dfd57b0b85b399b3626')

// TODO: לשאול את אביעד
// fetch("http://localhost:4000/chat/delete", {
//     method: 'POST',
//     body: JSON.stringify({
//         _id: "6383670f264375d38b545493",
//         creatorId: "6383670f264375d38b545493"
//       }),
//   })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));