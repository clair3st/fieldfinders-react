import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";



console.log('app')
const root = createRoot(document.getElementById("root"));

root.render(
    <App />
);