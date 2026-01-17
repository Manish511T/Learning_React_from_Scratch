import React from "react";
import ReactDOM from "react-dom/client"

// React Element(core)
// React.createElemet => ReactElement(JS object) => HTML Element(render)
const heading = React.createElement("h1", {id:"heading"}, "Hello World");
console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) -> PARCEL ->  Babel
//JSX =>Babel transpiles to => React.createElemet => ReactElement(JS object) => HTML Element(render)
const jsxHeading = <h1 className="head" >Namaste React using JSX</h1>

// () for more than one line of JSX
// const jsxHeading = (<h1 
// className="head" >
// Namaste React using JSX</h1>)

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);