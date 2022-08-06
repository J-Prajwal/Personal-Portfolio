import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { Link } from "react-scroll";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Experience() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} id="Experience">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              My Experiences
            </chakra.h2>
            <Button
              size="md"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Hire Me
              </Link>
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />3 years of
                  experience as a senior computer science faculty.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />2 years of
                  experience as a Technical Consultant & Graphic Designer in an
                  NGO
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Ran my own Ed-Tech for 1 year.
                </ListItem>
              </List>
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Teaching"}
          text={
            "I have taught more than 1000 students and more than 6 different computer languages and other branches of computer science like networking over the period of 3 years. "
          }
        />
        <Feature
          heading={"Graphic Designing"}
          text={
            "More than 100 videos editings and uncountable record of graphic designing."
          }
        />
        <Feature
          heading={"Entrepreneurship"}
          text={
            "Ran an Ed-Tech for 1 successful year with the agenda of normalizing computer science in the rural ares."
          }
        />
        <Feature
          heading={"Full-Stack Web Development"}
          text={
            "More than 10 projects on Vanilla JS and approx 10 different projects using MERN Stack excluding the mini-projects."
          }
        />
      </Grid>
    </Box>
  );
}
