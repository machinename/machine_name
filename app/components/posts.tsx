import Link from 'next/link'
import { formatDate, getBlogPosts } from '../blog/utils'

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


export function BlogPosts() {
  let allProjects = getBlogPosts()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className=""
            href={`/projects/${post.slug}`}
          >
            {/* <div> */}
              {/* <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p> */}
              <p className="text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">
                {post.metadata.title}
              </p>
            {/* </div> */}
          </Link>
        ))}
    </div>
  )
}


export function ProjectList() {
  return (
    <div className='flex flex-col gap-1'>
      <Link className='flex flex-row items-center gap-2' href='https://github.com/machinename/flutter_firebase_auth'  target='_blank' rel='noopener noreferrer' passHref>
        Flutter Auth
        <ArrowIcon />
      </Link>
      <Link className='flex flex-row items-center gap-2'  href='https://github.com/machinename/machine_name' target='_blank' rel='noopener noreferrer' passHref>
        Machine Name
        <ArrowIcon />
      </Link>
      <Link className='flex flex-row items-center gap-2'  href='https://github.com/machinename/machine_name'   target='_blank' rel='noopener noreferrer' passHref>
        Mini ML
        <ArrowIcon />
      </Link>
    </div>
  )
}
