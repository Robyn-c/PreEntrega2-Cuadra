import { Button, Divider, Flex, Text } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
const ItemStock = ({stock}) => {
  const [numero, setNumero] = useState(0)

  const Add = () => { 
    if (numero == stock) return 
    else setNumero(numero + 1) 
  }
  const Remove = () => { 
    if (numero == 0) return
    else setNumero(numero - 1) 
  }
  const onAdd = () => {
    setNumero(0)
  }
  
  return( 
    <>
    <Flex direction='column' gap='6' width='100%' alignItems='center'> 
      <Text fontSize='2xl'>Stock: {stock}</Text>
      <Flex direction='column' alignItems='center' gap='2'>
        <Text fontSize='2xl'>Cantidad</Text>
          <Flex justifyContent='space-between' maxW='180px' alignItems='center' gap='10' bgColor='gray.200'  border='1px' borderColor='purple.800' borderRadius='md' >
            <IconButton onClick={Add} aria-label='Add' bgColor='white' colorScheme='white' icon={<MdAdd color="black" />} />
            <Text fontSize='lg'>{numero}</Text>
            <IconButton onClick={Remove} aria-label='Subtract' bgColor='white' colorScheme='white' icon={<MdRemove color="black" />} />
          </Flex>
      </Flex>
      <Button onClick={onAdd} as='b' size='lg' bg='purple.800' color='white'>Agregar al carrito </Button>
    </Flex>
    </>
  )
}

export default ItemStock