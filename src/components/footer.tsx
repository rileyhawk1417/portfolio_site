import Link from "next/link";

const today = new Date();
export const Footer = () => {
  return (
    <div className='footer footer-center'>
      <div className="flex flex-row">
        <span>&copy; {today.getFullYear()}</span>
        <span>
          <Link href='/' className="hover:opacity-80">
            all rights reserved by rileyhawk1417
          </Link>
        </span>
      </div>
      <span className="flex flex-row">Built with <Link href='https://nextjs.org'>NextJS</Link></span>
    </div>
  )
}
