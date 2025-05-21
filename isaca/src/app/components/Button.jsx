import Link from 'next/link';

const Button = ({ link, description }) => (
  <Link
    href={link}
    className="
      group relative inline-flex items-center 
      mt-6 mr-4 px-3 py-2 border border-[#619DC5] 
      overflow-hidden rounded
    "
  >
    {/* 1) left-right navy background */}
    <span
      className="
        absolute inset-0 bg-[#0C2A64] 
        origin-left scale-x-0 
        transition-transform duration-200 
        group-hover:scale-x-100
      "
    />

    {/*props.description*/}
    <span
      className="
        relative flex items-center 
        text-[#0C2A64] font-medium 
        transition-colors duration-200 
        group-hover:text-white
      "
    >
      {description}
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </Link>
);

export default Button;
