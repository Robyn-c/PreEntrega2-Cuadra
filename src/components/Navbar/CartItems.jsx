import { Divider, StackDivider, VStack } from '@chakra-ui/react'
import CartItem from './CartItem'

const CartItems = ({ cartItems }) => {
  return (
    <VStack align='flex-start' divider={<StackDivider borderColor='purple.800' />}>
      {cartItems.map((p) => ( // Remove the extra curly braces here
      <CartItem key={p.id} id={p.id} name={p.name} image={p.image} quantity={p.quantity} stock={p.stock} price={p.price}/>
      ))}
    </VStack>
  )
}

export default CartItems