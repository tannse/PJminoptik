/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            Exo: ["exo"],
        },
        screens: {
            mb: "320px",
            mbx: "427px",
            tl: "767px",
            lt: "1023px",
            dt: "1279px",
        },
        boxShadow: {
            Shadow: " 0px 10px 6px -1px rgba(0,0,0,0.2);",
            whiteShadow: "0px 14px 6px 0px rgba(255,255,255,0.18);",
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
        backgroundImage: {
            "background-footer": "url('/src/components/assets/FOOTER.jpg')",
        },
    },
    variants: {
        extend: {
            preload: ["responsive"],
        },
    },
    plugins: [],
};
