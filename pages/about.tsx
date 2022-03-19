import { NextPage } from 'next/types'
import Layout from '@/layouts/single'
import {
  Stack,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Image,
  ListIcon
} from '@chakra-ui/react'
import {
  RiArticleLine,
  RiGithubFill,
  RiLinkedinBoxLine,
  RiMailSendFill
} from 'react-icons/ri'

const About: NextPage = () => {
  return (
    <>
      <Layout title='About'>
        <Stack as='main' align='center' justify='center' py={24}>
          <Box
            display='flex'
            flexDir='column'
            mt={10}
            alignItems='center'
            w='full'
          >
            <Stack spacing={16} maxW='688px'>
              <Text variant='body'>
                Hi there! I’m Irene and I am currently pursuing a masters in
                Human Computer Interaction at Georgia Tech.
              </Text>
              <Text variant='body'>
                I came to the United States in 1998 as an enormous, chubby baby.
                I grew up with one of those classic, fat desktop computers
                during the age of dial-up connection, and I was a gaming maniac.
                I learned to code in high school and naturally, when it came
                time to choose a path in college, I would choose computers.
                Although I started my college career in computer science, after
                an extraordinary English course involving multimodal writing
                projects, I became interested in the space between technology
                and communication. I graduated from Georgia State University
                with a degree in English, Rhetoric and Composition and a minor
                in Computer Science. I became interested in HCI after my
                exchange program in Seoul, South Korea where I worked with a
                team to build a VR escape room game and evaluate it through
                usability tests.
              </Text>
              <Text variant='body'>
                …I love working on interesting design projects that offer novel
                ways of interacting with technology, but outside of the design
                space, I enjoy translating things (KOR › ENG), laying around
                with my dog 🐕, reading graphic novels or nonfiction 📚, and
                building things like vivariums 🪴, mechanical keyboards ⌨️,
              </Text>

              <Box
                background='gray.50'
                flexDir='row'
                alignItems='center'
                display='flex'
                borderRadius='lg'
                p={4}
              >
                <Image
                  src='/avatar.png'
                  boxSize='275px'
                  objectFit='cover'
                  borderRadius='lg'
                  mx={5}
                  alt='Avatar'
                />
                <Stack maxW='xl'>
                  <Text
                    fontWeight='bold'
                    fontSize={{ base: 14, md: 20 }}
                    letterSpacing='tight'
                    lineHeight='32.75px'
                    pb={6}
                  >
                    Connect with me!
                  </Text>
                  <UnorderedList spacing={5} m={0} listStyleType='none'>
                    <ListItem>
                      <Text fontSize={{ base: 12, md: 17 }}>
                        <ListIcon as={RiMailSendFill} />
                        Best way to contact me: irene@gatech.edu
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Link
                        href='https://www.linkedin.com/in/ireneong3441'
                        isExternal
                      >
                        <Text fontSize={{ base: 12, md: 17 }}>
                          <ListIcon as={RiLinkedinBoxLine} />
                          @ireneong3441
                        </Text>
                      </Link>
                    </ListItem>

                    <ListItem>
                      <Link href='https://github.com/jellyie' isExternal>
                        <Text fontSize={{ base: 12, md: 17 }}>
                          <ListIcon as={RiGithubFill} />
                          @ireneong3441
                        </Text>
                      </Link>
                    </ListItem>

                    <ListItem>
                      <Link
                        href='https://drive.google.com/file/d/1-0md0yRYoJNnlQuP67XAGY_gNsl7FmrH/view?usp=sharing'
                        isExternal
                      >
                        <Text fontSize={{ base: 12, md: 17 }}>
                          <ListIcon as={RiArticleLine} />
                          Download my resume
                        </Text>
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Layout>
    </>
  )
}

export default About
