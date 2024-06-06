import { Paper } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';
import { projectPosts } from "./projectData";

export default function Projects() {
  return (
    <main className="flex min-h-[800px] h-[100vh] flex-col items-center pt-20 pl-20 pr-20">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <div className="w-full text-left">
          <h1 className="text-5xl">Projects - by machinename.dev</h1>
        </div>
    
      {projectPosts.map(project => (
          <li style={{
            listStyleType: 'none'
          }} key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
            <Paper className="p-2 rounded-none w-full text-left">
              <div style={{
                  border: '0.5px solid lightgray',
                  overflow: 'none'
                }}>
                <Image src={project.image} alt="Home Screen" width={1600} height={800}/>
                </div>
                <h1 className="pt-2 text-3xl">{project.title}</h1>
                <p className='py-2'>{project.description}</p>  
                {/* <p className="font-semibold">by {project.author}</p>   */}
            </Paper>
            </Link>
          </li>
        ))}


    <p className="text-xl">machinename.dev</p>
    </div>
    </main>
  );
};
