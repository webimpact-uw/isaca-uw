"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className='flex justify-between py-4 border-solid border-b-1 border-lighter-gray'>
      <Link href='/'>
        <img src='logos/logo.png' alt="ISACA logo" className='ml-7 w-40' />
      </Link>

      <ul className="flex justify-end items-center text-navy-blue text-xl font-medium font-mono">
          <li className={`mr-7 underline-offset-3 ${isActive("/") ? "underline" : "hover:underline"}`}><Link href='/'>Home</Link></li>
          <li className={`mr-7 underline-offset-3 ${isActive("/about") ? "underline" : "hover:underline"}`}><Link href='/about'>About</Link></li>
          <li className={`mr-7 underline-offset-3 ${isActive("/events") ? "underline" : "hover:underline"}`}><Link href='/events'>Events</Link></li>
      </ul>
    </nav>
  );
}