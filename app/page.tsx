import { ProjectPosts } from "./components/posts"

export default function Page() {



return (  
    
<section className="pb-24">


    <h1 className="tracking-tighter mb-8">Machine Name</h1>
   
    <h2 className="mb-2 tracking-tighter">
      Who We Are
    </h2>
    <p className="mb-8">Hello, I'm Kendrick. Welcome to porfolio project—Machine Name.</p>

    <h2 className="mb-2 tracking-tighter">
      Work
    </h2>
    <p className="mb-8">On a mission to build products people, and along the way, teach the next generation of developers. Here's a summary of my work so far.</p>

    <h2 className="mb-2 tracking-tighter">
      Projects
    </h2>

    <div className="mb-8">
      <ProjectPosts />
    </div>



    </section>
    
    );
}

