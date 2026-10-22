import { icon } from '../icons.mjs';
import { INCUBATEES, DOWNLOADS, SITE } from '../data.mjs';
import { pageHero, sectionHead, anchorBar, ctaBand } from '../components.mjs';

function initials(name) {
  return name
    .replace(/^(Dept\.|Dr\.|Mr\.|Ms\.|Shri|Smt\.)\s*/i, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function overview() {
  return `<section class="section" id="overview">
    <div class="wrap split">
      <div class="split-copy">
        <p class="eyebrow">The first milestone</p>
        <h2 class="display">A place to test the idea before you scale it.</h2>
        <p class="lead">The Technology Incubation Centre is the park’s core facility — a first home for researchers and founders who want to turn an innovative idea into a viable business.</p>
        <p>Incubatees get ready-to-use laboratory space on flexible leases, shared office services and access to the park’s scientific facilities and expertise. That removes the upfront burden of building a lab and lets a small team validate its science, its product and its market.</p>
        <p>Proposals are assessed on the merit of the innovation, the sustainability of the plan and the marketability of the product or service. Accepted teams join a working community of scientists, institutions and companies on one campus.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="#apply">Start an application ${icon('arrow')}</a>
          <a class="btn btn-ghost" href="#downloads">Download the forms</a>
        </div>
      </div>
      <div class="split-media reveal">
        <img src="assets/img/main_entrance.jpg" alt="The main entrance to Guwahati Biotech Park" width="678" height="383" loading="lazy">
        <div class="quote-card">
          ${icon('quote')}
          <p>“The entrepreneur is freed of the burden of investing upfront — and can use the core facility to validate a scientific idea.”</p>
        </div>
      </div>
    </div>
  </section>`;
}

function who() {
  const items = [
    {
      icon: 'flask',
      title: 'Researchers',
      text: 'University and research-body scientists who want to develop their own results through a spin-off in Northeast India.'
    },
    {
      icon: 'users',
      title: 'Young professionals',
      text: 'People with an innovative business idea who need laboratory space, scientific support and a credible place to start.'
    },
    {
      icon: 'building',
      title: 'Companies',
      text: 'Established businesses diversifying into biotechnology or setting up a new R&D unit in the region.'
    }
  ];

  return `<section class="section section-tint" id="who">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Who it is for',
        title: 'If the idea needs a lab, start here.',
        note: 'The centre is built for people at the point where an idea needs evidence — not for teams that already have a full facility.'
      })}
      <div class="who-grid">
        ${items
          .map(
            (i, n) => `<article class="who-card reveal">
              <span class="who-index">0${n + 1}</span>
              <span class="who-icon">${icon(i.icon)}</span>
              <h3>${i.title}</h3>
              <p>${i.text}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function benefits() {
  const items = [
    ['microscope', 'Ready-to-use labs', 'Furnished modular wet labs with core and shell utilities, on flexible lease terms.'],
    ['layers', 'Shared services', 'Office support, library, training rooms, conference room, auditorium and cafeteria.'],
    ['dna', 'Scientific access', 'Analytical instrumentation, bioinformatics, bioprospecting and a scientific team on campus.'],
    ['shield', 'Confidentiality', 'Assurance of confidentiality and security for client data, materials and contractual results.'],
    ['file', 'Business planning', 'Support with the business plan, funding routes and the commercial case around the science.'],
    ['globe', 'A wider network', 'Links to NRDC, NIDHI PRAYAS, BICFA, universities and research institutions across the region.']
  ];

  return `<section class="section" id="benefits">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'What you get',
        title: 'Less building. More proving.',
        note: 'The point of incubation is to spend your time and money on the science and the market — not on setting up a facility.'
      })}
      <div class="benefit-grid">
        ${items
          .map(
            ([ic, t, d]) => `<article class="benefit-card reveal">
              <span class="benefit-icon">${icon(ic)}</span>
              <h3>${t}</h3>
              <p>${d}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function apply() {
  const steps = [
    ['Read the guidelines', 'Download the application format and the information for applicants before you start writing.'],
    ['Prepare the proposal', 'Describe the science, the product, the market, the space needed, the team, the funding and the facilities you will install.'],
    ['Submit to the CEO', 'Send the completed proposal and annexures to the Chief Executive Officer by email or to the park address.'],
    ['Proposal review', 'Proposals are assessed on innovation merit, sustainability and the marketability of the product or service.'],
    ['Agreement and move-in', 'Accepted teams agree the lease and facilities, then move into the incubation centre.']
  ];

  const required = [
    'Space requirement, lease period and expected occupation date',
    'Broad business plan, including the instruments required',
    'Description of the promoter institution or company, with annual report or balance sheet',
    'Means of funding',
    'Number of staff likely to be based at the R&D centre',
    'Major R&D facilities to be installed',
    'Effluents, bio-risks and containment measures, with a commitment to regulatory compliance'
  ];

  return `<section class="section section-dark" id="apply">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'How to apply',
        title: 'Five steps from proposal to lab.',
        note: 'Applications are accepted on a rolling basis. The clearer the scientific and commercial case, the easier the review.',
        dark: true
      })}
      <div class="apply-grid">
        <ol class="steps">
          ${steps
            .map(
              ([t, d], n) => `<li class="step reveal">
                <span class="step-num">${String(n + 1).padStart(2, '0')}</span>
                <div><h3>${t}</h3><p>${d}</p></div>
              </li>`
            )
            .join('')}
        </ol>
        <aside class="apply-aside reveal">
          <h3>What the proposal should cover</h3>
          <ul class="check-list">
            ${required.map((r) => `<li>${icon('check')} ${r}</li>`).join('')}
          </ul>
          <div class="apply-send">
            <span>Submit to</span>
            <strong>The Chief Executive Officer</strong>
            <p>Guwahati Biotech Park, Technology Incubation Centre, Amingaon, Guwahati 781031</p>
            <a class="btn btn-accent" href="mailto:${SITE.ceoEmail}?subject=Incubation%20proposal%20enquiry">${icon('mail')} ${SITE.ceoEmail}</a>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}

function downloads() {
  return `<section class="section" id="downloads">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Application pack',
        title: 'Everything you need to apply.',
        note: 'Official forms and reference documents from Guwahati Biotech Park. Download the application format and all annexures before submitting.',
        link: { label: 'Notices & publications', href: 'news.html#updates' }
      })}
      <div class="download-grid">
        ${DOWNLOADS.map(
          (d) => `<a class="download-card reveal" href="${d.href}" target="_blank" rel="noopener">
            <span class="download-icon">${icon('file')}</span>
            <span class="download-copy"><strong>${d.label}</strong><small>${d.note}</small></span>
            <span class="download-arrow">${icon('download')}</span>
          </a>`
        ).join('')}
      </div>
      <p class="small-note">Documents open on the official Guwahati Biotech Park website. If a link has moved, write to <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
    </div>
  </section>`;
}

function incubatees() {
  return `<section class="section section-tint" id="incubatees">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'The community',
        title: 'Thirteen ventures, institutions and labs.',
        note: 'The park’s incubatees work across genomics, wellness, enzymes, food, environment, therapeutics, medtech and public-interest technology.'
      })}
      <div class="incubatee-grid">
        ${INCUBATEES.map(
          (i) => `<article class="incubatee-card reveal">
            <div class="incubatee-logo">
              ${
                i.logo
                  ? `<img src="${i.logo}" alt="${i.name} logo" loading="lazy">`
                  : `<span class="monogram" aria-hidden="true">${initials(i.name)}</span>`
              }
            </div>
            <div class="incubatee-copy">
              <span class="tag tag-neutral">${i.sector}</span>
              <h3>${i.name}</h3>
              <p>${i.desc}</p>
              ${
                i.url
                  ? `<a class="text-link" href="${i.url}" target="_blank" rel="noopener">Visit website ${icon('external')}</a>`
                  : `<span class="incubatee-note">${i.note || i.legal}</span>`
              }
            </div>
          </article>`
        ).join('')}
      </div>
    </div>
  </section>`;
}

export function incubationPage() {
  return `${pageHero({
    crumbs: ['Incubation'],
    eyebrow: 'Technology Incubation Centre',
    title: 'Your idea deserves a bench.',
    lede: 'Ready-to-use laboratories, scientific support and a community of people building bio-businesses in the Northeast. If your idea needs evidence, this is where it starts.',
    meta: `<ul class="hero-facts page-facts"><li>${icon('check')} Rolling applications</li><li>${icon('check')} Flexible lab leases</li><li>${icon('check')} 13 resident incubatees</li></ul>`
  })}
  ${anchorBar([
    { id: 'overview', label: 'Overview' },
    { id: 'who', label: 'Who it’s for' },
    { id: 'benefits', label: 'What you get' },
    { id: 'apply', label: 'How to apply' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'incubatees', label: 'Incubatees' }
  ])}
  ${overview()}
  ${who()}
  ${benefits()}
  ${apply()}
  ${downloads()}
  ${incubatees()}
  ${ctaBand({
    eyebrow: 'Next step',
    title: 'Write the proposal. We will help with the rest.',
    text: 'Start with the application format, or send a short note about your idea. The team can point you to the right facility and the right process.',
    primary: { label: 'Download application', href: '#downloads' },
    secondary: { label: 'Ask a question', href: 'contact.html' }
  })}`;
}
