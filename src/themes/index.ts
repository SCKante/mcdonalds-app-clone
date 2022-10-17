import {createTheme} from '@shopify/restyle';


const theme = createTheme({
  colors: {
    mainBackground: '#F0F2F3',
    primary:'#e9962d',
    grey: '#a3a2a1',
    white: '#F0F2F3',
    lightgrey: "#E8E8E8",
    grey30: "rgba(255 255 255 0.3)",
    black: '#0c0a08',
    accent1: "#6a8c7e",
    accent2: "#decaab",
    accent3: "#b0551b"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 28,
    xl: 38,
    null: 0
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 20,
    xl: 30,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;