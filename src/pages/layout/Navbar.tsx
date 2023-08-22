import { getThemeStore, setThemeStore } from "appmon/storage";
import { useState } from "react";
import { Moon, Sun } from "react-feather";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img src={"./favicon-96x96.png"} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Timezone
          </span>
        </a>

        <SwtichTheme />
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Menulist name="Home" link="/" />
            <Menulist name="Contact" link="mailto:appsaeed7@gmail.com" />
            <Menulist name="About" link="https://appsaeed.github.io" />
            <Menulist name="Github" link="https://github.com/appsaeed/timezone" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function SwtichTheme() {
  const [dark, setDark] = useState(getThemeStore() === "dark");

  const handleTheme = () => {
    const theme = dark ? "light" : "dark";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(theme);
    setThemeStore(theme);
    setDark(!dark);
  };

  return (
    <div
      onClick={handleTheme}
      className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer`}
    >
      {dark ? <Moon /> : <Sun />}
    </div>
  );
}

interface MenulistProps {
  name: string;
  link?: string;
  clasName?: string;
}
export function Menulist({ name, link = "#", clasName }: MenulistProps) {
  return (
    <li>
      <a
        href={link}
        className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${clasName}`}
      >
        {name}
      </a>
    </li>
  );
}
