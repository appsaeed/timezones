import { getTheme, unSlash } from "utilies";
import logo from '/logo.png';

const basename = unSlash(import.meta.env.VITE_BASENAME || "");

function makeHomeUrl() {
    if (basename) {
        return location.origin + "/" + basename;
    }
    return location.origin
}

function makeScope() {
    return '/' + basename + '/';
}

const settings = {

    name: import.meta.env.VITE_NAME || "Appsaeed",

    dev: import.meta.env.DEV,

    logo,

    basename: basename,

    url: makeHomeUrl(),

    scope: makeScope(),

    theme_key: import.meta.env.VITE_THEME_STORAGE || 'theme',

    theme: getTheme(import.meta.env.VITE_THEME_STORAGE),
};

export type Settings = typeof settings;
export default settings