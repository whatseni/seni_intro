"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 px-7 py-3 rounded-full bg-black/30 backdrop-blur-md w-max">
      <Link href="#home" className={`p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition ${activeNav === "#home" ? "active" : ""}`}
        onClick={() => setActiveNav("#home")}
        >
        <AiOutlineHome />
      </Link>
      <Link href="#about" className={`p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition 
      ${activeNav === "#about" ? "active" : ""}`}
        onClick={() => setActiveNav("#about")}>
        <AiOutlineUser />
      </Link>
      <Link href="#skills" className={`p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition 
      ${activeNav === "#skills" ? "active" : ""}`}
        onClick={() => setActiveNav("#skills")}>
        <BiBook />
      </Link>
      <Link href="#contact" className={`p-4 rounded-full flex items-center justify-center text-[var(--color-light)] text-lg bg-transparent hover:bg-black/30 transition 
      ${activeNav === "#contact" ? "active" : ""}`}
        onClick={() => setActiveNav("#contact")}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}