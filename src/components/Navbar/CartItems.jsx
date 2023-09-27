import CartItem from './CartItem'

const CartItems = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((p) => ( // Remove the extra curly braces here
      <CartItem key={p.id} id={p.id} name={p.name} image={p.image}/>
      ))}
    </>
  )
}

export default CartItems