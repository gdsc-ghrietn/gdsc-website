/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home': "url('/src/assets/bg_home.jpg')",
            },
            fontWeight: {
                'extraextrabold': '900',
            },
        },
    },
    plugins: [],
}
