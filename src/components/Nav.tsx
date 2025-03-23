import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

export default function Nav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 px-7 py-3 rounded-full bg-black/30 backdrop-blur-md w-max">
      <Link href="/" className="p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition active:bg-[var(--color-primary)] active:text-[var(--color-bg)]">
        <AiOutlineHome />
      </Link>
      <Link href="/" className="p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition active:bg-[var(--color-primary)] active:text-[var(--color-bg)]">
        <AiOutlineUser />
      </Link>
      <Link href="/" className="p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition active:bg-[var(--color-primary)] active:text-[var(--color-bg)]">
        <BiBook />
      </Link>
      <Link href="/" className="p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition active:bg-[var(--color-primary)] active:text-[var(--color-bg)]">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}