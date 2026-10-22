import { icon } from './icons.mjs';
import { SITE, NAV, SEARCH_INDEX, ACHIEVEMENTS, SECTIONS } from './data.mjs';

const abs = (path) => `${SITE.url.replace(/\/$/, '')}/${String(path).replace(/^\//, '')}`;
const canonicalFor = (page) => (page === 'home' ? `${SITE.url.replace(/\/$/, '')}/` : abs(`${page}.html`));

const searchIndex = [
  ...SEARCH_INDEX,
  ...ACHIEVEMENTS.map((item) => ({
    kind: 'Achievement',
    title: item.title,
    desc: item.summary,
    href: `achievements.html#${item.id}`,
    keywords: `${item.category} ${item.location || ''} achievement activity gallery photo video`
  })),
  ...SECTIONS.filter((section) => section.enabled).map((section) => ({
    kind: 'Section',
    title: section.title,
    desc: section.body || '',
    href: `${section.placement === 'home' ? 'index.html' : `${section.placement}.html`}#${section.id}`,
    keywords: `${section.eyebrow || ''} ${section.placement} section`
  }))
];

const socials = [
  { name: 'Facebook', href: SITE.facebook, icon: 'facebook' },
  { name: 'X (Twitter)', href: SITE.twitter, icon: 'x' },
  { name: 'Instagram', href: SITE.instagram, icon: 'instagram' }
];

function socialLinks(cls = '') {
  return socials
    .map(
      (s) =>
        `<a class="${cls}" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}">${icon(s.icon)}</a>`
    )
    .join('');
}

function head({ title, description, page, ogImage, keywords, noindex = false }) {
  const fullTitle = page === 'home' ? `${SITE.name} — ${SITE.tagline}` : `${title} · ${SITE.name}`;
  const pageUrl = canonicalFor(page);
  const image = abs(ogImage || SITE.ogImage || 'assets/img/generated/og-default.jpg');
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${abs('')}#organization`,
        name: SITE.name,
        alternateName: 'GBP',
        url: SITE.url,
        logo: abs(SITE.logo || 'assets/img/logo.png'),
        image: image,
        description:
          'The first biotech park in Northeast India — a joint initiative of the Government of Assam and the Department of Biotechnology, Government of India.',
        email: SITE.email,
        telephone: SITE.phone.replace(/\s/g, ''),
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Technology Incubation Centre, Near S.P. Office, Amingaon',
          addressLocality: 'Guwahati',
          addressRegion: 'Assam',
          postalCode: '781031',
          addressCountry: 'IN'
        },
        areaServed: 'Northeast India',
        sameAs: [SITE.facebook, SITE.instagram, SITE.twitter]
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: fullTitle,
        description,
        isPartOf: { '@id': `${abs('')}#website` },
        about: { '@id': `${abs('')}#organization` },
        inLanguage: 'en-IN',
        primaryImageOfPage: { '@type': 'ImageObject', url: image }
      },
      {
        '@type': 'WebSite',
        '@id': `${abs('')}#website`,
        url: abs(''),
        name: SITE.name,
        publisher: { '@id': `${abs('')}#organization` },
        inLanguage: 'en-IN'
      },
      ...(page === 'home'
        ? []
        : [
            {
              '@type': 'BreadcrumbList',
              '@id': `${pageUrl}#breadcrumb`,
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: abs('') },
                { '@type': 'ListItem', position: 2, name: title, item: pageUrl }
              ]
            }
          ])
    ]
  };

  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${fullTitle}</title>
  <meta name="description" content="${description}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  <meta name="author" content="${SITE.name}">
  <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
  <meta name="theme-color" content="#0c3d2c">
  <meta name="geo.region" content="IN-AS">
  <meta name="geo.placename" content="Amingaon, Guwahati">
  <link rel="canonical" href="${pageUrl}">
  <link rel="alternate" hreflang="en-in" href="${pageUrl}">
  <meta property="og:type" content="${page === 'home' ? 'website' : 'article'}">
  <meta property="og:locale" content="${SITE.locale || 'en_IN'}">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:alt" content="${title} — ${SITE.name}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@GBP_assam">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="assets/img/generated/logo-mark.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/site.css">
  <script>
    (function () {
      document.documentElement.classList.add('js');
      try {
        var saved = localStorage.getItem('gbp-theme');
        var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      } catch (e) {
        document.documentElement.dataset.theme = 'light';
      }
    })();
  </script>
  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
