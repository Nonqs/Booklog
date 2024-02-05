const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const pool = require("../database")
const helpers = require("./helpers")

passport.use("local.login", new LocalStrategy({

    usernameField: "user",
    passwordField: "password",
    passReqToCallback: true

}, async (req, user, password, done) => {
    
    const rows = await pool.query("SELECT * FROM users WHERE username = ?", [user])

    console.log(rows)

    if (rows.length > 0) {
        const authenticatedUser = rows[0]
        const validPassword = await helpers.matchPassword(password, authenticatedUser.password)
        

        if (validPassword) {
            done(null, authenticatedUser, req.flash("succes","Welcome " + authenticatedUser.username))
        } else {
            done(null, false, req.flash("message","Incorrect Password"))
        }

    } else {

        return done(null, false, req.flash("message","The username does not exist"))

    }

}))

passport.use("local.signup", new LocalStrategy({

    usernameField: "user",
    passwordField: "password",
    passReqToCallback: true

}, async (req, user, password, done) => {

    if (req.body.confirm !== req.body.password) {

        return done(null, false);

    } else {

    const { email } = req.body

    const newUser = {
        email,
        username: user,
        password
    }

    newUser.password = await helpers.encryptPassword(password)

    const result = await pool.query("INSERT INTO users SET ?", [newUser])
    newUser.id = result.insertId

    return done(null, newUser);
}

}))

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {

    const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id])
    done(null, rows[0])

})