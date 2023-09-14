import { ItemDetailContainer } from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"

const App = () => {
  const greetings = 'Bienvenidos a mi E-Commerce'
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings={greetings}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
