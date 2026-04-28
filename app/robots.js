export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://pilatuweb.netlify.app',
    sitemap: 'https://pilatuweb.netlify.app/sitemap.xml',
  };
}
