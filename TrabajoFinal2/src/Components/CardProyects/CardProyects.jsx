import React from "react";
import { VStack, Image } from "@chakra-ui/react";

const CardProyects = ({ imgUrl }) => {
    return (

        <VStack className="project" w="30%" align="center" justify="center" borderRadius="10px">
            <Image src={imgUrl} alt="Project 1" w="100%" cursor="pointer" transition="all 1.0s" _hover={{ w: "105%", h: "105%" }}/>
        </VStack>  
    );
}

export default CardProyects