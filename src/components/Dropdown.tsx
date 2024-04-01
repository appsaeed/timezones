import { useEffect, useRef, useState } from "react";
import { cn } from "../app/utiles";


interface DropdownProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    head?: React.ReactNode;
}
export default function Dropdown({ header, head, ...props }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Use a more descriptive ref name

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
            return false;
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, [open]);

    function handleMenuOpen() {
        setOpen((p) => !p)
    }

    return (
        <>
            <div ref={dropdownRef} {...props} className={cn("w-full h-full m-0 p-0 border-0 outline-none text-slate-600 dark:text-slate-200", props.className)} onClick={handleMenuOpen}>
                {head}
            </div>
            <div
                className={cn('z-50  md:ml-6 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 transition-all duration-100 absolute right-0 top-full opacity-0 invisible translate-x-[60px] translate-y-0 p-2 pt-4',
                    { "opacity-100 visible translate-x-0": open })}

            >

                {header && header}

                <ul className="py-2 max-h-80 overflow-y-scroll">
                    {props.children}
                </ul>
            </div>
        </>)
}




