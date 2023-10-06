import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);


  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, 'products', itemId);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data()})
      }
    })
  }, [itemId]);

  if(item === null) {
    return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Flex gap='4' alignItems='center'>
        <Heading as='h2' size='xl'>Cargando...</Heading>
        <Spinner size='lg' />
      </Flex>
    </Container>
  )}
  
  return (
    <ItemDetail item={item}/>
  )
}
