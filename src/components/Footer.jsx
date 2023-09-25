import { Box, Container, HStack, Heading, Icon, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoTiktok } from "react-icons/bi"
import { MdLocalPhone, MdLocationPin, MdOutlineEmail, MdOutlineFacebook, MdWhatsapp } from "react-icons/md"
import MasterCard from '../assets/mastercard 1.svg'
import Flow from '../assets/flow 1.svg'
import Visa from '../assets/visa 1.svg'

export const Footer = () => {
  return (
    <Box bgColor='purple.900'>
      <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} rowGap={6}>
        <Stack spacing={4}>
          <Heading as='h3' fontSize='2xl' color='gray.200'>Enlaces Rápidos</Heading>
          <Stack>
            <Text color='gray.200'>Términos y Condiciones</Text>
            <Text color='gray.200'>Política de reembolso </Text>
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <Heading as='h3' fontSize='2xl' color='gray.200'>Menú</Heading>
          <Stack>
            <Text color='gray.200'>Contacto</Text>
            <Text color='gray.200'>Blog</Text>
            <Text color='gray.200'>Productos</Text>
            <Text color='gray.200'>Cuenta</Text>
          </Stack>
        </Stack>
        <Stack>
          <Heading as='h3' fontSize='2xl' color='gray.200'>Contáctanos</Heading>
          <Stack>
            <Stack>
              <HStack>
                <Icon boxSize={5} as={MdLocationPin} color='gray.200' />
                <Text color='gray.200'>Hugo Montes Valdebenito La Serena, Chile</Text>
              </HStack>
              <HStack>
                <Icon boxSize={5} as={MdOutlineEmail} color='gray.200' />
                <Text color='gray.200'> Envíos todos los días - IV Región - Chile</Text>
              </HStack>
              <HStack>
                <Icon boxSize={5} as={MdLocalPhone} color='gray.200' />
                <Text color='gray.200'>+56 9 9319 1106</Text>
              </HStack>
            </Stack>
            <HStack>
              <Icon boxSize={8} as={MdOutlineFacebook} color='gray.200' />
              <Icon boxSize={8} as={MdWhatsapp} color='gray.200' />
              <Icon boxSize={8} as={AiOutlineInstagram} color='gray.200' />
              <Icon boxSize={8} as={BiLogoTiktok} color='gray.200' />
            </HStack>
          </Stack>
        </Stack>
        </SimpleGrid>
        <Stack pt={12} pb={{base: '0', md: 12}}
          direction={{ base: 'column', md: 'row' }}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text color={'gray.200'}>© 2023 HONU Piedras y Esencias - Tienda Online De Artesanía Espiritual 🔮. Todos los derechos reservados.</Text>
          <HStack>
            <Image src={Flow} />
            <Image src={MasterCard} />
            <Image src={Visa} />
          </HStack>
        </Stack>
      </Container>
    </Box>

  )
}
