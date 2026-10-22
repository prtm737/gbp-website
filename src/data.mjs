import { readFileSync } from 'node:fs';

const read = (name) =>
  JSON.parse(readFileSync(new URL(`../content/${name}.json`, import.meta.url), 'utf8'));

export const SITE = read('site');
export const NAV = read('navigation');
export const SECTORS = read('sectors');
export const FACILITIES = read('facilities');
export const INCUBATEES = read('incubatees');
export const NEWS = read('news');
export const CATEGORIES = read('categories');
export const FAQS = read('faqs');
export const LEADERSHIP = read('leadership');
export const STAFF = read('staff');
export const DOWNLOADS = read('downloads');
export const INSTITUTES = read('institutes');
export const ACHIEVEMENTS = read('achievements');
export const GOVERNANCE = read('governance');
export const INSTRUMENTS = read('instruments');
export const LABS = read('labs');
export const PUBLICATIONS = read('publications');
export const SECTIONS = read('sections');
export const PAGES = read('pages');
export const SEARCH_INDEX = JSON.parse(
  readFileSync(new URL('./search-index.json', import.meta.url), 'utf8')
);
