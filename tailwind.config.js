/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        // "./node_modules/flowbite.{js,ts}"
    ],
    theme: {

        container: {
            center: true,
        },

    },
    plugins: [
        require('tailwind-scrollbar-hide')
        // ...
    ]
}