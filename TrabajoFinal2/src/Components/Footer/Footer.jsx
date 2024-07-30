import { Box, Heading, VStack, HStack,  Button, Text, Input} from "@chakra-ui/react";
import {Redes} from '../Redes/Redes.jsx'
import f1 from '../../../img/facebook.svg'
import f2 from '../../../img/twitter.svg'
import f3 from '../../../img/linkedin.svg'
import f4 from '../../../img/instagram.svg'

function Footer() {
  const logos = [
    {logo: f1, refe:"https://www.facebook.com/share/DGoipBmxY38T8o8b/?mibextid=qi2Omg"},
    {logo: f2, refe:"https://x.com/RamiM53?t=aakaIkIgd9q27S-Hx_UM2A&s=08"},
    {logo: f3, refe:"https://ar.linkedin.com/in/ramiro-martinez-315666252"},
    {logo: f4, refe:"https://www.instagram.com/ramiii_martinez?utm_source=qr&igsh=NWlzZGw5cmR6enY3"}
  ];
  const objetoPivot = logos.length;
  return (
    <Box as="footer" bg="rgba(3, 27, 29, 1)" textAlign="center" py="50px" fontFamily='Times New Roman' color="#dfe22f">
      <Heading as="h2" size="md"  mb="20px" fontFamily='Times New Roman'>
        Visitame
      </Heading>
      <HStack className="footer-content" justify="space-between" w="80%" mx="auto" align="flex-start">
        <VStack className="Contenedor-text" align="flex-start" pl="5%">
          <HStack className="Columnas" spacing={10}>
            <VStack className="Tec" align="flex-start" color="White">
              <Heading as="h4" size="md" fontFamily='Times New Roman' color="#dfe22f">
                Personalidad
              </Heading>
              <Text>Seguridad</Text>
              <Text>Integridad</Text>
              <Text>Confianza</Text>
              <Text>Etica</Text>
            </VStack>
            <VStack className="Tec" align="flex-start" color="white">
              <Heading as="h4" size="md" fontFamily='Times New Roman' color="#dfe22f">
                Tecnologias
              </Heading>
              <Text>Java</Text>
              <Text>CSS</Text>
              <Text>HTML</Text>
              <Text>JS</Text>
            </VStack>
          </HStack>
          <VStack className="social-media" align="center" spacing={4}>
            <Heading as="h4" size="md"  fontFamily='Times New Roman'>
              Sigueme
            </Heading>
            <HStack className="Logos" spacing={4}>
            {logos.slice(0, objetoPivot).map((elemento, index) => (
                <Redes 
                    key={index} 
                    logo={elemento.logo}
                    refe={elemento.refe}
                />
            ))}
            </HStack>
          </VStack>
        </VStack>
        <VStack className="contact" align="flex-start" pr="10px" pb="40px" w="400px">
          <Heading as="h4" size="md" mb="20px" fontFamily='Times New Roman'>
            Contactame
          </Heading>
          <form>
            <HStack className="name" spacing={4} w="100%">
              <Input type="text" placeholder="Nombre" bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
              <Input type="text" placeholder="Apellido" bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
            </HStack>
            <Input type="email" placeholder="Email" mt={4} bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
            <Button as="a" className="submit" href="" mt={4} bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" _hover={{ bg: "#dfe22f", color: "rgba(3, 27, 29, 1)" }} borderRadius="5px" w="100%">
              Enviar
            </Button>
          </form>
        </VStack>
      </HStack>
    </Box>
  );
}

export {Footer};