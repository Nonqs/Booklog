module.exports = {

    isLogedIn(req, res, next){
        
        if(req.isAuthenticated()){
            console.log("el usuario esta autenticado", req.user)
            return next()
        }
        console.log("el usuario no esta autenticado")
        return 
    },

    isNotLogedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next()
        }
        return 

    }

}