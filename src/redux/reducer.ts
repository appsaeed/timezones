
import { combineReducers } from "redux";
import { getLocale, saveLocale } from "../app/utiles";
import languages from '../assets/languages.json';
import { UPDATE_LOCALE } from "./actions";

type Action = {
    payload: any;
    type: string,
}
const defautlLocale = languages[0];
export type Locale = typeof defautlLocale;

const initState = {
    locale: getLocale() || defautlLocale
};

export function application(state = initState, action: Action) {

    switch (action.type) {

        case UPDATE_LOCALE:
            saveLocale(action.payload)
            return {
                ...state,
                locale: action.payload as Locale
            }

        default:
            return state;
    }
}

export default combineReducers({
    application,
});