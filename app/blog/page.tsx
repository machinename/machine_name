import { Paper } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';
import { blogPosts } from "./blogData";

export default function Blogs() {
  return (
    <main className="flex min-h-[800px] h-[100vh] flex-col items-center pt-20 pl-20 pr-20">
      <div className="container mx-auto flex flex-col items-center gap-10">
      <h1 className="text-5xl">Blog - by machinename.dev</h1>
      {blogPosts.map(blog => (
          <li style={{
            listStyleType: 'none'
          }} key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
            <Paper className="p-2 rounded-none w-full text-left">
              <div style={{
                  border: '0.5px solid lightgray',
                  overflow: 'none'
                }}>
                <Image src={blog.image} alt="Home Screen" width={1600} height={800}/>
                </div>
                <h1 className="pt-2 text-3xl">{blog.title}</h1>
                <p className='py-2'>{blog.description}</p>  
                {/* <p className="font-semibold">by {blog.author}</p>   */}
            </Paper>
            </Link>
          </li>
        ))}
    <p className="text-xl">machinename.dev</p>
    </div>
    </main>
  );
};
