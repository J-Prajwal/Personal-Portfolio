import {
  Box,
  chakra,
  Container,
  Heading,
  Button,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { GoMail } from "react-icons/go";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Prajwal Jaiswal. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Phone"} href={"#"}>
            <PhoneIcon />
          </SocialButton>
          <Text>+91-86015-58001</Text>
          <SocialButton label={"Instagram"} href={"#"}>
            <GoMail />
          </SocialButton>
          <Text> <a href="mailto:jaisprajwal.1999@gmail.com">jaisprajwal.1999@gmail.com</a> </Text>
        </Stack>
      </Container>
    </Box>
  );
}
