"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Default = require("./layout/default");
let floral;
function Edit({ floral: floral, floralStyle }) {
    return (React.createElement(Default, null,
        React.createElement("h2", null, "Edit a Flower"),
        React.createElement("form", { action: `/floral/${floral.id}?_method=PUT`, method: "POST" },
            React.createElement("label", { htmlFor: "name" }, "Name"),
            React.createElement("input", { type: "text", name: "name", id: "name", required: true, defaultValue: floral.flower }),
            React.createElement("label", { htmlFor: "image" }, "Image"),
            React.createElement("input", { type: "text", name: "image", id: "image", defaultValue: floral.image }),
            React.createElement("label", { htmlFor: "floralStyle" }, "Floral Style"),
            React.createElement("select", { name: "floral style", id: "floral style", defaultValue: floral.floralStyle }, floralStyle.map((floralStyle) => {
                return (React.createElement("option", { value: floral.id, key: floral.id }, floralStyle.type));
            })),
            React.createElement("label", { htmlFor: "inSeason" }, "in Season?"),
            React.createElement("input", { type: "checkbox", name: "inSeason", id: "inSeason", defaultChecked: floral.inSeason }),
            React.createElement("br", null),
            React.createElement("input", { type: "submit" }))));
}
module.exports = Edit;
