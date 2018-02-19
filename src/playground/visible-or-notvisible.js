let visibility = false;
const toggleDetails = () => {
    // check the boolean value of visibility variable
    visibility = !visibility;
    renderApp();
    // console.log("clicked");
};
const appRoot = document.getElementById("app");
const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="toggleButton" onClick={toggleDetails}>
                {visibility ? "Hide Details" : "Show Details"}
            </button>
            {visibility && (
                <div>
                    <p>These are details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();