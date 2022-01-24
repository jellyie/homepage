import { Box, Heading, Link, Text, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import ImageBox from './imagebox'

const PlainSection: React.FunctionComponent = ({ children }) => {
  return (
    <Box flexDir='column' w='full' justify='center' align='center' minH='510px'>
      {children}
    </Box>
  )
}

type Props = {
  src: StaticImageData
  title: string
  subtitle: string
}
const ProjectBlock: React.FunctionComponent<Props> = ({
  src,
  title,
  subtitle
}) => {
  const _title = title.toLowerCase()

  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w='full'
        minH='510px'
        spacing={8}
        justify='center'
        align='center'
      >
        <ImageBox src={src} />
        <Stack spacing={4} maxW='400px' align='start'>
          <Heading>{title}</Heading>
          <Text variant='subtitle' textAlign='left'>
            {subtitle}
          </Text>
          <NextLink href={`/projects/${_title}`} passHref>
            <Link pt={8}>
              <Text variant='link'> Read Case Study &rarr;</Text>
            </Link>
          </NextLink>
        </Stack>
      </Stack>
    </>
  )
}

const Section: React.FunctionComponent = ({ children }) => {
  return (
    <Stack
      direction={{ base: 'column' }}
      w='full'
      maxW='820px'
      minH='510px'
      spacing={12}
      justify='center'
      align='start'
    >
      {children}
    </Stack>
  )
}
export { ProjectBlock, PlainSection }
export default Section
