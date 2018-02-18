const app = {
    title: "Decision Maker App",
    subtitle: "Make your choices",
    options: ['One', 'Two']
};

const template = (
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
/// ----------------------------
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
//// ------------------------------------------
let count = 0;
const addOne = () => {
    count+=1;
    console.log(count);
};
const minusOne = () => {
    count-=1;
    console.log(count);
};
const setupReset = () => {
    count = 0;
    console.log(count);
};

const template3 = (
    <div>
        <h1>Count: {count}</h1>
        <button id="add_button" className="button" onClick={addOne}>+1</button>
        <button className="minus_button" onClick={minusOne}>-1</button>
        <button className="reset_button" onClick={setupReset}>Reset</button>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template3, appRoot);