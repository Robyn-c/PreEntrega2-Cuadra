import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";

const itemListData = [
  {
    id: 1,
    title: "Pulsera Ojo de Tigre 8mm",
    description: "Descripción del producto 1",
    price: 12990,
    stock: 1,
    url: "https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/38659667/resize/640/640?1692657572",
  },
  {
    id: 2,
    title: "Pulsera Turmalina con Cuarzo Turmalinado",
    description: "Descripción del producto 2",
    price: 9900,
    stock: 4,
    url: "https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/38774889/resize/640/640?1693252548",
  },
  {
    id: 3,
    title: "Cuenco tibetano 11 Cm. - Negro",
    description: "Descripcion producto 3",
    price: 26000,
    stock: 2,
    url: 'https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/35979510/resize/640/640?1685723534'
  },
  {
    id: 4,
    title: 'Anillo - Árbol de la Vida',
    description: 'Descripcion producto 4',
    price: 3000,
    stock: 3,
    url: 'https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/35858719/resize/640/640?1692060346'
  },
];

const ItemListContainer = ({ greetings }) => { 
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Función que simula un llamado asincrónico con una promesa y un retraso de 2 segundos
    const fetchData = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000); // 2 segundos de retraso
        });

        // Una vez que se resuelve la promesa, establecemos los datos en el estado
        setProductos(itemListData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData(); // Llamamos a la función fetchData en el montaje del componente
  }, []);

  return(
    <Container maxW='6xl'>
      <Flex direction='column' alignItems='center' gap='4'>
        <Heading as='h2' size='xl'>{ greetings }</Heading>
        <SimpleGrid alignItems='center' justifyContent='center' columns={[2, null, 3]} spacing='40px'>
          <ItemList productos={productos}/>
        </SimpleGrid>
      </Flex>
    </Container>
  )

}

export default ItemListContainer