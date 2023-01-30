const express = require("express");
const events = express.Router();
const Event = require("../models/event.js");

// INDEX
events.get("/", (req, res) => {
  // res.render("../Front-End/views/index");
  res.send(Event);
});

// NEW
events.get("/new", (req, res) => {
  res.redirect("/events");
  //template
});

// EDIT
events.get("/:id/edit", (req, res) => {
  res.redirect("/events");
  //template
});

// SHOW
events.get("/:id", (req, res) => {
  res.redirect("/events");
  //template
});

// CREATE
events.post("/", (req, res) => {
  res.redirect("/events");
  //template
});

// UPDATE
events.put("/:id", (req, res) => {
  res.redirect("/events");
  //template
});

// DELETE
events.delete("/:id", (req, res) => {
  res.status(303);
  //template
});

module.exports = events;