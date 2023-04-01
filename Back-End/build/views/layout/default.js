"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function Default(html) {
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("title", null, html.title || "Default"),
            React.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css", integrity: "sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==", crossOrigin: "anonymous" }),
            React.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css", integrity: "sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==", crossOrigin: "anonymous" }),
            React.createElement("link", { rel: "stylesheet", href: "/main.css" })),
        React.createElement("body", null,
            React.createElement("div", { className: "wrapper" },
                React.createElement("header", null,
                    React.createElement("h1", null,
                        React.createElement("a", { href: "/florals" }, "Sparkley Event Planner"))),
                React.createElement("div", { className: "container" }, html.children)))));
}
module.exports = Default;
