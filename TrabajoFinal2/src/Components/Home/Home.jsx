import { useState } from 'react'
import './Home.css'
import { Box, Flex, Text, Link, Heading, Image, Icon, useColorModeValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Home() {

  return (
    <Box as="section" id='home' bg="rgba(3,27,29,255)" color="#ffffff" w="100%" mt={55}
      display="flex" justifyContent="space-between" alignItems="center" p={4}>

      <Flex as="section" flexDirection="column" w="30%" color="white" textAlign="left"
       alignContent="center" ml="5%">
          <Box  display="flex" justifyContent="flex-start" alignItems="center" alignContent="center">        
            <Text fontSize="lg">
            <ArrowForwardIcon color="#dfe22f"  fontSize="20px" />
            Hola, Soy Ramiro Martinez
           </Text>
          </Box>
   
          <Heading fontSize="40px" mt={4} mb={4}>
            Soy un <br />
            <span style={{ color: '#dfe22f' }}>Desarrollador <br/> Web</span>
          </Heading>
          <Text color="#a39ba3" mb={8} maxW="70%" fontSize="14px">
            Soy un desarrollador. Buscando nuevas oportunidades para colaborar en proyectos desafiantes. ¡Estoy listo para ayudar!
          </Text>
          <Flex as="nav" direction="row" alignContent="center" justify="space-between" gap={4} w="70%">
            <Link href="#about" bg="#dfe22f" color="rgba(3, 27, 29, 1)" borderRadius="md" border="1px solid rgba(3, 27, 29, 1)"
              p={2} textAlign="center" w="120px" h="30px" display="flex" alignItems="center" justifyContent="center"
              transition="color 1s, background-color 1s"
              _hover={{ bg: 'rgba(3, 27, 29, 1)', color: '#dfe22f', border: '1px solid #dfe22f',
              }}>
              Resume
            </Link>
            <Link href="#Contact" bg="rgba(3, 27, 29, 1)" color="#dfe22f" borderRadius="md" border="1px solid #dfe22f" p={2}
              textAlign="center" w="120px" h="30px" display="flex" alignItems="center" justifyContent="center"
              transition="color 1s, background-color 1s"
              _hover={{ bg: '#dfe22f', color: 'rgba(3, 27, 29, 1)', border: '1px solid rgba(3, 27, 29, 1)',
              }}>
              Contactame
            </Link>
          </Flex>
        
      </Flex>
      <Flex as="section" align="center" justify="center" w={{ base: '100%', md: '30%' }}>
        <Image src="../../../img/Perfil.jpg" alt="" border="5px solid #dfe22f" w="100%" h="auto" borderRadius="20"
        />
      </Flex>
    </Box>
  )
}

export { Home }