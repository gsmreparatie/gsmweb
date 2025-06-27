const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.gsmreparatiepurmerend.nl/' });
const writeStream = createWriteStream('sitemap.xml');

sitemap.pipe(writeStream);

// List your site's pages
sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/about.html', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact.html', changefreq: 'monthly', priority: 0.7 });
// Add more routes as needed

sitemap.end();


streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap created successfully.');
});
