import {
  Box,
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <Box
        py={8}
        px={12}
        background='rgba(239, 241, 251, 0.3)'
        align='center'
        minH='200px'
        maxW='full'
        fontSize='sm'
        justify='center'
      >
        <Stack
          align='center'
          flexDir={{ base: 'column' }}
          spacing={8}
          p={12}
          minH='inherit'
        >
          <Stack
            flexGrow={1}
            alignItems='center'
            justifyContent='center'
            w={{ base: 'full', md: '200px' }}
          >
            <Text textAlign='center' fontSize='md'>
              CONTACT
            </Text>
            <Text>irene@gatech.edu</Text>
            <Spacer h={8} />
            <Text textAlign='center' fontSize='md'>
              SOCIALS
            </Text>
            <HStack spacing={4} maxW='inherit' maxH='inherit' display='flex'>
              <IconButton
                aria-label='linkedin'
                icon={<RiLinkedinLine />}
                as={Link}
                href='https://www.linkedin.com/in/ireneong3441'
                isExternal
              />
              <IconButton
                aria-label='github'
                icon={<RiGithubLine />}
                as={Link}
                href='https://github.com/jellyie'
                isExternal
              />
              <IconButton
                aria-label='instagram'
                icon={<RiInstagramLine />}
                as={Link}
                href=''
              />
            </HStack>
          </Stack>
          <Stack
            flexGrow={1}
            w={{ base: 'full', md: '200px' }}
            justifyContent='flex-end'
          >
            <Text>
              &copy; {new Date().getFullYear()} Irene Ong. All Rights Reserved.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Footer
