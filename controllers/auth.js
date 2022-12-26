module.exports.getHomePage = (req,res) => {
    res.render('home', {title : 'Diary App'})
}
module.exports.getLoginPage = (req,res) => {
    res.render('login', {title : "Login"})
}
module.exports.getSignupPage = (req,res) => {
    res.render('signup', {title : "Sign Up"})
}
module.exports.getDashboard = (req,res) => {
    res.render('dashboard', {title : 'Dashboard'})
}
module.exports.postSignup = (req,res) => {
    console.log(req.body)
}