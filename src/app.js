var template = (
    <div>
        <h1>Decision Maker Application</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Emre Kayıkçılar</h1>
        <p>Age: 33</p>
        <p>Location: İzmir</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);