import { writeFile, readFile, copyFile, cp, rm, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { page, searchIndex } from './src/layout.mjs';
import { customSections } from './src/components.mjs';
import { PAGES, SITE } from './src/data.mjs';
import { homePage } from './src/pages/home.mjs';
import { aboutPage } from './src/pages/about.mjs';
import { facilitiesPage } from './src/pages/facilities.mjs';
import { incubationPage } from './src/pages/incubation.mjs';
import { achievementsPage } from './src/pages/achievements.mjs';
import { newsPage } from './src/pages/news.mjs';
import { contactPage } from './src/pages/contact.mjs';

const ENTITY = /^&(?:[a-zA-Z][a-zA-Z0-9]{1,31}|#\d{1,7}|#x[0-9a-fA-F]{1,6});/;

function escapeRawAmpersands(text) {
  let out = '';
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== '&') {
      out += text[i];
      continue;
    }
    const match = text.slice(i).match(ENTITY);
    out += match ? match[0] : '&amp;';
    if (match) i += match[0].length - 1;
  }
  return out;
}

function polish(html) {
  return html
    .split(/(<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>)/gi)
    .map((part) => (/^<(?:script|style)\b/i.test(part) ? part : escapeRawAmpersands(part)))
    .join('')
    .replace(/[ \t]+$/gm, '');
}

const xml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const localiseDocs = (html) =>
  html.replace(/https:\/\/www\.guwahatibiotechpark\.com\/(wp-content\/[^"' )]+)/g, (match, path) =>
    existsSync(path) ? path : match
  );

const cssParts = [
  '00-base.css',
  '10-shell.css',
  '20-home.css',
  '22-content.css',
  '26-achievements.css',
  '28-content.css',
  '30-inner.css',
  '32-incubation.css',
  '34-contact.css',
  '36-footer.css',
  '40-dialogs.css',
  '45-motion.css',
  '50-responsive.css'
];
const css = (await Promise.all(cssParts.map((f) => readFile(`src/css/${f}`, 'utf8')))).join('\n');
const minifiedCss = css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s*\n\s*/g, '')
  .replace(/[ \t]{2,}/g, ' ')
  .trim();
await writeFile('assets/css/site.css', minifiedCss, 'utf8');
const cssHash = createHash('sha256').update(minifiedCss).digest('hex').slice(0, 10);
const jsSource = await readFile('assets/js/site.js', 'utf8');
const jsHash = createHash('sha256').update(jsSource).digest('hex').slice(0, 10);
const versionAssets = (html) =>
  html
    .replaceAll('assets/css/site.css', `assets/css/site.css?v=${cssHash}`)
    .replaceAll('assets/js/site.js', `assets/js/site.js?v=${jsHash}`);
console.log(`built assets/css/site.css (${(Buffer.byteLength(minifiedCss) / 1024).toFixed(1)} kB, v${cssHash})`);
await writeFile('search-index.json', JSON.stringify(searchIndex), 'utf8');
console.log(`built search-index.json (${(Buffer.byteLength(JSON.stringify(searchIndex)) / 1024).toFixed(1)} kB)`);

const pages = [
  {
    file: 'index.html',
    key: 'home',
    keywords:
      'Guwahati Biotech Park, biotech park Assam, biotech incubation India, Amingaon Guwahati, Technology Incubation Centre, biotech startup Northeast India',
    render: homePage
  },
  {
    file: 'about.html',
    key: 'about',
    keywords:
      'about Guwahati Biotech Park, vision mission, biotech park Assam, DBT Government of India, Amingaon campus, leadership',
    render: aboutPage
  },
  {
    file: 'facilities.html',
    key: 'facilities',
    keywords:
      'Technology Incubation Centre, Regional Honey Testing Laboratory, bioinformatics facility, NIDHI PRAYAS, BICFA, biotech labs Assam',
    render: facilitiesPage
  },
  {
    file: 'incubation.html',
    key: 'incubation',
    keywords:
      'biotech incubation Assam, apply for incubation, modular wet labs, biotech startup incubation Northeast India, Amingaon lab space',
    render: incubationPage
  },
  {
    file: 'achievements.html',
    key: 'achievements',
    keywords:
      'Guwahati Biotech Park achievements, activities gallery, training programmes, outreach, incubatee milestones, photos and videos Amingaon',
    render: achievementsPage
  },
  {
    file: 'news.html',
    key: 'news',
    keywords:
      'Guwahati Biotech Park news, tenders, quotations, training programmes, careers, events, notices Assam',
    render: newsPage
  },
  {
    file: 'contact.html',
    key: 'contact',
    keywords:
      'contact Guwahati Biotech Park, Amingaon address, honey testing laboratory contact, directions Guwahati biotech park',
    render: contactPage
  }
];

for (const p of pages) {
  const meta = PAGES[p.key] || {};
  let body = p.render();
  const custom = customSections(p.key);
  if (custom) {
    const marker = '<section class="section cta-section">';
    const at = body.lastIndexOf(marker);
    body = at >= 0 ? `${body.slice(0, at)}${custom}${body.slice(at)}` : `${body}${custom}`;
  }
  const html = polish(
    page({
      title: meta.title || p.key,
      description: meta.description || '',
      ogImage: meta.ogImage,
      keywords: p.keywords,
      page: p.key,
      body,
      ticker: Boolean(p.ticker)
    })
  );
  await writeFile(p.file, localiseDocs(versionAssets(html)), 'utf8');
  console.log(`built ${p.file} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
}

const notFound = polish(
  page({
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
    page: '404',
    noindex: true,
    body: `<section class="section not-found">
      <div class="wrap">
        <p class="eyebrow">404</p>
        <h1 class="display">That page has moved beyond the bench.</h1>
        <p class="page-lede">The link may be old, or the page may have been renamed. Start again from the homepage or use search.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="index.html">Back to home</a>
          <a class="btn btn-ghost" href="contact.html">Contact the park</a>
        </div>
      </div>
    </section>`
  })
);
await writeFile('404.html', localiseDocs(versionAssets(notFound)), 'utf8');
console.log('built 404.html');

const base = SITE.url.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => {
    const loc = p.file === 'index.html' ? `${base}/` : `${base}/${p.file}`;
    const priority = p.file === 'index.html' ? '1.0' : p.file === 'achievements.html' ? '0.8' : '0.7';
    return `  <url>
    <loc>${xml(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.file === 'news.html' || p.file === 'achievements.html' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
await writeFile('sitemap.xml', sitemap, 'utf8');
console.log('built sitemap.xml');

const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /404.html
Disallow: /*?*

Sitemap: ${base}/sitemap.xml
Host: ${new URL(base).host}
`;
await writeFile('robots.txt', robots, 'utf8');
console.log('built robots.txt');

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', ...pages.map((p) => p.file), '404.html', 'sitemap.xml', 'robots.txt', 'search-index.json']) {
  await copyFile(file, `dist/${file}`);
}
await cp('assets', 'dist/assets', { recursive: true });
await cp('admin', 'dist/admin', { recursive: true });
try {
  await cp('wp-content', 'dist/wp-content', { recursive: true });
  console.log('copied mirrored legacy documents');
} catch {
  console.log('no wp-content mirror to copy');
}
console.log('prepared dist/ for Netlify');
