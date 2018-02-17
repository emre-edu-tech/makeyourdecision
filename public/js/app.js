"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Decision Maker Application"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Emre Kay\u0131k\xE7\u0131lar"
    ),
    React.createElement(
        "p",
        null,
        "Age: 33"
    ),
    React.createElement(
        "p",
        null,
        "Location: \u0130zmir"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
