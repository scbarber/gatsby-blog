import Typography from "typography"

const typography = new Typography({
  title: "Unemp",
  baseFontSize: "16px",
  baseLineHeight: 1.61,
  headerFontFamily: ["Roboto Mono", "sans-serif"],
  headerColor: "#E83030",
  bodyFontFamily: ["Roboto", "sans-serif"],
  bodyWeight: 300,
  headerWeight: 300,
  boldWeight: 700,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300", "700"],
    },
    {
      name: "Roboto Mono",
      styles: ["300", "700"],
    },
  ],
  scaleRatio: 1.618,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'a': {
      color: "#4681CC",
    }
  })})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
