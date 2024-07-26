// generateSitemap.js
import { createWriteStream, promises as fs } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { componentRoutes } from './src/Routes/Routes.js'; // Import your routes from the routes.js file

// Workaround to get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site's base URL
const baseUrl = 'https://www.helpcodeit.com';

// Extract URLs from routes
const urls = componentRoutes.map(route => ({
  url: route.path,
  changefreq: 'monthly',
  priority: 0.8
}));

// Set higher priority for the home page
urls.forEach(url => {
  if (url.url === '/') {
    url.priority = 1.0;
    url.changefreq = 'daily';
  }
});

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));
  const gzip = createGzip();

  sitemap.pipe(gzip).pipe(writeStream);

  urls.forEach((url) => {
    sitemap.write(url);
  });

  sitemap.end();

  const sm = await streamToPromise(sitemap);
  await fs.writeFile(resolve(__dirname, 'public', 'sitemap.xml.gz'), sm);
}

generateSitemap()
  .then(() => {
    console.log('Sitemap generated successfully');
  })
  .catch((error) => {
    console.error('Error generating sitemap', error);
  });
