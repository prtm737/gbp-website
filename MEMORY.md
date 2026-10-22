# Project Memory — Guwahati Biotech Park website

> **Rule:** Append a dated entry to the **Update log** for every change made to this
> project. Keep the newest entry at the top. Update **Project state** as well when the
> architecture, commands, deployment or content model changes.

## Project state

- **Goal:** Replace `guwahatibiotechpark.com` (WordPress) with a secure, fast,
  SEO-friendly static site that non-technical staff can edit.
- **Repo:** `https://github.com/prtm737/gbp-website.git` (branch `main`).
- **Local path:** `/data/data/com.termux/files/home/storage/shared/Dev/projects/gbpwebsite`
- **Live/canonical URL:** `https://www.guwahatibiotechpark.com` (`SITE.url` in
  `content/site.json`).
- **Architecture:** Static site generator in `build.mjs` + JSON content in `content/`
  + Pages CMS (`.pages.yml`) + Netlify hosting/building. No database or server runtime.
- **Deploy:** Netlify build command `node build.mjs`, publish directory `dist`.
  `netlify.toml` holds security headers, legacy redirects and `NODE_VERSION = "22"`.
- **CMS:** `https://app.pagescms.org` with the GitHub app installed on the repo.
  Editors sign in with GitHub, edit content, commit to `main`; Netlify rebuilds.
  Netlify Identity / Git Gateway is deprecated, so it is not used.
- **Legacy links:** 33 old WordPress PDFs mirrored under `wp-content/uploads/`
  (23 MB) and copied into `dist/`, so old absolute links keep working.
- **Generated imagery:** `scripts/generate-images.py` (Pillow, text-free because
  `_imagingft` is unavailable in this Termux environment). Logo-derived images live
  in `assets/img/generated/`.
- **Known gaps:** contact form is still `mailto:`; achievement photos/videos are
  generated placeholders until real media is supplied; editors need GitHub accounts.

## Commands

```bash
node build.mjs                                  # build root HTML + dist/
python3 scripts/generate-images.py              # regenerate logo-based images
node scripts/mirror-legacy-assets.mjs           # re-download old WordPress uploads
python3 -m http.server 4173 -d dist             # local preview
node --check assets/js/site.js                  # JS syntax check
```

Always run `node build.mjs` after editing `src/` or `content/`, then verify links and
JSON-LD before finishing. Generated root `*.html`, `sitemap.xml`, `robots.txt` and
`dist/` are build output — do not hand-edit them.

## Key files

- `build.mjs` — build pipeline, SEO/sitemap/robots/404, `dist/` packaging.
- `src/layout.mjs` — head meta, canonical/OG, JSON-LD (Organization, WebSite,
  BreadcrumbList), header/footer, search index.
- `src/data.mjs` — loads all `content/*.json`.
- `src/components.mjs` — shared components and `customSections()`.
- `src/pages/*.mjs` — one module per page.
- `content/*.json` — all editable content.
- `.pages.yml` — Pages CMS collections and fields.
- `netlify.toml` — build settings, CSP/security headers, 301 redirects.
- `admin/index.html` — noindex CMS landing/redirect page.
- `src/css/26-achievements.css` — achievements gallery, lightbox, custom sections.

## Decisions

- Static hosting over a server CMS: lower cost, smaller attack surface, better SEO.
- Pages CMS over Decap + Netlify Identity: Identity/Git Gateway is deprecated.
- Text-free generated images: no font rendering support in local Pillow.
- Mirror legacy PDFs instead of redirecting them, to preserve old document links.
- Campus location corrected to **Amingaon**; avoid “north bank of the Brahmaputra”.

## Editor access (Pages CMS)

1. Open `https://app.pagescms.org` and sign in with GitHub.
2. Authorize the Pages CMS GitHub App for `prtm737/gbp-website`; choose branch `main`.
3. Collections come from `.pages.yml`:
   - **Achievements & activities** — add/edit entries, upload a cover photo, extra
     gallery photos, and paste a YouTube/Vimeo URL for video.
   - **News & notices**, **Incubatees**, **Facilities**, **Downloads**, **Staff**,
     **Site settings**, **Navigation**, **Pages & SEO**, **Homepage sections**, etc.
4. Media uploads go to `assets/uploads/` (set in `.pages.yml`). Save = commit to
   `main` = Netlify rebuild. Videos must be YouTube/Vimeo links, not MP4 uploads.
5. Editors need a GitHub account with write access to the repo
   (GitHub → Settings → Collaborators). The public repo only exposes content,
   never secrets.

## Update log

### 2026-10-22 14:10 IST — Pushed to GitHub
- Committed all work as `e1eef51` and pushed `main` to
  `https://github.com/prtm737/gbp-website`.
- Repo is public; 89 files in the commit, including 33 mirrored PDFs and generated
  images.
- Netlify deployment is **pending**: no Netlify CLI/auth token exists in this
  environment. Import the repo at Netlify (build `node build.mjs`, publish `dist`);
  `netlify.toml` supplies the rest.

### 2026-10-22 14:00 IST — Initial memory file
- Created `MEMORY.md` to record project state and every future update.
- Recorded the completed rebuild: JSON content layer, Pages CMS config, achievements
  page/gallery/lightbox, Amingaon copy fixes, generated images, SEO (canonical, OG,
  sitemap, robots, 404, structured data), Netlify config, and 33 mirrored PDFs.
- Final verification: build succeeds; 8 pages; 0 broken internal links; valid
  JSON-LD; `dist/` ~26 MB; no secrets in the repo.
- Production copy prepared: removed “independent redesign” disclaimers, replaced
  old external links with internal pages, added redirects for events/training/
  Bamboo competition/category/tag/author, added breadcrumb, FAQ and achievements
  collection structured data.
