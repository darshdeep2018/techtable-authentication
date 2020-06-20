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
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //return done(err, user);
    //});
    console.log('done');
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google'));


// app.use(
//     cookieSession({
//         maxAge:30 * 24 * 60 * 60 *1000,
//         keys:[keys.cookieKey]
//     })
// )

// app.use(passport.initialize());
// app.use(passport.session())

// require('./routes/authRoute')(app)

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     const path = require('path');
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }


app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})