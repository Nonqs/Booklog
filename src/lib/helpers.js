const bcrypt = require("bcryptjs")
const e = require("express")
const helpers = {}

helpers.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    
    return hash

}

helpers.matchPassword = async (password, savePasword) => {

    try {
        return await bcrypt.compare(password, savePasword)
    } catch(e) {
        console.error(e)
    }
}

module.exports = helpers