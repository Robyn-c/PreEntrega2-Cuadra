import { Box, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import mano from '../../assets/mano.png'
import camion from '../../assets/camion.png'
import diamante from '../../assets/diamante.png'

export const Elegirnos = () => {
  return (
    <Box bgColor='purple.800'>
      <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <SimpleGrid templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} justifyContent='space-between' columnGap='24px' rowGap={6}>
          <Stack borderRadius={8} p={7} bgColor='white' border='2px' borderColor='purple.800' align='center' spacing='16px'> 
            <Image boxSize={{base: '60px' ,lg: '120px'}} src={mano}></Image>
            <Heading size='lg' textAlign='center' color='purple.700'>Productos hechos a mano</Heading>
            <Text fontSize='lg' textAlign='center' color='gray.700'>Confección de productos realizados por mujeres con amor.</Text>
          </Stack>
          <Stack borderRadius={8} p={7} bgColor='white' border='2px' borderColor='purple.900' align='center' spacing='16px'> 
            <Image boxSize={{base: '60px' ,lg: '120px'}} src={camion}></Image>
            <Heading size='lg' textAlign='center' color='purple.700'>Despachos a todo Chile</Heading>
            <Box>
              <Text fontSize='lg' textAlign='center' color='gray.700'>Envíos IV Región: 1 a 2 días hábiles.</Text>
              <Text fontSize='lg' textAlign='center' color='gray.700'>Otras regiones de 3 a 4 días hábiles.</Text>
            </Box>
          </Stack>
          <Stack borderRadius={8} p={7} bgColor='white' border='2px' borderColor='purple.900' align='center' spacing='16px'> 
            <Image boxSize={{base: '60px' ,lg: '120px'}} src={diamante}></Image>
            <Heading size='lg' textAlign='center' color='purple.700'>Productos personalizados</Heading>
            <Text fontSize='lg' textAlign='center' color='gray.700'>Consulta nuestro Whatsapp si deseas un producto personalizado.</Text>
          </Stack>
        </SimpleGrid>
        
      </Container>
    </Box>
  )
}
