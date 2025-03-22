import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <AiOutlineHome />
      </Link>
      <Link href="/about">
        <AiOutlineUser />
      </Link>
      <Link href="/project">
        <BiBook />
      </Link>
      <Link href="/contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}