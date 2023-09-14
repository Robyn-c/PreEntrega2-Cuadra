import { Box, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineShopping } from "react-icons/ai"
const CartWidget = () => {
  return (
    <Box pos='relative'>
      <IconButton 
      aria-label='Cart' 
      variant='ghost'
      size='sm' 
      color='purple.800' 
      as={AiOutlineShopping}
                _hover={{ bg: 'purple.600', border: 'none' }} 
          _active={{ bg: 'purple.600', border: 'none'}}
      />
      <Text borderRadius="full" justify='center' align='center' bg='purple.500' 
      style={{ 
        color: "white",
        width: "1.5rem",
        height: "1.5rem",
        position: "absolute",
        top: -10,
        right: -5,
        transform: "translate(25%, 25%)"}}>
        0
      </Text>
    </Box>
  )                                  
}

export default CartWidget