"use strict";

var app = {
    title: "Decision Maker App",
    subtitle: "Make your choices",
    options: ['One', 'Two']
};

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
/// ----------------------------
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
//// ------------------------------------------
var count = 0;
var addOne = function addOne() {
    count += 1;
    console.log(count);
};
var minusOne = function minusOne() {
    count -= 1;
    console.log(count);
};
var setupReset = function setupReset() {
    count = 0;
    console.log(count);
};

var template3 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { id: "add_button", className: "button", onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { className: "minus_button", onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { className: "reset_button", onClick: setupReset },
        "Reset"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template3, appRoot);
