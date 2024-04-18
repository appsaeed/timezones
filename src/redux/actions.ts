export const UPDATE_LOCALE = 'application/update_locale';

export function updateLocale<T>(payload: T) {
    return {
        type: UPDATE_LOCALE,
        payload,
    }
}