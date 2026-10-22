import { icon } from '../icons.mjs';
import { NEWS, CATEGORIES, SITE } from '../data.mjs';
import { pageHero, newsItem, ctaBand } from '../components.mjs';

function counts() {
  return CATEGORIES.reduce((acc, c) => {
    acc[c.key] = c.key === 'all' ? NEWS.length : NEWS.filter((n) => n.cat === c.key).length;
    return acc;
  }, {});
}

function toolbar() {
  const c = counts();
  return `<div class="news-toolbar">
    <label class="news-search">
      <span class="sr-only">Search updates</span>
      ${icon('search')}
      <input id="news-search" type="search" placeholder="Search notices, training, tenders…" autocomplete="off">
    </label>
    <div class="tabs" role="group" aria-label="Filter updates" data-tabs="#news-list">
      ${CATEGORIES.map(
        (cat, i) => `<button class="tab" type="button" data-tab="${cat.key}" aria-pressed="${i === 0 ? 'true' : 'false'}">${cat.label}<span class="tab-count">${c[cat.key]}</span></button>`
      ).join('')}
    </div>
  </div>`;
}

function noticePanel() {
  return `<aside class="notice-panel reveal">
    <div class="notice-copy">
      <span class="notice-icon">${icon('file')}</span>
      <div>
        <h2>Official notices, in one place.</h2>
        <p>Every entry links to the original notice, PDF or listing on the Guwahati Biotech Park website. Always confirm deadlines and current openings with the park.</p>
      </div>
    </div>
    <div class="notice-links">
      <a class="btn btn-ghost" href="${SITE.source}/tenders/" target="_blank" rel="noopener">Tenders ${icon('external')}</a>
      <a class="btn btn-ghost" href="${SITE.source}/careers/" target="_blank" rel="noopener">Careers ${icon('external')}</a>
      <a class="btn btn-ghost" href="${SITE.source}/publication/" target="_blank" rel="noopener">Publications ${icon('external')}</a>
    </div>
  </aside>`;
}

export function newsPage() {
  return `${pageHero({
    crumbs: ['News & tenders'],
    eyebrow: 'Newsroom',
    title: 'Notices, opportunities and park news.',
    lede: 'Tenders and quotations, training programmes, recruitment results, events and announcements — the park’s public record, made easier to scan.',
    meta: `<ul class="hero-facts page-facts"><li>${icon('check')} ${NEWS.length} updates</li><li>${icon('check')} Links to official documents</li><li>${icon('check')} Filter by category</li></ul>`
  })}
  <section class="section" id="updates">
    <div class="wrap">
      ${noticePanel()}
      ${toolbar()}
      <div class="news-list news-list-full" id="news-list">
        ${NEWS.map((n) => newsItem(n, { searchable: true })).join('')}
      </div>
      <p class="filter-empty" data-empty hidden>No updates match your search. Try a different category or keyword.</p>
      <p class="small-note news-foot-note">This page is an independent redesign and is not the official notice board. Use the links above to verify the latest information at the source.</p>
    </div>
  </section>
  ${ctaBand({
    eyebrow: 'Stay connected',
    title: 'Have a question about a notice?',
    text: 'The administration team can help with tenders, applications and general enquiries about the park.',
    primary: { label: 'Contact the park', href: 'contact.html' },
    secondary: { label: 'Explore facilities', href: 'facilities.html' }
  })}`;
}
