import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="">
        SEEUN
      </Link>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">ABOUT</Link>
        </li>
        <li>
          <Link href="/">SKILL</Link>
        </li>
        <li>
          <Link href="/">PROJECT</Link>
        </li>
        <li>
          <Link href="/">CONTACT</Link>
        </li>
      </ul>

      <div className="">
        <Link href="https://github.com/whatseni"><FaGithub /></Link>
        <Link href="https://velog.io/@sodgyu/posts"><SiVelog /></Link>
      </div>

      <div className="">
        <small>&copy; SEEUN Portfolio.</small>
      </div>
    </footer>
  )
}