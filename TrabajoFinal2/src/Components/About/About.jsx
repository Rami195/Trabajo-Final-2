import { Box, Image, Link, Text, Heading, VStack, Flex } from "@chakra-ui/react";

function About() {
  return (
    <Box as="section" id="about" p="10px 10px 10px 0" bg="rgba(3,27,29,255)">
      <Flex className="about-content" justify="space-between" align="flex-start" w="100%" p="10px 10px 10px 0" mt="5%">
        <VStack className="about-image" textAlign="center" spacing={4}>
          <Image src="../../../img/Perfil.jpg" alt="Perfil" boxSize="300px" border="5px solid #dfe22f" borderRadius="20px" />
          <Link className="descarga" href="../../../doc/Cv Ramiro Martinez.pdf" mt="20px" bg="#dfe22f" color="rgba(3, 27, 29, 1)"
            borderRadius="5px" border="1px solid rgba(3, 27, 29, 1)" w="120px" h="30px" display="flex" alignItems="center"
            justifyContent="center" transition="color 1s, background-color 1s" _hover={{ bg: "rgba(3, 27, 29, 1)", color: "#dfe22f", border: "1px solid #dfe22f" }}>
            Descargar CV
          </Link>
        </VStack>
        <Box className="about-text" mt="0" pt="0" ml="20px" display="flex" flexDirection="column">
          <Heading as="h2" color="#dfe22f" textAlign="left">
            Sobre Mi
          </Heading>
          <VStack className="info" align="left" spacing={4}>
            <Box>
              <Heading as="h3" color="white" fontSize="18px">
                Vida
              </Heading>
              <Text color="#a39ba3" fontSize="14px" textAlign="left" width="70%">
                Soy Ramiro Martinez, estudiante de ingeniería de sistemas, tengo 21 años. Con gran interés por la tecnología y disposición para aprender constantemente.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" color="white" fontSize="18px">
                Educación
              </Heading>
              <Text color="#a39ba3" fontSize="14px" textAlign="left" width="70%">
                Ingeniería en Sistemas de Información: UTN FRM <br /> Actualmente en tercer año
              </Text>
            </Box>
            <Box>
              <Heading as="h3" color="white" fontSize="18px">
                Experiencia
              </Heading>
              <Text color="#a39ba3" fontSize="14px" textAlign="left" width="70%">
                Centro Medico de Junin <br /> Administrador: Encargado del manejo de la carga de turnos en el sistema y coordinación de turnos
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export {About}