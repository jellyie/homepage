import { NextPage } from 'next'
import Layout from '@/layouts/single'
import { Box, Stack, Text } from '@chakra-ui/react'
import Section, { ProjectBlock } from '@/components/section'

import ecopacking from '@/images/ecopacking/ecopacking.png'
import accessguide from '@/images/accessguide/accessguide.png'
import payday from '@/images/payday/payday.png'

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack as='main' justify='center' align='center' py={24}>
        <Box alignItems='center' w='full' display='flex' flexDir='column'>
          <Stack maxW='container.lg' align='center' spacing={85}>
            {/******* Ojective Statement Block *******/}

            <Section>
              <Stack w='full' maxW='688px' alignSelf='center'>
                <Text variant='objective' py={42}>
                  Hi, I&apos;m Irene! I&apos;m a UX designer interested in
                  designing empowering, memorable, and inclusive digital
                  experiences.
                </Text>
              </Stack>
            </Section>

            {/******* Project Block *******/}
            <ProjectBlock
              src={ecopacking}
              title='EcoPacking'
              subtitle='Packaging solution for small craft business owners'
            />

            {/******* Project Block *******/}

            <ProjectBlock
              src={accessguide}
              title='AccessGUIDE'
              subtitle='Sensibile accessibility tools for professors'
            />

            {/******* Project Block *******/}
            <ProjectBlock
              src={payday}
              title='Payday'
              subtitle='Reimagining the retail working experience'
            />
          </Stack>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Home
