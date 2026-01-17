import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span className="elem">Component Composition -</span>

// react element || title is a normal js variable
const title = (
    <h1 className="heading">{elem} Namaste React using JSX</h1>
)

const number = 100;

const HeadingComponent = () => (
    <div>
        {title}
      <h1 className="headingComponent">Hello React Funtional Component</h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); // same <HeadingComponent> <HeadingComponent /> 
