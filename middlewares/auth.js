
module.exports.verifyAuth = (req,res,next) => {
    if(req.session.isAuth) {
        next()
    } else {
        res.redirect('/login')
    }
}