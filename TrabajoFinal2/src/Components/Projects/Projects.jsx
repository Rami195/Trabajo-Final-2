import { Box, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import React from "react";
import CardProyects from "../CardProyects/CardProyects.jsx" 
import f1 from '../../../img/login.png'
import f2 from '../../../img/login.png'
import f3 from '../../../img/Services.png'

function Proyects() {
  const imagenes = [
    {
        imgUrl: f1,
    },
    {
        imgUrl: f2,
    },
    {
        imgUrl: f3,
    },
  ];
  const objetoPivot = imagenes.length;
  return (
    <Box as="section" id="projects" bg="rgba(3, 27, 29, 255)" textAlign="center" py="50px">
      <Heading as="h2" color="#dfe22f" mb="20px">
        Portafolio
      </Heading>
      <HStack className="ContenedorProjectImg" spacing={3} bg="rgba(30, 51, 54, 255)" justify="space-between" w="95%"
            mx="auto" align="center" py="15px" px="0" >
            {imagenes.slice(0, objetoPivot).map((elemento, index) => (
                <CardProyects 
                    key={index} 
                    imgUrl={elemento.imgUrl}
                />
            ))}
        </HStack>
    </Box>
  );
}

export {Proyects};