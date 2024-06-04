import { Paper } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';


const templatePosts = [
  { slug: 'first-template', title: 'Flutter Firebase Auth', description: 'Brief description about Flutter Firebase Auth...', author: 'machinename.dev' },
  { slug: 'second-template', title: 'Machine Name', description: 'Brief description about Machine Name', author: 'machinename.dev' }
];

export default function Templates() {
  return (
    <main className="flex flex-col min-h-[800px] h-[100vh] items-center justify-center pt-20 pb-20 gap-20">
      <h1 className="text-5xl">Templates</h1>
      {templatePosts.map(template => (
          <li style={{
            listStyleType: 'none'
          }} key={template.slug}>
            <Link href={`/templates/${template.slug}`}>
            <Paper className="p-2 rounded-none text-center w-[400px]">
                <h1 className="font-bold text-2x1">{template.title}</h1>
                <p>{template.description}</p>  
                <p>by {template.author}</p>  
            </Paper>
            </Link>
          </li>
        ))}


        <h1 className="text-3xl">machinename.dev</h1>
    </main>
  );
};
