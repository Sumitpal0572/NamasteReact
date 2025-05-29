
// create the nested element using React 

// <div id="parent">
//     <div id="child">
//         <h1>Hey I"m H1</h1>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }),
    React.createElement("h1", {}, "Hey I'm H1"),
    React.createElement("h2", {}, "Hey I'm H2")

],
    [
        React.createElement("div", { id: "child2" }),
        React.createElement("h1", {}, "Hey I'm H1"),
        React.createElement("h2", {}, "Hey I'm H2")

    ]

)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);