import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import Cloud from "./cloud";
import Star from "./star";

const CloudNstars = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box position={"absolute"} right={"90px"} top={"160px"}>
        <Cloud delay={0.5} />
      </Box>
      <Box position={"absolute"} right={"400px"} top={"130px"}>
        <Cloud delay={1.5} />
      </Box>
      <Box position={"absolute"} right={"20px"} top={"330px"}>
        <Cloud delay={3} />
      </Box>
      {colorMode !== "light" && (
        <>
          <Box position={"absolute"} right={"60px"} top={"390px"}>
            <Star d={0.5} delay={0.5} />
          </Box>
          <Box position={"absolute"} right={"160px"} top={"214px"}>
            <Star d={1.5} delay={1.5} />
          </Box>{" "}
          <Box position={"absolute"} right={"300px"} top={"220px"}>
            <Star d={1} delay={1} />
          </Box>{" "}
          <Box position={"absolute"} right={"140px"} top={"280px"}>
            <Star d={1.5} delay={2} />
          </Box>{" "}
          <Box position={"absolute"} right={"30px"} top={"230px"}>
            <Star d={1.5} delay={0.5} />
          </Box>
          <Box position={"absolute"} right={"570px"} top={"90px"}>
            <Star d={1.5} delay={2} />
          </Box>{" "}
          <Box position={"absolute"} right={"30px"} top={"80px"}>
            <Star d={1} delay={1} />
          </Box>{" "}
          <Box position={"absolute"} right={"260px"} top={"100px"}>
            <Star d={2} delay={1.5} />
          </Box>
          <Box position={"absolute"} right={"380px"} top={"130px"}>
            <Star d={1.5} delay={0.5} />
          </Box>
        </>
      )}
    </>
  );
};

export default CloudNstars;