import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
  Tag,
  Button,
  Link,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="blue"
            _hover={{ bgColor: "blue.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default function Card({ img, tag, heading, content, deploy, git }) {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={img} layout={"fill"} />
        </Box>
        <Stack pt={[1, 20]}>
          <BlogTags tags={tag} />
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {heading}
          </Heading>
          <Text color={"gray.500"}>{content}</Text>
        </Stack>
        <Stack direction={"row"} pt={5}>
        <Button
          bg={"blue.400"}
          size={"sm"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
          rightIcon={<BsGithub />}
        >
          <Link _hover={{textDecoration: "none"}} href={git}>Github</Link>
        </Button>
        <Button
          bg={"whiteAlpha.300"}
          size={"sm"}
          rounded={"full"}
          _hover={{ bg: "whiteAlpha.500" }}
          rightIcon={<BsLink45Deg />}
        >
          <Link _hover={{textDecoration: "none"}} href={deploy}>Deployment</Link>
        </Button>
      </Stack>
      </Box>
    </Center>
  );
}
