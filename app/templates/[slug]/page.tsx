'use client'
import Image from "next/image";
import Link from 'next/link';

import { useParams } from 'next/navigation';

const templatePosts: Record<string, { title: string; content: string }> = {
  'first-template': { title: 'Flutter Firebase Auth', content: 'This is the content of Flutter Firebase Auth.' },
  'second-template': { title: 'Machine Name', content: 'This is the content of Machine Name.' },
};

export default function TemplatePostPage() {
  const { slug } = useParams();

  const post = templatePosts[slug as string];

  if (!post) {
    return <div className="max-w-2xl mx-auto mt-8">Template not found</div>;
  }

  return (
    <div className=" flex min-h-[800px] h-[100vh] flex-col items-center  pt-20 pb-20">
        <div className="container mx-auto my-auto flex flex-col gap-20 p-4">
            <h2 className="font-bold text-2x1">{post.title}</h2>
            <p>{post.content}</p>
        </div>
    </div>
  );
}
