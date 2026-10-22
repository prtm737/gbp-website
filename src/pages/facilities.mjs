import { icon } from '../icons.mjs';
import { FACILITIES, LABS, INSTRUMENTS, SITE } from '../data.mjs';
import { pageHero, sectionHead, anchorBar, ctaBand } from '../components.mjs';

function tic() {
  const f = FACILITIES.find((x) => x.id === 'tic');
  return `<section class="section" id="tic">
    <div class="wrap split">
      <div class="split-media reveal">
        <img src="${f.img}" alt="${f.imgAlt}" width="799" height="369" loading="lazy">
        <div class="spec-card">
          <strong>300–1,900</strong>
          <span>sq ft of modular laboratory space</span>
        </div>
      </div>
      <div class="split-copy">
        <p class="eyebrow">Core facility</p>
        <h2 class="display">Technology Incubation Centre</h2>
        <p class="lead">The first milestone incubator at Guwahati Biotech Park — a place to test an idea, build a team and reach a market without taking on the full cost of a laboratory.</p>
        <p>The centre offers fully furnished lab spaces with utilities and shared instrumentation, alongside office services and access to the park’s specialised facilities. It is designed for researchers, young professionals and companies setting up in the Northeast.</p>
        <ul class="check-list">
          ${f.points.map((p) => `<li>${icon('check')} ${p}</li>`).join('')}
        </ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="incubation.html#apply">Apply for a lab ${icon('arrow')}</a>
          <a class="btn btn-ghost" href="incubation.html#downloads">Floor plan</a>
        </div>
      </div>
    </div>
  </section>
  <div class="wrap"><div class="rule"></div></div>`;
}

