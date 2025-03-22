import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

export default function Nav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 px-7 py-3 rounded-full bg-black/30 backdrop-blur-md w-max">
      <Link href="/" className="p-3.5 rounded-full text-lg text-[var(--color-light)] flex bg-transparent hover:bg-black/30">
        <AiOutlineHome />
      </Link>
      <Link href="/about" className="p-3.5 rounded-full text-lg text-[var(--color-light)] flex bg-transparent hover:bg-black/30">
        <AiOutlineUser />
      </Link>
      <Link href="/project" className="p-3.5 rounded-full text-lg text-[var(--color-light)] flex bg-transparent hover:bg-black/30">
        <BiBook />
      </Link>
      <Link href="/contact" className="p-3.5 rounded-full text-lg text-[var(--color-light)] flex bg-transparent hover:bg-black/30">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}