import { icon } from '../icons.mjs';
import { SECTORS, INCUBATEES, NEWS, ACHIEVEMENTS, SITE } from '../data.mjs';
import { sectionHead, newsItem, ctaBand } from '../components.mjs';

const featuredNews = NEWS.slice(0, 8);

function pillars() {
  const items = [
    {
      n: '01',
      icon: 'microscope',
      title: 'Incubate',
      lead: 'Move in, not build out.',
      text: 'Ready-to-use modular labs, flexible leases and shared office services — so a young company can start science without sinking capital into walls.',
      href: 'facilities.html#tic',
      link: 'Explore the labs'
    },
    {
      n: '02',
      icon: 'dna',
      title: 'Innovate',
      lead: 'Instruments and expertise on tap.',
      text: 'Analytical facilities, bioinformatics, bioprospecting and prototyping support sit alongside a scientific team that knows the region’s bio-resources.',
      href: 'facilities.html',
      link: 'See the facilities'
    },
    {
      n: '03',
      icon: 'rocket',
      title: 'Scale',
      lead: 'A network built for market entry.',
      text: 'Business planning, funding linkages, technology transfer and sector-specific programmes connect a good result to a real market.',
      href: 'incubation.html',
      link: 'How incubation works'
    }
  ];

  return `<section class="section">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'What we do',
        title: 'A launchpad, not just a park.',
        note: 'Three things have to line up for deep science to become a business: the right space, the right tools and the right network. We put all three on one campus.'
      })}
      <div class="pillar-grid">
        ${items
          .map(
            (i) => `<article class="pillar reveal">
              <div class="pillar-top">
                <span class="pillar-num">${i.n}</span>
                <span class="pillar-icon">${icon(i.icon)}</span>
              </div>
              <h3>${i.title}</h3>
              <p class="pillar-lead">${i.lead}</p>
              <p>${i.text}</p>
              <a class="text-link" href="${i.href}">${i.link} ${icon('arrow')}</a>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function sectors() {
  return `<section class="section section-dark" id="sectors">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Focus areas',
        title: 'Nine sectors. One ecosystem.',
        note: 'From molecules to markets, the park is built for ventures that use the Northeast’s biological wealth in useful, commercial ways.',
        dark: true
      })}
      <div class="sector-grid">
        ${SECTORS.map(
          (s) => `<article class="sector-card reveal">
            <div class="sector-top">
              <span class="sector-num">${s.n}</span>
              <span class="sector-icon">${icon(s.icon)}</span>
            </div>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </article>`
        ).join('')}
      </div>
    </div>
  </section>`;
}

function facilitiesBento() {
  return `<section class="section" id="facilities">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Inside the park',
        title: 'From idea to evidence, without leaving campus.',
        note: 'Wet labs, analytical instruments, computing, prototyping and a honey-testing laboratory — the practical infrastructure a bio-venture needs.',
        link: { label: 'All facilities', href: 'facilities.html' }
      })}
      <div class="bento">
        <article class="bento-card bento-tic reveal">
          <img src="assets/img/instrument_lab.jpg" alt="Laboratory benches and analytical instruments at the Technology Incubation Centre" width="799" height="369" loading="lazy">
          <div class="bento-shade"></div>
          <div class="bento-body">
            <span class="bento-tag">Core facility</span>
            <h3>Technology<br>Incubation Centre</h3>
            <p>Modular wet labs from 300 to 1,900 sq ft, with utilities, instrumentation and shared services in place.</p>
            <a class="bento-link" href="facilities.html#tic">Take a closer look ${icon('arrow')}</a>
          </div>
        </article>

        <article class="bento-card bento-rhtl reveal">
          <div class="bento-rhtl-top">
            <span class="bento-icon">${icon('honey')}</span>
            <span class="bento-meta">NBB · NBHM supported</span>
          </div>
          <h3>Honey testing,<br>done properly.</h3>
          <p>Quality, authenticity and safety analysis for beekeepers, FPOs, exporters and food businesses.</p>
          <a class="bento-link" href="facilities.html#rhtl">Explore RHTL ${icon('arrow')}</a>
          <span class="bento-watermark" aria-hidden="true">${icon('honey')}</span>
        </article>

        <article class="bento-card bento-small reveal">
          <span class="bento-icon">${icon('cpu')}</span>
          <h3>Bioinformatics</h3>
          <p>Computing, data analysis and training for genomics and proteomics.</p>
          <a class="bento-link" href="facilities.html#bif">BIF ${icon('arrow')}</a>
        </article>

        <article class="bento-card bento-small reveal">
          <span class="bento-icon">${icon('rocket')}</span>
          <h3>NIDHI PRAYAS</h3>
          <p>Fab-lab and mentoring support to turn a drawing into a working prototype.</p>
          <a class="bento-link" href="facilities.html#nidhi">Prototyping ${icon('arrow')}</a>
        </article>

        <article class="bento-card bento-small reveal">
          <span class="bento-icon">${icon('fish')}</span>
          <h3>BICFA</h3>
          <p>Fisheries and aquaculture incubation, from biofloc to ornamental fish.</p>
          <a class="bento-link" href="facilities.html#bicfa">Fisheries ${icon('arrow')}</a>
        </article>

        <article class="bento-card bento-wide reveal">
          <div>
            <span class="bento-icon">${icon('users')}</span>
            <h3>Consultancy &amp; training</h3>
            <p>Method development, sample testing, business-plan advice and hands-on laboratory programmes for teams and students.</p>
          </div>
          <a class="bento-link" href="facilities.html#training">Training &amp; advisory ${icon('arrow')}</a>
        </article>
      </div>
    </div>
  </section>`;
}

function stats() {
  return `<section class="stats-band" id="stats">
    <div class="wrap">
      <dl class="stats">
        <div class="reveal"><dt>21</dt><dd>acres at Amingaon, Guwahati</dd></div>
        <div class="reveal"><dt>300–1,900</dt><dd>sq ft modular laboratory spaces</dd></div>
        <div class="reveal"><dt>13</dt><dd>resident incubatees and institutions</dd></div>
        <div class="reveal"><dt>9</dt><dd>focus sectors, from health to fisheries</dd></div>
      </dl>
    </div>
  </section>`;
}

function incubatees() {
  const featured = INCUBATEES.filter((i) => i.logo).slice(0, 10);
  return `<section class="section section-tint" id="community">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'The community',
        title: 'Thirteen ventures. One campus.',
        note: 'Genomics kits, plant-based wellness, microbial enzymes, heritage rice wine, medtech and more — the park’s incubatees work across the bio-economy.',
        link: { label: 'Meet the incubatees', href: 'incubation.html#incubatees' }
      })}
      <div class="logo-wall">
        ${featured
          .map(
            (i) => `<a class="logo-tile reveal" href="${i.url || 'incubation.html#incubatees'}"${i.url ? ' target="_blank" rel="noopener"' : ''} aria-label="${i.name}">
              <img src="${i.logo}" alt="${i.name} logo" loading="lazy">
              <span>${i.name}</span>
            </a>`
          )
          .join('')}
      </div>
      <p class="logo-foot">Plus NIPER Guwahati, NECTAR, the Department of Excise (Goa) laboratory and more. <a href="incubation.html#incubatees">See all 13 ${icon('arrow')}</a></p>
    </div>
  </section>`;
}

function achievementsPreview() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured).slice(0, 3);
  if (!featured.length) return '';
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
  return `<section class="section section-tint" id="achievements">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Achievements & activities',
        title: 'The work, in pictures.',
        note: 'Training cohorts, laboratory development, outreach drives and incubatee milestones — a look at what happens on campus.',
        link: { label: 'See the gallery', href: 'achievements.html' }
      })}
      <div class="achievement-preview">
        ${featured
          .map(
            (a) => `<article class="achievement-card reveal">
              <a class="achievement-media" href="achievements.html#${esc(a.id)}">
                <img src="${a.image}" alt="${esc(a.title)}" width="800" height="500" loading="lazy" decoding="async">
                <span class="achievement-shade" aria-hidden="true"></span>
                <span class="achievement-tag">${CATEGORY_LABELS[a.category] || a.category}</span>
                <span class="achievement-kind">${a.videoUrl ? `${icon('play')} Video` : `${icon('camera')} Photo`}</span>
              </a>
              <div class="achievement-body">
                <h3><a href="achievements.html#${esc(a.id)}">${esc(a.title)}</a></h3>
                <p>${esc(a.summary)}</p>
              </div>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function news() {
  return `<section class="section" id="updates">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Latest',
        title: 'Notices, tenders and what’s next.',
        note: 'Procurement notices, training calls, recruitment results and park news — all in one place.',
        link: { label: 'All updates', href: 'news.html' }
      })}
      <div class="tabs" role="group" aria-label="Filter updates" data-tabs="#home-news">
        <button class="tab" type="button" data-tab="all" aria-pressed="true">All</button>
        <button class="tab" type="button" data-tab="tenders" aria-pressed="false">Tenders</button>
        <button class="tab" type="button" data-tab="training" aria-pressed="false">Training</button>
        <button class="tab" type="button" data-tab="news" aria-pressed="false">News</button>
        <button class="tab" type="button" data-tab="careers" aria-pressed="false">Careers</button>
      </div>
      <div class="news-list" id="home-news">
        ${featuredNews.map((n) => newsItem(n)).join('')}
      </div>
      <p class="filter-empty" data-empty hidden>No updates in this category yet.</p>
    </div>
  </section>`;
}

