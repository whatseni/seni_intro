import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container text-center h-full relative">
        <h3 className="">Hi</h3>
        <h1 className="">I'm Seni</h1>
        <h3 className="">Javascript Developer</h3>
        <div className="header__socials">
          <Link href="https://velog.io/@sodgyu/posts"
            className=""
          >Blog</Link>
          <Link href="https://github.com/whatseni"
            className=""
          >Github</Link>
        </div>
        <div className="bg-gradient-to-b from-[var(--color-primary)] to-transparent w-88 h-[30rem] absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden p-20 pb-6">
          <Image src="" width={500} height={500} alt="me" />
        </div>

        <Link className="absolute -right-9 bottom-20 rotate-90 font-light text-lg" href="#contact">
          Scroll Down
        </Link>
      </div>
    </header>
  )
}