export const FONT_CONFIG = {
    headers: {
        family: '"Libre Baskerville", serif',
        weights: {
            regular: '400',
            semibold: '600',
            bold: '700'
        }
    },
    body: {
        family: '"Fira Mono", monospace',
        weights: {
            regular: '400',
            medium: '500',
            bold: '700'
        }
    }
} as const;

export const theme = {
    colors: {
        primary: '#FF8C00', //color de accents
        secondary: '#FFB90F',
        accent: '#FFD700',
        dark: '#181818',
        light: '#FFFFFF',
        gray: {
            100: '#f7f7f7',
            200: '#e1e1e1',
            500: '#8c8c8c',
            700: '#4a4a4a',
            900: '#1a1a1a',
        }
    },
    fonts: {
        header: FONT_CONFIG.headers.family,
        body: FONT_CONFIG.body.family,
    },

    fontWeights: {
        regular: FONT_CONFIG.body.weights.regular,
        medium: FONT_CONFIG.body.weights.medium,
        semibold: FONT_CONFIG.headers.weights.semibold,
        bold: FONT_CONFIG.headers.weights.bold,
    },

    typography: {
        h1: `text-6xl md:text-9xl font-semibold ${FONT_CONFIG.headers.family}`,
        h2: `text-5xl md:text-7xl font-semibold ${FONT_CONFIG.headers.family}`,
        h3: `text-4xl md:text-5xl font-semibold ${FONT_CONFIG.headers.family}`,
        h4: `text-2xl md:text-3xl font-semibold ${FONT_CONFIG.headers.family}`,
        h5: `text-xl md:text-2xl font-semibold ${FONT_CONFIG.headers.family}`,
        h6: `text-lg md:text-xl font-semibold ${FONT_CONFIG.headers.family}`,
        body: `text-base font-regular ${FONT_CONFIG.body.family}`,
        caption: `text-sm font-regular text-gray-500 ${FONT_CONFIG.body.family}`,
    },

    spacing: {
        section: 'py-16 md:py-24',
        container: 'px-[5%]',
        button: {
            sm: 'px-4 py-2',
            md: 'px-6 py-3',
            lg: 'px-8 py-4',
        }
    },

    effects: {
        shadow: {
            small: 'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
            medium: 'shadow-[0_4px_20px_rgba(0,0,0,0.15)]',
            large: 'shadow-[0_8px_40px_rgba(0,0,0,0.2)]',
        },
        gradient: {
            primary: 'bg-gradient-to-r from-[#FF8C00] to-[#FFB90F]',
            dark: 'bg-gradient-to-b from-[#181818]/50 to-[#181818]/80',
        }
    },

    breakpoints: {
        mobile: '768px',
        tablet: '1024px',
        desktop: '1280px',
    }
} as const;

export type Theme = typeof theme;