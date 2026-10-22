import { icon } from './icons.mjs';

const CAT_LABELS = {
  tenders: 'Tender',
  training: 'Training',
  news: 'News',
  careers: 'Careers',
  events: 'Event'
};

export function formatDate(iso) {
  const d = new Date(`${iso}T12:00:00Z`);
  return {
    day: new Intl.DateTimeFormat('en-IN', { day: '2-digit', timeZone: 'UTC' }).format(d),
    month: new Intl.DateTimeFormat('en-IN', { month: 'short', timeZone: 'UTC' }).format(d),
    year: new Intl.DateTimeFormat('en-IN', { year: 'numeric', timeZone: 'UTC' }).format(d)
  };
}

export function sectionHead({ eyebrow, title, note, link, dark = false }) {
  return `<div class="section-head${dark ? ' is-dark' : ''}">
    <p class="eyebrow">${eyebrow}</p>
    <div class="section-head-row">
      <h2 class="display">${title}</h2>
      ${note ? `<p class="section-note">${note}</p>` : ''}
      ${link ? `<a class="text-link" href="${link.href}">${link.label} ${icon('arrow')}</a>` : ''}
    </div>
  </div>`;
}

export function pageHero({ crumbs = [], eyebrow, title, lede, meta = '' }) {
  const crumbHtml = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a>${crumbs
    .map((c) => `<span aria-hidden="true">/</span><span aria-current="page">${c}</span>`)
    .join('')}</nav>`;

  return `<section class="page-hero">
    <div class="wrap">
      ${crumbHtml}
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1 class="display">${title}</h1>
      ${lede ? `<p class="page-lede">${lede}</p>` : ''}
      ${meta}
    </div>
  </section>`;
}

export function tag(cat) {
  return `<span class="tag tag-${cat}">${CAT_LABELS[cat] || cat}</span>`;
}

export function newsItem(item, { searchable = false } = {}) {
  const d = formatDate(item.date);
  const attrs = `${item.external ? ' target="_blank" rel="noopener"' : ''}`;
  return `<article class="news-item" data-cat="${item.cat}"${searchable ? ` data-search="${item.title.replace(/"/g, '&quot;').toLowerCase()} ${item.cat}"` : ''}>
    <div class="news-date"><span>${d.day}</span><small>${d.month} ${d.year}</small></div>
    <div class="news-body">
      ${tag(item.cat)}
      <h3><a href="${item.href}"${attrs}>${item.title}</a></h3>
    </div>
    <span class="news-arrow" aria-hidden="true">${icon(item.external ? 'arrowUp' : 'arrow')}</span>
  </article>`;
}

export function ctaBand({
  eyebrow = 'Start here',
  title = 'Your lab bench is ready. Bring the idea.',
  text = 'Tell us what you are building. We will help you find the right space, the right facility and the right next step.',
  primary = { label: 'Apply for incubation', href: 'incubation.html#apply' },
  secondary = { label: 'Talk to the team', href: 'contact.html' }
}) {
  return `<section class="section cta-section">
    <div class="wrap">
      <div class="cta-band reveal">
        <div class="cta-copy">
          <p class="eyebrow is-light">${eyebrow}</p>
          <h2 class="display">${title}</h2>
          <p>${text}</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-accent" href="${primary.href}">${primary.label} ${icon('arrow')}</a>
          <a class="btn btn-outline-light" href="${secondary.href}">${secondary.label}</a>
        </div>
        <div class="cta-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
    </div>
  </section>`;
}

export function anchorBar(items) {
  return `<div class="anchor-bar">
    <nav class="wrap anchor-inner" aria-label="On this page">
      ${items.map((i) => `<a href="#${i.id}">${i.label}</a>`).join('')}
    </nav>
  </div>`;
}
