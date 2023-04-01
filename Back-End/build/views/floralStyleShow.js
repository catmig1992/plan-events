"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Default = require("./layouts/Default");
function Show({ floralStyle }) {
    return (React.createElement(Default, null,
        React.createElement("h3", null, floralStyle.type),
        React.createElement("ul", null, floralStyle.florals.map((floral) => {
            return React.createElement("li", { key: floral.id }, floral.flower_type);
        })),
        React.createElement("form", { action: `/florals/${floral.id}?_method=DELETE`, method: "POST" },
            React.createElement("input", { type: "submit", value: "DELETE" }))));
}
module.exports = Show;
