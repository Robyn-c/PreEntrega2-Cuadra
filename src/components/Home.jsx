import { Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const Home = ({ greetings }) => {
  return (
    <Container maxW='6xl' py='32'>
      <Heading as='h2' size='xl'>{ greetings }</Heading>
    </Container>
  )
}
