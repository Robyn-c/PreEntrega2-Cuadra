import { Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import decoracion from '../../assets/decoracion.png'
import esencias from '../../assets/esencias.png'
import joyeria from '../../assets/joyeria.png'
import accesorios from '../../assets/accesorios.png'
import mistico from '../../assets/mistico.png'
import copalera from '../../assets/copalera.png'
import velas from '../../assets/velas.png'
import regalo from '../../assets/regalo.png'

export const Categoria = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Heading width='100%' textAlign='center' size='xl' color='gray.700' pb='12'>Categorías</Heading>
        <SimpleGrid rowGap='12' templateColumns={{base: 'repeat(2, auto)' , md: 'repeat(4, auto)'}} justifyContent={{base: 'space-around', lg: 'space-between'}}>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={decoracion} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Decoración</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={esencias} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Esencias</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={joyeria} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Joyería</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={accesorios} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Accesorios</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={mistico} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}} textAlign='center'>Místico & Espiritual</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={copalera} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}} textAlign='center'>Sahumadores & Copaleras</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={velas} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}} textAlign='center'>Velas</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={regalo} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}} textAlign='center'>Ideas Para Regalar</Text>
            </Stack>
        </SimpleGrid>
    </Container>
  )
}
