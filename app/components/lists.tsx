import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import { formatDate, getBlogPosts } from '../blog/utils'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}


// export function BlogPosts() {
//   let allProjects = getBlogPosts();

//   return (
//     <div>
//       {allProjects
//         .sort((a, b) => {
//           if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
//             return -1;
//           }
//           return 1;
//         })
//         .map((post) => (
//           <Link
//             key={post.slug}
//             className=""
//             href={`/blog/${post.slug}`}
//           >
//             <div>
//               <p className="text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">
//                 {post.metadata.title}
//               </p>
//               {/* Uncomment this section if you want to display the summary */}
//               <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                 {post.metadata.summary}
//               </ReactMarkdown>
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// }



export function ProjectList() {
  return (
    <div>
      <h1 className="mb-4 tracking-tighter">Projects</h1>
      <div className=' flex flex-col gap-2 justify-center ' >
        <Link className='flex flex-col' href='https://github.com/machinename/flutter_firebase_auth'  target='_blank' rel='noopener noreferrer' passHref>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">Flutter Auth</h2>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">Tech: Dart, Firebase, Flutter</h2>
              {/* <ArrowIcon /> */}
        </Link>
        <Link className='flex flex-col' href='https://github.com/machinename/flutter_firebase_auth'  target='_blank' rel='noopener noreferrer' passHref>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">machinename.dev</h2>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">Tech: Firebase, Next.js, React, Typescript</h2>
              {/* <ArrowIcon /> */}
        </Link>
        <Link   className='flex flex-col' href='https://github.com/machinename/flutter_firebase_auth'  target='_blank' rel='noopener noreferrer' passHref>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">mini ML</h2>
          <h2 className=" tracking-tighter text-neutral-600 dark:text-neutral-400">Tech: Dart, Firebase, Flask, GCP, Python</h2>
              {/* <ArrowIcon /> */}
        </Link>
      </div>
    </div>
  )
}

export function WorkList() {
  return (
  <>
    <h1 className="mb-4 tracking-tighter">Work</h1>

    <h2 className="tracking-tighter text-neutral-600 dark:text-neutral-400">Clyde & Co</h2>
    <h2 className="tracking-tighter mb-4 text-neutral-600 dark:text-neutral-400">Test Automation Engineer, 2023 — Current </h2>

    <div className='flex flex-col gap-2'>
      <p>In April 2023, I joined Clyde & Co in a newly created position as a Test Automation Engineer, leveraging my degree in Software Engineering. Initially, the automation team strictly used Eggplant Functional Test Suite due to its OCR capabilities and its proprietary language, SenseTalk, which allowed for test creation without extensive coding knowledge.</p> 
      <p>Upon my joining, we expanded our toolkit to include Selenium and Playwright, in addition to Eggplant. Our aim was to enhance the effectiveness of our automation efforts by incorporating more advanced object-oriented programming (OOP) principles.</p>
      <p>My role involved developing these new frameworks with Selenium and Playwright, ensuring they were scalable and maintainable. This allowed us to meet the evolving needs of Clyde & Co&apos;s legal technology landscape, complementing our existing Eggplant-based automation test frameworks</p>
    </div>
  </>
  )
}
