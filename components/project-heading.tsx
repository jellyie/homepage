import { Box, Divider, Stack, Text } from '@chakra-ui/react'
import { ImageRect } from './imagebox'

type Props = {
  src: StaticImageData
  alt: string
  title: string
  timeline: string
  role: string
  deliverable: string
  platform: string
}

const ProjectHeader: React.FunctionComponent<Props> = ({
  src,
  alt,
  title,
  timeline,
  role,
  deliverable,
  platform
}) => {
  return (
    <>
      <Stack maxW='808px'>
        <Text variant='title' minH='124px'>
          {title}
        </Text>
        <ImageRect src={src} alt={alt} />
        <Box pt={8}>
          <Divider />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            p={8}
            spacing={25}
            align={{ base: 'start', md: 'center' }}
            justify='space-between'
          >
            <Stack>
              <Text variant='h3'>Timeline</Text>
              <Text variant='subtitle'>{timeline}</Text>
            </Stack>
            <Stack>
              <Text variant='h3'>Role</Text>
              <Text variant='subtitle'>{role}</Text>
            </Stack>
            <Stack>
              <Text variant='h3'>Deliverable</Text>
              <Text variant='subtitle'>{deliverable}</Text>
            </Stack>
            <Stack>
              <Text variant='h3'>Platform</Text>
              <Text variant='subtitle'>{platform}</Text>
            </Stack>
          </Stack>
          <Divider />
        </Box>
      </Stack>
    </>
  )
}
export default ProjectHeader
