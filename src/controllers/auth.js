const pool = require("../database")
const helpers = require("../lib/helpers")


const register = async(req, res) =>{

    if (req.body.password !== req.body.confirm) {

        return res.status(400).send("The password diden't match");

    } 

    const { email, user, password } = req.body

    const newUser = {
        email,
        username: user,
        password
    }

    console.log(newUser)

    newUser.password = await helpers.encryptPassword(password)

    console.log(newUser)

    const result = await pool.query("INSERT INTO users SET ?", [newUser])
    newUser.id = result.insertId

}

const login = (req, res) =>{

}

module.exports = {
    register,
    login
}