import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Redes = ({ logo, refe }) => {
    return (
        <Box as="a" href={refe} borderRadius="50%" border="2px solid #dfe22f" 
        display="flex" justifyContent="center" alignItems="center" p="5px 5px 5px 5px" transition="all 1s" color="white" 
        flexDirection={{md:'row', sm:'column', base:'none'}}
        _hover={{ border: "2px solid rgba(3,27,29,255)", backgroundColor: "#dfe22f", color: "rgba(3,27,29,255)",
        '& svg': {fill: "rgba(3,27,29,255)"} }}>
            <Image src={logo} w="15px" h="15px" />
        </Box>
    );
}

export { Redes };