const express  = require("express");
const passport = require('passport');
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const PORT  = process.env.PORT || 5000;
const app=express();

passport.use(new GoogleStrategy({
    clientID: "413952594205-t6v63sgeqgn3pj271bg7s2mon06nmgr9.apps.googleusercontent.com",
    clientSecret: "Qx47Gu5ZP0ub3CvrO9fYCzUu",
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) =>{
    console.log('profile',profile)
    console.log('done',done);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google'));

app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})