// DEPENDENCIES
const express = require("express");
const app = express();
const methodOverride = require("method-override");


//testing with mongodb
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

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// breads  --- in our case - event index
const eventsController = require("./controllers/events_controller.js");
app.use("/events", eventsController);








// 404 Page
app.get('*', (req, res) => {
  res.send('404')
});

// LISTEN
app.listen(PORT, () => {
  console.log(`connected on port: ${PORT}`);
});

module.exports = app;