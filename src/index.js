import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.createElement("div", { id: "app" });
document.body.append(container);

const root = createRoot(container);
root.render(<App />);
