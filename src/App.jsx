import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./components/Productos/ItemDetailContainer"
import ItemListContainer from "./components/Productos/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
