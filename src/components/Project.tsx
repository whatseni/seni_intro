import Image from "next/image"

export default function Project() {
  return (
    <section>
      <h2>Project</h2>

      <div className="container grid gap-2.5">
        <article className="bg-[var(--color-bg-variant)] p-1.5">
          <div className="overflow-hidden h-[50%]">
            <Image src="" alt="dfdf" />
          </div>
          <h3>title</h3>
          <h1>contentdfsdfasdfasdfsad</h1>
          <div className="flex gap-1 mb-1">
            <button>github</button>
          </div>
        </article>
      </div>
    </section>
  )
}