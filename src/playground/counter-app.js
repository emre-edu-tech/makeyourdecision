//// ------------------------------------------
/// Counter App
//// ------------------------------------------
let count = 0;
const addOne = () => {
    count+=1;
    // console.log("addOne", count);
    renderCounterApp();
};
const minusOne = () => {
    count-=1;
    // console.log("minusOne", count);
    renderCounterApp();
};
const reset = () => {
    count = 0;
    // console.log("reset", count);
    renderCounterApp();
};

const renderCounterApp = () => {
    const template3 = (
        <div>
            <h1>Count: {count}</h1>
            <button id="add_button" className="button" onClick={addOne}>+1</button>
            <button className="minus_button" onClick={minusOne}>-1</button>
            <button className="reset_button" onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
};

const appRoot = document.getElementById("app");
renderCounterApp();