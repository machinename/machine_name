'use client';
import Image from "next/image";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles.module.css';
import { projectPostsSlug } from "../projectData";

export default function ProjectPostPage() {
  const { slug } = useParams();

  const post = projectPostsSlug[slug as string];

  if (!post) {
    return <div className="max-w-2xl mx-auto mt-8">project not found</div>;
  }

  return (
    <main  className="flex min-h-[800px] h-[100vh] flex-col items-center pt-20 pl-20 pr-20">
      <div className="container mx-auto flex flex-col items-center gap-10">
        
        <div style={{
          border: '0.5px solid lightgray'
        }}>
        <Image src={post.image} alt="Home Screen" width={1600} height={800}/>
        </div>
       
        <div className="container">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className={styles.markdown}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <p className="text-xl">machinename.dev</p>
      </div>
    </main >
  );
}
