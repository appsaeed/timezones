import { getThemeStore, systemTheme, unslash } from 'appmon';
import { home_url } from './utiles';
import logo from '/logo.png';

const basename = unslash(import.meta.env.VITE_BASENAME || "");

function makeScope() {
    return '/' + basename + '/';
}

const settings = {

    name: import.meta.env.VITE_NAME || "Appsaeed",

    dev: import.meta.env.DEV,

    logo,

    basename: basename,

    url: home_url(basename),

    scope: makeScope(),

    theme_key: import.meta.env.VITE_THEME_STORAGE || 'theme',

    theme: getThemeStore(import.meta.env.VITE_THEME_STORAGE) || systemTheme,
};
export default settings