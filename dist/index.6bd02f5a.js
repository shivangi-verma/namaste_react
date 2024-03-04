const root = ReactDOM.createRoot(document.getElementById("root"));
const x = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, // to create more than one children i.e sibling we need to pass an array
[
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2")
]));
root.render(x) // const heading = React.createElement(
 //     'h1',
 //     { id: 'heading' },
 //     "Hello world from React"
 // );
 // React.createElement takes three arguments tagname, object(we can provide attributes here), content to put inside the tag
 // console.log("head", heading);
 // root.render(heading);
;

//# sourceMappingURL=index.6bd02f5a.js.map
