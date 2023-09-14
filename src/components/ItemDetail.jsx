import { Box, Container, Divider, Flex, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import ItemStock from "./ItemStock"

export const ItemDetail = ({ item }) => {
  return (
    <Container maxW='6xl' py='32'>
      <Flex width='100%' justifyContent='space-between' gap='24px' columns={2}>
        <Flex justify='center'>
          <Image boxSize='450' borderRadius='xl' border='2px' borderColor='purple.800' src={item.url} />
        </Flex>
        <Stack divider={<StackDivider borderColor='purple.800' />} direction='column' spacing='6'>
          <Flex direction='column' align='center' gap="6">
            <Heading color='gray.700' size='2xl'>{item.title}</Heading>
            <Text color='purple.700' as='b' fontSize='3xl'>$ {item.price}</Text>
          </Flex>
          <Flex>
            <ItemStock stock={item.stock}/>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  )
}
