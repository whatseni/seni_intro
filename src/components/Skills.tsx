import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 sm:gap-[1rem]">
        <div className="bg-[var(--color-bg-variant)] p-10 rounded-3xl border border-transparent transition hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default hover:text-[var(--color-primary)] md:w-4/5 md:p-8 md:mx-auto sm:w-full sm:p-4">
          <h3 className="text-center mb-8 text-[var(--color-primary)]">Front</h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:p-4">
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>HTML/CSS</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="bg-[var(--color-bg-variant)] p-10 rounded-3xl border border-transparent transition hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default hover:text-[var(--color-primary)] md:w-4/5 md:p-8 md:mx-auto sm:w-full sm:p-4">
          <h3 className="text-center mb-8 text-[var(--color-primary)]">Etc</h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:p-4">
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className="flex gap-[1rem]">
              <BsPatchCheckFill className="mt-1.5 text-[var(--color-primary)]" />
              <div>
                <h4>Github Actions</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}