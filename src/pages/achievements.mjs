import { icon } from '../icons.mjs';
import { ACHIEVEMENTS, SITE } from '../data.mjs';
import { pageHero, sectionHead, ctaBand } from '../components.mjs';

const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const CATEGORY_LABELS = {
  facility: 'Facilities',
  outreach: 'Outreach',
  training: 'Training',
  innovation: 'Innovation',
  community: 'Community'
};

function formatDate(iso) {
  const d = new Date(`${iso}T12:00:00Z`);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(d);
}

function categories() {
  const seen = new Set(ACHIEVEMENTS.map((a) => a.category).filter(Boolean));
  return ['all', ...seen];
}

function tabs() {
  const cats = categories();
  return `<div class="tabs achievement-tabs" role="group" aria-label="Filter achievements" data-achievement-tabs>
    ${cats
      .map((cat, i) => {
        const count = cat === 'all' ? ACHIEVEMENTS.length : ACHIEVEMENTS.filter((a) => a.category === cat).length;
        const label = cat === 'all' ? 'All activities' : CATEGORY_LABELS[cat] || cat;
        return `<button class="tab" type="button" data-achievement-tab="${cat}" aria-pressed="${i === 0 ? 'true' : 'false'}">${label}<span class="tab-count">${count}</span></button>`;
      })
      .join('')}
  </div>`;
}

function card(item, wide = false) {
  const isVideo = Boolean(item.videoUrl);
  const gallery = Array.isArray(item.gallery) ? item.gallery.filter(Boolean) : [];
  const galleryJson = gallery.length ? ` data-gallery="${esc(JSON.stringify(gallery))}"` : '';
  return `<article class="achievement-card${wide ? ' is-wide' : ''} reveal" id="${esc(item.id)}" data-achievement data-cat="${esc(item.category)}">
    <button class="achievement-media" type="button"
      data-lightbox
      data-title="${esc(item.title)}"
      data-summary="${esc(item.summary)}"
      data-date="${formatDate(item.date)}"
      data-location="${esc(item.location || '')}"
      data-image="${item.image}"
      data-video="${item.videoUrl || ''}"${galleryJson}
      aria-label="${isVideo ? 'Play video' : 'View photo'}: ${esc(item.title)}">
      <img src="${item.image}" alt="${esc(item.title)}" width="800" height="500" loading="lazy" decoding="async">
      <span class="achievement-shade" aria-hidden="true"></span>
      <span class="achievement-tag">${esc(CATEGORY_LABELS[item.category] || item.category)}</span>
      <span class="achievement-kind">${isVideo ? `${icon('play')} Video` : `${icon('camera')} Photo`}</span>
      ${isVideo ? `<span class="achievement-play" aria-hidden="true">${icon('play')}</span>` : ''}
      ${gallery.length ? `<span class="achievement-count">${icon('camera')} ${gallery.length + 1}</span>` : ''}
    </button>
    <div class="achievement-body">
      <p class="achievement-date">${icon('calendar')} ${formatDate(item.date)}</p>
      <h3><a href="achievements.html#${esc(item.id)}">${esc(item.title)}</a></h3>
      <p>${esc(item.summary)}</p>
      ${item.location ? `<p class="achievement-loc">${icon('pin')} ${esc(item.location)}</p>` : ''}
    </div>
  </article>`;
}

function gallery() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured);
  const ordered = [...featured, ...ACHIEVEMENTS.filter((a) => !a.featured)];
  return `<section class="section" id="gallery">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'The record',
        title: 'Photos and videos from the park.',
        note: 'Training cohorts, laboratory development, outreach drives and incubatee milestones — browse the moments that make up the work at Amingaon.'
      })}
      ${tabs()}
      <div class="achievement-grid" id="achievement-grid">
        ${ordered.map((item, i) => card(item, i === 0 && item.featured)).join('')}
      </div>
      <p class="filter-empty" data-achievement-empty hidden>No activities in this category yet.</p>
    </div>
  </section>`;
}

function lightbox() {
  return `<dialog class="lightbox" id="lightbox" aria-labelledby="lightbox-title">
    <div class="lightbox-panel">
      <div class="lightbox-head">
        <span class="eyebrow">Achievement</span>
        <button class="icon-btn lightbox-close" type="button" data-lightbox-close aria-label="Close media viewer">${icon('close')}</button>
      </div>
      <div class="lightbox-stage" id="lightbox-stage"></div>
      <div class="lightbox-thumbs" id="lightbox-thumbs"></div>
      <div class="lightbox-copy">
        <p class="lightbox-meta" id="lightbox-meta"></p>
        <h2 id="lightbox-title"></h2>
        <p id="lightbox-summary"></p>
        <p class="lightbox-loc" id="lightbox-loc"></p>
      </div>
    </div>
  </dialog>`;
}

export function achievementsPage() {
  const videos = ACHIEVEMENTS.filter((a) => a.videoUrl).length;
  const photos = ACHIEVEMENTS.reduce(
    (total, a) => total + 1 + (Array.isArray(a.gallery) ? a.gallery.filter(Boolean).length : 0),
    0
  );

  return `${pageHero({
    crumbs: ['Achievements'],
    eyebrow: 'Achievements & activities',
    title: 'What the park has built, taught and shared.',
    lede: 'A living record of the work at Amingaon — laboratory development, training and internships, outreach, prototyping and the ventures growing on campus.',
    meta: `<ul class="hero-facts page-facts"><li>${icon('check')} ${photos} photographs</li><li>${icon('check')} ${videos} videos</li><li>${icon('check')} ${ACHIEVEMENTS.length} activity stories</li></ul>`
  })}
  ${gallery()}
  ${ctaBand({
    eyebrow: 'Be part of it',
    title: 'Your milestone could be next.',
    text: 'Bring a programme, a prototype or a partnership to the park — or visit the campus and see the work for yourself.',
    primary: { label: 'Apply for incubation', href: 'incubation.html#apply' },
    secondary: { label: 'Plan a visit', href: 'contact.html#visit' }
  })}
  ${lightbox()}
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Achievements and activities — Guwahati Biotech Park',
    description: 'Photos and videos of training, outreach, laboratory development and incubatee milestones at Guwahati Biotech Park, Amingaon.',
    hasPart: ACHIEVEMENTS.map((a) => ({
      '@type': 'CreativeWork',
      name: a.title,
      description: a.summary,
      datePublished: a.date,
      image: `${SITE.url.replace(/\/$/, '')}/${a.image.replace(/^\//, '')}`,
      locationCreated: a.location || 'Amingaon, Guwahati'
    }))
  }).replace(/</g, '\\u003c')}</script>`;
}
