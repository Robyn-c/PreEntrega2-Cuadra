import Item from "./Item"

const ItemList = ({ productos }) => {

  return(
    <>
    {
      productos.map((p) => {
        return(
          <Item key={p.id}
          title={p.title}
            price={p.price}
            stock={p.stock}  
            url={p.url}
            alt={p.alt}
          />
        )
      })
    }
    </>
  )
}

export default ItemList