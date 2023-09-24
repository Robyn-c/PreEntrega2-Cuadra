import { Button, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const Item = ({ name, price, image, id }) => {
  return(
    <Card height='100%' maxW='sm' borderRadius='lg' border='2px' borderColor='purple.700' flex='1'>
      <CardHeader p='0' m='0'>
        <ChakraLink as={ReactRouterLink} to={`item/${id}`}>  
          <Image
              src={image}
              alt={name}
              borderRadius='md' 
              borderBottomRightRadius='0'
              borderBottomLeftRadius='0'
              borderBottom='2px'
          />
        </ChakraLink>
      </CardHeader>
      <CardBody>
        <Flex height='100%' direction='column' gap='3'>
          <Heading size='md'>{name}</Heading>
          <Text mt='auto' color='purple.800' fontSize='2xl'>
            $ {price}
          </Text>
          <Button  variant='solid' colorScheme='purple' bg='purple.800'>
              Añadir al carro
          </Button>
        </Flex>
    </CardBody>
    </Card>
  )
}

export default Item