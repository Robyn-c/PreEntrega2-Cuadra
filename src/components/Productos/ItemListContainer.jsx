import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = () => {
  const { categoryId } = useParams('all-products');  
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    let q;

    if (categoryId == 'all-products') {
      // If categoryId is present in the URL, apply the filter
      q = itemsCollection;
    } else {
      // If categoryId is not present, fetch all products without filtering
      q = query(itemsCollection, where("categoryId", "==", categoryId));
    }

    getDocs(q).then((snapshot) => {
      setCategory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryId]);


  if(category === null) {
    return (
    <Container maxW='6xl'>
      <Flex gap='4' alignItems='center'>
        <Heading as='h2' size='xl'>Cargando...</Heading>
        <Spinner size='lg' />
      </Flex>
    </Container>
  )}

  return(
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Flex direction='column' alignItems='center' gap='4'>
        <SimpleGrid alignItems='center' justifyContent='center' columns={[1, 2, 3]} spacing='40px'>
          <ItemList category={category}/>
        </SimpleGrid>
      </Flex>
    </Container>
  )
}

export default ItemListContainer 