// import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  // HStack,
  Img,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { MdSettings } from "react-icons/md";

// import proj1 from "../images/proj/proj1/proj1.jpeg";
// import proj1n from "../images/proj/proj1/proj1n1.png";
import proj1 from "../images/proj/proj1/QualityApp.png";
import proj2 from "../images/proj/proj2/EditorApp.png";
import { Element } from "react-scroll";
import { motion, useTransform, useViewportScroll } from "framer-motion";
// import { useState } from "react";
// import underwater from "../images/underwater.png";
import water from "../images/bubble.png";

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");
  const { colorMode } = useColorMode();
  // const [isMobile, setIsMobile] = useState(false);

  // function reportWindowSize() {
  //   window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  // }

  // window.onresize = reportWindowSize;
  // console.log(window.onresize);

  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [2000, 2800], [100, 100]);
  const x2 = useTransform(scrollY, [2000, 2800], [400, 400]);
  const x3 = useTransform(scrollY, [2000, 2800], [700, 700]);
  const x4 = useTransform(scrollY, [2000, 2800], [1000, 1000]);
  const x5 = useTransform(scrollY, [2000, 2800], [1300, 1300]);
  const x6 = useTransform(scrollY, [2000, 2800], [1600, 1600]);

  const y1 = useTransform(scrollY, [2300, 2800], [1300, -800]);
  const y2 = useTransform(scrollY, [2400, 2800], [1300, -1300]);
  const y3 = useTransform(scrollY, [2350, 2750], [1300, -1200]);
  const y4 = useTransform(scrollY, [2450, 2750], [1300, -900]);
  const y5 = useTransform(scrollY, [2300, 2650], [1300, -1600]);
  const y6 = useTransform(scrollY, [2400, 2800], [1300, -1300]);

  // const o2 = useTransform(scrollY, [2200, 2340], [1, 0]);

  return (
    <Box h={"100%"} mt={[colorMode !== "dark" ? -40 : -52]}>
      <Element name="Projects"></Element>

      <Box
        // h={["1750px", "250vh", "185vh", "220vh", "200vh"]}
        bg={bglOnLight}
        clipPath={[
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 8%, 100% 0, 100% 100%, 0 100%, 0 0)",
        ]}
        // mt={["-10vh", "-14vh", "-75vh", "-85vh", "-18vh"]}
        zIndex={2}
        // mb={40}
        w={"full"}
      >
        <Flex
          flexDir={"column"}
          // top={[80, 80, "60", 80, 60]}
          position={"relative"}
          gap={20}
          pt={20}
          top={40}
          pb={64}
        >
          <Flex
            flexDir={["column", "column", "row", "row", "row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            // mt={["-28vh", "-20vh", "-20vh", "-20vh", "0vh"]}
          >
            <Img
              src={proj1}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "45%"]}
              ml={[0, 0, 12, 0, 0]}
              // zIndex={55}
            />

            <Box w={"full"}>
              <motion.div
                whileInView={{
                  // x: !isMobile ? ["-20px", "0px"] : ["-600px", "0px"],
                  scale: [0.6, 1],
                  opacity: [0, 1],
                }}
                // transition={{ ease: "linear" }}
                style={{ overflow: "hidden" }}
              >
                <VStack
                  position={"relative"}
                  // style={{ textIndent: 40 }}
                  fontSize={["20", "22", "18", "24", "24"]}
                  mb={2}
                  fontFamily={"Raleway"}
                  fontWeight={900}
                >
                  <Text fontSize={["20", "22", "18", "24", "24"]}>
                    Quality Control App :
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={["18", "20", "16", "22", "22"]}
                  >
                    An app for big construction sites projects
                  </Text>
                </VStack>
                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 32]}
                  fontSize={["17", "18", "14", "16", "20"]}
                  lineHeight={"8"}
                >
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Full Storage and arrangement of the documentation{" "}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Tracking of quantities of the used materiel,
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    The advancement of the projects and its pace
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Every Quality inspection With necessary Laboratory and
                    Topography assistance
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Procedures, plans, and Updates
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Detailed works
                  </ListItem>{" "}
                </List>
                <Flex
                  position="relative"
                  justifyContent={"center"}
                  alignItems={["center"]}
                  w={"full"}
                  // bgColor="red.200"
                  // style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 0]}
                >
                  <Link
                    href="https://thacoder.netlify.app/"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "12", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      mx={2}
                      colorScheme={
                        colorMode !== "light" ? "linkedin" : "facebook"
                      }
                      letterSpacing={"wider"}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "12", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      mx={[2, 2, 4, 4, 4]}
                      colorScheme={colorMode !== "light" ? "teal" : "pink"}
                      letterSpacing={"wider"}
                    >
                      Code
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Box>
          </Flex>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            // mt={["-8vh", "-4vh", "-10vh", "0vh", "0vh"]}
          >
            <Box w={"full"} overflow={"hidden"}>
              <motion.div
                whileInView={{
                  // x: isMobile ? ["10px", "0px"] : ["400px", "0px"],
                  scale: [0.6, 1],
                  opacity: [0, 1],
                }}
                // transition={{ ease: "linear" }}
                style={{ overflow: "hidden" }}
              >
                <VStack
                  position={"relative"}
                  // style={{ textIndent: 40 }}
                  fontSize={["20", "22", "18", "24", "24"]}
                  mb={2}
                  fontFamily={"Raleway"}
                  fontWeight={900}
                >
                  <Text fontSize={["20", "22", "18", "20", "24"]}>
                    Online Editor App :
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={["18", "22", "18", "20", "24"]}
                  >
                    An app for creating simple WebDev Projects
                  </Text>
                </VStack>
                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 32]}
                  fontSize={["17", "18", "14", "16", "20"]}
                  lineHeight={"8"}
                >
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Create project with Vanilla Html / Css / Javacasript
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Create project with React
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Import any package
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    See immediate result
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Create/Read/Update/Delete own projects
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    See/Clone/Like other users projects
                  </ListItem>{" "}
                </List>
                <Flex
                  position="relative"
                  justifyContent={"center"}
                  alignItems={["center"]}
                  w={"full"}
                  // bgColor="red.200"
                  // style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, -6]}
                >
                  <Link
                    href="https://thacoder.netlify.app/"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "12", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      mx={3}
                      colorScheme={
                        colorMode !== "light" ? "linkedin" : "facebook"
                      }
                      letterSpacing={"wider"}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "12", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      // mx={[1, 1, 4, 4, 4]}
                      colorScheme={colorMode !== "light" ? "teal" : "pink"}
                      letterSpacing={"wider"}
                      mx={3}
                    >
                      Code
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Box>

            <Img
              src={proj2}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "45%"]}
              ml={[0, 0, 0, 0, 0]}
              // zIndex={55}
            />
          </Flex>
          <VStack
            visibility={["hidden", "hidden", "hidden", "hidden", "hidden"]}
          >
            <Text textAlign={"center"} fontSize={"xl"}>
              Please visit my Github repository fot more Projects
            </Text>
            <Button colorScheme="yellow" mx={12}>
              Github Repo
            </Button>
          </VStack>
        </Flex>
      </Box>
      {colorMode !== "dark" && (
        <Flex justifyContent={"space-between"}>
          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y1,
              x: x1,
              // width: "100vw",
              position: "fixed",
              top: 200,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>

          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y2,
              x: x2,
              // width: "100vw",
              position: "fixed",
              top: 200,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>

          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y3,
              x: x3,
              // width: "100vw",
              position: "fixed",
              top: 200,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>

          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y4,
              x: x4,
              // width: "100vw",
              position: "fixed",
              top: 200,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>

          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y5,
              x: x5,
              // width: "100vw",
              position: "fixed",
              top: 1000,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>

          <motion.div
            style={{
              // x: colorMode !== "light" ? x2 : x1,
              // x: x2,
              y: y6,
              x: x6,
              width: "100vw",
              position: "fixed",
              top: 200,
              // left: 0,
              zIndex: 2,
              overflow: "hidden",
              // opacity: o2,
            }}
          >
            <Box
              zIndex={99}
              w={"10%"}
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Img src={water} overflow={"hidden"} w={"100%"} />
              <Img src={water} overflow={"hidden"} w={"50%"} mt={16} />
              <Img src={water} overflow={"hidden"} w={"30%"} mt={10} ml={20} />
              <Img src={water} overflow={"hidden"} w={"10%"} mt={10} ml={10} />
            </Box>
          </motion.div>
        </Flex>
      )}
    </Box>
  );
};

export default Projects;
