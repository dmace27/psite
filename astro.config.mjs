import { defineConfig } from 'astro/config';

// Keep the foundation portable: generated HTML can be hosted on any static host.
// Set `site` to the real domain when preparing the finished site for publication.
export default defineConfig({ output: 'static' });