function rhtl() {
  const services = [
    ['Physical properties', 'Moisture, specific gravity, electrical conductivity, water-insoluble matter'],
    ['Chemical quality', 'Acidity, total ash, HMF, diastase activity, proline'],
    ['Sugar composition', 'Total reducing sugars, sucrose, fructose, glucose, F/G ratio'],
    ['Authenticity', 'C4 sugar, C4 sugar δ13C, foreign oligosaccharides, SMR test'],
    ['Botanical analysis', 'Pollen count and microscopic examination'],
    ['Safety', 'Heavy-metal analysis']
  ];
  const instruments = [
    'HPLC',
    'LC–MS/MS',
    'EA–LC–IRMS',
    'AAS',
    'UV–Visible',
    'Refractometer',
    'Microbalance',
    'Conductivity meter',
    'Pollen microscopy',
    'Nitrogen concentrator'
  ];

  return `<section class="section section-tint" id="rhtl">
    <div class="wrap">
      <div class="rhtl-head">
        <div>
          <p class="eyebrow">Testing facility</p>
          <h2 class="display">Regional Honey<br>Testing Laboratory</h2>
          <p class="lead">Quality, authenticity and safety testing for honey and bee products — established with support from the National Bee Board under the National Beekeeping and Honey Mission.</p>
        </div>
        <div class="rhtl-support reveal">
          <span class="rhtl-support-label">Supported by</span>
          <img src="assets/img/nbb-150x150.png" alt="National Bee Board" width="150" height="150" loading="lazy">
          <strong>National Bee Board</strong>
          <span>Ministry of Agriculture &amp; Farmers Welfare, Government of India</span>
        </div>
      </div>

      <div class="rhtl-grid">
        <div class="rhtl-card rhtl-services reveal">
          <h3>What we analyse</h3>
          <div class="table-scroll">
            <table>
              <thead><tr><th scope="col">Category</th><th scope="col">Parameters</th></tr></thead>
              <tbody>
                ${services.map(([c, p]) => `<tr><th scope="row">${c}</th><td>${p}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
          <p class="small-note">Methods include HPLC, LC-MS/MS, EA-LC-IRMS, spectrophotometric, gravimetric, titrimetric and microscopic techniques.</p>
        </div>

        <div class="rhtl-side">
          <article class="rhtl-card rhtl-instruments reveal">
            <h3>On the bench</h3>
            <ul class="chip-list">
              ${instruments.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </article>
          <article class="rhtl-card rhtl-packages reveal">
            <h3>Testing packages</h3>
            <div class="package"><strong>Basic quality</strong><span>10 essential parameters for routine quality assessment.</span></div>
            <div class="package"><strong>Authenticity</strong><span>17 parameters covering quality and advanced authenticity testing.</span></div>
            <p class="small-note">Both packages are aligned with FSSAI compliance needs.</p>
          </article>
        </div>
      </div>

      <div class="rhtl-foot reveal">
        <div>
          <h3>Send a sample</h3>
          <p>Submit samples at the laboratory or by courier with the prescribed submission form. Reports are issued by email after analysis.</p>
        </div>
        <div class="rhtl-contact">
          <a href="mailto:${SITE.rhtlEmail}">${icon('mail')} ${SITE.rhtlEmail}</a>
          <a href="tel:+919707770092">${icon('phone')} +91 97077 70092</a>
          <a href="tel:+917002190312">${icon('phone')} +91 70021 90312</a>
        </div>
      </div>
    </div>
  </section>`;
}

function otherFacilities() {
  const items = FACILITIES.filter((f) => f.id !== 'tic' && f.id !== 'rhtl');
  return `<section class="section" id="more">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'More on campus',
        title: 'Support that goes beyond the lab bench.',
        note: 'Computing, prototyping, fisheries, advisory, training and technology transfer — each facility connects to the same campus and the same community.'
      })}
      <div class="facility-grid">
        ${items
          .map(
            (f) => `<article class="facility-card reveal" id="${f.id}">
              <div class="facility-top">
                <span class="facility-icon">${icon(f.icon)}</span>
                <span class="tag tag-neutral">${f.tag}</span>
              </div>
              <h3>${f.title}</h3>
              <p>${f.text}</p>
              <ul class="mini-list">
                ${f.points.slice(0, 3).map((p) => `<li>${icon('check')} ${p}</li>`).join('')}
              </ul>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function specialised() {
  return `<section class="section" id="specialised">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Specialised facilities',
        title: 'Shared science, at full strength.',
        note: 'Eight specialist facilities support projects that would be too costly to build alone — each with a published charge list and requisition process.',
        link: { label: 'Download forms', href: 'news.html#publications' }
      })}
      <div class="lab-grid">
        ${LABS.map(
          (lab) => `<article class="lab-card reveal" id="${lab.id}">
            <div class="lab-top">
              <span class="facility-icon">${icon(lab.icon)}</span>
              <span class="tag tag-neutral">${lab.short}</span>
            </div>
            <h3>${lab.title}</h3>
            <p>${lab.text}</p>
            <ul class="mini-list">
              ${lab.points.map((point) => `<li>${icon('check')} ${point}</li>`).join('')}
            </ul>
            <div class="lab-docs">
              ${lab.docs.map((d) => `<a class="lab-doc" href="${d.href}" target="_blank" rel="noopener">${icon('file')} ${d.label}</a>`).join('')}
            </div>
          </article>`
        ).join('')}
      </div>
    </div>
  </section>`;
}

function instruments() {
  return `<section class="section section-dark" id="instruments">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Instrumentation',
        title: 'The bench list.',
        note: 'Ninety instruments and general utility facilities are available at the Technology Incubation Centre, from LC-MS/MS and confocal microscopy to fermenters and cold storage.',
        dark: true
      })}
      <div class="instrument-shell reveal">
        <div class="instrument-head">
          <label class="instrument-search">
            <span class="sr-only">Search instruments</span>
            ${icon('search')}
            <input id="instrument-search" type="search" placeholder="Search by instrument or make…" autocomplete="off">
          </label>
          <span class="instrument-count" data-instrument-count aria-live="polite">${INSTRUMENTS.length} instruments</span>
        </div>
        <div class="table-scroll instrument-scroll">
          <table class="instrument-table" id="instrument-table">
            <caption class="sr-only">Instruments and equipment available at Guwahati Biotech Park</caption>
            <thead><tr><th scope="col">Instrument / equipment</th><th scope="col">Make / model</th></tr></thead>
            <tbody>
              ${INSTRUMENTS.map(
                (i) => `<tr data-search="${`${i.name} ${i.make}`.toLowerCase()}"><th scope="row">${i.name}</th><td>${i.make}</td></tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
        <p class="filter-empty instrument-empty" data-instrument-empty>No instruments match that search.</p>
      </div>
      <p class="small-note instrument-note">Instrument access is subject to availability, training and the park’s current charge list. Write to <a href="mailto:${SITE.email}">${SITE.email}</a> to plan a run.</p>
    </div>
  </section>`;
}

function specs() {
  return `<section class="section section-dark">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Practical details',
        title: 'What the campus provides.',
        note: 'The shared infrastructure that makes daily research possible — and the services that help a company grow.',
        dark: true
      })}
      <div class="spec-grid">
        <div class="spec-item reveal"><span class="spec-kicker">Space</span><strong>300–1,900 sq ft</strong><p>Modular wet laboratories available on flexible leases.</p></div>
        <div class="spec-item reveal"><span class="spec-kicker">Campus</span><strong>21 acres</strong><p>Developed land and common infrastructure at Amingaon.</p></div>
        <div class="spec-item reveal"><span class="spec-kicker">Shared</span><strong>Library · training rooms · auditorium</strong><p>Conference and non-lab office space available on lease or daily rental.</p></div>
        <div class="spec-item reveal"><span class="spec-kicker">Support</span><strong>Scientific &amp; business advisory</strong><p>Instrument use, method development, validation and business planning.</p></div>
      </div>
    </div>
  </section>`;
}

export function facilitiesPage() {
  return `${pageHero({
    crumbs: ['Facilities'],
    eyebrow: 'Infrastructure',
    title: 'The infrastructure to move faster.',
    lede: 'A 21-acre campus with ready-to-use labs, specialised analytical facilities, computing, prototyping and testing — built so that a small team can do serious science.',
    meta: `<ul class="hero-facts page-facts"><li>${icon('check')} 9 facility groups</li><li>${icon('check')} 300–1,900 sq ft labs</li><li>${icon('check')} On-campus honey testing</li></ul>`
  })}
  ${anchorBar([
    { id: 'tic', label: 'Incubation labs' },
    { id: 'rhtl', label: 'Honey testing' },
    { id: 'bif', label: 'Bioinformatics' },
    { id: 'nidhi', label: 'Prototyping' },
    { id: 'bicfa', label: 'Fisheries' },
    { id: 'training', label: 'Training' },
    { id: 'specialised', label: 'Specialised labs' },
    { id: 'instruments', label: 'Instruments' },
    { id: 'infrastructure', label: 'Campus' }
  ])}
  ${tic()}
  ${rhtl()}
  ${specialised()}
  ${otherFacilities()}
  ${instruments()}
  ${specs()}
  ${ctaBand({
    eyebrow: 'Access a facility',
    title: 'Need a lab, a test or a prototype?',
    text: 'Tell us what you need to measure, make or validate. We will point you to the right facility and the right person.',
    primary: { label: 'Talk to the team', href: 'contact.html' },
    secondary: { label: 'See how incubation works', href: 'incubation.html' }
  })}`;
}
