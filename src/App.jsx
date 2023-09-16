import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"
import { Home } from "./components/Home"

const App = () => {
  const greetings = 'Bienvenidos a mi E-Commerce'
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home greetings={greetings}/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
