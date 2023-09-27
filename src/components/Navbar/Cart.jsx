import { Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react"
import CartItems from "./CartItems"

const Cart = ({ isOpen, btnRef, onClose, cartItems, clearCart }) => {
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
          <DrawerBody>
            <CartItems cartItems={cartItems} />
          </DrawerBody>
          <DrawerFooter>
          <Button variant='outline' mr={3} onClick={clearCart}>
              Clear
            </Button>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default Cart