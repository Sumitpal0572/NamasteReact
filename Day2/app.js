import React from "react";
import ReactDom from "react-dom/client";

const element = React.createElement("div", { className: title },
    React.createContext("h1", {}, "This is H1"),
    React.createContext("h2", {}, "This is H2"),
    React.createContext("h3", {}, "This is H3"),
    React.createContext("h4", {}, "This is H4"),
);

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(element);


// using jsx
const elementJSX = (
  <div className="title">
    <h1>This is H1</h1>
    <h2>This is H2</h2>
    <h3>This is H3</h3>
  </div>
);


// Functional component

function InnerComponent() {
  return <p>I am inside another component!</p>;
}

function OuterComponent() {
  return (
    <div className="outer">
      <h1>Outer Component</h1>
      <InnerComponent /> {/* Composition */}
    </div>
  );
}
