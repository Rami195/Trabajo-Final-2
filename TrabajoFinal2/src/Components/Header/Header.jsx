import { useState } from 'react';
import { Box, Flex, Link, IconButton, useColorModeValue, UnorderedList, ListItem } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="header" bg={useColorModeValue("rgba(3,27,29,255)", "rgba(3,27,29,255)")} color="#ffffff"
      w="100%" p={2} pos="fixed" zIndex="10" borderBottom="1px solid #dfe22f" fontFamily='Times New Roman'>
      <Flex justify={{ md: "space-between", base: 'flex-start' }} align="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          display={{ base: "block", md: "none" }}
          bg="rgba(3,27,29,255)"
          color="#dfe22f"
        />
        {isOpen && (
          <Flex direction="column" align="left" mt={2} display={{ base: "flex", md: "none" }}>
            <UnorderedList>
              <ListItem>
                <Link href="#home" _hover={{ borderBottom: "1px solid #dfe22f" }} onClick={toggleMenu}>
                  Inicio
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#about" _hover={{ borderBottom: "1px solid #dfe22f" }} onClick={toggleMenu}>
                  Sobre Mi
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#skills" _hover={{ borderBottom: "1px solid #dfe22f" }} onClick={toggleMenu}>
                  Habilidades
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#projects" _hover={{ borderBottom: "1px solid #dfe22f" }} onClick={toggleMenu}>
                  Proyectos
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        )}
        <Flex as="nav" gap={8} ml="35%" display={{ base: "none", md: "flex" }}>
          <Link href="#home" _hover={{ borderBottom: "1px solid #dfe22f" }}>
            Inicio
          </Link>
          <Link href="#about" _hover={{ borderBottom: "1px solid #dfe22f" }}>
            Sobre Mi
          </Link>
          <Link href="#skills" _hover={{ borderBottom: "1px solid #dfe22f" }}>
            Habilidades
          </Link>
          <Link href="#projects" _hover={{ borderBottom: "1px solid #dfe22f" }}>
            Proyectos
          </Link>
        </Flex>
        <Flex as="nav" display={{ md: "flex", base: "none" }}>
          <Link href="#contact" border="1px solid #dfe22f" borderRadius="md" p={2} mr={1}
            transition="All 1s" _hover={{ bg: "#dfe22f", color: "rgba(3,27,29,255)" }}>
            Contacto
          </Link>
        </Flex>

      </Flex>
    </Box>
  );
}

export { Header };