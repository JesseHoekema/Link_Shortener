import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    // Other SvelteKit configuration options
    adapter: adapter(),
  },
};
