import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container flex justify-center items-center">
        <article className="bg-[var(--color-bg-variant)] p-5 rounded-[1.2rem] text-center border-[1px] border-solid border-transparent transition-[var(--transition)] hover:bg-transparent 
        hover:border-[var(--color-primary-variant)] hover:text-[var(--color-primary-variant)]">
              <div className="flex items-center justify-center mb-[0.5rem]">
                <MdOutlineEmail className="text-[1.5rem]" />
              </div>
          <h4>Email</h4>
          <h5>sodgyu@naver.com</h5>
        </article>
      </div>
    </section>
  )
}