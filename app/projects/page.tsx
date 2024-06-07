
import { ProjectPosts } from "../components/posts"

export const metadata = {
  title: 'Projects',
  description: 'Machine Name Projects Page',
}

export default function Projects() {
  return (
    <section>
   
      <h1 className="mb-8 tracking-tighter">
        Projects
      </h1>

      {/* <p>On a mission to build products people <a href="/blog/developer-experience">love</a>, and along the way, teach the next generation of developers. Here's a summary of my work so far.</p> */}
      <div className="my-8">
        <ProjectPosts />
      </div>

      {/* <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>

      <h2 className="text-2xl mb-1 tracking-tighter">Vercel</h2> */}
    </section>
  )
}
