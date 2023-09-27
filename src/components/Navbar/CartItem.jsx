import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CartItem = ({ name, image }) => {
  return (
      <Stack direction={'row'}>
        <Image src={image} alt={name} w='96px' borderRadius='6'/>
        <Text>{name}</Text>
      </Stack>
  )
}

export default CartItem