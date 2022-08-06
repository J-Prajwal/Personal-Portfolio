import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} pt={10} id="About">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Hi, I Am
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              PRAJWAL JAISWAL
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A passionate full-stack web developer, who loves to buid cool
            projects and work in a team. I want to achieve global recognition
            and exposure with my skillset, toolset and mindset.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1-eS-MlP2JrNKOuT6553hTQEBaQswsktO/view?usp=sharing"
                target={"_blank"}
              >
                My Resume
              </Link>
            </Button>
            <Button rounded={"full"}>
              <Link
                style={{ textDecoration: "none" }}
                href="#projects"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/prajwal-jaiswal-3772aa215/"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>
            <Button>
              <Link href="https://twitter.com/Prajwal_jais" target={"_blank"}>
                <BsTwitter />
              </Link>
            </Button>
            <Button>
              <Link href="https://github.com/J-Prajwal" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://i.postimg.cc/vmndQTJG/Whats-App-Image-2022-08-06-at-2-52-05-PM-removebg-preview-1.png"
          }
        />
      </Flex>
    </Stack>
  );
}
