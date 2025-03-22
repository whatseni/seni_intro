import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container header__container">
        <h3 className="text-sky-400">Hi</h3>
        <h1 className="text-sky-400">I'm Seni</h1>
        <h3 className="text-sky-400">Javascript Developer</h3>
        <div className="mt-10 flex gap-5 jsutify-center">
          <Link href="https://velog.io/@sodgyu/posts"
            className="px-4 py-2 border border-sky-400 rounded-md text-sky-400 hover:bg-sky-400 hover:text-white transition-colors"
          >Blog</Link>
          <Link href="https://github.com/whatseni"
            className="px-4 py-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition-colors"
          >Github</Link>
        </div>
        {/* <div className="bg-gradient-to-b from-sky-400 to-transparent w-88 h-120 absolute left-1/2 -translate-x-1/2 mt-16 rounded-t-full overflow-hidden p-6 pt-20">
          <Image src="dfd" width={500} height={500} alt="me"/>
        </div> */}

        <Link className="absoulte right-0 -mr-9 bottom-20 transform rotate-90 font-light text-lg" href="#contact">
          Scroll Down
        </Link>
      </div>
    </header>
  )
}