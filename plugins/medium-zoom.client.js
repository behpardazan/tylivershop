import mediumZoom from 'medium-zoom'
export default defineNuxtPlugin((nuxtApp) => {
    const selector = '.image-zoomable'
    const zoom = mediumZoom(selector, {})
        // (re-)init for newly rendered page, also to work in SPA mode (client-side routing)
    nuxtApp.hook('page:finish', () => {
            zoom.detach(selector)
                .attach(selector)
        })
        // make available as helper to NuxtApp 
    nuxtApp.provide('mediumZoom', zoom)
})