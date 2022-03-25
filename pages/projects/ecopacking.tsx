import { ImageRect } from '@/components/imagebox'
import Layout from '@/components/layouts/single'
import {
  Box,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Link,
  Spacer
} from '@chakra-ui/react'
import { NextPage } from 'next/types'

import ProjectHeader from '@/components/project-heading'
import Section from '@/components/section'

import affinity1 from '@/images/ecopacking/affinity1.png'
import affinity2 from '@/images/ecopacking/affinity2.png'
import banner from '@/images/ecopacking/banner.png'
import blog from '@/images/ecopacking/blog.png'
import ceramic from '@/images/ecopacking/ceramic.png'
import color1 from '@/images/ecopacking/color1.png'
import color2 from '@/images/ecopacking/color2.png'
import color3 from '@/images/ecopacking/color3.png'
import color4 from '@/images/ecopacking/color4.png'
import design_overview from '@/images/ecopacking/design_overview.png'
import logo from '@/images/ecopacking/logo.png'
import icons from '@/images/ecopacking/icons.png'
import journey from '@/images/ecopacking/journey.png'

import product from '@/images/ecopacking/product.png'
import loader from '@/images/ecopacking/loader.png'
import mockups from '@/images/ecopacking/mockups.png'
import research_insights from '@/images/ecopacking/research_insights.png'
import research_overview from '@/images/ecopacking/research_overview.png'

import sketches from '@/images/ecopacking/sketches.png'
import store from '@/images/ecopacking/store.png'
import survey1 from '@/images/ecopacking/survey1.png'
import survey21 from '@/images/ecopacking/survey21.png'
import survey3 from '@/images/ecopacking/survey3.png'
import survey_affinity from '@/images/ecopacking/survey_affinity.jpg'
import evaluation_aff from '@/images/ecopacking/evaluation_aff.jpg'
import sus_scores from '@/images/ecopacking/sus_scores.png'
import task_analysis from '@/images/ecopacking/task_analysis.png'

import quiz from '@/images/ecopacking/quiz.png'
import quiz2 from '@/images/ecopacking/quiz2.png'
import results from '@/images/ecopacking/results.png'
import match from '@/images/ecopacking/match.png'
import prototype from '@/images/ecopacking/prototype.png'

