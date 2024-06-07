import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CustomMDX } from '../../components/mdx'
import { formatDate, getBlogPosts } from '../utils'
import { baseUrl } from '../../sitemap'

interface BlogPost {
  slug: string
  content: string
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
  }
}

interface Params {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post: BlogPost) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image ? image : `/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// Blog component to render a blog post
export default function Blog({ params }: Params) {
  let post = getBlogPosts().find((post: BlogPost) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog Posting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/work/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Machine Name',
            },
          }),
        }}
      />
      <h1 className="tracking-tighter">
        {post.metadata.title}
      </h1>
      {/* <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div> */}
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
