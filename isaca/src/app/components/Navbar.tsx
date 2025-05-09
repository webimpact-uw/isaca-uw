import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex justify-between py-4 border-solid border-b-1 border-lighter-gray'>
      <Link href='/'>
        <img src='logos/logo.png' alt="ISACA logo" className='ml-7 w-40' />
      </Link>

      <ul className="flex justify-end items-center text-navy-blue">
          <li className="mr-7"><Link href='/'>Home</Link></li>
          <li className="mr-7"><Link href='/about'>About</Link></li>
          <li className="mr-7"><Link href='/events'>Events</Link></li>
      </ul>
    </nav>
  );
}