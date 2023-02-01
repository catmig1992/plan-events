// DEPENDENCIES
require ( 'dotenv' ).config ( )
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');




// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
console.log('this is my port',PORT);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}
  ).catch((e) => {
    console.log("error connecting to mongoose!",e);
  });
  mongoose.connection.on("error", (e) => {
    console.log("mongo connect error!");
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));


// ROUTES
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// breads  --- in our case - event index
// const eventsController = require("./controllers/events_controller.js");
// app.use("/events", eventsController);








// 404 Page
app.get('*', (req, res) => {
  res.send('404')
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


module.exports = app;