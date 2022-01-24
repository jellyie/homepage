import Layout from '@/components/layouts/single'
import { Box, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next/types'

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
          <Text variant='h1'>This page isn&apos;t ready yet...</Text>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Project
