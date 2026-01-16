import React from "react";
import ReactDOM from "react-dom/client"


/**
 * <div id="parent">
 *    <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "Hello "), React.createElement("h2", {}, "I'm h2 tag")]
        ),
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
        )
    ]
)

// above code is hard to read
// that's why JSX introduced


// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello React js"
// );

// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render method convert object into html and put into browser





/*

Note: is react library or jsx
It can work independently in a small portion of your app as well, it doesn't a full fledged framework.

*/