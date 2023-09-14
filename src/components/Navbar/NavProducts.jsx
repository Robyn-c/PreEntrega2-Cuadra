import { Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuGroup} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";

const NavProducts = () => {
  return(
    <Menu closeOnSelect={false}>
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
          <MenuGroup title='Esencias'>
            <MenuItem>Cascadas de Humo</MenuItem>
            <MenuItem>Aceites Aromáticos</MenuItem>
            <MenuItem>Bombas / Carboncillos</MenuItem>
            <MenuItem>Inciensos / Resinas / Hierbas</MenuItem>
          </MenuGroup>
          <MenuGroup title='Joyería'>
            <MenuItem>Aros</MenuItem>
            <MenuItem>Anillos</MenuItem>
            <MenuItem>Llaveros</MenuItem>
            <MenuItem>Collares</MenuItem>
            <MenuItem>Pulseras</MenuItem>
          </MenuGroup>
          <MenuGroup title='Místico & Espiritual'>
            <MenuItem>Paños</MenuItem>
            <MenuItem>Péndulos</MenuItem>
            <MenuItem>Baño Ritual</MenuItem>
            <MenuItem>Ombligueras</MenuItem>
            <MenuItem>Bolsas de Tarot</MenuItem>
          </MenuGroup>
          <MenuGroup title='Otros'>
            <MenuItem>Velas</MenuItem>
            <MenuItem>Sahumadores & Copaleras</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
  )
}

export default NavProducts