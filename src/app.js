var app = {
    title: "Decision Maker App",
    subtitle: "Make your choices",
    options: ['One', 'Two']
};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Emre',
    age: 33,
    location: "İzmir"
};

function getLocation(location){
    if(location)
        return <p>Location: {location}</p>;
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);