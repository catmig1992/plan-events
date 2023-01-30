// DEPENDENCIES
const express = require("express");
const app = express();
const methodOverride = require("method-override");

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

// Breads
const eventsController = require("./controllers/events_controller.js");
app.use("/events", eventsController);

// LISTEN
app.listen(PORT, () => {
  console.log(`connected on port: ${PORT}`);
});

module.exports = app;