import React, { FC } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Cart from "./components/Cart/Cart";

const App = () => (
  <div className="container">
    <h1>Carrinho</h1>
    <Cart />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
