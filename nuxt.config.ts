// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    [`github:Callan003/test-nuxt-layers/a#master`, { giget: { install: true }}],
    [`github:Callan003/test-nuxt-layers/b#master`, { giget: { install: true }}],
  ]
})
