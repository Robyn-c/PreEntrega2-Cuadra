import { Box, Container, FormControl, FormLabel, Grid, GridItem, HStack, Icon, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import { MdLocalPhone, MdLocationPin, MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <Box bgColor='purple.50'>
      <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
        <Grid templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} rowGap={10} columnGap={6}>
          <GridItem colSpan={{base: 1, md: 2}}>
            <VStack align={'flex-start'} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700'>
                <Text textAlign='center' fontSize='2xl' fontWeight={700}>Formulario de Contacto</Text>
                <Text textAlign='center' fontSize='lg' color='gray.400'>Envíanos un mensaje y te responderemos lo antes posible.</Text>
              <VStack w={{base: '100%', lg: '70%'}} align='center'>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="name" placeholder="Ingrese su nombre..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="lastname" placeholder="Ingrese su apellido..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input border='2px' borderColor={'purple.700'} size='lg' type="text" name="email" placeholder="Ingrese su email..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    border='2px' borderColor={'purple.700'}
                    name="message"
                    placeholder="Escriba su mensaje..."
                    rows={6}
                    resize="none"
                  />
                </FormControl>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='purple.700'>
              <Text textAlign='center' fontSize='2xl' fontWeight={700}>Información de contacto</Text>
              <Stack spacing={6}>
                <HStack>
                  <Icon boxSize={6} as={MdOutlineEmail} color='purple.700' />
                  <Text color='purple.700'>honupiedrasyesencias@gmail.com</Text>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={MdLocalPhone} color='purple.700' />
                  <Text color='purple.700'>+56 9 9319 1106</Text>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={MdLocationPin} color='purple.700' />
                  <Text color='purple.700'>Hugo Montes Valdebenito 4088, La Serena, Chile</Text>
                </HStack>
              </Stack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact