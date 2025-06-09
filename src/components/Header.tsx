import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-screen pt-28 overflow-hidden" id="home">
      <div className="container text-center h-full relative">
        <h3 className="font-medium text-[var(--color-primary-variant)] text-2xl mb-1">Welcome to My Portfolio Page.</h3>
        <h1 className="font-semibold text-[var(--color-primary)] text-5xl mb-2">I'm Seeun</h1>
        <h3 className="font-medium text-[var(--color-primary-variant)] text-2xl">Javascript Developer</h3>
        <div className="mt-2.5 flex justify-center gap-1.5">
          <Link href="https://velog.io/@sodgyu/posts"
            className="text-[var(--color-primary)] px-5 py-3 rounded-md border border-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:border-transparent"
          >Blog</Link>
          <Link href="https://github.com/whatseni"
            className="px-5 py-3 rounded-md bg-[var(--color-primary)] text-[var(--color-bg)] border border-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)]"
          >Github</Link>
        </div>
        <div className="bg-gradient-to-b from-[var(--color-primary)] to-transparent w-[22rem] h-[30rem] absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden p-20 pb-6">
          <Image src="/me.jpg" fill alt="me" />
        </div>

        <Link className="absolute -right-9 bottom-20 rotate-90 font-medium text-lg text-[var(--color-primary)] transition-[var(--transition)] hover:text-[var(--color-light)]" href="#contact">
          Scroll Down
        </Link>
      </div>
    </header>
  )
}