function visit() {
  return `<section class="section section-tint" id="visit">
    <div class="wrap visit-grid">
      <div class="visit-copy">
        <p class="eyebrow">Find us</p>
        <h2 class="display">At Amingaon, close to the people doing the work.</h2>
        <p class="section-note">The campus sits at Amingaon, across the Brahmaputra from central Guwahati and within reach of IIT Guwahati, Gauhati University and the Brahmaputra Industrial Park.</p>
        <address class="visit-address">${icon('pin')}<span>Technology Incubation Centre<br>Near S.P. Office, Amingaon<br>Kamrup, Guwahati, Assam 781031</span></address>
        <div class="visit-contacts">
          <a href="mailto:${SITE.email}">${icon('mail')} ${SITE.email}</a>
          <a href="tel:+919085060009">${icon('phone')} ${SITE.phone}</a>
        </div>
        <div class="btn-row">
          <a class="btn btn-primary" href="${SITE.mapLink}" target="_blank" rel="noopener">Get directions ${icon('arrowUp')}</a>
          <a class="btn btn-ghost" href="contact.html">Contact the park</a>
        </div>
      </div>
      <div class="visit-map reveal">
        <iframe src="${SITE.map}" title="Map showing Guwahati Biotech Park at Amingaon" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        <a class="map-card" href="${SITE.mapLink}" target="_blank" rel="noopener">
          <span class="map-card-icon">${icon('pin')}</span>
          <span><strong>Guwahati Biotech Park</strong><small>Amingaon · Guwahati 781031</small></span>
          ${icon('arrowUp')}
        </a>
      </div>
    </div>
  </section>`;
}

