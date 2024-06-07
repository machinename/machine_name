import { getProjectPosts } from '../app/utils';

export const baseUrl = 'https://www.machinename.dev/';

export default async function sitemap() {
  let projects = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));


  let routes = ['/', '/chat', '/contact', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projects];
}
