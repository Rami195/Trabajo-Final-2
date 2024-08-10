import React from "react";
import { Image, Box, Link} from "@chakra-ui/react";

const CardProyects = ({ imgUrl, refe }) => {
  return (
    <Box w={{ sm: "30%", base: "80%" }} mb={{ base: 5, sm: 0 }} align="center" justify="center" borderRadius="10px"
      display="flex" justifyContent={{ sm: "space-between", base: "center" }} flexDirection={{ sm: "row", base: "column" }}
      mx={{ base: "auto", sm: 0 }} p={{ base: 2, sm: 0 }} >
      <Link href={refe} isExternal>
        <Image src={imgUrl} alt="Project" w="100%" cursor="pointer" transition="all 1.0s" />
      </Link>
    </Box>
  );
}

export default CardProyects;