import { Button, Flex, HStack, Input, Text, useNumberInput } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../../context/ShoppingCartContext"

const ItemStock = ({ name, price, image, id, stock }) => {

  const { addToCart } = useContext(CartContext)

  return( 
    <>
    <Flex direction='column' gap='6' width='100%' alignItems='center'> 
      <Text fontSize='2xl'>Stock: {stock}</Text>
      <Button onClick={() => addToCart({ name, price, image, id, stock })} cursor='pointer' _hover={{ bg: 'purple.600' }} as='b' size='lg' bg='purple.800' color='white'>Agregar al carrito </Button>
    </Flex>
    </>
  )
}

export default ItemStock