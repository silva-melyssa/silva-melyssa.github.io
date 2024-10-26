'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export function NavbarLink({href, children}) {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <li className="relative py-2 px-3 gap-x-1 text-base inline-flex flex-col">
            <Link
                className={`${
                    isActive ? "text-teal-500" : ""
                } hover:text-teal-500 dark:hover:text-teal-400 `}
                href={href}
            >
                {children}
            </Link>
            {isActive && (
                <span
                    className="absolute left-1/2 bottom-0 dark:-bottom-0.5 -translate-x-1/2 w-[62px] h-[1px] dark:h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
            )}
        </li>
    );
}

export function Header() {
    return (
        <header className={'px-12 pt-6 pb-2 flex'}>
            <nav
                className="hidden bg-background sm:flex items-right flex-row items-center px-3 h-10 ring-1 dark:ring-2 ring-border shadow-lg rounded-full mx-auto">
                <NavbarLink href={'/'}>Home</NavbarLink>
                <NavbarLink href={'/about'}>About</NavbarLink>
                <NavbarLink href={'/projects'}>Projects</NavbarLink>
                <NavbarLink href={'/uses'}>Uses</NavbarLink>
            </nav>
        </header>
    );
}
