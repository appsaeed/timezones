import { isDark } from "appmon/detection";
import { getThemeStore } from "appmon/storage";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import settings from "./app/settings";
import "./index.css";
import Page from "./pages";
import store from "./redux/store";

let themeClass = isDark() ? "dark" : "light";
if (getThemeStore(settings.theme_key)) {
  themeClass = getThemeStore(settings.theme_key);
}
document.documentElement.classList.add(themeClass);
//selector div
const main_dom = import.meta.env.VITE_MAIN_DOM || '%VITE_MAIN_DOM%'
ReactDOM.createRoot(document.getElementById(main_dom)!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>
);
