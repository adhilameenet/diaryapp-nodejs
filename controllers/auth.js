module.exports.getHomePage = (req,res) => {
    res.render('home', {title : 'Diary App'})
}
module.exports.getLoginPage = (req,res) => {
    res.render('login', {title : "Login"})
}
module.exports.getSignupPage = (req,res) => {
    res.render('signup', {title : "Sign Up"})
}