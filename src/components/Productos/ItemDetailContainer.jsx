import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import categories from "./Productos";
import { Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import Item from "./Item";

export const ItemDetailContainer = () => {
  const { itemId, categoryId } = useParams();
  const [item, setItem] = useState(null);

  function getProductById(productId) {
    for (const category of categories) {
      const product = category.products.find((p) => p.id === productId);
      if (product) {
        return product;
      }
    }
    return null; // Return null if the product is not found
  }
  
  const foundProduct = getProductById(itemId);

  useEffect(() => {
    // Función que simula un llamado asincrónico con una promesa y un retraso de 2 segundos
    const fetchData = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000); // 2 segundos de retraso
        });

          const foundCategory = categories.find((cat) => cat.id === categoryId);
          console.log(foundCategory)
          console.log("category" + foundProduct)
          setItem(foundProduct);

        // Una vez que se resuelve la promesa, establecemos los datos en el estado
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData(); // Llamamos a la función fetchData en el montaje del componente
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
  console.log("itemId:", itemId);
  console.log(item)
  return (
    <ItemDetail item={item}/>
  )
}