</head>
<body data-page="${page}">
  <a class="skip-link" href="#main">Skip to content</a>`;
}

function topbar() {
  return `<div class="topbar">
    <div class="wrap topbar-inner">
      <p class="topbar-loc">${icon('pin')}<span>Amingaon · Guwahati · Assam 781031</span></p>
      <div class="topbar-links">
        <a class="topbar-mail" href="mailto:${SITE.email}">${icon('mail')}<span>${SITE.email}</span></a>
        <span class="topbar-divider" aria-hidden="true"></span>
        <div class="topbar-socials">${socialLinks()}</div>
        <a class="topbar-source" href="news.html#updates">Tenders &amp; notices ${icon('arrow')}</a>
      </div>
    </div>
  </div>`;
}

function header(active) {
  const links = NAV.map(
    (n) =>
      `<li><a href="${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a></li>`
  ).join('');

  return `${topbar()}
  <header class="site-header" id="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="${SITE.name} — home">
        <img class="brand-logo brand-logo-light" src="assets/img/logo.png" alt="${SITE.name}" width="249" height="80">
        <img class="brand-logo brand-logo-dark" src="assets/img/logo-inverse.png" alt="" aria-hidden="true" width="249" height="80">
      </a>
      <nav class="primary-nav" aria-label="Primary">
        <ul>${links}</ul>
      </nav>
      <div class="header-actions">
        <button class="icon-btn search-open" type="button" data-search-open aria-label="Search this site (Control or Command plus K)">
          ${icon('search')}
        </button>
        <button class="icon-btn theme-toggle" type="button" data-theme-toggle aria-label="Switch to dark mode" aria-pressed="false">
          ${icon('sun', 'icon-sun')}${icon('moon', 'icon-moon')}
        </button>
        <a class="btn btn-primary btn-sm header-cta" href="incubation.html#apply">Apply for incubation ${icon('arrow')}</a>
        <button class="icon-btn nav-toggle" type="button" data-nav-open aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          ${icon('menu')}
        </button>
      </div>
    </div>
  </header>
  <noscript>
    <nav class="noscript-nav" aria-label="Site">
      <div class="wrap">${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}<a href="incubation.html#apply">Apply</a></div>
    </nav>
  </noscript>
  ${mobileNav(active)}`;
}

function mobileNav(active) {
  const links = NAV.map(
    (n, i) =>
      `<li><a href="${n.href}"${n.key === active ? ' aria-current="page"' : ''}><span>${String(i + 1).padStart(2, '0')}</span>${n.label}${icon('arrow')}</a></li>`
  ).join('');

  return `<div class="mobile-nav" id="mobile-nav" aria-hidden="true" inert>
    <div class="mobile-nav-backdrop" data-nav-close></div>
    <div class="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Site menu">
      <div class="mobile-nav-head">
        <span class="eyebrow">Menu</span>
        <button class="icon-btn" type="button" data-nav-close aria-label="Close menu">${icon('close')}</button>
      </div>
      <nav aria-label="Mobile primary">
        <ul class="mobile-links">${links}</ul>
      </nav>
      <div class="mobile-nav-foot">
        <a class="btn btn-accent" href="incubation.html#apply">Apply for incubation ${icon('arrow')}</a>
        <div class="mobile-contact">
          <a href="mailto:${SITE.email}">${icon('mail')} ${SITE.email}</a>
          <a href="tel:+919085060009">${icon('phone')} ${SITE.phone}</a>
        </div>
        <div class="mobile-socials">${socialLinks('social-chip')}</div>
      </div>
    </div>
  </div>`;
}

