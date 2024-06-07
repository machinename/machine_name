import { ProjectList } from "../components/posts"

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
      <ProjectList/>
    </section>
  )
}
