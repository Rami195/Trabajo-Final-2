import { useState } from 'react'
import { Box, Flex, Link, Icon, useColorModeValue } from "@chakra-ui/react";

function Header() {

  return (
      <Box as="header" bg={useColorModeValue("rgba(3,27,29,255)", "rgba(3,27,29,255)")} color="#ffffff"
      w="100%" p={2} pos="fixed" zIndex="10" borderBottom="1px solid #dfe22f" fontFamily='Times New Roman'>
      <Flex justify="space-between" align="center">
        <Flex as="nav" gap={8} ml="35%">
          <Link href="#home"  _hover={{ borderBottom: "1px solid #dfe22f" }}>
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
        <Flex as="nav">
          <Link
            href="#Contact"
            border="1px solid #dfe22f"
            borderRadius="md"
            p={2}
            mr={1}
            transition="All 1s "
            _hover={{
              bg: "#dfe22f",
              color: "rgba(3,27,29,255)"
            }}
          >
            Contacto
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export {Header}