import React from "react";
import { Link, Image,Box } from "@chakra-ui/react";

const Redes = ({ logo, refe }) => {
    return (
        <Box  transition="filter 0.3s" _hover={{ filter: "invert(1)" }}>
            <Link href={refe}>
            <Image src={logo}  boxSize={8} />
        </Link> 
      </Box>
    
    );
}

export {Redes}