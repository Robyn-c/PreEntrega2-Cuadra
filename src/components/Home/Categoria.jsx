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
    <Container maxW='1305px' py='70'>
      <Heading width='100%' textAlign='center' size='xl' color='gray.700' pb='12'>Categorías</Heading>
        <SimpleGrid rowGap='12' templateColumns='repeat(4, auto)' justifyContent='space-between'>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={decoracion} />
              <Text fontSize='2xl'>Decoración</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={esencias} />
              <Text fontSize='2xl'>Esencias</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={joyeria} />
              <Text fontSize='2xl'>Joyería</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={accesorios} />
              <Text fontSize='2xl'>Accesorios</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={mistico} />
              <Text fontSize='2xl' textAlign='center'>Místico & Espiritual</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={copalera} />
              <Text fontSize='2xl' textAlign='center'>Sahumadores & Copaleras</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={velas} />
              <Text fontSize='2xl' textAlign='center'>Velas</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize='200px' border='1px' borderColor='blackAlpha.900'  src={regalo} />
              <Text fontSize='2xl' textAlign='center'>Ideas Para Regalar</Text>
            </Stack>
        </SimpleGrid>
    </Container>
  )
}
