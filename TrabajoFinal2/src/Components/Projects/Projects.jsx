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
    <Box as="section" id="projects" bg="rgba(3, 27, 29, 255)" textAlign="center" py="50px" >
      <Heading as="h2" fontSize="32px" color="#dfe22f" mb="20px" fontFamily='Times New Roman'>
        Portafolio
      </Heading>
      <Box display="flex" flexDirection={{ base: "column", sm: "row" }} spacing={3}  mr={{lg:'0', base:"5%"}} ml="5%"
        bg="rgba(30, 51, 54, 255)" justifyContent={{ base: "center", sm: "space-between" }} w={{lg:"95%", base:"90%"}} mx="auto" align="center"
        py="15px" px="0" gap={5}>

        {imagenes.slice(0, objetoPivot).map((elemento, index) => (
          <CardProyects key={index} imgUrl={elemento.imgUrl} />
        ))}
      </Box>
    </Box>
  );
}

export { Proyects };