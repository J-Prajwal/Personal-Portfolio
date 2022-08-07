import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

export default function Thoughts() {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            "Experience is the name, Everyone gives to their mistakes. And I've
            already done a lot of it."
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://medium.com/@jaisprajwal.1999"
              >
                Read my blogs
              </Link>
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              <ScrollLink
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Talk to me
              </ScrollLink>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
