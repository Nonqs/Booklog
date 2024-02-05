const express = require("express")
const passport = require("passport")

const router = express.Router()



router.post('/signup', (req, res, next) => {
    passport.authenticate('local.signup', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { 
            
            return res.status(400).send(info.message);
        }
        
        return res.send("User registered successfully");
    })(req, res, next);
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { 
            // El inicio de sesión falló
            return res.status(400).send(info.message);
        }
        // El inicio de sesión fue exitoso
        req.login(user, (err) => {
            if (err) { return next(err); }
            return res.redirect("/library")
        });
    })(req, res, next);
});

module.exports = router