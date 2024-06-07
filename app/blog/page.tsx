
import { BlogPosts } from "../components/posts"

export const metadata = {
  title: 'Blog',
  description: 'Machine Name Blog Page',
}

export default function Blog() {
  return (
    <section>
      <h1 className="mb-8 tracking-tighter">
        Blog
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
