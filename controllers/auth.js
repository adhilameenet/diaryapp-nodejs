const User = require('../models/User')
const Diary = require('../models/Diary')

module.exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Diary App' })
}
module.exports.getLoginPage = (req, res) => {
  res.render('login', { title: 'Login' })
}
module.exports.getSignupPage = (req, res) => {
  res.render('signup', { title: 'Sign Up' })
}
module.exports.getDashboard = async (req, res) => {
  const diary = await Diary.find({user: req.session.user._id}).lean()
  res.render('dashboard', { user: req.user , diary })
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
      req.session.user = user
      res.redirect('/dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports.getLogout = (req,res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/login')
    }
  })
}
