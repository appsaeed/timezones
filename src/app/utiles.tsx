import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import settings from "./settings";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const worker_path = settings.url + '/push.js';

export function errorToString(error: any): string {

    if (Array.isArray(error)) {
        return String(error.join(' '))
    } else if (typeof error === 'object') {
        return String(JSON.stringify(error))
    }

    return String(error)

}