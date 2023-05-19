import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
