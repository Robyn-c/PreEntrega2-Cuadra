import { Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = () => {
  return (
    <>
      <InputGroup justifySelf='center' width={{lg: '500px', md: '400px'}} borderRadius={5} size="md">
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color="gray.600" />
        </InputLeftElement>
        <Input type="text" placeholder="Buscar..." border='1px solid #2D095D'  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button bg='purple.800' color='white' style={{bg: 'purple.800' }}          
          _hover={{ bg: 'purple.600' , border: 'none' }} 
          _active={{ bg: 'purple.600', border: 'none'}} 
          size="md" 
          borderLeftRadius={0} 
          borderRightRadius={3.3} 
          border='1px solid #2D095D'>
            Buscar
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar