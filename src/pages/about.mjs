import { icon } from '../icons.mjs';
import { SITE, FAQS, LEADERSHIP, INSTITUTES } from '../data.mjs';
import { pageHero, sectionHead, ctaBand } from '../components.mjs';

function story() {
  return `<section class="section">
    <div class="wrap story-grid">
      <div class="story-media reveal">
        <img src="assets/img/GBP62-1-scaled.jpg" alt="The Guwahati Biotech Park entrance sign among trees at the Amingaon campus" width="2000" height="945" loading="lazy">
        <p class="story-caption">${icon('pin')} The Amingaon campus, Kamrup</p>
      </div>
      <div class="story-copy">
        <p class="eyebrow">Our story</p>
        <h2 class="display">Built to make research useful.</h2>
        <p class="lead">Assam is home to extraordinary biological wealth. Guwahati Biotech Park exists to turn that advantage into companies, jobs and products that last.</p>
        <p>Conceived in 2008 to carry Assam’s State Biotechnology Policy from paper into practice, the park is a registered society and the first biotech park in East and Northeast India. It was promoted by the Government of Assam and supported by the Department of Biotechnology, Government of India.</p>
        <p>The 21-acre campus at Amingaon brings together ready-to-use laboratories, specialised analytical facilities, incubation, training and business support. The aim is simple: give scientists and founders the infrastructure and connections that are hardest to build alone.</p>
        <ul class="fact-list">
          <li>${icon('check')} First biotech park in East and Northeast India</li>
          <li>${icon('check')} Joint initiative of the Government of Assam and DBT, Government of India</li>
          <li>${icon('check')} 21-acre campus at Amingaon, Kamrup</li>
          <li>${icon('check')} 13 resident incubatees and institutions</li>
        </ul>
      </div>
    </div>
  </section>`;
}

function vision() {
  return `<section class="section section-dark" id="vision">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Vision & mission',
        title: 'A meeting point for science and enterprise.',
        note: 'The park’s mandate is regional, scientific and commercial at the same time.',
        dark: true
      })}
      <div class="vm-grid">
        <article class="vm-card reveal">
          <span class="vm-label">Vision</span>
          <blockquote>“To explore and utilize the massive bio-resource potential in the region and augment its footprint in the nation’s biotechnology revolution.”</blockquote>
        </article>
        <article class="vm-card reveal">
          <span class="vm-label">Mission</span>
          <p class="vm-mission">To be the meeting point of technological innovation for knowledge-based biotechnology enterprises, and to provide sustainable linkages between industry, research institutions and academia.</p>
          <ul class="vm-list">
            <li>${icon('check')} Support business development</li>
            <li>${icon('check')} Spread innovative products, processes and methods</li>
            <li>${icon('check')} Build distinctive knowledge and skills</li>
            <li>${icon('check')} Strengthen the region’s competitiveness</li>
          </ul>
        </article>
      </div>
    </div>
  </section>`;
}

function why() {
  const reasons = [
    {
      icon: 'spark',
      title: 'First of its kind',
      text: 'The first biotech park in East and Northeast India, with a decade-plus of experience supporting science-led ventures.'
    },
    {
      icon: 'globe',
      title: 'A connected location',
      text: 'Guwahati links every state of the Northeast and connects the region to the rest of India and the world.'
    },
    {
      icon: 'leaf',
      title: 'A biodiversity gateway',
      text: 'A route to the region’s natural diversity for product development, new drug discovery and bio-resource innovation.'
    },
    {
      icon: 'users',
      title: 'Research within reach',
      text: 'Close ties with IIT Guwahati, Gauhati University, Tezpur University and a wide network of regional research centres.'
    }
  ];

  return `<section class="section" id="why">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Why GBP',
        title: 'Proximity matters in deep science.',
        note: 'The park sits inside a dense research geography — and gives founders a practical way to use it.'
      })}
      <div class="why-grid">
        ${reasons
          .map(
            (r) => `<article class="why-card reveal">
              <span class="why-icon">${icon(r.icon)}</span>
              <h3>${r.title}</h3>
              <p>${r.text}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function ecosystem() {
  const group = (title, list) => `<div class="eco-group reveal">
    <h3>${title}</h3>
    <ul>${list.map((i) => `<li>${i}</li>`).join('')}</ul>
  </div>`;

  return `<section class="section section-tint" id="ecosystem">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'The ecosystem',
        title: 'A campus inside a research network.',
        note: 'Biotechnology is multidisciplinary. The park’s connections with nearby institutes, research centres and universities make collaboration routine rather than exceptional.'
      })}
      <div class="eco-grid">
        ${group('Institutes', INSTITUTES.institutes)}
        ${group('Research centres', INSTITUTES.centres)}
        ${group('Universities', INSTITUTES.universities)}
      </div>
    </div>
  </section>`;
}

function people() {
  return `<section class="section" id="people">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Leadership',
        title: 'The people steering the park.',
        note: 'Guwahati Biotech Park is guided by a Council of Management and led by an executive team drawn from the Government of Assam.'
      })}
      <div class="people-grid">
        ${LEADERSHIP.map(
          (p) => `<article class="person-card reveal">
            <span class="person-avatar" aria-hidden="true">${p.tag === 'CEO' ? 'DM' : 'RT'}</span>
            <div>
              <span class="person-tag">${p.tag}</span>
              <h3>${p.name}</h3>
              <p>${p.role}</p>
              <a class="text-link" href="mailto:${p.email}">${icon('mail')} ${p.email}</a>
            </div>
          </article>`
        ).join('')}
      </div>
      <div class="council-note">
        <p>The Council of Management includes representatives of the Government of Assam, the Department of Biotechnology and partner institutions.</p>
        <a class="text-link" href="${SITE.source}/council-of-management/" target="_blank" rel="noopener">Council of Management and key persons ${icon('external')}</a>
      </div>
    </div>
  </section>`;
}

function faq() {
  return `<section class="section section-tint" id="faq">
    <div class="wrap faq-grid">
      <div class="faq-head">
        <p class="eyebrow">Questions</p>
        <h2 class="display">Good to know.</h2>
        <p>The practical details founders ask about first. If your question is not here, write to us.</p>
        <a class="btn btn-primary" href="contact.html">Ask the team ${icon('arrow')}</a>
      </div>
      <div class="faq-list">
        ${FAQS.map(
          (f, i) => `<details class="faq-item"${i === 0 ? ' open' : ''}>
            <summary><span>${f.q}</span><span class="faq-plus" aria-hidden="true">${icon('plus')}${icon('minus')}</span></summary>
            <div class="faq-answer"><p>${f.a}</p></div>
          </details>`
        ).join('')}
      </div>
    </div>
  </section>`;
}

export function aboutPage() {
  return `${pageHero({
    crumbs: ['About'],
    eyebrow: 'About the park',
    title: 'A shared ambition for the Northeast.',
    lede: 'Guwahati Biotech Park is where the region’s biological wealth, scientific talent and entrepreneurial energy meet. It is the first biotech park in East and Northeast India — and a working launchpad for science-led business.'
  })}
  ${story()}
  ${vision()}
  ${why()}
  ${ecosystem()}
  ${people()}
  ${faq()}
  ${ctaBand({
    eyebrow: 'Work with us',
    title: 'Build where the science already is.',
    text: 'Join a campus of founders, scientists and institutions working on the region’s most useful biological problems.',
    primary: { label: 'Apply for incubation', href: 'incubation.html#apply' },
    secondary: { label: 'Explore facilities', href: 'facilities.html' }
  })}`;
}
