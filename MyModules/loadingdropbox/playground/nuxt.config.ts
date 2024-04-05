export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true },
  plugins: [
    "~/../src/runtime/plugin.ts"
  ]
})
