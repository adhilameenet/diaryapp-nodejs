const User = require('../models/User')

module.exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Diary App' })
}
module.exports.getLoginPage = (req, res) => {
  res.render('login', { title: 'Login' })
}
module.exports.getSignupPage = (req, res) => {
  res.render('signup', { title: 'Sign Up' })
}
module.exports.getDashboard = (req, res) => {
  res.render('dashboard', { title: 'Dashboard' })
}
module.exports.postSignup = async (req, res) => {
  try {
    const { username, password } = req.body
    const userExist = await User.findOne({ username })
    if (userExist) {
      return res.status(400).json({ message: 'User already exist' })
    }
    const user = new User({
      username,
      password,
    })
    await user.save()
    res.redirect('/login')
  } catch (err) {
    console.log(err)
    return res.status(400).json('Somethinng Error Occured')
  }
}
module.exports.postLogin = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.login(username, password)
    if (user) {
      res.redirect('/dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}
