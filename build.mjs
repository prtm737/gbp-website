import { writeFile, readFile } from 'node:fs/promises';
import { page } from './src/layout.mjs';
import { homePage } from './src/pages/home.mjs';
import { aboutPage } from './src/pages/about.mjs';
import { facilitiesPage } from './src/pages/facilities.mjs';
import { incubationPage } from './src/pages/incubation.mjs';
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

const cssParts = ['00-base.css','10-shell.css','20-home.css','22-content.css','30-inner.css','32-incubation.css','34-contact.css','36-footer.css','40-dialogs.css','45-motion.css','50-responsive.css'];
const css = (await Promise.all(cssParts.map((f) => readFile(`src/css/${f}`, 'utf8')))).join('\n');
await writeFile('assets/css/site.css', css, 'utf8');
console.log(`built assets/css/site.css (${(Buffer.byteLength(css) / 1024).toFixed(1)} kB)`);

const pages = [
  {
    file: 'index.html',
    title: 'Home',
    page: 'home',
    ticker: true,
    description:
      'Guwahati Biotech Park is the first biotech park in Northeast India — ready-to-use labs, scientific facilities and incubation for bio-science ventures.',
    render: homePage
  },
  {
    file: 'about.html',
    title: 'About',
    page: 'about',
    description:
      'The story, vision, mission, leadership and research ecosystem of Guwahati Biotech Park, a joint initiative of the Government of Assam and DBT, Government of India.',
    render: aboutPage
  },
  {
    file: 'facilities.html',
    title: 'Facilities',
    page: 'facilities',
    description:
      'Explore the Technology Incubation Centre, Regional Honey Testing Laboratory, Bioinformatics Facility, NIDHI PRAYAS, BICFA and training facilities at Guwahati Biotech Park.',
    render: facilitiesPage
  },
  {
    file: 'incubation.html',
    title: 'Incubation',
    page: 'incubation',
    description:
      'Apply for incubation at Guwahati Biotech Park. Ready-to-use modular labs, flexible leases, scientific support and business guidance for bio-ventures in Northeast India.',
    render: incubationPage
  },
  {
    file: 'news.html',
    title: 'News & tenders',
    page: 'news',
    description:
      'Tenders, quotations, training programmes, careers, events and news from Guwahati Biotech Park, with links to the official notices.',
    render: newsPage
  },
  {
    file: 'contact.html',
    title: 'Contact',
    page: 'contact',
    description:
      'Contact Guwahati Biotech Park at Amingaon, Guwahati. Find the administration, scientific team, honey testing laboratory and directions to the campus.',
    render: contactPage
  }
];

for (const p of pages) {
  const html = polish(page({
    title: p.title,
    description: p.description,
    page: p.page,
    body: p.render(),
    ticker: Boolean(p.ticker)
  }));
  await writeFile(p.file, html, 'utf8');
  console.log(`built ${p.file} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
}
