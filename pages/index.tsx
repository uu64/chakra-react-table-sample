import type { NextPage } from 'next'
import { Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import CustomTable from '../components/CustomTable'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>chakra-react-table-sample</title>
        <meta name="description" content="chakra-react-table-sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>This is a sample page</Text>
      <CustomTable />
    </Container>
  )
}

export default Home
