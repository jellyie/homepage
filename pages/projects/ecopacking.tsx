import { ImageRect } from '@/components/imagebox'
import Layout from '@/components/layouts/single'
import {
  Box,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Link
} from '@chakra-ui/react'
import { NextPage } from 'next/types'

import ProjectHeader from '@/components/project-heading'
import Section from '@/components/section'

import banner from '@/images/ecopacking/banner.png'
import brainstorm from '@/images/ecopacking/brainstorming.png'
import color from '@/images/ecopacking/Color-2.png'
import color_2 from '@/images/ecopacking/Color-3.png'
import color_3 from '@/images/ecopacking/Color-4.png'
import logo from '@/images/ecopacking/logo.png'
import sketch1 from '@/images/ecopacking/sketch-1.png'
import sketch2 from '@/images/ecopacking/sketch-2.png'
import journey from '@/images/ecopacking/journey.png'

import quiz from '@/images/ecopacking/quiz.png'
import results from '@/images/ecopacking/results.png'
import match from '@/images/ecopacking/match.png'
import prototype from '@/images/ecopacking/prototype.png'

const Project: NextPage = () => {
  return (
    <Layout title='EcoPacking'>
      <Stack as='main' align='center' justify='center' py={24}>
        <Box display='flex' flexDir='column' alignItems='center' w='full'>
          <Stack maxW={{ md: '820px' }} w='full' spacing={85}>
            {/****** Header ******/}

            <ProjectHeader
              src={banner}
              alt={''}
              title={'EcoPacking: Sustainability For Craft Business Owners'}
              timeline={'4 months'}
              role={'UX Designer'}
              deliverable={'Interactive Prototype'}
              platform={'Figma'}
            />

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Sustainability is complicated.</Text>
              <Text variant='body'>
                Many businesses are beginning to see the value of aligning with
                their environmentally conscientious consumers. We see evidence
                of this consumer mindset shift amongst small-business
                marketplaces like Etsy committing to offset 100% of carbon
                emissions from shipping and packaging. According to current
                research,{' '}
                <Text fontWeight='bold' as='b'>
                  most small businesses want to be environmentally conscious
                </Text>{' '}
                through their own actions,{' '}
                <Text fontWeight='bold' as='b'>
                  but they don&apos;t know how to achieve this.
                </Text>{' '}
              </Text>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Who are these small business owners?</Text>
              <UnorderedList spacing={2} listStyleType='none'>
                <ListItem>
                  <Text variant='body'>
                    {' '}
                    87% of handmade sellers are women with an average age of 39{' '}
                  </Text>{' '}
                </ListItem>
                <ListItem>
                  <Text variant='body'>
                    {' '}
                    50% of the makers come from suburban areas{' '}
                  </Text>{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <Text variant='body'>
                    {' '}
                    Most sellers work alone and take on all responsibilities
                    related to running the business{' '}
                  </Text>{' '}
                </ListItem>
              </UnorderedList>
            </Section>

            {/****** Section ******/}
            <Section>
              <Text variant='h1'>Meet Taylor.</Text>
              <Text variant='body'>
                Taylor is a 24 year old freelance illustrator, and small craft
                business owner who&apos;s making the move to a digital
                storefront. Taylor traditionally sells her small handmade
                ceramic homeware at local pop-up markets, and she has been
                receiving requests on her Instagram page from fans across the
                country who are asking to purchase her products.{' '}
              </Text>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Taylor&apos;s User Journey</Text>
              <ImageRect src={journey} alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>
                So... what&apos;s Taylor&apos;s problem exactly?
              </Text>
              <Text variant='body'>
                Taylor, like other small craft business owners, lacks the
                support that larger businesses have when it comes to sourcing
                sustainable materials. This is a multifold issue because she
                also lacks the resources to learn about which sustainable
                materials best fit her needs and besides, she’s running a
                one-woman show. Who has time to do that?
              </Text>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Brainstorming ideas</Text>
              <Text variant='body'>
                I worked with my team in a brainstorming session where we
                followed a series of prompts to inspire ideas and initiate
                discussion. The session was guided by our research findings and
                a task analysis of the order fulfillment process.
              </Text>
              <ImageRect src={brainstorm} alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Concepting</Text>
              <Text variant='body'>
                Once we gathered feedback on the concept, we decided to move
                forward with the idea of building a knowledge database for
                sustainable materials.
              </Text>

              <ImageRect src={sketch1} alt='' />
              <ImageRect src={sketch2} alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Building... the building blocks!</Text>
              <Text variant='body'>Logo</Text>
              <ImageRect src={logo} alt='' />
              <Text variant='body'>Color System</Text>
              <ImageRect src={color} alt='' />
              <ImageRect src={color_2} alt='' />
              <ImageRect src={color_3} alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Design Components</Text>
              <Text variant='h3' as='i'>
                &quot;I am always missing information when trying to make
                sustainable decisions.&quot;
              </Text>
              <ImageRect src={quiz} alt='' />
              <Text variant='body'>
                Through conducting user research, I found that most craft
                business owners struggled to find time for researching the best
                sustainable options for their business. To address this issue, I
                incorporated a quiz that matches craft business owners to the
                materials that best fits their needs while providing them an
                option to compare their matches.
              </Text>
            </Section>
            <Section>
              <Text variant='body' as='i'>
                &quot;I struggle between materials that look nice, are
                eco-friendly, and are affordable.
              </Text>
              <ImageRect src={results} alt='' />
              <Text variant='body'>
                Initially, the first iteration of our design did not allow users
                to compare their options. This was a feature added later on
                after conducting several feedback sessions where participants
                told us that they loved the matching system, but regrettably
                wished that there was a way to compare and even mix + match
                components of each match. I learned that my users highly-valued
                the power of choice!
              </Text>
            </Section>
            <Section>
              <Text variant='body' as='i'>
                &quot;I wish there was more information on sustainability for
                small business owners.&quot;
              </Text>
              <ImageRect src={match} alt='' />
              <Text variant='body'>
                Once users are matched to a set of materials, they are presented
                with a 3D model of their materials. This gives them the chance
                to interact with the material and learn more about what makes it
                sustainable and why it&apos;s better than its traditional
                counterpart.
              </Text>
            </Section>
            <Section>
              <Text variant='h1'>High-Fidelity Prototype</Text>
              <Text variant='body'>
                Craft business owners want to feel confident in the
                sustainability choices they make, which translates into being
                able to validate their decisions with facts and research. But
                more importantly, they also strive for the most affordable
                options without sacrificing the visual aesthetics of their
                brand.
              </Text>

              <ImageRect src={prototype} alt='' border='0px' />
              <Button
                justifySelf='center'
                alignSelf='center'
                borderRadius='full'
                p={6}
                maxW='xs'
                variant='ghost'
                outlineColor='black'
              >
                <Link
                  href='https://www.figma.com/proto/TIUMZi2bRwuiwBtibWZTpN/EcoPacking_D3'
                  isExternal
                >
                  <Text color='black' fontsize='12px' fontWeight='semibold'>
                    VIEW PROTOTYPE
                  </Text>
                </Link>
              </Button>
            </Section>
          </Stack>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Project
