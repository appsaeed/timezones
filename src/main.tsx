import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { getTheme, isDark } from "utilies/theme";
import settings from "./app/settings";
import "./index.css";
import Page from "./pages";
import store from "./redux/store";

import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() { },
  onOfflineReady() { },
  immediate: true
})

let themeClass = isDark ? "dark" : "light";
if (getTheme(settings.theme_key)) {
  themeClass = getTheme(settings.theme_key);
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
