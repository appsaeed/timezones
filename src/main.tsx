import { isDark } from "appmon/detection";
import { getThemeStore } from "appmon/storage";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./pages";

let themeClass = isDark() ? "dark" : "light";
if (getThemeStore()) {
  themeClass = getThemeStore();
}
document.documentElement.classList.add(themeClass);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
