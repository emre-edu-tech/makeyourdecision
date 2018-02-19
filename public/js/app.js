"use strict";

var visibility = false;
var toggleDetails = function toggleDetails() {
    // check the boolean value of visibility variable
    visibility = !visibility;
    renderApp();
    // console.log("clicked");
};
var appRoot = document.getElementById("app");
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { id: "toggleButton", onClick: toggleDetails },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "These are details"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
