"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Default = require("./layout/default");
function Index({ floral: floral, title }) {
    return (React.createElement(Default, { title: title },
        React.createElement("h2", null, "Vendor DataBase Page"),
        React.createElement("h3", null, "Florals"),
        React.createElement("div", { className: "newButton" },
            React.createElement("a", { href: "/floral/new" },
                React.createElement("button", null, "Add New Flower"))),
        React.createElement("ul", null, floral.map((floral, index) => {
            //{console.log(floral)}
            return (React.createElement("li", { key: index },
                React.createElement("a", { href: `/florals/${floral.id}` }, floral.flower)));
        }))));
}
module.exports = Index;
