import Layout from '@/components/layouts/single'
import ProjectHeader from '@/components/project-heading'
import { Box, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next/types'

import banner from '@/images/ecopacking/banner.png'


const Project: NextPage = () => {
  return (
    <Layout title='Payday'>
      <Stack as='main' align='center' justify='center' py={24}>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          h='60vh'
          w='full'
        >
          <Text variant='h1'>This page is coming soon...</Text>
           
        </Box>
      </Stack>
    </Layout>
  )
}

export default Project