function ticker() {
  const items = [
    {
      tag: 'Tender',
      text: 'Annual rate contract for lab supplies and gas cylinder refilling',
      href: 'https://www.guwahatibiotechpark.com/tenders/'
    },
    {
      tag: 'Publication',
      text: 'Call for book chapters — Meen Prabah, First Edition',
      href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/08/meen_prabah.pdf'
    },
    {
      tag: 'RHTL',
      text: 'Honey quality, authenticity and safety testing now available on campus',
      href: 'facilities.html#rhtl'
    },
    {
      tag: 'Apply',
      text: 'Ready-to-use labs from 300 to 1,900 sq ft at the Technology Incubation Centre',
      href: 'incubation.html#apply'
    }
  ];

  const group = items
    .map(
      (i) =>
        `<span class="ticker-item"><span class="ticker-tag">${i.tag}</span><a href="${i.href}"${i.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${i.text}</a><span class="ticker-dot" aria-hidden="true"></span></span>`
    )
    .join('');

  const ghostGroup = items
    .map(
      (i) =>
        `<span class="ticker-item"><span class="ticker-tag">${i.tag}</span><span class="ticker-text">${i.text}</span><span class="ticker-dot" aria-hidden="true"></span></span>`
    )
    .join('');

  return `<section class="ticker" aria-label="Latest updates">
    <div class="ticker-track">${group}</div>
    <div class="ticker-track" aria-hidden="true">${ghostGroup}</div>
  </section>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="wrap footer-grid">
      <div class="footer-brand">
        <a class="footer-logo" href="index.html" aria-label="${SITE.name} — home">
          <img src="assets/img/logo-inverse.png" alt="${SITE.name}" width="249" height="80" loading="lazy">
        </a>
        <p>The first biotech park in Northeast India. A joint initiative of the Government of Assam and the Department of Biotechnology, Government of India.</p>
        <div class="footer-socials">${socialLinks('social-chip')}</div>
      </div>
      <nav class="footer-col" aria-label="Explore">
        <h3>Explore</h3>
        <ul>
          <li><a href="about.html">About the park</a></li>
          <li><a href="about.html#vision">Vision &amp; mission</a></li>
          <li><a href="about.html#people">People</a></li>
          <li><a href="about.html#faq">FAQs</a></li>
          <li><a href="achievements.html">Achievements</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <nav class="footer-col" aria-label="Facilities">
        <h3>Facilities</h3>
        <ul>
          <li><a href="facilities.html#tic">Incubation labs</a></li>
          <li><a href="facilities.html#rhtl">Honey testing</a></li>
          <li><a href="facilities.html#bif">Bioinformatics</a></li>
          <li><a href="facilities.html#nidhi">NIDHI PRAYAS</a></li>
          <li><a href="facilities.html#bicfa">Fisheries &amp; aquaculture</a></li>
        </ul>
      </nav>
      <nav class="footer-col" aria-label="Opportunities">
        <h3>Opportunities</h3>
        <ul>
          <li><a href="incubation.html#apply">Apply for incubation</a></li>
          <li><a href="news.html#updates">Tenders</a></li>
          <li><a href="news.html#updates">Careers</a></li>
          <li><a href="facilities.html#training">Training &amp; internships</a></li>
          <li><a href="incubation.html#downloads">Downloads</a></li>
        </ul>
      </nav>
      <div class="footer-col footer-contact">
        <h3>Visit</h3>
        <address>Technology Incubation Centre<br>Near S.P. Office, Amingaon<br>Kamrup, Guwahati<br>Assam 781031</address>
        <a href="mailto:${SITE.email}">${icon('mail')} ${SITE.email}</a>
        <a href="tel:+919085060009">${icon('phone')} ${SITE.phone}</a>
        <a class="footer-map" href="${SITE.mapLink}" target="_blank" rel="noopener">Open in Maps ${icon('arrowUp')}</a>
      </div>
    </div>
    <div class="wrap footer-word" aria-hidden="true"><span>Guwahati</span> <span>Biotech Park</span></div>
    <div class="wrap footer-bottom">
      <p>© <span data-year>2026</span> Guwahati Biotech Park. All rights reserved.</p>
      <p class="footer-note">A joint initiative of the Government of Assam and the Department of Biotechnology, Government of India.</p>
      <a class="to-top" href="#main">Back to top ${icon('arrowUp')}</a>
    </div>
  </footer>`;
}

function overlays() {
  return `<dialog class="search-dialog" id="search-dialog" aria-labelledby="search-title">
    <div class="search-panel">
      <div class="search-head">
        <h2 class="sr-only" id="search-title">Search this site</h2>
        <span class="search-icon" aria-hidden="true">${icon('search')}</span>
        <input id="search-input" type="search" placeholder="Search pages, facilities, incubatees…" autocomplete="off" spellcheck="false" aria-controls="search-results" aria-autocomplete="list">
        <kbd class="search-kbd">Esc</kbd>
        <button class="icon-btn" type="button" data-search-close aria-label="Close search">${icon('close')}</button>
      </div>
      <!-- [html-validate-disable-next prefer-native-element] -->
      <div class="search-results" id="search-results" role="listbox" aria-label="Search results"></div>
      <p class="search-hint"><span>↑↓ to navigate</span><span>↵ to open</span><span>Esc to close</span></p>
    </div>
  </dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script type="application/json" id="search-index">${JSON.stringify(searchIndex).replace(/</g, '\\u003c')}</script>`;
}

export function page({
  title,
  description,
  page: pageKey,
  body,
  ticker: showTicker = false,
  ogImage,
  keywords,
  noindex = false
}) {
  return `${head({ title, description, page: pageKey, ogImage, keywords, noindex })}
  ${header(pageKey)}
  ${showTicker ? ticker() : ''}
  <main id="main">
${body}
  </main>
  ${footer()}
  ${overlays()}
  <script src="assets/js/site.js" defer></script>
</body>
</html>`;
}

export { icon };
