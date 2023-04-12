// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        accessKey: process.env.NUXT_OPENAI_API_KEY,
    },
})
