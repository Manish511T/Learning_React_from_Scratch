import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>(
    <h1 className="heading">Namaste React using JSX</h1>
)

// React Funtional Componenet
const HeadingComponent = () => (
    <div>
      <Title />
      <h1 className="heading">Hello React Funtional Component</h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
