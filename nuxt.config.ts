// https://nuxt.com/docs/api/configuration/nuxt-config

const version = 'master'
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    [`github:Callan003/test-nuxt-layers/a#${version}`, { giget: { install: true }}],
    [`github:Callan003/test-nuxt-layers/b#${version}`, { giget: { install: true }}],
  ]
})
