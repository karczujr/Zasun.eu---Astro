import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'na7bbm4e',
    dataset: 'production',
    apiVersion: '2023-08-08',
    useCdn: true,
  })]
});