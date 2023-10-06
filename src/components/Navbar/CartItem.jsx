import React, { useContext, useState } from 'react';
import { Button, HStack, Heading, Image, Input, Stack, Text, VStack, useNumberInput } from '@chakra-ui/react';
import { CartContext } from '../../context/ShoppingCartContext';

const CartItem = ({ name, image, quantity, stock, id, price }) => {
  
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useContext(CartContext)
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: currentQuantity,
    min: 1,
    max: stock,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  
  const isMaxQuantityReached = currentQuantity >= stock;
  const isMinQuantityReached = currentQuantity <= 1;
  
  return (
    <Stack w='100%' spacing={4} direction={'column'}>
      <Heading fontSize='xl'>{name}</Heading>
      <HStack spacing={4}>
        <Image border='2px' borderColor='purple.800' src={image} alt={name} w='96px' borderRadius='6' />
        <VStack align='flex-start' w='100%' spacing={4}>
          <HStack justifyContent='space-between' w='100%'>
            <Text fontSize='xl'>Precio: </Text>
            <Text as='b' fontSize='xl' color='purple.800' >${price}</Text>
          </HStack>
          <HStack maxW='160px' spacing={0}>
          <Button 
          size='sm'
          colorScheme='purple'
          bgColor='purple.800'
          borderRadiusRight={0}
          onClick={() => {
            if (!isMaxQuantityReached) {
              setCurrentQuantity(currentQuantity + 1);
              increaseCartQuantity(id);
            }}} 
          {...inc}>+</Button>
          <Input size='sm' {...input} w='48px' textAlign='center' />
          <Button 
          size='sm'
          colorScheme='purple'
          bgColor='purple.800'
          borderRadiusLeft={0}
          onClick={() => {
            if (!isMinQuantityReached) {
              setCurrentQuantity(currentQuantity - 1);
              decreaseCartQuantity(id);
            }}} 
            {...dec}>-</Button>
          </HStack>
        </VStack>
      </HStack>
      <Button onClick={() => {removeFromCart(id)}} variant={'ghost'} w={'100px'} colorScheme='purple'>Eliminar</Button>
      
    </Stack>
  );
};

export default CartItem;
