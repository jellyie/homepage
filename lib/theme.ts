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
        fontSize: 36,
        fontWeight: 400,
        lineHeight: '41.58px'
      },
      subtitle: {
        fontSize: 24,
        fontWeight: 300,
        color: '#646262',
        lineHeight: '32.74px'
      },
      objective: {
        fontSize: 38,
        fontWeight: 600,
        lineHeight: '51.83px',
        textAlign: 'center'
      },
      link: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: '24.55px',
        color: '#646262'
      },
      h1: {
        fontSize: 32,
        fontWeight: 600,
        lineHeight: '51.83px'
      },
      h2: {
        fontSize: 28,
        fontWeight: 600,
        lineHeight: '38px'
      },
      h3: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: '32.74px'
      },
      body: {
        fontSize: 24,
        fontWeight: 300,
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