import { Box, Image, Link, Text, Heading, VStack, Flex, Tab, Tabs, TabList, TabPanel, TabPanels, ListItem, UnorderedList } from "@chakra-ui/react";
import cv from '../../assets/doc/Cv Ramiro Martinez.pdf'
import fot from '../../assets/img1/Perfil.png'
function About() {
  return (
    <Box as="section" id="about" p="10px 10px 10px 0" bg="rgba(3,27,29,255)" fontFamily='Times New Roman'>  
      <Flex mt="5%" w="100%">
        <VStack className="about-image" textAlign="center" spacing={4} display={{base: "none", md: "flex"}}>
          <Image src={fot} alt="Perfil" boxSize="300px" border="5px solid #dfe22f" borderRadius="20px"  />
          <Link href={cv} mt="20px" bg="#dfe22f" color="rgba(3, 27, 29, 1)"
            borderRadius="5px" border="1px solid rgba(3, 27, 29, 1)" w="120px" h="30px" display="flex" alignItems="center"
            justifyContent="center" transition="color 1s, background-color 1s" _hover={{ bg: "rgba(3, 27, 29, 1)", color: "#dfe22f", border: "1px solid #dfe22f" }}
            fontFamily='Times New Roman'>
            Descargar CV
          </Link>
        </VStack>
        <Box className="about-text" mt="0" pt="0" ml={{md:"20px",sm:"10%", base:"5%"}} display="flex" flexDirection="column" w="70%">
          <Heading as="h2" fontSize="32px" color="#dfe22f" textAlign="left" fontFamily='Times New Roman' mb="20px">
            Sobre Mi
          </Heading>
          <Tabs>
            <TabList borderBottom='none' as="h3" color="white" fontSize="18px" gap="30px" display={{sm:"flex", base:"none"}}>
              <Tab _selected={{ color: "#dfe22f", borderColor:"#dfe22f" }} _hover={{color:'#dfe22f'}}>
                Vida</Tab>
              <Tab _selected={{ color: "#dfe22f", borderColor:"#dfe22f" }} _hover={{color:'#dfe22f'}}>
                Educacion</Tab>
              <Tab _selected={{ color: "#dfe22f", borderColor:"#dfe22f" }} _hover={{color:'#dfe22f'}}>
                Experiencia</Tab>
            </TabList>

            <TabPanels color="#a39ba3" fontSize="14px" textAlign="left" width="70%" display={{sm:"flex", base:"none"}} >
              <TabPanel>
                <p> Soy Ramiro Martinez un estudiante de ingeniería de sistemas de 21 años. Con una gran pasión por la tecnología, tengo una disposición constante para aprender y crecer en el campo del desarrollo web. Mi interés en la tecnología me impulsa a mantenerme actualizado y a adquirir nuevos conocimientos de forma continua, lo que me permite enfrentar con entusiasmo y dedicación los retos del ámbito tecnológico.</p>
              </TabPanel>
              <TabPanel>
                <UnorderedList>
                  <ListItem>Tecnico Electronico: Escuela Presbitero Constantino Spagnolo 4-055</ListItem>
                  <ListItem>Ingeniería en Sistemas de Información: UTN FRM <br /> Actualmente en tercer año</ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <UnorderedList>
                  <ListItem>Centro Medico de Junin <br /> Administrador: Encargado del manejo de la carga de turnos en el sistema y coordinación de turnos</ListItem>

                </UnorderedList>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Link  href={cv} mt="20px" bg="#dfe22f" color="rgba(3, 27, 29, 1)"
            borderRadius="5px" border="1px solid rgba(3, 27, 29, 1)" w="120px" h="30px" display={{base:"flex", md:"none"}} alignItems="center"
            justifyContent="center" ml={{md:"5%",sm:"10%", base:"5%"}} transition="color 1s, background-color 1s" _hover={{ bg: "rgba(3, 27, 29, 1)", color: "#dfe22f", border: "1px solid #dfe22f" }}
            fontFamily='Times New Roman' >
            Descargar CV
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export { About }