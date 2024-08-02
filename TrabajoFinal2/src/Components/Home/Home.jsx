import { useState } from 'react'
import { Box, Flex, Text, Link, Heading, Image, Icon, useColorModeValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import fot from '../../assets/img1/Perfil.png'
function Home() {

  return (
    <Box as="section" id='home' bg="rgba(3,27,29,255)" color="#ffffff" w="100%" mt={55}
      display="flex" justifyContent="space-between" alignItems="center" p={4} fontFamily='Times New Roman'>

      <Flex as="section" flexDirection="column" w={{md:"30%", base:"80%"}} textAlign="left"
       alignContent="center" ml={{md:"5%",sm:"10%", base:"5%"}}>
          <Box  display="flex" justifyContent="flex-start" alignItems="center" alignContent="center">        
            <Text fontSize="lg" fontFamily='Times New Roman'>
            <ArrowForwardIcon color="#dfe22f"  fontSize="20px" />
            Hola, Soy Ramiro Martinez
           </Text>
          </Box>
   
          <Heading fontSize={{base:"40px"  , md:"36px" , lg:"40px"  }}mt={4} mb={4} fontFamily='Times New Roman'>
            Soy un <br />
            <span style={{ color: '#dfe22f' }}>Desarrollador <br/> Web</span>
          </Heading>
          <Text color="#a39ba3" mb={8} maxW="70%" fontSize="14px">
            Soy un desarrollador. Buscando nuevas oportunidades para colaborar en proyectos desafiantes. ¡Estoy listo para ayudar!
          </Text>
          <Flex as="nav" direction="row" alignContent="center" justify="space-between" gap={4} w="70%" display={{base:'none',sm:'flex'}}>
            <Link href="#about" bg="#dfe22f" color="rgba(3, 27, 29, 1)" borderRadius="md" border="1px solid rgba(3, 27, 29, 1)"
              p={2} textAlign="center" w="120px" h="30px" display="flex" alignItems="center" justifyContent="center"
              transition="color 1s, background-color 1s"
              _hover={{ bg: 'rgba(3, 27, 29, 1)', color: '#dfe22f', border: '1px solid #dfe22f',
              }}>
              Resume
            </Link>
            <Link href="#contact" bg="rgba(3, 27, 29, 1)" color="#dfe22f" borderRadius="md" border="1px solid #dfe22f" p={2}
              textAlign="center" w="120px" h="30px" display="flex" alignItems="center" justifyContent="center"
              transition="color 1s, background-color 1s"
              _hover={{ bg: '#dfe22f', color: 'rgba(3, 27, 29, 1)', border: '1px solid rgba(3, 27, 29, 1)',
              }}>
              Contactame
            </Link>
          </Flex>
        
      </Flex>
      <Flex as="section" align="center" justify="center" display={{base: "none", md: "flex"}} w={{ base: '100%', md: '30%' }}>
        <Image src={fot} alt="" border="5px solid #dfe22f" w="100%" h="auto" borderRadius="20"
        />
      </Flex>
    </Box>
  )
}

export { Home }