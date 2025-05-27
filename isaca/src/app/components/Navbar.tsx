"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className='flex justify-between items-center py-4 border-solid border-b-1 border-lighter-gray'>
      <section>
        <Link href='/'>
          <img src='logos/isaca-horizontal-main.png' alt="ISACA logo" className='ml-7 w-40' />
        </Link>
      </section>

      <section className="flex justify-end">
        {/** For mobile screens */}
        <div className="sm:hidden mr-7">
          <img src='icons/menu.png' alt='menu icon' className='h-[40px]' id="menu-open"></img>
          <img src='icons/close.png' alt='close icon' className='h-[40px]' id="menu-close"></img>
        </div>

        {/** For desktop screens */}
        <div className='hidden sm:block'>
          <ul className="flex items-center mr-7 text-navy-blue text-l font-medium font-mono">
            <li className={`mr-5 underline-offset-3 ${isActive("/") ? "underline" : "hover:underline"}`}><Link href='/'>Home</Link></li>
            <li className={`mr-5 underline-offset-3 ${isActive("/about") ? "underline" : "hover:underline"}`}><Link href='/about'>About</Link></li>
            <li className={`underline-offset-3 ${isActive("/events") ? "underline" : "hover:underline"}`}><Link href='/events'>Events</Link></li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

const navOpen = false;

// function openNav () {
//   const menuOpen = document.getElementById("menu-open");
//   const menuClose = document.getElementById("menu-close");

//   if (navOpen == false) {
//     menuOpen.addEventListener("click")
//   }
// }