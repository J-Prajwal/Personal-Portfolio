import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div>
      <Heading
        size={"2xl"}
        textAlign={"center"}
        textTransform={"capitalize"}
        ml={10}
      >
        days i've code
      </Heading>
      <Center mt={10} mb={10}>
        <GitHubCalendar username="j-prajwal" />
      </Center>
    </div>
  );
};

export default GitCalendar;
