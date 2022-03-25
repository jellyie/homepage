import { Box, Container } from '@chakra-ui/react'
import { NextRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'

type Router = {
  router: NextRouter
}
const Main: React.FunctionComponent<Router> = ({ children, router }) => {
  return (
    <Box as='main' pb={4}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Irene's homepage" />
        <meta name='author' content='Irene Ong' />
        <meta name='author' content='jellyie' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta property='og:site_name' content="Irene Ong's Homepage" />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/card.png' />
        <title>Irene Ong - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW='container.xl'>{children}</Container>
      <Footer />
    </Box>
  )
}

export default Main
