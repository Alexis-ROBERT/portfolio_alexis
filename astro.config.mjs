import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';
import compressor from "astro-compressor";
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
    site: "https://alexisrobert.fr/",
    compressHTML: true,
    experimental: {},
    output: 'hybrid',
    integrations: [react(), tailwind({
        applyBaseStyles: false
    }), sitemap(), robotsTxt(), compress(), compressor(),],
    vite: {
        ssr: {
            noExternal: ["@astrojs/react", "react-markdown", "react-obfuscate", "react-google-recaptcha-v3"],
        }
    },
    adapter: vercel()
});
