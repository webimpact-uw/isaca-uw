
import Link from 'next/link';

const Button = (props) => {
    return <Link
        href={props.link}
        className="mt-6 mr-4 inline-flex items-center px-3 py-2 border border-[#619DC5] text-[#0C2A64] font-medium rounded hover:bg-[#D4EAF1]"
        >
        {props.description}

        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Link>
};

export default Button;

