import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePresetMinify from 'rehype-preset-minify';
import react from '@astrojs/react';
import vercelStatic from '@astrojs/vercel';


export default defineConfig({
  site: 'https://cravenceiling.dev',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercelStatic(),
  server: {
    port: parseInt(process.env.PORT || '3000')
  },
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'] }
        ],
        rehypePresetMinify,
      ]
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    smartypants: true,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] }
      ],
    ],
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
})
