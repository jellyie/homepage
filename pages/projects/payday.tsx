import Layout from '@/components/layouts/single'
import ProjectHeader from '@/components/project-heading'
import Section from '@/components/section'
import {
  Box,
  Button,
  Link,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { NextPage } from 'next/types'
import { ImageRect } from '@/components/imagebox'
import { MdCheckCircle, MdRemoveCircle } from 'react-icons/md'

import banner from '@/images/payday/banner.png'
import persona from '@/images/payday/persona.png'
import cooking from '@/images/payday/cooking.png'
import payday_og1 from '@/images/payday/payday_og1.png'
import payday_og2 from '@/images/payday/payday_og2.png'
import payday_og3 from '@/images/payday/payday_og3.png'

import sketch from '@/images/payday/sketch.png'
import moneycat from '@/images/payday/moneycat.png'
import meeting from '@/images/payday/meeting.png'

import landing from '@/images/payday/landing.png'
import shift from '@/images/payday/shift.png'
import messages from '@/images/payday/messages.png'
import prototype from '@/images/payday/prototype.png'

const Project: NextPage = () => {
  return (
    <Layout title='Payday'>
      <Stack as='main' align='center' justify='center' py={24}>
        <Box display='flex' flexDir='column' alignItems='center' w='full'>
          <Stack maxW={{ md: '820px' }} w='full' spacing={85}>
            {/****** Header ******/}

            <ProjectHeader
              src={banner}
              alt={'Payday app redesigned on iPhone device mockups'}
              title={'Payday: Thoughtful Work Management For Hourly Workers'}
              timeline={'3 months'}
              role={'UX Designer'}
              deliverable={'Hi-Fidelity Mockups'}
              platform={'Figma'}
            />

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>What is Payday?</Text>
              <Text variant='body'>
                Payday is an existing salary tracking application built for
                hourly employees. The app works... but that’s it. Payday
                fulfills every promise it offers, providing users with a means
                of calculating their salary and managing their work schedules,
                but there are many issues with its design that interferes with
                completing simple tasks like adding new shifts and jobs.
              </Text>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Meet Jane.</Text>
              <ImageRect
                src={persona}
                alt='A diagram showing the persona of Jane, a college aged student who leads a busy life balancing school and part-time work.'
                border='none'
              />
            </Section>

            {/****** Section ******/}

            <Section>
              <Box
                display='flex'
                alignItems='center'
                flexDir={{ base: 'column', md: 'row' }}
                w='full'
              >
                <Stack maxW={{ base: 'full', md: 'sm' }}>
                  <Text variant='h1'>
                    Why doesn&apos;t Payday work for Jane?
                  </Text>
                  <Text variant='body'>
                    Jane leads a busy life, working to balance school, family,
                    and her part-time job. Payday doesn&apos;t work for her
                    because it isn&apos;t designed with the user in mind.
                    I&apos;ll show you what I mean.
                  </Text>
                </Stack>
                <ImageRect
                  src={cooking}
                  alt='A cartoon girl who personifies Jane is pictured accidentally adding too much salt while cooking.'
                  border='none'
                />
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Initial Impressions</Text>
              <Text variant='subtitle'>
                To use the app, Jane needs to add a job first.
              </Text>
              <ImageRect
                src={payday_og1}
                alt='Screenshots of the old iteration of Payday.'
                border='none'
              />
            </Section>

            {/****** Section ******/}

            <Section>
              <Box
                display='flex'
                alignItems='center'
                flexDir={{ base: 'column', md: 'row' }}
                w='full'
              >
                <Text maxW={{ base: 'full', md: 'sm' }} variant='body'>
                  To add a shift, Jane needs to check the shared spreadsheet
                  that her manager sends her every week. She might also check
                  her photo gallery for the snapshot of the printed schedule she
                  captured the other day, and if all fails, she can try
                  searching through her email for the automated email containing
                  her schedule.
                </Text>
                <ImageRect
                  src={meeting}
                  alt='Three cartoon characters shown in a hybrid meeting on a laptop, phone, desktop monitor.'
                  border='none'
                />
              </Box>
            </Section>

            {/****** Section ******/}
            <Section>
              <Text variant='subtitle'>Adding a shift in the application.</Text>
              <ImageRect
                src={payday_og2}
                alt='Screenshots of the old iteration of Payday.'
                border='none'
              />
            </Section>

            {/****** Section ******/}
            <Section>
              <Box
                display='flex'
                alignItems='center'
                flexDir={{ base: 'column', md: 'row' }}
                w='full'
              >
                <ImageRect
                  src={moneycat}
                  alt='A cartoon cat looking upset beside a suitcase of money.'
                  border='none'
                />
                <Stack maxW={{ base: 'full', md: 'sm' }}>
                  <Text variant='body'>
                    She switches between multiple apps to make sure she inputs
                    the correct time for her shifts. This entire process can
                    take up to 10 minutes.
                  </Text>
                  <Text variant='body'>
                    Her manager sends her work schedule weekly, and so in one
                    month, she loses around 40 minutes of the most scarce
                    resource she has-- time!
                  </Text>
                </Stack>
              </Box>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='subtitle'>
                Payday&apos;s calendar view allowing users to see track hours
                worked.
              </Text>
              <ImageRect src={payday_og3} alt='' border='none' />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>Summary, Recap, TL;DR</Text>
              <Text variant='h3'>Issues with existing design:</Text>
              <UnorderedList spacing={4} listStyleType='none'>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdRemoveCircle} color='red.500' />
                    Takes up too much of the user&apos;s precious time
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdRemoveCircle} color='red.500' />
                    Disconnected from workplace community
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdRemoveCircle} color='red.500' />
                    Low affordances makes for an unintuitive and confusing
                    experience
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdRemoveCircle} color='red.500' />
                    Only tracks salary and hours worked
                  </Text>
                </ListItem>
              </UnorderedList>
            </Section>

            {/****** Section ******/}
            <Section>
              <Text variant='h1'>Paper-First Concepting</Text>
              <Text variant='body'>
                After I identified the issues with Payday’s existing design, I
                started brainstorming ideas using what I learned from studying
                Jane’s journey and completing a task analysis on her goals.{' '}
              </Text>
              <ImageRect
                src={sketch}
                alt='Low resolution scanned image of sketches of the app wireframe'
                border='none'
              />
            </Section>

            {/****** Section ******/}
            <Section>
              <Text variant='h1'>A Fresh Start</Text>
              <Text variant='body'>
                In addition to giving the app a facelift, I also discovered
                multiple design opportunities that could improve the user
                experience.{' '}
              </Text>
              <ImageRect
                src={landing}
                alt='Updated screenshots of Payday redesigned.'
                border='none'
              />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='body'>
                Be in the know about what&apos;s going on with a unified system
                for receiving work announcements.
              </Text>
              <ImageRect
                src={shift}
                alt='Updated screenshots of Payday redesigned.'
                border='none'
              />
              <Text variant='body'>
                Connect with your managers and coworkers at ease to request time
                off, swap shifts, or find a cover for shifts you can&apos;t
                work.
              </Text>
              <ImageRect
                src={messages}
                alt='Updated screenshots of Payday redesigned.'
                border='none'
              />
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h3'>Improvements and New Features</Text>
              <UnorderedList spacing={4} listStyleType='none'>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Employer is responsible for posting and updating work
                    schedules
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Unified system to contact coworkers and receive work
                    announcements
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Easy to flag shifts, request days off, look for shift covers
                    or swap shifts
                  </Text>
                </ListItem>
                <ListItem>
                  <Text variant='body' alignItems='center'>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Detailed salary tracking page with charts and stats
                  </Text>
                </ListItem>
              </UnorderedList>
            </Section>

            {/****** Section ******/}

            <Section>
              <Text variant='h1'>High-Fidelity Prototype</Text>
              <Text variant='body'>
                This project helped me learn how to empathetically complete a
                task analysis, and it gave me a chance to strengthen my journey
                mapping skills by requiring me to go into much more detail. See
                the prototype in action through the link below! :D
              </Text>

              <ImageRect
                src={prototype}
                alt='Prototype of Payday'
                border='0px'
              />
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
                  href='https://www.figma.com/proto/VoWQfMK7BmMqijdvh34Lfy/Payday?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2'
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
