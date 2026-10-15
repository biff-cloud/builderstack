import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({output:"static",site:"https://biff-cloud.github.io",base:"/builderstack",trailingSlash:"always",integrations:[sitemap()]});
