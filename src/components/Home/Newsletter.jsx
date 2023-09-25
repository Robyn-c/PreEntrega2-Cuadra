import { Box, Button, Container, Flex, Heading, Input, InputGroup, Stack, Text } from '@chakra-ui/react'

export const Newsletter = () => {
  return (
    <Box bgColor='purple.600'>
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Flex direction={{base: 'column', lg: 'row'}} alignItems='center' justifyContent='space-between' gap={10}>
        <Stack gap='12px' width='100%'>
          <Heading size='lg' color='gray.200'>Newsletter</Heading>
          <Text fontSize='lg' color='gray.200'>Suscríbase a nuestra lista de correo y obtenga actualizaciones de nuevas ofertas y mucho más de nuestro equipo.</Text>
        </Stack>
        <InputGroup>
          <Input size='lg' border='2px' borderRight='0' borderRightRadius='0' borderColor='purple.900' bgColor='white' placeholder='Escriba su correo aquí...' />
          <Button  
            _hover={{ bg: 'purple.700' , border: '2', borderColor: 'purple.900' }} 
            _active={{ bg: 'purple.700', border: 'none'}} size='lg' bgColor='purple.900' borderLeftRadius='0' textColor='gray.200' px='45px'>
              Enviar
          </Button>
        </InputGroup>
      </Flex>
    </Container>
  </Box>
  )
}
