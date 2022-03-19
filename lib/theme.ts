import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  secondaryBG: '#f8f8fa',
  offWhite: 'rgba(239, 241, 251, 0.92)',
  darkBlue: 'rgba(12, 20, 36, 1)',
  darkGrey: 'rgba(129, 138, 159, 1)',
  lightGrey: 'rgba(168, 198, 255, 0.19)'
}

const fonts = {
  ...chakraTheme.fonts,
  heading: 'Yeseva One',
  body: 'Nunito Sans'
}

const components = {
  Text: {
    variants: {
      title: {
        fontFamily: 'Yeseva One',
        fontSize: { base: 26, md: 36 },
        fontWeight: 400,
        lineHeight: '41.58px'
      },
      subtitle: {
        fontSize: { base: 16, md: 20 },
        fontWeight: 300,
        color: '#646262',
        lineHeight: '32.74px'
      },
      objective: {
        fontSize: { base: 28, md: 38 },
        fontWeight: 200,
        textAlign: 'center'
      },
      link: {
        fontSize: { base: 16, md: 18 },
        fontWeight: 300,
        lineHeight: '24.55px',
        color: '#646262'
      },
      h1: {
        fontSize: { base: 20, md: 32 },
        fontWeight: 600,
        lineHeight: '51.83px'
      },
      h2: {
        fontSize: { base: 18, md: 28 },
        fontWeight: 600,
        lineHeight: '38px'
      },
      h3: {
        fontSize: { base: 16, md: 24 },
        fontWeight: 700,
        lineHeight: '32.74px'
      },
      body: {
        fontSize: { base: 14, md: 20 },
        fontWeight: 100,
        textAlign: 'left',
        lineHeight: '32.75px',
        letterSpacing: 'tight'
      }
    }
  }
}

const overrides = {
  fonts,
  colors,
  components
}

const theme = extendTheme(overrides)

export default theme
