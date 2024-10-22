
import { combineReducers } from "redux";
import languages from '../../public/assets/languages.json';
import { getLocale, saveLocale } from "../app/utiles";
import { UPDATE_LOCALE } from "./actions";

type Action = {
    payload: Locale;
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
                locale: action.payload
            }

        default:
            return state;
    }
}

export default combineReducers({
    application,
});