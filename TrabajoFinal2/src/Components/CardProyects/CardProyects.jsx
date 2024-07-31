import React from "react";
import { Image, Box } from "@chakra-ui/react";

const CardProyects = ({ imgUrl }) => {
    return (
        <Box className="project" w="30%" align="center" justify="center" borderRadius="10px" display="flex" justifyContent="space-between">
            <Image src={imgUrl} alt="Project 1" w="100%" cursor="pointer" transition="all 1.0s" _hover={{ w: "105%", h: "105%" }}/>
        </Box>  
    );
}

export default CardProyects