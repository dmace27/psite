import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hobbiesSchema } from '../src/content/hobbies-schema.ts';

const hobby = { id: 'music', title: 'Music', paragraphs: [[{ text: 'A personal interest.' }]] };

test('hobby anchors reject duplicates and the main landmark ID', () => {
  assert.equal(hobbiesSchema.safeParse([hobby, hobby]).success, false);
  assert.equal(hobbiesSchema.safeParse([{ ...hobby, id: 'main' }]).success, false);
  assert.equal(hobbiesSchema.safeParse([hobby, { ...hobby, id: 'reading' }]).success, true);
});

test('optional hobby media and activity links enforce the existing content requirements', () => {
  assert.equal(hobbiesSchema.safeParse([{ ...hobby, photos: [{ src: '/images/photo.webp', alt: '', caption: 'A moment', width: 800, height: 600 }] }]).success, false);
  assert.equal(hobbiesSchema.safeParse([{ ...hobby, updates: [{ title: 'Recently', detail: 'A practice session', href: 'javascript:alert(1)' }] }]).success, false);
});
