/// Decision Maker Application (Main Application)
// ---------------------------------------
// app javascript object
const app = {
    title: "Decision Maker App",
    subtitle: "Make your choices",
    options: []
};

const appRoot = document.getElementById("app");

const onFormSubmit = (event) => {
    event.preventDefault();

    // console.log("form submitted");
    // get the value of option input
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        // console.log(app.options);
        renderDecisionApp();
    }
};

const onRemoveOptions = () => {
    // set the array to a new empty array
    // app.options = [];
    app.options.length = 0;
    renderDecisionApp();
};

const numbers = [55, 101, 1000];

const renderDecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveOptions}>Remove All</button>
            {
                numbers.map((number) => <p key={number}>Number: {number}</p>)
            }
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderDecisionApp();
// ---------------------------------------
// User Application
const user = {
    name: 'Emre',
    age: 33,
    location: "İzmir"
};

function getLocation(location){
    if(location)
        return <p>Location: {location}</p>;
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
// call this if you want to bind template2 to the appRoot
// ReactDOM.render(template2, appRoot);