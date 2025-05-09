import Link from "next/link";


export default function Footer() {
    return (
      <div className='border-t-1 border-solid border-lighter-gray text-navy-blue'>
        <div className="m-3 flex justify-between">
            <ul className="flex items-center">
                <li className='ml-4 text-sm font-bold' >© ISACA UW</li>
                <li className='ml-4 text-sm text-nowrap'>Website built by Web Impact </li>
            </ul>


            <ul className="flex justify-end items-center">
                <li className="mr-4"><Link href='./'><img src='instagram.png' className='ml-3 w-8'></img></Link></li>
                <li className="mr-4"><Link href='./about'> <img src='linked.png' className='ml-3 w-8'></img> </Link></li>
                <li className="mr-4"><Link href='./events'><img src='mail.png' className='ml-3 w-8'></img></Link></li>
            </ul>
        </div>

      </div>
    );
}