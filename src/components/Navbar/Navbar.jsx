import { Flex, Image} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import Honu from '../../assets/honu.png'
import CartWidget from '../CartWidget'
import NavLinks from './NavLinks'
import SearchBar from '../SearchBar'

const NavBar = () => {
  return (
    <>
        <Flex flexDirection='column' as='nav' py='6' align='center' maxWidth='100%' justify='space-between'>
          <Flex width={{lg: '80%', md: '90%'}} justify='space-between' align='center'>
            <ChakraLink as={ReactRouterLink} to='/'>
              <Image px='24px' py='4' width='200px' objectFit='contain' src={Honu}></Image>
            </ChakraLink>
            <Flex align='center' gap='24'>
              <SearchBar/>  
              <CartWidget/>
            </Flex>
          </Flex>
          <NavLinks/>
        </Flex>
          
    </>
  )
    
  
}

export default NavBar