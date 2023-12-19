import { createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core';

const themeOverride = createTheme({
    defaultGradient: {
        from: 'orange.4',
        to: 'red.8',
        deg: 340
    },
    fontFamily: 'Prompt, sans-serif',

    headings: {
        fontFamily: 'Bungee Spice',
        fontWeight: '550'
    },
    primaryColor: 'orange'
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