const Project: NextPage = () => {
  return (
    <Layout title='EcoPacking'>
      <Stack as='main' align='center' justify='center' py={24}>
        <Box display='flex' flexDir='column' alignItems='center' w='full'>
          <Stack w='full' alignItems='center' spacing={85}>
            {/****** Header ******/}

            <ProjectHeader
              src={banner}
              alt={''}
              title={'EcoPacking: Sustainability For Craft Business Owners'}
              timeline={'4 months'}
              role={'UX Designer'}
              deliverable={'Interactive Prototype'}
              platform={'Figma'}
              border='none'
            />

            {/****** Section ******/}

            <Section>
              <Stack spacing={104}>
                <Box>
                  <Text variant='h1'>Sustainability is complicated.</Text>

                  <Text variant='body'>
                    Many businesses are beginning to see the value of aligning
                    with their environmentally conscientious consumers. We see
                    evidence of this consumer mindset shift amongst
                    small-business marketplaces like Etsy committing to offset
                    100% of carbon emissions from shipping and packaging.
                    According to current research,{' '}
                    <Text fontWeight='bold' as='b'>
                      most small businesses want to be environmentally conscious
                    </Text>{' '}
                    through their own actions,{' '}
                    <Text fontWeight='bold' as='b'>
                      but they don&apos;t know how to achieve this.
                    </Text>{' '}
                  </Text>
                </Box>

                <Box>
                  <Text variant='sm'>PROBLEM STATEMENT</Text>
                  <Text variant='body'>
                    How can we help small craft business owners make sustainable
                    business decisions without sacrificing costs and time?
                  </Text>
                </Box>

                <Box>
                  <Text variant='sm'>SOLUTION</Text>
                  <Text variant='body'>
                    We designed a web platform that helps small business owners
                    make{' '}
                    <Text fontWeight='bold' as='b'>
                      informed decisions
                    </Text>{' '}
                    on sustainability featuring{' '}
                    <Text fontWeight='bold' as='b'>
                      uniquely matched shipping solutions
                    </Text>{' '}
                    and interactive 3D models supporting a{' '}
                    <Text fontWeight='bold' as='b'>
                      learning-centric design.
                    </Text>{' '}
                  </Text>
                </Box>
              </Stack>
            </Section>

            {/****** Section ******/}
            <Section>
              <Text variant='h1'>Design Overview</Text>

              <Stack spacing={4}>
                <Text variant='h2'>Sustainability Matching Quiz</Text>
                <Text variant='body'>
                  Quickly get started with sustainability in your business and
                  waste no time getting lost figuring out what materials fit
                  your products.
                </Text>
              </Stack>
              <ImageRect src={loader} border='none' alt='' />
              <ImageRect src={results} border='none' alt='' />
            </Section>

            {/****** Section ******/}
            <Section>
              <Stack spacing={4}>
                <Text variant='h2' textAlign='right'>
                  Expert Information / Learning-Oriented
                </Text>
                <Text variant='body' textAlign='right'>
                  Materials are presented in the form of interactive 3D models
                  to promote learning about sustainable materials.
                </Text>
              </Stack>
              <ImageRect src={match} border='none' alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>User Research</Text>
              <Text variant='sm'>METHODOLOGY</Text>
              <ImageRect src={research_overview} alt='' border='none' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Task Analysis</Text>

              <Box>
                <Text variant='sm'>INFORMATION GOALS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - Identify the steps necessary in the order fullfilment
                      process
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - How do sellers manage packaging solutions?
                    </Text>
                  </ListItem>
                </UnorderedList>

                <Text variant='body'></Text>
              </Box>
              <ImageRect src={task_analysis} alt='' border='none' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Survey</Text>
              <Box>
                <Text variant='sm'>INFORMATION GOALS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - Explore how desirable Etsy sellers perceive sustainable
                      order fulfillment practices
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - Collect contextual information about how Etsy sellers
                      run their businesses
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - Understand the deciding factors for choosing packaging
                      materials
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Stack spacing={84}>
                <Box
                  display='flex'
                  alignItems={{ base: 'start', md: 'center' }}
                  flexDir={{ base: 'column', md: 'row' }}
                  w='full'
                >
                  <Stack maxW='500px' pr={{ base: 0, md: 4 }}>
                    <Text variant='subtitle' py={4}>
                      FINDING #1
                    </Text>
                    <Text variant='body'>
                      Most respondents consider hand-making items the most
                      time-consuming. The second most time-consuming activity is
                      marketing (e.g., photography, listings, social media).
                      Sourcing of materials and shipping providers is the third
                      most time-consuming activity.
                    </Text>
                  </Stack>
                  <Spacer h={{ base: 12, md: 0 }} />
                  <ImageRect src={survey1} alt='' border='none' />
                </Box>

                <Box>
                  <Text variant='subtitle' py={4}>
                    FINDING #2
                  </Text>
                  <ImageRect src={survey21} alt='' border='none' />
                  <Spacer h={12} />
                  <Text variant='body'>
                    76% of respondents say that 20% or less of their business
                    expenses go toward order fulfillment. Respondents rated cost
                    and durability as the most important aspects of shipping
                    materials and sustainability as least important in
                    comparison to these two characteristics.
                  </Text>
                </Box>

                <Box
                  display='flex'
                  alignItems={{ base: 'start', md: 'center' }}
                  flexDir={{ base: 'column', md: 'row' }}
                  w='full'
                >
                  <Stack maxW='500px' pr={{ base: 0, md: 4 }}>
                    <Text variant='subtitle' py={4}>
                      FINDING #3
                    </Text>
                    <Text variant='body'>
                      88.9% of respondents consider sustainability when making
                      decisions about order fulfillment, and 40.7% of
                      respondents consider packaging materials the most
                      unsustainable part of order fulfillment.
                    </Text>
                  </Stack>
                  <Spacer h={{ base: 12, md: 0 }} />
                  <ImageRect src={survey3} alt='' border='none' />
                </Box>

                <Box>
                  <Text variant='subtitle' py={4}>
                    FINDING #4
                  </Text>
                  <Text variant='body'>
                    We asked Etsy sellers about the biggest challenge of
                    reducing their environmental impact. Since this question
                    prompted a written answer, we made an affinity diagram of
                    these responses (see below). Most respondents find it
                    challenging to find sustainable materials, pay a higher
                    price for sustainable packaging, and ensure their products
                    are protected during shipment.
                  </Text>
                  <Spacer h={12} />
                  <ImageRect src={survey_affinity} alt='' border='none' />
                </Box>
              </Stack>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Semi-structured Interviews</Text>
              <Box>
                <Text variant='sm'>INFORMATION GOALS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - Identify the steps necessary in the order fullfilment
                      process
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - How do sellers manage packaging solutions?
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
              <ImageRect src={affinity1} alt='' border='none' />
              <ImageRect src={affinity2} alt='' border='none' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Research Findings</Text>
              <Box width='full'>
                <Text variant='sm'>INSIGHTS</Text>
                <ImageRect src={research_insights} border='none' alt='' />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Implications for Designing</Text>
              <Box>
                <Text variant='sm'>DESIGN REQUIREMENTS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      1. The eventual design should support craft business
                      owners getting access to sustainable resources and
                      materials.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      2. The eventual product should help craft business owners
                      effectively plan and manage their shipping costs.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      3. The design should make Etsy sellers feel confident
                      about sustainable order fulfillment decisions.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      4. The design should provide comprehensible expert-level
                      information for novices.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Design Process</Text>
              <Text variant='sm'>METHODOLOGY</Text>
              <ImageRect src={design_overview} border='none' alt='' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Meet Taylor.</Text>
              <Box
                display='flex'
                alignItems='center'
                flexDir={{ base: 'column', md: 'row' }}
                w='full'
              >
                <Stack maxW='750px'>
                  <Text variant='sm'>PERSONA</Text>
                  <Text variant='body'>
                    Taylor is a 24 year old freelance illustrator, and she
                    traditionally sells her small handmade ceramic homeware at
                    local pop-up markets.
                  </Text>
                  <Text variant='body'>
                    Recently, she has been receiving requests on her Instagram
                    page from fans across the country who are asking to purchase
                    her products.
                  </Text>
                </Stack>
                <ImageRect
                  src={ceramic}
                  alt='A cartoon girl is shown painting on a ceramic bowl.'
                  border='none'
                />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Box>
                <Text variant='h1'>
                  So... what&apos;s the problem, exactly?
                </Text>
                <Text variant='body'>
                  Taylor lacks the support that larger businesses have when it
                  comes to sourcing sustainable materials. This is a multifold
                  issue because she also lacks the resources to learn about
                  which sustainable materials best fit her needs and besides,
                  she’s running a one-woman show. Who has time to do that?
                </Text>
              </Box>
              <Box width='full'>
                <Text variant='sm'>JOURNEY MAP</Text>
                <ImageRect src={journey} border='none' alt='' />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Early Design Concepting</Text>
              <Box width='full'>
                <Text variant='sm'>SKETCHES</Text>
                <ImageRect src={sketches} border='none' alt='' />
              </Box>
              <Box width='full'>
                <Text variant='sm'>CONCEPT MOCKUPS</Text>
                <ImageRect src={mockups} border='none' alt='' />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Visual Design System</Text>
              <Box width='550px'>
                <Text variant='sm'>BRANDING</Text>
                <ImageRect src={logo} alt='' border='none' />
              </Box>

              <Box width='550px'>
                <Text variant='sm'>COLOR SYSTEM</Text>
                <ImageRect src={color1} border='none' alt='' />
                <ImageRect src={color2} border='none' alt='' />
                <ImageRect src={color3} border='none' alt='' />
                <ImageRect src={color4} border='none' alt='' />
              </Box>

              <Box width='400px'>
                <Text variant='sm'>ICONS</Text>
                <ImageRect src={icons} alt='' border='none' />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Evaluating the Design</Text>
              <Text variant='h2'>Think-Aloud Evaluation</Text>
              <Box>
                <Text variant='sm'>INFORMATION GOALS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Determine if the prototype facilitates making informed
                      sustainable decisions
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Ensure that the prototype has high learnability
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Identify which of the key features are helpful and which
                      are less helpful
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
              <ImageRect src={evaluation_aff} alt='' />
              <Box>
                <Text variant='sm'>BENCHMARK TASKS</Text>
                <UnorderedList spacing={0} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - Using this prototype, show me how you would get a
                      recommended packaging solution.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - Find out what makes the materials that you were matched
                      with sustainable.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Text variant='h1'>
                System Usability Scale & Single Ease Question Results
              </Text>
              <Box
                display='flex'
                alignItems='center'
                flexDir={{ base: 'column', md: 'row' }}
                w='full'
              >
                <Stack maxW='650px' pr={{ base: 0, md: 4 }}>
                  <Text variant='sm'>RESULTS</Text>
                  <UnorderedList spacing={6} listStyleType='none'>
                    <ListItem>
                      <Text variant='body'>
                        The terminology used for packaging characteristics was
                        too technical and difficult to understand
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text variant='body'>
                        Design still lacks crucial information to help users
                        feel truly confident in making sustainability-related
                        business decisions
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Stack>
                <ImageRect src={sus_scores} alt='SUS scores' border='none' />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h2'>Sustainability Matching Quiz</Text>
              <Box>
                <Text variant='sm'>SUMMARY</Text>
                <Text variant='body'>
                  The quiz is designed to help users make better-informed
                  decisions without putting too much effort into searching and
                  comparing different materials.
                </Text>
              </Box>
              <ImageRect src={quiz} border='none' alt='' />
              <ImageRect src={quiz2} border='none' alt='' />
              <Box>
                <Text variant='sm'>DESIGN PRINCIPLES</Text>
                <UnorderedList spacing={4} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Implement the ‘match system with the world’ principle by
                      asking questions speaking users’ language. Users don’t
                      have to figure out materials which they might not be
                      familiar with by themselves.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Improve ‘user control and freedom’ by allowing users to
                      go back and forth to change answers (they might change
                      their mind at any point).
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Improve the capability to ‘help and documentation’ by
                      documenting answers for users and allow them to check
                      later, so that users don’t have to remember and analyze
                      information by themselves.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - Evoke recoverability by allowing users to retake the
                      quiz anytime they want.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h2'>Expert Information</Text>
              <Text variant='h3'>Viewing A Match</Text>
              <Box>
                <Text variant='sm'>SUMMARY</Text>
                <Text variant='body'>
                  One of our users&apos; critical needs is access to
                  high-quality and thorough information about shipping
                  materials. Users want to feel like they have done enough
                  research to be making quality purchasing decisions. This
                  feature provides sellers with concise, expert-level
                  information about a specific product or material contained
                  within the store or quiz results.
                </Text>
              </Box>

              <ImageRect src={match} alt='' border='none' />

              <Text variant='h3'>Articles, Blogs, etc.</Text>
              <Box>
                <Text variant='sm'>SUMMARY</Text>
                <Text variant='body'>
                  One of our users&apos; critical needs is access to
                  high-quality and thorough information about shipping
                  materials. Through these readings, users can get a more
                  in-depth understanding of how certain items impact the
                  environment.
                </Text>
              </Box>
              <ImageRect src={blog} alt='' border='none' />
              <Box>
                <Text variant='sm'>DESIGN PRINCIPLES</Text>
                <UnorderedList spacing={4} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - The design is consistent with the structure of a typical
                      article page.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - The design is minimal so users can quickly get the most
                      important information about the article topic.{' '}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      {' '}
                      - The article pages use visual hierarchy to help users
                      move through the different topics easily.{' '}
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h2'>Store Page</Text>
              <Box>
                <Text variant='sm'>SUMMARY</Text>
                <Text variant='body'>
                  The store feature is where users can go to look through our
                  knowledge database by simply selecting a category of shipping
                  products and then using filters to search through a variety of
                  sustainable shipping products. Each product listing page will
                  contain information about the lifecycle of the material,
                  production, and how it can be recycled or otherwise discarded.
                </Text>
              </Box>
              <ImageRect src={store} alt='' border='none' />
              <Box>
                <Text variant='sm'>DESIGN PRINCIPLES</Text>
                <UnorderedList spacing={4} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - The design is consistent with the structure of a typical
                      store page so users can quickly understand how to use it.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - The design of the store page is minimal so users can
                      easily find the important information on the page and
                      quickly find specific products.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - The store page uses images of each category to show what
                      is in each section, allowing users to recognize the
                      categories and not have to recall them.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h2'>Group Buys</Text>
              <Box>
                <Text variant='sm'>SUMMARY</Text>
                <Text variant='body'>
                  One of the most common pain points our users expressed during
                  our initial research phase: sustainable shipping materials are
                  too expensive. The group buys feature of our prototype
                  facilitates users connecting with other online sellers to
                  purchase sustainable shipping materials in larger quantities
                  to reduce material costs.
                </Text>
              </Box>
              <ImageRect src={product} alt='' border='none' />
              <Box>
                <Text variant='sm'>DESIGN PRINCIPLES</Text>
                <UnorderedList spacing={4} listStyleType='none'>
                  <ListItem>
                    <Text variant='body'>
                      - The design is consistent with the structure of a typical
                      checkout page so users can quickly understand how to use
                      it.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant='body'>
                      - Showing the status of a particular group buy and how
                      close it is to being filled so users can easily stay up to
                      date on the status of their group buy orders.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Section>

            {/****** Section ******/}

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
