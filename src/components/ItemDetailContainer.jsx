import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

const itemDetail =
  {
    id: 1,
    title: "Pulsera Ojo de Tigre 8mm",
    description: "Descripción del producto 1",
    price: 12990,
    stock: 1,
    url: "https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/38659667/resize/640/640?1692657572",
  };

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

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
        setItem(itemDetail);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData(); // Llamamos a la función fetchData en el montaje del componente
  }, []);
  return (
    <ItemDetail item={item}/>
  )
}
