// import { ProjectList } from "./components/posts"

export const metadata = {
  title: 'Home',
  description: 'Machine Name Home Page',
}

import { ProjectList } from "./components/posts";

export default function Page() {

return (  
    
<section className="pb-24">


    <h1 className="tracking-tighter mb-8">Machine Name</h1>
    
    <p className="mb-8">Hello, I&apos;m Kendrick. Welcome to my developer porfolio—Machine Name.</p>
    

    <h2 className="mb-2 tracking-tighter">
      Work
    </h2>
    <p className="mb-8">Clyde & Co - Test Automation Engineer</p>

    <h2 className="mb-2 tracking-tighter">
      Projects
    </h2>

    <div className="mb-8">
      <ProjectList />
    </div>



    </section>
    
    );
}

