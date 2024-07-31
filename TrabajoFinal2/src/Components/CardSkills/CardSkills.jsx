import React from "react";
import { Box, Heading, VStack, Image } from "@chakra-ui/react"

const CardSkills = ({ logoUrl, tittle }) => {
  return (
    <Box bg="rgba(30, 51, 54, 255)" borderRadius="5px" align="center" justify="center" mr={{lg:'0', base:"5%"}}
    cursor="pointer" transition="all 1.5s" p={4} _hover={{  bg: "white", color: "rgba(30, 51, 54, 255)", '& img': {
        filter: 'invert(1)'} }}>

      <Box  transition="filter 1.5s">
        <Image src={logoUrl} w="200px" h="200px" p="10px" />
      </Box>
      <Heading as="h3" size="md" color="#a39ba3">
        {tittle}
      </Heading>
    </Box>
  );
};

export default CardSkills;