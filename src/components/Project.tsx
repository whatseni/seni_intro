import Link from "next/link";
export default function Project() {
  return (
    <section id="project">
      <h2>Project</h2>

      <div className="container grid gap-2.5">
        <article className="bg-[var(--color-bg-variant)] p-5 rounded-[2rem] border-[1px] border-transparent transition-[var(--transition)] max-h-[max-content]">
          <div className="overflow-hidden h-[50%] rounded-[1.5rem] mb-[1rem] relative">
            <img src="/wk_thumbnail.png" alt="worktime thumbnail" className=""/>
          </div>
          <h3 className="text-[1.2rem] mb-[2rem]">근로자들의 근무 시간을 관리하고 급여 정산을 위한 시스템</h3>
          <div className="flex gap-[1rem] mb-[1rem]">
            <Link 
            href="https://github.com/whatseni/worktime"
            className="w-max inline-block px-4 py-3 border-[1px] border-solid border-[var(--color-primary)] rounded-[0.4rem] cursor-pointer transition-[var(--transition)]
            bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
            Github</Link>
          </div>
        </article>
      </div>
    </section>
  )
}