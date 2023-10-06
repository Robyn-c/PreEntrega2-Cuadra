import { Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Image, Spinner, Stack, Text, VStack } from "@chakra-ui/react"
import CartItems from "./CartItems"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const Cart = ({ isOpen, btnRef, onClose, cartItems, clearCart }) => {
 
    let totalPrice = 0;
    cartItems.map((item) => { 
      const quantity = parseInt(item.quantity);
      const productPrice = parseInt(item.price);
      if (!isNaN(productPrice) && !isNaN(quantity)) {
        totalPrice += productPrice * quantity;
      }
    })

  console.log(cartItems)
  if(cartItems === undefined) {
    return (
    <Container maxW='6xl'>
      <Flex gap='4' alignItems='center'>
        <Heading as='h2' size='xl'>Cargando...</Heading>
        <Spinner size='lg' />
      </Flex>
    </Container>
)}
  let order = {
    buyer: {
      name: "An Ecommerce Client",
      email: "client@coderhouse.com",
      phone: "123456789"
      },
    total: totalPrice,//utiliza una función global para calcular el importe total de la orden
    items: cartItems,//mapea tu carrito para agregar aquí solo los datos solicitados de cada producto
    date: serverTimestamp()	//método de firebase para asignar la fecha y hora del servidor
    };

    
   function addProductFirestore() {
    console.log('hi')
    const db = getFirestore();
    addDoc(collection(db, 'order'), order)
  }

  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
      <DrawerOverlay />
      <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de Compra</DrawerHeader>
          <Divider border='1px' borderColor='purple.900' opacity='100%'/>
          <DrawerBody>
            <CartItems cartItems={cartItems} />
          </DrawerBody>
          <DrawerFooter bgColor='purple.50' borderTop='2px'>
            <VStack  border='2' borderColor='purple.800' w='100%' spacing={8} px='10'>
              <HStack w='100%' justifyContent='space-between'>
                <Text as='b' color='purple.800' fontSize='xl'>Total:</Text>
                <Text fontSize='xl'>${totalPrice}</Text>
              </HStack>
              <HStack w='100%' justifyContent='space-between'>
                <Button variant='outline' colorScheme="purple" mr={3} onClick={clearCart}>
                  Limpiar Carrito
                </Button>
                <ChakraLink as={ReactRouterLink} reloadDocument to='/checkout'>
                  <Button onClick={() => {addProductFirestore()}} w="70%" variant='solid' colorScheme="purple" bgColor='purple.800' mr={3}>
                    Checkout
                  </Button>
                </ChakraLink>
              </HStack>
            </VStack>
          </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart