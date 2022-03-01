import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const body = document.querySelector("body");
const mountNode = document.createElement("div");
body.appendChild(mountNode);

ReactDOM.render(<App />, mountNode);
