import Image from "next/image";
import { GiTreeGrowth } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function About() {
  return (
    <section id="about">
      <h2>About ME</h2>

      <div className="container grid lg:cols-[1fr] lg:gap-0 md:grid-cols-[35%_50%] md:gap-[15%]">
        <div className="grid md:grid-cols-1 md:gap-0">
          <div className="w-1/2 mx-auto my-8 aspect-square rounded-3xl bg-gradient-to-tr from-transparent via-primary to-transparent grid place-items-center md:w-1/2 md:mx-auto md:mb-16 md:mt-8 sm:w-[65%] sm:mx-auto sm:mb-12">
            <img src="/me-about.png" alt="About Image" className="rounded-3xl overflow-hidden rotate-[10deg] transition-transform hover:rotate-0" />
          </div>
        </div>

        <div className="text-lg text-center sm:text-center">
          <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 ">
            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:text-[var(--color-primary)] cursor-default">
              <div className="flex items-center justify-center mb-[0.5rem]">
                <GiTreeGrowth className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              </div>
              <h5>One More Find</h5>
            </article>

            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:text-[var(--color-primary)] cursor-default">
              <div className="flex items-center justify-center mb-[0.5rem]">
                <MdCleaningServices className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              </div>
              <h5>One More User</h5>
            </article>

            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:text-[var(--color-primary)] cursor-default">
              <div className="flex items-center justify-center mb-[0.5rem]">
                <HiOutlineSpeakerphone className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              </div>
              <h5>One More Plan</h5>
            </article>
          </div>
          <p className="my-8 text-[var(--color-bg-variant)] md:my-6 sm:my-6">
            저는 <strong>한번 더</strong> 찾아보고, 사용자 입장을 생각하고, 계획을 점검합니다.
            <br />
          </p>
        </div>

      </div>
    </section>
  )
}