"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Default = require("./layout/default");
function New({ floralStyle }) {
    return (React.createElement(Default, null,
        React.createElement("h2", null, "Add A Flower"),
        React.createElement("form", { action: "/floral", method: "POST" },
            React.createElement("label", { htmlFor: "name" }, "Name"),
            React.createElement("input", { type: "text", name: "name", id: "name", required: true }),
            React.createElement("label", { htmlFor: "floralStyle" }, "Floral Style"),
            React.createElement("select", { name: "floralStyle", id: "floralStyle" }, floralStyle.map((floralStyle) => {
                return (React.createElement("option", { value: floralStyle.id, key: floralStyle.id }, floralStyle.name));
            })),
            React.createElement("label", { htmlFor: "image" }, "Image"),
            React.createElement("input", { type: "text", name: "image", id: "image" }),
            React.createElement("label", { htmlFor: "inSeason" }, "In Season"),
            React.createElement("input", { type: "checkbox", name: "inSeason", id: "inSeason", defaultChecked: true }),
            React.createElement("br", null),
            React.createElement("input", { type: "submit" }),
            React.createElement("div", { className: "backButton" },
                React.createElement("a", { href: "/florals" },
                    React.createElement("button", null, "Go back to the DataBase"))))));
}
module.exports = New;
