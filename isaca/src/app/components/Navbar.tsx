"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const isActive = (path: string) => pathname === path;
  const toggleNav = () => setNavOpen(open => !open);

  return (
    <nav className='relative flex justify-between items-center py-4 border-b border-lighter-gray'>
      <Link href='/'>
        <img src='logos/isaca-horizontal-main.png' alt="ISACA logo" className='ml-7 w-40' />
      </Link>

      <section className="flex justify-end">
        {/** For mobile screens */}
        <div className="sm:hidden mr-7">
          <button onClick={toggleNav} aria-label="Toggle menu" className="cursor-pointer">
            {navOpen
              ? <img src="icons/close.png" alt="Close menu" className="h-10" />
              : <img src="icons/menu.png" alt="Open menu" className="h-10" />
            }
          </button>
        </div>

        {/** For desktop screens */}
        <ul className="hidden sm:flex items-center text-navy-blue text-l font-medium font-mono">
          <li className={`mr-5 underline-offset-3 ${isActive("/") ? "underline" : "hover:underline"}`}><Link href='/'>Home</Link></li>
          <li className={`mr-5 underline-offset-3 ${isActive("/about") ? "underline" : "hover:underline"}`}><Link href='/about'>About</Link></li>
          <li className={`underline-offset-3 ${isActive("/events") ? "underline" : "hover:underline"}`}><Link href='/events'>Events</Link></li>
        </ul>
      </section>

      {navOpen && (
        <ul className="absolute top-full right-0 bg-[#F2F2F7] w-40 shadow-lg flex flex-col sm:hidden text-navy-blue font-mono">
          <li className={`${isActive("/") ? "bg-[#d4d4e3]" : "hover:bg-gray-50"} px-6 py-4`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive("/about") ? "bg-[#d4d4e3]" : "hover:bg-gray-50"} px-6 py-4`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${isActive("/events") ? "bg-[#d4d4e3]" : "hover:bg-gray-50"} px-6 py-4`}>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
