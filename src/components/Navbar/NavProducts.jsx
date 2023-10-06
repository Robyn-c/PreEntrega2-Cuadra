import { Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuGroup} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
const NavProducts = () => {
  return(
    <Menu>
        <MenuButton
          variant='ghost' 
          as={Button} 
          rightIcon={<BiChevronDown color="white" />}
          _hover={{ bg: 'purple.600', border: 'none' }} 
          _active={{ bg: 'purple.600', border: 'none'}}
        >
          <Text fontSize='lg' color='white'>Productos</Text>
        </MenuButton>
        <MenuList display='flex' flexWrap='wrap' gap='6'>
        <MenuGroup>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/all-products'>
            <MenuItem>Todos los productos</MenuItem>
          </ChakraLink>
        </MenuGroup>
          <MenuGroup title='Esencias'>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/cascadas-de-humo'>
            <MenuItem>Cascadas de Humo</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/aceites-aromaticos'>
            <MenuItem>Aceites Aromáticos</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/bombas-carboncillos'>
            <MenuItem>Bombas / Carboncillos</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/inciesos-resinas-hierbas'>
            <MenuItem>Inciensos / Resinas / Hierbas</MenuItem>
          </ChakraLink>
          </MenuGroup>
          <MenuGroup title='Joyería'>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/aros'>
            <MenuItem>Aros</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/anillos'>
            <MenuItem>Anillos</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/llaveros'>
            <MenuItem>Llaveros</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/collares'>
            <MenuItem>Collares</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pulseras'>
            <MenuItem>Pulseras</MenuItem>
          </ChakraLink>
          </MenuGroup>

          <MenuGroup title='Místico & Espiritual'>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pendulos'>
              <MenuItem>Péndulos</MenuItem>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/bolsas-de-tarot'>
              <MenuItem>Bolsas de Tarot</MenuItem>
            </ChakraLink>
          </MenuGroup>
          <MenuGroup title='Otros'>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/velas'>
              <MenuItem>Velas</MenuItem>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/copalera-sahumador'>
              <MenuItem>Sahumadores & Copaleras</MenuItem>
            </ChakraLink>
          </MenuGroup>
        </MenuList>
      </Menu>
  )
}

export default NavProducts