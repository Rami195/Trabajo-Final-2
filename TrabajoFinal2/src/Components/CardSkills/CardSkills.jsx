import React from "react";
import { Box, Heading, VStack, Image } from "@chakra-ui/react";

const CardSkills = ({ logoUrl, tittle }) => {
  return (
    <VStack className="service" bg="rgba(30, 51, 54, 255)" borderRadius="5px" align="center" justify="center"
      cursor="pointer" transition="all 1.5s" p={4} _hover={{ bg: "white", color: "rgba(30,51,54,255)" }}
    >
      <Box transition="filter 1.5s" _hover={{ filter: "invert(1)" }}>
        <Image src={logoUrl} w="200px" h="200px" p="10px" />
      </Box>
      <Heading as="h3" size="md" color="#a39ba3">
        {tittle}
      </Heading>
    </VStack>
  );
};

export default CardSkills;