function hero() {
  return `<section class="hero hero-immersive" data-hero aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <img class="hero-media-img" src="assets/img/generated/hero-campus-ai.jpg" alt="" width="2048" height="1088" fetchpriority="high" decoding="async">
      <span class="hero-media-glow"></span>
      <span class="hero-media-grid"></span>
      <span class="hero-media-grain"></span>
    </div>
    <div class="hero-shade" aria-hidden="true"></div>

    <div class="wrap hero-inner">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow"><span class="pulse" aria-hidden="true"></span> Technology Incubation Centre · Amingaon</p>
        <h1 class="display" id="hero-title">Where the Northeast’s bio-science becomes <em>business.</em></h1>
        <p class="hero-lede">The region’s first biotech park — a joint initiative of the Government of Assam and the Department of Biotechnology, Government of India. Ready-to-use labs, scientific expertise and a community built to take ideas to market.</p>
        <div class="btn-row hero-actions">
          <a class="btn btn-primary btn-lg" href="incubation.html#apply">Apply for incubation ${icon('arrow')}</a>
          <a class="btn btn-ghost btn-lg" href="facilities.html">Explore the park</a>
        </div>
        <ul class="hero-facts">
          <li>${icon('check')} First biotech park in Northeast India</li>
          <li>${icon('check')} 21-acre campus at Amingaon</li>
          <li>${icon('check')} 13 resident incubatees</li>
        </ul>
      </div>

      <div class="hero-stack" data-hero-tilt>
        <figure class="hero-float hero-float--main">
          <span class="hero-float-frame">
            <img src="assets/img/generated/hero-lab-ai.jpg" alt="A researcher examining a sample in a Guwahati Biotech Park laboratory" width="900" height="1084" loading="lazy" decoding="async">
          </span>
          <figcaption><span class="dot" aria-hidden="true"></span> Wet labs · instrument-ready</figcaption>
        </figure>
        <figure class="hero-float hero-float--small">
          <span class="hero-float-frame">
            <img src="assets/img/main_entrance.jpg" alt="The main entrance of Guwahati Biotech Park with the Indian flag flying" width="680" height="385" loading="lazy" decoding="async">
          </span>
          <figcaption>Technology Incubation Centre</figcaption>
        </figure>
        <div class="hero-badge" aria-hidden="true"><strong>21</strong><span>acre campus<br>at Amingaon</span></div>
        <a class="hero-hub-card" href="achievements.html" aria-label="Open the campus photo hub">
          <span class="hero-hub-icon">${icon('camera')}</span>
          <span class="hero-hub-copy"><strong>Campus photo hub</strong><small>Labs · people · milestones</small></span>
          <span class="hero-hub-count">${ACHIEVEMENTS.length}</span>
        </a>
      </div>
    </div>

    <div class="wrap hero-rail">
      <a class="hero-scroll" href="#stats">
        <span class="hero-scroll-track" aria-hidden="true"><span></span></span>
        <span>Scroll to explore</span>
      </a>
      <p class="hero-rail-note"><span class="hero-rail-dot" aria-hidden="true"></span> Amingaon · Guwahati · Assam 781031</p>
    </div>
  </section>`;
}

export function homePage() {
  return `${hero()}
  ${stats()}
  ${pillars()}
  ${sectors()}
  ${facilitiesBento()}
  ${incubatees()}
  ${achievementsPreview()}
  ${news()}
  ${visit()}
  ${ctaBand({
    eyebrow: 'Bring your idea',
    title: 'The bench is ready. The network is here.',
    text: 'Whether you need a first lab, a testing partner or a route to market, the park is built to help you take the next step.',
    primary: { label: 'Start an application', href: 'incubation.html#apply' },
    secondary: { label: 'Ask a question', href: 'contact.html' }
  })}`;
}
