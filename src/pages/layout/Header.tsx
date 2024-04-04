import { useEffect, useState } from "react";

import { setThemeStore } from "appmon";
import { useApp } from "../../app/AppProvidor";
import settings from "../../app/settings";
import { cn } from "../../app/utiles";
import countries from "../../assets/countries.json";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";
import Moon from "../../components/Moon";
import Sun from "../../components/Sun";
import BrandLogo from "./BrandLogo";

export default function Header() {
    const [fixed, setFixed] = useState(false);
    const { locale, setLocale } = useApp();


    useEffect(() => {
        function scrollToFixed() {
            if (document.documentElement.scrollTop > 100) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        }

        scrollToFixed();

        //page scroll event fire
        window.addEventListener("scroll", scrollToFixed);

        return () => {
            //clear scoll event listener
            window.removeEventListener("scroll", scrollToFixed);
        };
    }, []);

    const updateLang = (locale: string) => {
        if (locale) {
            localStorage.setItem('tz_locale', locale);
            setLocale(locale)
        }
    }

    const lang = countries.find(i => i.default_locale === locale);

    return (
        <header
            id="header"
            className={cn(
                `transition-all z-[999] top-0 left-0 right-0 w-full bg-slate-200 dark:bg-slate-800 shadow-2xl  fixed py-4`,
                {
                    "py-2.5": fixed,
                }
            )}
        >
            <nav className={"w-full px-8"}>
                <div className="w-full flex flex-wrap items-center justify-between mx-auto">
                    <BrandLogo logo={settings.logo} href={settings.url} />
                    <div className="flex items-center">
                        <div className="relative cursor-pointer mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <Dropdown head={
                                <>{lang?.emoji + ' ' + lang?.name}</>
                            }>
                                {countries.map((lang, i) => (
                                    <DropdownItem key={i}
                                        onClick={() => updateLang(lang.default_locale)} className="w-48s">
                                        <div className="flex gap-2">
                                            <div className="w-6">{lang.emoji}</div>
                                            <div className="w-36">{lang.name}</div>
                                        </div>
                                    </DropdownItem>
                                ))}
                            </Dropdown>
                        </div>
                    </div>

                    <SwtichTheme />
                </div>
            </nav>
        </header>
    );
}

export function SwtichTheme() {
    const [dark, setDark] = useState(settings.theme === "dark");

    const handleTheme = () => {
        const theme = dark ? "light" : "dark";
        setDark(!dark);
        setThemeStore(theme, settings.theme_key);
        if (theme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div
            onClick={handleTheme}
            className={`p-2 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer text-2xl rounded-full`}
        >
            {dark ? <Moon /> : <Sun />}
        </div>
    );
}
