import { Box } from '@chakra-ui/react'
import { Hero } from './Hero'
import { Categoria } from './Categoria'
import { Elegirnos } from './Elegirnos'
import { Newsletter } from './Newsletter'

export const Home = () => {
  return (
    <Box bgColor='purple.50'>
      <Hero />
      <Categoria/>
      <Elegirnos/>
      <Newsletter/>
    </Box>
  )
}
