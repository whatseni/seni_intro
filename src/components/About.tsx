import Image from "next/image";
import { GiTreeGrowth } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function About() {
  return (
    <section>
      <h2>About ME</h2>

      <div className="container grid grid-cols-[35%_50%] gap-[15%]">
        <div className="md:grid-cols-1 md:gap-0">
          <div className="w-full aspect-square rounded-3xl bg-gradient-to-tr from-transparent via-primary to-transparent grid place-items-center md:w-1/2 md:mx-auto md:mb-16 md:mt-8 sm:w-[65%] sm:mx-auto sm:mb-12">
            <Image src="" alt="About Image" className="rounded-3xl overflow-hidden rotate-[10deg] transition-transform hover:rotate-0" />
          </div>
        </div>

        <div className="sm:text-center">
          <div className="grid grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-primary-variant cursor-default">
              <GiTreeGrowth className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              <h5>One More Find</h5>
            </article>
            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-primary-variant cursor-default">
              <MdCleaningServices className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              <h5>One More User</h5>
            </article>
            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-primary-variant cursor-default">
              <HiOutlineSpeakerphone className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
              <h5 className="">One More Plan</h5>
            </article>
          </div>
          <p className="text-[var(--color-primary)] my-8 text-bg-variant md:my-6 sm:my-6">
            저는 한번 더 찾아보고, 사용자 입장을 생각하고, 계획을 점검합니다.
            <br />
            <strong>dhfndnfndnfdf</strong>
          </p>
        </div>

      </div>
    </section>
  )
}