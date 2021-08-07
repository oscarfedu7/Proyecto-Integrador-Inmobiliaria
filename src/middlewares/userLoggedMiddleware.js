function userLoggedMiddleware(req, res, next){
    res.locals.isLogged =false;
    if(req.session && req.session.userLogged){
        res.locals.image = req.session.userLogged.image;
        res.locals.firstName = req.session.userLogged.firstName;
        res.locals.lastName = req.session.userLogged.lastName;
        res.locals.isLogged = true;
    }

    next();
}
module.exports = userLoggedMiddleware;