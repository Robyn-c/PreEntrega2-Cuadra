import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, HStack, Heading, Icon, Image, Input, Radio, RadioGroup, Select, Spinner, Stack, StackDivider, Text, Textarea, VStack } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext, useState } from 'react'

const Checkout = () => {
  
  const [value, setValue] = useState('1')
  const { cartItems } = useContext(CartContext)
  let totalPrice = 0;
  cartItems.map((item) => { 
    const quantity = parseInt(item.quantity);
    const productPrice = parseInt(item.price);
    if (!isNaN(productPrice) && !isNaN(quantity)) {
      totalPrice += productPrice * quantity;
    }
  })
console.log('checkout: ', cartItems)
if(cartItems === undefined) {
  return (
  <Container maxW='6xl'>
    <Flex gap='4' alignItems='center'>
      <Heading as='h2' size='xl'>Cargando...</Heading>
      <Spinner size='lg' />
    </Flex>
  </Container>
  )}

  return (
    <>
    <Box bgColor='purple.50'>
      <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
        <Grid mt={6} templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} rowGap={10} columnGap={6}>
          <GridItem colSpan={{base: 1, md: 2}}>
            <VStack gap={12}>
              <VStack w={'100%'} align={'flex-start'} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700'>
                <Text fontSize='2xl' fontWeight={700}>Tus datos</Text>
                <Text fontSize='lg' color='gray.400'>Datos para envío de notificaciones de la compra</Text>
                <VStack w={{base: '100%', lg: '70%'}} align='center'>
                  <HStack w={'100%'}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="name" placeholder="Ingrese su nombre..." />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Apellido</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="lastname" placeholder="Ingrese su apellido..." />
                    </FormControl>
                  </HStack>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="email" placeholder="Ingrese su email..." />
                  </FormControl>
                  <HStack w={'100%'}>
                    <FormControl isRequired>
                      <FormLabel>RUT</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="rut" placeholder="Ingrese su rut..." />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Teléfono</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="phone" placeholder="Ingrese su telefono..." />
                    </FormControl>
                  </HStack>
                </VStack>
              </VStack>
              <VStack w={'100%'} align={'flex-start'} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700'>
                <VStack w={{base: '100%'}} align='center'>
                  <Text fontSize='2xl' as='b' w={'100%'}>Dirección de envío</Text>
                  <FormControl isRequired>
                    <FormLabel>Región</FormLabel>
                    <Select size='lg' border='2px' borderColor={'purple.700'} placeholder='Eliga su region...'>
                      <option>Región de Arica y Parinacota</option>
                      <option>Región de Tarapacá</option>
                      <option>Región de Antofagasta</option>
                      <option>Región de Atacama</option>
                      <option>Región de Coquimbo</option>
                      <option>Región de Valparaíso</option>
                      <option>Región Metropolitana</option>
                      <option>Región del Libertador General Bernardo O&apos;Higgins</option>
                      <option>Región del Biobío</option>
                      <option>Región de La Araucanía</option>
                      <option>Región de Los Ríos</option>
                      <option>Región de Los Lagos</option>
                      <option>Región de Aysén del General Carlos Ibáñez del Campo</option>
                      <option>Región de Magallanes y de la Antártica Chilena</option>
                    </Select>
                  </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Comuna</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="comuna" placeholder="Ingrese su comuna..." />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Ciudad</FormLabel>
                    <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="city" placeholder="Ingrese su ciudad..." />
                  </FormControl>
                  <HStack w={'100%'}>
                  <FormControl>
                    <FormLabel>Número</FormLabel>
                    <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="street-number" />
                  </FormControl>
                    <FormControl>
                      <FormLabel>N° depto / oficina  (si aplica)</FormLabel>
                      <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="apartment-number" />
                    </FormControl>
                  </HStack>
                </VStack>
              </VStack>  
              <VStack w={'100%'} align={'flex-start'} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700' >
                <Box>
                  <Text fontSize='2xl' fontWeight={700}>Medio de Pago</Text>
                  <Text fontSize='lg' color='gray.400'>Elige un medio de pago:</Text>
                </Box>
              <RadioGroup w={'100%'} onChange={setValue} value={value}>    
                <Stack divider={<StackDivider borderColor='purple.800' />}>  
                  <Radio size='lg' value='1' colorScheme='purple'>Webpay / Redcompra</Radio>
                  <Radio size='lg' value='2' colorScheme='purple'>Botón de pago Banco Estado</Radio>
                  <Radio size='lg' value='3' colorScheme='purple'>Mercado Pago</Radio>
                </Stack>
              </RadioGroup>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack divider={<StackDivider borderColor='purple.800' />} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700'>
            <Heading size={'lg'} w={'100%'}>Resumen</Heading>
              {cartItems.map((p) => (
                <Stack key={p.id} w='100%' spacing={4} direction={'column'}>
                  <Heading fontSize='xl'>{p.name}</Heading>
                  <HStack spacing={4}>
                    <Image border='2px' borderColor='purple.800' src={p.image} alt={p.name} w='96px' borderRadius='6' />
                    <VStack align='flex-start' w='100%' spacing={4}>
                      <HStack justifyContent='space-between' w='100%'>
                        <Text fontSize='xl'>Precio: </Text>
                        <Text as='b' fontSize='xl' color='purple.800' >${p.price}</Text>
                      </HStack>
                      <HStack justifyContent='space-between' w='100%'>
                        <Text fontSize='xl'>Cantidad: </Text>
                        <Text as='b' fontSize='xl' color='purple.800' >{p.quantity}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </Stack>
              ))}
              <VStack gap={8} w='100%'>
                <HStack w='100%' justifyContent='space-between'>
                  <Text as='b' color='purple.800' fontSize='xl'>Total:</Text>
                  <Text fontSize='xl' color={'purple.700'}>${totalPrice}</Text>
                </HStack>
                <Button w='100%' outline={'ghost'}>Pagar</Button>
              </VStack>
            </VStack>
          </GridItem>
          
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Checkout