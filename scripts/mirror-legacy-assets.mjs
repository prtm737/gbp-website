#!/usr/bin/env node
/**
 * Mirror documents referenced on the old WordPress domain so the new site keeps
 * serving them after the domain is switched over.
 *
 * Usage: node scripts/mirror-legacy-assets.mjs
 * Files are saved under wp-content/uploads/... (the same path as WordPress).
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://www.guwahatibiotechpark.com';
const roots = ['content', 'src'];
const found = new Set();

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (/\.(json|mjs|html)$/.test(entry.name)) {
      const text = await readFile(path, 'utf8');
      const matches = text.matchAll(
        /https:\/\/www\.guwahatibiotechpark\.com\/wp-content\/uploads\/[^"'\s)<]+/g
      );
      for (const match of matches) found.add(match[0].replace(/[.,;]+$/, ''));
    }
  }
}

for (const root of roots) await walk(root);

console.log(`Found ${found.size} legacy upload links`);
let downloaded = 0;
let skipped = 0;

for (const url of [...found].sort()) {
  const path = new URL(url).pathname.replace(/^\//, '');
  const target = path;
  try {
    await readFile(target);
    skipped += 1;
    continue;
  } catch {
    // not mirrored yet
  }
  try {
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
      console.warn(`skip ${response.status} ${url}`);
      continue;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buffer);
    downloaded += 1;
    console.log(`saved ${(buffer.length / 1024).toFixed(0)} kB  ${path}`);
  } catch (error) {
    console.warn(`failed ${url}: ${error.message}`);
  }
}

console.log(`Downloaded ${downloaded}, already mirrored ${skipped}`);
