import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>

      <div className="container flex content-center items-center">
        <article>
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>sodgyu@naver.com</h5>
        </article>
      </div>
    </section>
  )
}