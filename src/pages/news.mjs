import { icon } from '../icons.mjs';
import { NEWS, CATEGORIES, PUBLICATIONS, SITE } from '../data.mjs';
import { pageHero, sectionHead, newsItem, ctaBand } from '../components.mjs';

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
      <a class="btn btn-ghost" href="news.html#updates">Tenders ${icon('arrow')}</a>
      <a class="btn btn-ghost" href="news.html#updates">Careers ${icon('arrow')}</a>
      <a class="btn btn-ghost" href="news.html#updates">Publications ${icon('arrow')}</a>
    </div>
  </aside>`;
}

function publications() {
  const groups = [...new Set(PUBLICATIONS.map((p) => p.group))];
  return `<section class="section section-tint" id="publications">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Publications',
        title: 'The park, in print.',
        note: 'Newsletters, policy documents, magazines and programme guides from Guwahati Biotech Park. Older newsletter issues are available from the administration on request.',
        link: { label: 'Latest notices', href: 'news.html#updates' }
      })}
      <div class="pub-grid">
        ${groups
          .map(
            (group) => `<div class="pub-column reveal">
              <h3>${group}</h3>
              <ul class="pub-list">
                ${PUBLICATIONS.filter((p) => p.group === group)
                  .map(
                    (p) => `<li><a href="${p.href}" target="_blank" rel="noopener">
                      <span class="pub-icon">${icon('file')}</span>
                      <span class="pub-copy"><strong>${p.title}</strong><small>${p.note}</small></span>
                      <span class="pub-arrow">${icon('download')}</span>
                    </a></li>`
                  )
                  .join('')}
              </ul>
            </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
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
      <p class="small-note news-foot-note">Always confirm deadlines and current openings with the administration. Procurement and recruitment notices are published in the public interest.</p>
    </div>
  </section>
  ${publications()}
  ${ctaBand({
    eyebrow: 'Stay connected',
    title: 'Have a question about a notice?',
    text: 'The administration team can help with tenders, applications and general enquiries about the park.',
    primary: { label: 'Contact the park', href: 'contact.html' },
    secondary: { label: 'Explore facilities', href: 'facilities.html' }
  })}`;
}
