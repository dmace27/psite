import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hrefSchema, photoSchema, siteSchema, paragraphSchema } from '../src/content/schema.ts';

const base = {
  metadata: { title: 'Draft', description: 'A draft.' },
  identity: { name: 'Owner', introduction: [], links: [] },
  navigation: [], sections: [],
};
const prose = { id: 'about', title: 'About', type: 'prose', paragraphs: [[{ text: 'Hello.' }]] };

test('an empty draft remains valid before the owner supplies content', () => {
  assert.equal(siteSchema.parse(base).sections.length, 0);
});
test('rich text preserves spaces between plain text and highlighted words', () => {
  const spans = paragraphSchema.parse([{ text: 'A thought about ' }, { text: 'building' }, { text: ' things.' }]);
  assert.equal(spans.map((span) => span.text).join(''), 'A thought about building things.');
});
test('navigation cannot silently point at a missing or duplicate section', () => {
  assert.equal(siteSchema.safeParse({ ...base, navigation: [{ label: 'About', href: '#about' }] }).success, false);
  assert.equal(siteSchema.safeParse({ ...base, sections: [prose, prose] }).success, false);
  assert.equal(siteSchema.safeParse({ ...base, sections: [{ ...prose, id: 'main' }] }).success, false);
  assert.equal(siteSchema.safeParse({ ...base, sections: [prose], navigation: [{ label: 'About', href: '#about' }] }).success, true);
});
test('authored links reject executable and ambiguous destinations', () => {
  for (const href of ['javascript:alert(1)', 'data:text/html,test', '//external.test', '/\\external.test', '/a b']) {
    assert.equal(hrefSchema.safeParse(href).success, false, href);
  }
  for (const href of ['https://example.com', 'mailto:owner@example.com', '/notes/a', '#about']) {
    assert.equal(hrefSchema.safeParse(href).success, true, href);
  }
});
test('photo content must include local media, useful alt text and dimensions', () => {
  const photo = { src: '/images/photo.webp', alt: 'A described scene.', caption: 'A moment.', width: 800, height: 600 };
  assert.equal(photoSchema.safeParse(photo).success, true);
  assert.equal(photoSchema.safeParse({ ...photo, alt: ' ' }).success, false);
  assert.equal(photoSchema.safeParse({ ...photo, width: 0 }).success, false);
  assert.equal(photoSchema.safeParse({ ...photo, src: 'https://example.com/photo.webp' }).success, false);
});
test('each section variant enforces its own required content', () => {
  assert.equal(siteSchema.safeParse({ ...base, sections: [{ id: 'work', title: 'Work', type: 'entries', paragraphs: prose.paragraphs }] }).success, false);
  assert.equal(siteSchema.safeParse({ ...base, sections: [{ ...prose, paragraphs: [] }] }).success, false);
});
