const axios = require('axios')
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        // titleTemplate: '%s - car_new',
        title: 'تاجير السيارات في  دبي |أحجز سيارتك الان |أرخص الاسعار ناجير السيارات',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '    أفضل الأسعار المضمونة على تأجير السيارات الراقية والاقتصاد و العائلية في دبي   ، احجز عبر الاتصال فقط.' },
            { hid: 'keywords', name: 'keywords', content: 'استئجار سيارة ، تأجير سيارات ، تأجير سيارات ، تأجير سيارات ، تأجير ، في ، شهري ، رخيص ، أرخص ، طويل الأجل ، خصم ، عبر الإنترنت ، تكلفة منخفضة ، أفضل ، ميزانية ، مطار ، دبي ، الإمارات العربية المتحدة ، الشارقة ، أبو ظبي ، الإمارات ، مقتصد، دولار، هيرتز، كيا، هيونداي، عرض ايجار سيارات دبي - ايجار سيارات في دبي - ايجار سيارات تأجير سيارات في دبي - تأجير سيارات دبي - تأجير سيارات سيارات للإيجار في دبي - سيارات للإيجار دبي - سيارات للإيجار سيارات ايجار - سيارات ايجار في دبي ايجار سيارة في دبي استئجار سيارة في دبي استأجر سيارة في دبي - استأجر سيارة أرخص ايجار سيارات دبي ارخص تأجير سيارات في دبي تأجير سيارات في دبي رخيص مكتب تأجير سيارات - مكتب تأجير سيارات في دبي - مكتب تأجير سيارات دبي مكاتب تأجير سيارات في دبي مكاتب ايجار سيارات في دبي أفضل مكتب تأجير سيارات في دبي افضل شركة تأجير سيارات في دبي شركات تأجير سيارات دبي استئجار سيارة دبي سيارات ايجار دبي ايجار سيارات بدبي ارخص ايجار سيارات في دبي تاجير سيارات في الامارات دبي تاجير سيارات تاجير سيارات بدبي شركات تأجير السيارات في دبي مكتب ايجار سيارات في دبي مكاتب لتأجير السيارات محل ايجار سيارات في دبي محل تاجير سيارات حجز سيارات دبي حجز سيارة في' },
            {
                name: "google-site-verification",
                content: "P_hur7GoEZ8UIlFzio0UQhJNk81AyPEjmp6O7FEQlhg"
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/d.jpeg' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'vue-slick-carousel/dist/vue-slick-carousel.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: 'plugins/vue-slick-carousel.js', ssr: false },
        { src: 'plugins/getuser', mode: 'client' },
        { src: 'plugins/auth' }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        ['@nuxtjs/axios', {
            baseURL: "https://api.albasheerrentcar.com/api/"
        }],
        [
            'nuxt-i18n',
            {
                locales: [{
                    code: 'en',
                    file: 'en-US.js'
                },
                {
                    code: 'ar',
                    file: 'ar-AE.js'
                }
                ],
                lazy: true,
                langDir: 'lang/',
                defaultLocale: 'ar',
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: 'i18n_redirected',
                    onlyOnRoot: true,
                },
            }
        ],
        ['@nuxtjs/sitemap']
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {

    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        rtl: true,
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#42a5f6',
                    secondary: '#050b1f',
                    accent: '#204165',
                },
                dark: {},
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    loading: {
        color: 'blue',
        height: '5px'
    },
    
    sitemap:{
        hostname: 'https://albasheerrentcar.com',
        exclude: [
            '/login',
            '/admin',
            '/admin/addcar',
            '/admin/editcar',
            '/en/admin',
            '/en/login',
            '/en/admin/addcar',
            '/en/admin/editcar'
        ],
    }
}