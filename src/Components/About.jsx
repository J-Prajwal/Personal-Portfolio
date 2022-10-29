import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Typed from "react-typed";

export default function About() {
  const handleResume = () => {
    fetch("Prajwal.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        // create an object for the file.
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "Prajwal.pdf";
        file.click();
      });
    });
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      pt={10}
      id="About"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
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
            <br />
            <Text color={"blue.400"} as={"span"}>
              <Typed
                strings={[
                  "Prajwal Jaiswal",
                  "A Full-Stack Developer",
                  "A Tech-Enthusiast",
                  "An Entrepreneur",
                  "A Graphic-Designer",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></Typed>
            </Text>
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
              onClick={handleResume}
            >
              {/* <Link
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/drive/folders/1-TBHBQjmB1ygTTIPgF7I3PNFT8g0qtxX?usp=sharing"
                target={"_blank"}
              > */}
              My Resume
              {/* </Link> */}
            </Button>
            <Button rounded={"full"}>
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/J-Prajwal?tab=repositories"
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
      <Flex flex={1} alignItems="center" justifyContent={"center"}>
        {colorMode == "dark" ? (
          <Image
            objectFit={"cover"}
            className="zoom"
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/65JCvyNM/Light-Blue-and-Ivory-Soft-Gradient-UI-Reminder-Search-Personal-Instagram-Post-1.jpg"
            }
          />
        ) : (
          <Image
            alt={"Login Image"}
            className="zoom"
            objectFit={"cover"}
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/pXhGCNwT/Light-Blue-and-Ivory-Soft-Gradient-UI-Reminder-Search-Personal-Instagram-Post.jpg"
            }
          />
        )}
      </Flex>
    </Stack>
  );
}
