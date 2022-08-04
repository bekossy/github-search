import React from "react";
import * as ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

root.render(<App />);
