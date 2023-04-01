"use strict";
const React = require("react");
const Default = require("./layout/default");
function Show({ floral: floral }) {
    return (React.createElement(Default, null,
        React.createElement("h3", null, floral.flower),
        React.createElement("p", null,
            "and it is",
            floral.inSeason ? React.createElement("span", null, " ") : React.createElement("span", null, " is NOT "),
            "in season."),
        React.createElement("img", { src: floral.image, alt: floral.flower }),
        React.createElement("a", { href: `/florals/${floral.id}/edit` },
            React.createElement("button", null, "Edit")),
        React.createElement("form", { action: `florals/${floral.id}?_method=DELETE`, method: "POST" },
            React.createElement("input", { type: "submit", value: "DELETE" })),
        React.createElement("li", null,
            React.createElement("a", { href: "/florals" }, "Go Back To The DataBase"))));
}
module.exports = Show;
