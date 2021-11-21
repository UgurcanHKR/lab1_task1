// importing "react" and "react-dom" modules
import React from "react"
import ReactDOM from "react-dom"

// importing Measurements output object from node.js file
import Measurements from "./components/Measurements";

// To render Measurement element into a root DOM node
ReactDOM.render(
    <Measurements />,
    document.getElementById("root")
);

// As a note, in index.html file, this "root" DOM is called
// because React DOM manages all components in this "root"