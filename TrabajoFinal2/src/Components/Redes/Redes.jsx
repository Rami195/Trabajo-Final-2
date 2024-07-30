import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Redes = ({ logo, refe }) => {
    return (
        
        <Box as="a" href={refe} className="icon" fontSize="15px" borderRadius="50%" border="2px solid #dfe22f" display="flex"
            justifyContent="center" alignItems="center" p="5px" transition="all 1s"
            _hover={{border: "2px solid rgba(3,27,29,255)", color: "rgba(3,27,29,255)",     
            svg: {
                fill: "rgba(3,27,29,255)"
            }}}>
            <Image src={logo} boxSize={8} />
        </Box>
    );
}

export { Redes };