/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            Exo: ["exo"],
        },
        screens: {
            mb: "359px",
            tl: "767px",
            lt: "1023px",
            dt: "1279px",
        },
        boxShadow: {
            buttonShadow: "0px 10px 16px 0px rgba(255,254,254,0.75);",
        },
        backgroundColor: {
            bgButton: "#118273",
            premierColor: "#00544a",
            bgOverlay: "rgba(0, 0, 0, 0.5)",
        },
        extend: {
            preload: {
                none: "none",
                metadata: "metadata",
                auto: "auto",
            },
            fontSize: {
                13: "13px",
                14: "14px",
                16: "16px",
                20: "20px",
                24: "24px",
                26: "26px",
                32: "32px",
                32: "32px",
                48: "48px",
            },
        },
    },
    variants: {
        extend: {
            preload: ["responsive"],
        },
    },
    plugins: [],
};
