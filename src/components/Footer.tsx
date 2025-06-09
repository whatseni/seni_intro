import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] py-12 text-center text-xl mt-28">
      <Link href="/" className="text-4xl font-medium mb-8 inline-block text-[var(--color-bg)] footer__logo">
        SEEUN
      </Link>

      <ul className="flex flex-wrap justify-center gap-[2rem] mx-auto mb-[3rem]">
        <li>
          <Link href="#home" className="text-[var(--color-bg)]">Home</Link>
        </li>
        <li>
          <Link href="#about" className="text-[var(--color-bg)]">ABOUT</Link>
        </li>
        <li>
          <Link href="#skills" className="text-[var(--color-bg)]">SKILL</Link>
        </li>
        <li>
          <Link href="#project" className="text-[var(--color-bg)]">PROJECT</Link>
        </li>
        <li>
          <Link href="#contact" className="text-[var(--color-bg)]">CONTACT</Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16 sm:mb-10">
        <Link href="https://github.com/whatseni" className="bg-[var(--color-bg)] text-[var(--color-bg-variant)] p-3 rounded-lg flex border border-transparent hover:bg-transparent hover:text-[var(--color-bg)] hover:border-[var(--color-bg)]"><FaGithub /></Link>
        <Link href="https://velog.io/@sodgyu/posts" className="bg-[var(--color-bg)] text-[var(--color-bg-variant)] p-3 rounded-lg flex border border-transparent hover:bg-transparent hover:text-[var(--color-bg)] hover:border-[var(--color-bg)]"><SiVelog /></Link>
      </div>

      <div className="mb-16 text-[var(--color-bg)] sm:mb-10">
        <small>&copy; SEEUN Portfolio.</small>
      </div>
    </footer>
  )
}