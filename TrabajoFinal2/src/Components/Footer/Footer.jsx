import { useEffect } from 'react';
import { Box, Heading, VStack, HStack, Button, Text, Input } from "@chakra-ui/react";
import { Redes } from '../Redes/Redes.jsx';
import f1 from '../../../img/facebook.svg';
import f2 from '../../../img/twitter.svg';
import f3 from '../../../img/linkedin.svg';
import f4 from '../../../img/instagram.svg';

function Footer() {
  const logos = [
    { logo: f1, refe: "https://www.facebook.com/share/DGoipBmxY38T8o8b/?mibextid=qi2Omg" },
    { logo: f2, refe: "https://x.com/RamiM53?t=aakaIkIgd9q27S-Hx_UM2A&s=08" },
    { logo: f3, refe: "https://ar.linkedin.com/in/ramiro-martinez-315666252" },
    { logo: f4, refe: "https://www.instagram.com/ramiii_martinez?utm_source=qr&igsh=NWlzZGw5cmR6enY3" }
  ];
  const objetoPivot = logos.length;

  useEffect(() => {
    const form = document.getElementById('registrationForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        if (!validarFormulario()) {
          e.preventDefault();
        }
      });
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', function (e) {
          e.preventDefault();
        });
      }
    };
  }, []);

  function validarFormulario() {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;

    let nameError = document.getElementById('nameError');
    let apellidoError = document.getElementById('apellidoError');
    let emailError = document.getElementById('emailError');

    let validar = true;

    if (nombre.trim() === '') {
      nameError.textContent = "El nombre es obligatorio";
      nameError.style.visibility = 'visible';
      validar = false;
    } else if (/\d/.test(nombre)) {
      nameError.textContent = "El nombre no puede contener números";
      nameError.style.visibility = 'visible';
      validar = false;
    } else {
      nameError.style.visibility = 'hidden';
    }

    if (apellido.trim() === '') {
      apellidoError.textContent = "El apellido es obligatorio";
      apellidoError.style.visibility = 'visible';
      validar = false;
    } else if (/\d/.test(apellido)) {
      apellidoError.textContent = "El apellido no puede contener números";
      apellidoError.style.visibility = 'visible';
      validar = false;
    } else {
      apellidoError.style.visibility = 'hidden';
    }

    if (email.trim() === '') {
      emailError.textContent = "El email es obligatorio";
      emailError.style.visibility = 'visible';
      validar = false;
    } else {
      emailError.style.visibility = 'hidden';
    }

    return validar;
  }

  return (
    <Box as="footer" id='contact' bg="rgba(3, 27, 29, 1)" textAlign="center"  fontFamily='Times New Roman' color="#dfe22f" mt="0px">
      <Heading as="h2" size="md" mb="20px" mt="0px" fontFamily='Times New Roman' display={{sm:"flex", base:"none"}} justifyContent="center" >
        Visitame
      </Heading>
      <HStack display="flex" justify={{sm:"space-between", base:"center"}} w="80%" mx="auto" >
        <VStack w="400px" align="stretch" display={{sm:"flex", base:"none"}} >
          <HStack  spacing={10} w="100%" justify="space-between" mb="20px" display={{md:"flex", base:"none"}}>
            <VStack  color="White" align="stretch">
              <Heading as="h4" size="sm" fontFamily='Times New Roman' color="#dfe22f" mb="20px">
                Personalidad
              </Heading>
              <Text>Seguridad</Text>
              <Text>Integridad</Text>
              <Text>Confianza</Text>
              <Text>Ética</Text>
            </VStack>
            <VStack  color="white" align="stretch">
              <Heading as="h4" size="sm" fontFamily='Times New Roman' color="#dfe22f" mb="20px">
                Tecnologías
              </Heading>
              <Text>Java</Text>
              <Text>CSS</Text>
              <Text>HTML</Text>
              <Text>JS</Text>
            </VStack>
          </HStack>
          <VStack   w="100%" spacing={4} display={{sm:'flex', base:'none'}}   justifyContent="flex-start" alignItems="left" alignContent="left">
            <Box display='flex'  flexDirection={{md:'row', sm:'column'}} spacing={2} gap="20px" padding="5px 5px 5px 5px">
              <Heading as="h4" size="sm" fontFamily='Times New Roman' display="flex" alignContent="left">
                Sígueme
              </Heading>
              {logos.slice(0, objetoPivot).map((elemento, index) => (
                <Redes
                  key={index}
                  logo={elemento.logo}
                  refe={elemento.refe}
                />
              ))}
            </Box>
          </VStack>
        </VStack>
        <VStack  w="400px" align="stretch">
          <Heading as="h4" size="sm" mb="20px" fontFamily='Times New Roman' textAlign="center">
            Contáctame
          </Heading>
          <form id="registrationForm">
            <HStack spacing={4} w="100%">
              <VStack>
                <Input type="text" id="name" name="name" placeholder="Nombre" bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
                <Text className="error" id="nameError" fontSize='xs' visibility='hidden' minHeight='12px' mt="0px" mb="0px"></Text>
              </VStack>
              <VStack>
                <Input type="text" id="apellido" name="apellido" placeholder="Apellido" bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
                <Text className="error" id="apellidoError" fontSize='xs' visibility='hidden' minHeight='12px' mt="0px" mb="0px"></Text>
              </VStack>
            </HStack>
            <Input type="email" id="email" name="email" placeholder="Email" mt={4} bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" color="#dfe22f" textAlign="center" />
            <Text className="error" id="emailError" fontSize='xs' visibility='hidden' minHeight='12px' mt="0px" mb="0px"></Text>
            <Button type="submit" className="submit" mt={4} bg="rgba(3, 27, 29, 1)" border="1px solid #dfe22f" transition="all 1.0s" color="#dfe22f" textAlign="center" _hover={{ bg: "#dfe22f", color: "rgba(3, 27, 29, 1)" }} borderRadius="5px" w="100%">
              Enviar
            </Button>
          </form>
        </VStack>
      </HStack>
    </Box>
  );
}

export { Footer };