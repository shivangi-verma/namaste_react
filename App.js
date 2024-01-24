{/* <div class="parent">
    <div class="child">
        <h1>I am h1</h1>
        <h1>I am h2</h1>
    </div>
</div> */}
const root = ReactDOM.createRoot(document.getElementById('root'));

const x = React.createElement(
    "div",
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        // to create more than one children i.e sibling we need to pass an array
        0[React.createElement('h1', {}, "I am h1"), React.createElement('h2', {}, "I am h2")]
    )
)

root.render(x)

// const heading = React.createElement(
//     'h1',
//     { id: 'heading' },
//     "Hello world from React"
// );
// React.createElement takes three arguments tagname, object(we can provide attributes here), content to put inside the tag
// console.log("head", heading);
// root.render(heading);