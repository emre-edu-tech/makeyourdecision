"use strict";

/// Decision Maker Application (Main Application)
// ---------------------------------------
// app javascript object
var app = {
    title: "Decision Maker App",
    subtitle: "Make your choices",
    options: []
};

var appRoot = document.getElementById("app");

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    // console.log("form submitted");
    // get the value of option input
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        // console.log(app.options);
        renderDecisionApp();
    }
};

var onRemoveOptions = function onRemoveOptions() {
    // set the array to a new empty array
    // app.options = [];
    app.options.length = 0;
    renderDecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    // console.log(randomNum);
};

var numbers = [55, 101, 1000];

var renderDecisionApp = function renderDecisionApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveOptions },
            "Remove All"
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number: ",
                number
            );
        }),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderDecisionApp();
// ---------------------------------------
// User Application
var user = {
    name: 'Emre',
    age: 33,
    location: "İzmir"
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
// call this if you want to bind template2 to the appRoot
// ReactDOM.render(template2, appRoot);
