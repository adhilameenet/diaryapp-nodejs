const User = require('../models/User')

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
module.exports.postSignup = async (req,res) => {
   try {
    const {username,password,confirmPasword} = req.body;
    const user = new User({
        username,
        password,
        confirmPasword
    })
    await user.save()
    res.redirect('/dashboard')
   } catch(err) {
    console.log(err)
    return res.status(400).json("Somethinng Error Occured")
   }
}