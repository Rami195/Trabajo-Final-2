import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import {Header} from './Components/Header/Header.jsx'
import { Home } from './Components/Home/Home.jsx'
import {About} from './Components/About/About.jsx'
import { Skills } from './Components/Skills/Skills.jsx'
import { Proyects } from './Components/Projects/Projects.jsx'
import { Footer } from './Components/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ChakraProvider>
      <Flex direction="column">
      <Header/>
      <Home/>
      <About/>
   
      <Footer/>
      </Flex>
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
