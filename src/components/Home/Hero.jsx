import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImg from '../../assets/hero.webp'
export const Hero = () => {
  return (
    <Container maxW='1305px' py='70'>
    <Flex alignItems='center'>
      <Flex width='100%' direction='column' gap='16px'>
        <Heading as='h2' size='3xl'>Bienvenido a</Heading>
        <Heading as='h2' size='2xl' textColor='purple.800'>Honu Piedras y Esencias  🔮</Heading>
        <Text fontSize='2xl'>Tienda Online de Artesanía Espiritual</Text>
      </Flex>
      <Image boxSize='400px' borderRadius='12' boxShadow='xl' border='1px' borderColor='blackAlpha.400' src={heroImg} />  
    </Flex>
  </Container>
  )
}
