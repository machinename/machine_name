export const baseUrl = 'https://www.machinename.dev/';

export default async function sitemap() {
  let routes = ['/', '/contact', '/projects', 'work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes,];
}
