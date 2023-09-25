import { Link, List, ListItem, Text } from "@chakra-ui/react"
import NavProducts from "./NavProducts"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const NavLinks = () => {
  return(
    <>
      <List bg='purple.900' display ='flex' px='12px' py='10px' width='100%' alignItems='center' justifyContent='center' gap='40px'>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Inicio</Text>
            </Link> 
        </ListItem>
        <ListItem>
          <NavProducts/>
        </ListItem>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Ideas para Regalar</Text>
            </Link> 
        </ListItem>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Sobre Nosotros</Text>
            </Link> 
        </ListItem>
        <ListItem>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/contact'>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Contacto </Text>
            </ChakraLink> 
        </ListItem>
      </List>
    </>
  )
}

export default NavLinks