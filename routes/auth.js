const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/google', passport.authenticate('google', {scope: ['profile']}
))

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect:'/'}), (req,res) => {
    res.redirect('/')
})

// router.post('/openid/return',
//   function(req, res, next) {
//     passport.authenticate('auth/google/callback',
//       {
//         response: res,
//         failureRedirect: '/'
//       }
//     )(req, res, next)
//   },
//   function(req, res){
//     console.log('We received a return from Google')
//     res.redirect('/todos')
//   }
// )

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
  })

module.exports = router