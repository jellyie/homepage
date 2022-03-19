import { Box, Heading, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  href?: string
  path: string
}

const LinkObj: React.FunctionComponent<Props> = ({ children, href, path }) => {
  const active = path === href

  return (
    <NextLink href={href as string} passHref>
      <Link
        letterSpacing='wide'
        textAlign='center'
        fontSize={{ base: 12, md: 16 }}
        color={active ? 'black' : '#C4C4C4'}
        fontWeight={active ? 'light' : 'normal'}
      >
        {children}
      </Link>
    </NextLink>
  )
}
const Navbar: React.FunctionComponent<Props> = ({ path }) => {
  return (
    <Box w='full' h='28px' pos='fixed' zIndex='1' p={8}>
      <HStack justify='space-between' align='center' mx={16}>
        <LinkObj href='/' path={path}>
          Portfolio
        </LinkObj>
        <NextLink href='/' passHref>
          <Link>
            <Heading textAlign='center' fontSize={{ base: 20, md: 24 }}>
              IRENE ONG
            </Heading>
          </Link>
        </NextLink>
        <LinkObj href='/about' path={path}>
          About
        </LinkObj>
      </HStack>
    </Box>
  )
}

export default Navbar
