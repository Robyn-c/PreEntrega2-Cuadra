import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./components/Productos/ItemDetailContainer"
import ItemListContainer from "./components/Productos/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"
import { Footer } from "./components/Footer"
import Contact from "./components/Contact"
import ShoppingCartContext from "./context/ShoppingCartContext"
import Checkout from "./components/Checkout"

const App = () => {
  return (
    <BrowserRouter>
     <ShoppingCartContext>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId/item/:itemId" element={<ItemDetailContainer/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App
