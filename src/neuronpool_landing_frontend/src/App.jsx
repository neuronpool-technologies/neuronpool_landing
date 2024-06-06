import React from "react";
import {
  topGradient,
  middleGradient,
  bottomGradient,
  subFontColor,
  lightColor,
  darkColor,
} from "./colors";
import { LockIcon, CheckCircleIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Highlight,
  Image as ChakraImage,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/neuronpool_logo.svg";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex h="10vh" align="center" justify="center">
        <Flex w={{ base: "90%", md: "80%" }} align="center">
          <ChakraImage src={logo} h={"70px"} />
          <Spacer />
          <Stack direction={"row"} spacing={3}>
            <Button colorScheme="blue" isDisabled rightIcon={<LockIcon />}>
              Stake now
            </Button>
            <Button onClick={toggleColorMode} aria-label="Change color mode">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" h="80vh">
        <Box
          bgGradient={`linear(to-b, ${topGradient}, ${middleGradient}, ${bottomGradient})`}
          h="90%"
          w={{ base: "90%", md: "80%" }}
          borderRadius="lg"
        >
          <Flex align="center" justify="center" h="100%">
            <Box>
              <Heading
                lineHeight="tall"
                align="center"
                color={colorMode === "light" ? lightColor : darkColor}
                fontFamily="'Roboto Mono', monospace"
                fontSize={{ base: "xl", md: "3xl" }}
                maxW="xl"
                px={3}
              >
                <Highlight
                  query={["Stake your ICP", "win big rewards"]}
                  styles={{
                    px: "1",
                    py: "1",
                    color: colorMode === "light" ? lightColor : darkColor,
                    borderBottom: `double ${
                      colorMode === "light" ? lightColor : darkColor
                    } 3px`,
                  }}
                >
                  Stake your ICP, join the pool and win big rewards!
                </Highlight>
              </Heading>
              <Flex align="center" justify="center" p={6}>
                <List maxW="md">
                  <StyledListItem text="All staking rewards from the pool are disbursed to one lucky winner." />
                  <StyledListItem text="Minimum stake of 0.1 ICP ensures a lower barrier of entry." />
                  <StyledListItem text="Fully automated - just stake and check if you won!" />
                  <StyledListItem text="Begin the 6 month withdrawal process any time." />
                  <StyledListItem text="Open-source and decentralized." />
                </List>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex h="10vh" align="center" justify="center">
        <Flex
          w="80%"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={2}
        >
          <Heading
            color={subFontColor}
            fontFamily="'Roboto Mono', monospace"
            size="sm"
          >
            hello@neuronpool.com
          </Heading>
          <Spacer />
          <Heading
            color={subFontColor}
            fontFamily="'Roboto Mono', monospace"
            size="sm"
          >
            Launching soon...
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default App;

const StyledListItem = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <ListItem
      mb={3}
      fontWeight={600}
      fontSize={{ base: "sm", md: "lg" }}
      color={colorMode === "light" ? lightColor : darkColor}
      fontFamily="'Roboto Mono', monospace"
    >
      <ListIcon as={CheckCircleIcon} color={colorMode === "light" ? lightColor : darkColor} />
      {text}
    </ListItem>
  );
};
