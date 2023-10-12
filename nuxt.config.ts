const path = require('path');

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Pedro Ondiviela CV',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: 'description', content: 'Front-end Developer with a strong focus on UX and animations' },
                {
                    property: 'og:site_name',
                    content: 'Pedro Ondiviela CV'
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]
        }
    },
    css: [
        '@/assets/styles/_reset.scss',
        '@/assets/styles/_fonts.scss',
        '@/assets/styles/_default.scss',
        '@/assets/styles/_custom-classes.scss'
    ],
    experimental: {
        payloadExtraction: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                            @import "${path.resolve(__dirname, './assets/styles/_functions.scss')}";
                            @import "${path.resolve(__dirname, './assets/styles/vars/_breakpoints.scss')}";
                            @import "${path.resolve(__dirname, './assets/styles/vars/_vars.scss')}";
                        `,
                },
            },
        },
    }
})