const userDL = require('../DL/user.controller')

async function createNewUser(data) {
    // validation fields
    if (!data.fName || !data.lName || !data.displayName || !data.email || !data.password) throw "missing data"

    // if user is exist
    let user = await userDL.read({ email: data.email })
    if (user[0]) throw 'user is exist'

    return await userDL.create(data)
}
module.exports={createNewUser}
let newUsers = [
    {
        fName: 'liron',
        lName: 'haim',
        displayName: 'Lh',
        email: 'liron@gmail.com',
        password: '98372jhxz',
    },
    {
        fName: 'aviad',
        lName: 'basmah',
        displayName: 'Ab',
        email: 'aviad123@gmail.com',
        password: '98372jhxz',
    },
    {
        fName: 'israel',
        lName: 'israeli',
        displayName: 'Ii',
        email: 'Ii@gmail.com',
        password: 'QW1232ew',
    }
]
