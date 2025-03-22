import Image from "next/image";
import { GiTreeGrowth } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function About() {
  return (
    <section>
      <h2>About ME</h2>

      <div className="">
        <div className="">
          <div className="">
            <Image src="" alt="About Image"/>
          </div>
        </div>

        <div className="">
          <div className="">
            <article className="">
              <GiTreeGrowth className="" />
              <h5>One More Find</h5>
            </article>
            <article className="">
              <MdCleaningServices className="" />
              <h5>One More User</h5>
            </article>
            <article className="">
              <HiOutlineSpeakerphone className="" />
              <h5>One More Plan</h5>
            </article>
          </div>
        </div>

        <p className="">
          저는 한번 더 찾아보고, 사용자 입장을 생각하고, 계획을 점검합니다.
          <br />
          <strong>dhfndnfndnfdf</strong>
        </p>
      </div>
    </section>
  )
}