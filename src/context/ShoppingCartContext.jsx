import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])  
  const cartCount = cartItems.length;

  const isInCart = (id) => {
    return cartItems.find((cartItem) => cartItem.id === id);
  };

  const addToCart = (item) => {
  
    if (isInCart(item.id)) {
    setCartItems(
        cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem // otherwise, return the cart item
        )
    );
    } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems => {
      return cartItems.filter(item => item.id !== id)
    })
  };

  const increaseCartQuantity = (id) => {
    setCartItems(cartItems => {
      if (cartItems.find(item => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }]
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id) => {
    setCartItems(cartItems => {
      if (cartItems.find(item => item.id === id)?.quantity === 1) {
        return cartItems.filter(item => item.id !== id)
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartCount, clearCart, addToCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity  }}>
      {children}
    </CartContext.Provider>
  );
}

export default ShoppingCartProvider
