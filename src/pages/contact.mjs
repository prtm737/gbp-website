import { icon } from '../icons.mjs';
import { SITE, STAFF, LEADERSHIP } from '../data.mjs';
import { pageHero, sectionHead, ctaBand } from '../components.mjs';

function contactGrid() {
  return `<section class="section" id="contact">
    <div class="wrap contact-grid">
      <div class="contact-intro">
        <p class="eyebrow">Get in touch</p>
        <h2 class="display">Tell us what you are working on.</h2>
        <p class="lead">Whether you need a lab, a test, a training programme or a partner, start here. We will route your enquiry to the right team.</p>
        <div class="contact-cards">
          <a class="contact-card" href="mailto:${SITE.email}">
            <span class="contact-icon">${icon('mail')}</span>
            <span><small>General enquiries</small><strong>${SITE.email}</strong></span>
            ${icon('arrowUp')}
          </a>
          <a class="contact-card" href="mailto:${SITE.ceoEmail}">
            <span class="contact-icon">${icon('file')}</span>
            <span><small>Incubation proposals</small><strong>${SITE.ceoEmail}</strong></span>
            ${icon('arrowUp')}
          </a>
          <a class="contact-card" href="tel:+919085060009">
            <span class="contact-icon">${icon('phone')}</span>
            <span><small>Administration</small><strong>${SITE.phone}</strong></span>
            ${icon('arrow')}
          </a>
          <a class="contact-card" href="mailto:${SITE.rhtlEmail}">
            <span class="contact-icon">${icon('honey')}</span>
            <span><small>Honey testing laboratory</small><strong>${SITE.rhtlEmail}</strong></span>
            ${icon('arrowUp')}
          </a>
        </div>
        <address class="contact-address">${icon('pin')}<span>Technology Incubation Centre<br>Near S.P. Office, Amingaon<br>Kamrup, Guwahati, Assam 781031</span></address>
        <div class="contact-socials">
          <span>Follow the park</span>
          <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a>
          <a href="${SITE.twitter}" target="_blank" rel="noopener" aria-label="X (Twitter)">${icon('x')}</a>
          <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a>
        </div>
      </div>

      <form class="contact-form reveal" id="contact-form" action="mailto:${SITE.email}" method="post" enctype="text/plain">
        <div class="form-head">
          <h3>Send an enquiry</h3>
          <p>Fields marked with an asterisk are required.</p>
        </div>
        <div class="form-grid">
          <label class="field"><span>Name *</span><input type="text" name="name" autocomplete="name" required></label>
          <label class="field"><span>Email *</span><input type="email" name="email" autocomplete="email" required></label>
          <label class="field"><span>Organisation</span><input type="text" name="organisation" autocomplete="organization"></label>
          <label class="field"><span>I am interested in</span>
            <select name="interest">
              <option>Incubation and lab space</option>
              <option>Laboratory or facility access</option>
              <option>Honey testing (RHTL)</option>
              <option>Training, internship or exposure visit</option>
              <option>Tenders and procurement</option>
              <option>Media or partnership</option>
              <option>Something else</option>
            </select>
          </label>
        </div>
        <label class="field"><span>Message *</span><textarea name="message" rows="5" required placeholder="A short description of what you need."></textarea></label>
        <div class="form-foot">
          <button class="btn btn-primary" type="submit">Send enquiry ${icon('arrow')}</button>
          <p class="small-note">This form opens your email app with the details filled in. Nothing is stored on this site.</p>
        </div>
        <p class="form-status" id="form-status" role="status" hidden></p>
      </form>
    </div>
  </section>`;
}

function team() {
  return `<section class="section section-tint" id="team">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Directory',
        title: 'The people to call.',
        note: 'Administration, finance, operations and the scientific team. For incubation proposals, write to the CEO’s office.'
      })}
      <div class="leadership-row">
        ${LEADERSHIP.map(
          (p) => `<article class="leader-card reveal">
            <span class="leader-tag">${p.tag}</span>
            <h3>${p.name}</h3>
            <p>${p.role}</p>
            <a class="text-link" href="mailto:${p.email}">${icon('mail')} ${p.email}</a>
          </article>`
        ).join('')}
      </div>
      <div class="team-grid">
        ${STAFF.map(
          (g) => `<section class="team-group reveal">
            <h3><span class="team-icon">${icon(g.icon)}</span>${g.group}</h3>
            <ul>
              ${g.people
                .map(
                  (p) => `<li>
                    <div class="team-person"><strong>${p.name}</strong><span>${p.role}</span></div>
                    <div class="team-links">
                      <a href="mailto:${p.email}">${icon('mail')} ${p.email}</a>
                      <a href="tel:${p.phone.replace(/\s/g, '')}">${icon('phone')} ${p.phone}</a>
                    </div>
                  </li>`
                )
                .join('')}
            </ul>
          </section>`
        ).join('')}
      </div>
      <p class="small-note">Contact details are reproduced from the official Guwahati Biotech Park website. Please report changes to <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
    </div>
  </section>`;
}

function visit() {
  return `<section class="section" id="visit">
    <div class="wrap">
      ${sectionHead({
        eyebrow: 'Visit',
        title: 'Find the campus at Amingaon.',
        note: 'On the north bank of the Brahmaputra, near the S.P. Office and within reach of IIT Guwahati, Gauhati University and the Brahmaputra Industrial Park.'
      })}
      <div class="visit-grid">
        <div class="visit-map reveal">
          <iframe src="${SITE.map}" title="Map showing Guwahati Biotech Park at Amingaon" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          <a class="map-card" href="${SITE.mapLink}" target="_blank" rel="noopener">
            <span class="map-card-icon">${icon('pin')}</span>
            <span><strong>Guwahati Biotech Park</strong><small>Amingaon · Guwahati 781031</small></span>
            ${icon('arrowUp')}
          </a>
        </div>
        <div class="visit-copy">
          <h3>Nearby landmarks</h3>
          <ul class="landmark-list">
            <li>${icon('pin')} S.P. Office, Amingaon</li>
            <li>${icon('pin')} IIT Guwahati</li>
            <li>${icon('pin')} Gauhati University</li>
            <li>${icon('pin')} Brahmaputra Industrial Park</li>
          </ul>
          <p>For visits related to incubation, training or a specific facility, write ahead so the right person can meet you.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${SITE.mapLink}" target="_blank" rel="noopener">Open in Maps ${icon('arrowUp')}</a>
            <a class="btn btn-ghost" href="mailto:${SITE.email}">Email the park</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function contactPage() {
  return `${pageHero({
    crumbs: ['Contact'],
    eyebrow: 'Contact',
    title: 'Let’s talk science, business, or both.',
    lede: 'Find the right person, ask a practical question or plan a visit to the Amingaon campus.',
    meta: `<ul class="hero-facts page-facts"><li>${icon('pin')} Amingaon, Guwahati 781031</li><li>${icon('mail')} ${SITE.email}</li><li>${icon('phone')} ${SITE.phone}</li></ul>`
  })}
  ${contactGrid()}
  ${team()}
  ${visit()}
  ${ctaBand({
    eyebrow: 'Before you write',
    title: 'Applying for incubation?',
    text: 'The application format, guidance notes and annexures are all in one place — start there, then send your proposal to the CEO’s office.',
    primary: { label: 'Application pack', href: 'incubation.html#downloads' },
    secondary: { label: 'How it works', href: 'incubation.html#apply' }
  })}`;
}
