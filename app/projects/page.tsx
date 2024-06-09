import { ProjectList } from "../components/lists"

export const metadata = {
  title: 'Projects - machinename.dev',
}

export default function Projects() {
  return (
    <section>
      <ProjectList showContent={true}/>
    </section>
  )
}
