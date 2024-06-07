
// import { BlogPosts } from "../components/posts"

export const metadata = {
  title: 'Blog',
  description: 'Machine Name Blog Page',
}

export default function Blog() {
  return (
    <section>
      <h1 className=" tracking-tighter">
        /blog
      </h1>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
