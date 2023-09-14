import { Button, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react"


const Item = ({ title, price, stock, url, alt }) => {
  return(
    <Card height='100%' maxW='sm' borderRadius='lg' border='2px' borderColor='purple.700' flex='1'>
      <CardHeader p='0' m='0'>
        <Image
              src={url}
              alt={alt}
              borderRadius='md' 
              borderBottomRightRadius='0'
              borderBottomLeftRadius='0'
              borderBottom='2px'
            />
      </CardHeader>
      <CardBody>
        <Flex height='100%' direction='column' gap='3'>
          <Heading size='md'>{title}</Heading>
          <Text mt='auto' color='purple.800' fontSize='2xl'>
            $ {price}
          </Text>
          <Button  variant='solid' colorScheme='purple'>
              Añadir al carro
          </Button>
        </Flex>
    </CardBody>
    </Card>
  )
}

export default Item