import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section>
      <h2>My Skills</h2>

      <div>
        <div>
          <h3>Front</h3>
          <div>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML/CSS</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Etc</h3>
          <div>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="experience__details-icon" />
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