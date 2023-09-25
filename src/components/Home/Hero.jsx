import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImg from '../../assets/hero.webp'
export const Hero = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
    <Flex direction={{base: 'column', md: 'row'}} alignItems='center' gap={6}>
      <Flex width='100%' direction='column' gap={{base: 0, lg: 4}}>
        <Heading as='h2' size={{base: 'xl', lg: '3xl'}} >Bienvenido a</Heading>
        <Heading as='h2' size={{base: 'lg', lg: '2xl'}} textColor='purple.800'>Honu Piedras y Esencias  🔮</Heading>
        <Text fontSize={{base: 'lg', lg: '2xl'}}>Tienda Online de Artesanía Espiritual</Text>
      </Flex>
      <Image boxSize={{base: '300px', lg: '400px'}} borderRadius='12' boxShadow='xl' border='1px' borderColor='blackAlpha.400' src={heroImg} />  
    </Flex>
  </Container>
  )
}
