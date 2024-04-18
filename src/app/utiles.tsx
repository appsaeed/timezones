import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from "../redux/reducer";
import settings from "./settings";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const worker_path = settings.url + '/push.js';


export function catchOrNull<T>(calling: () => T, callback?: (error?: any) => void) {
    try {
        if (typeof calling === 'function') return calling();
        return null;
    }
    catch (error) {
        if (callback) callback(error);
        return null;
    }
}



export function saveLocale(locale: Locale) {
    localStorage.setItem('tz_locale', JSON.stringify(locale))
}

export function getLocale(): Locale | null {
    try {
        const data = JSON.parse(localStorage.getItem('tz_locale') || '')
        return data as Locale || null;
    } catch (error) {
        return null;
    }
}