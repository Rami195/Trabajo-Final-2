import { Box, Heading, VStack, HStack, Image } from "@chakra-ui/react"
import CardSkills from "../CardSkills/CardSkills.jsx" 

import f1 from '../../../img/css.svg'
import f2 from '../../../img/html.svg'
import f3 from '../../../img/javascript.svg'
import f4 from '../../../img/java.svg'
import f5 from '../../../img/chakra-ui.svg'

function Skills() {
  const logos = [
    {
        "logoUrl": f1,
        "tittle": "CSS",
    },
    {
        "logoUrl": f2,
        "tittle": "HTML",
    },
    {
        "logoUrl": f3,
        "tittle": "JS",
    },
    {
        "logoUrl": f4,
        "tittle": "JAVA",
    },
    {
        "logoUrl": f5,
        "tittle": "CHAKRA-UI",
    }
    
]
const objetoPivot = logos.length;

  return (
    <Box as="section" id="skills" bg="rgba(3, 27, 29, 1)" textAlign="center" py="50px">
      <Heading as="h2" color="#dfe22f" fontSize="32px" fontFamily='Times New Roman'>
        Mis Habilidades
      </Heading>
      <Box display="flex" flexDirection={{lg:"row", base:"column"}} gap={{lg:"5%", base:"20px"}} spacing={4} w="95%" ml="5%" mt="20px" justify="space-between">
        {logos.slice(0, objetoPivot).map((elemento, index) => (
          <CardSkills 
            key={index}
            logoUrl={elemento.logoUrl}
            tittle={elemento.tittle}
            />
          ))}

      </Box>
    </Box>
  );
}

export {Skills};