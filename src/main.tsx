import React from "react";
import ReactDOM from "react-dom/client";
import { getThemeStore, is_dark } from "utilies";
import { AppProvider } from "./app/AppProvidor";
import settings from "./app/settings";
import "./index.css";
import Page from "./pages";

let themeClass = is_dark ? "dark" : "light";
if (getThemeStore(settings.theme_key)) {
  themeClass = getThemeStore(settings.theme_key);
}
document.documentElement.classList.add(themeClass);
//selector div
const main_dom = import.meta.env.VITE_MAIN_DOM || '%VITE_MAIN_DOM%'
ReactDOM.createRoot(document.getElementById(main_dom)!).render(
  <React.StrictMode>
    <AppProvider>
      <Page />
    </AppProvider>
  </React.StrictMode>
);
