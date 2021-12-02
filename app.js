// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var passport = require('passport');
 
// var LocalStrategy = require('passport-local').Strategy; 
// passport.use(new LocalStrategy( 
//   function(username, password, done) { 
//     Account.findOne({ username: username }, function (err, user) { 
//       if (err) { return done(err); } 
//       if (!user) { 
//         return done(null, false, { message: 'Incorrect username.' }); 
//       } 
//       if (!user.validPassword(password)) { 
//         return done(null, false, { message: 'Incorrect password.' }); 
//       } 
//       return done(null, user); 
//     }); 
//   }))
// // passport config 
// // Use the existing connection 
// // The Account model  
// var Account =require('./models/account'); 
 
// passport.use(new LocalStrategy(Account.authenticate())); 
// passport.serializeUser(Account.serializeUser()); 
// passport.deserializeUser(Account.deserializeUser()); 



// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var umbrellaRouter = require("./routes/umbrella");
// var addmodsRouter = require("./routes/addmods");
// var selectorRouter = require("./routes/selector");
// var umbrella = require("./models/umbrella"); 
// var resourceRouter = require("./routes/resource");

// // We can seed the collection if needed on
// //server start
// //server start
// async function recreateDB() {
//   // Delete everything
//   await umbrella.deleteMany();
//   let instance1 = new umbrella({
//     umbrella_type: "Radio umbrella",
//     color: "yellow",
//     cost: 24,
//   });
//   let instance2 = new umbrella({
//     umbrella_type: "fan umbrella",
//     color: "black",
//     cost: 25,
//   });
//   let instance3 = new umbrella({
//     umbrella_type: "bluetooth umbrella",
//     color: "blue",
//     cost: 26,
//   });
//   instance1.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log("First object saved to atlas");
//   });
//   instance2.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log("Second object saved to atlas");
//   });
//   instance3.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log("Third object saved to atlas");
//   });
// } 


 
// let reseed = true; 
// if (reseed) { recreateDB();} 



// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(require('express-session')({ 
//   secret: 'keyboard cat', 
//   resave: false, 
//   saveUninitialized: false 
// })); 
// app.use(passport.initialize()); 
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/umbrella", umbrellaRouter);
// app.use("/addmods", addmodsRouter);
// app.use("/selector", selectorRouter);
// app.use("/", resourceRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// const connectionString =  
// process.env.MONGO_CON 
// mongoose = require('mongoose'); 
// mongoose.connect(connectionString,  
// {useNewUrlParser: true, 
// useUnifiedTopology: true}); 
// var db = mongoose.connection; 
 
// //Bind connection to error event  
// db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
// db.once("open", function(){ 
//  console.log("Connection to DB succeeded")}); 


// module.exports = app;


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var umbrellarouter = require('./routes/umbrella');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var Account =require('./models/account');
var umbrella = require("./models/umbrella");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }));
  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
   }));
   app.use(passport.initialize());
   app.use(passport.session());
   app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/umbrella', umbrellarouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use("/", resourceRouter);
// app.use('/resource',resourceRouter);
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(express.static(path.join(__dirname, 'public')));


 // passport config
// Use the existing connection
// The Account mode

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await umbrella.deleteMany();
let instance1 = new umbrella({
  umbrella_type: "Mysore umbrella",
  color: 'blue',
  cost: 1897
  });
instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

let instance2 = new umbrella({
  umbrella_type: "Buckingham umbrella",
  color: 'black',
  cost: 1703
});
instance2.save(function (err, doc) {
  if (err) return console.error(err);
  console.log("Second object saved")
});
let instance3 = new umbrella({
  umbrella_type: "Winter umbrella",
  color: 'blkj',
  cost: 1792
});
instance3.save(function (err, doc) {
  if (err) return console.error(err);
  console.log("Third object saved")
});
}
let reseed = true;
if (reseed) { recreateDB();}


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
    console.log("Connection to DB succeeded")
});