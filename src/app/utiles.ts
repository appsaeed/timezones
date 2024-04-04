import { unslash } from "appmon";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const base_url = home_url;

//create base url by using window location object
export function home_url(paths?: string[] | string) {
    const base_url = location.protocol + '//' + location.host;
    if (Array.isArray(paths)) {
        return base_url + '/' + paths.map(unslash).join('/');
    } else if (paths && typeof paths === 'string') {
        return base_url + '/' + unslash(paths);
    } else {
        return base_url;
    }
}
