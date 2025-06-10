import {
  topGradient,
  bottomGradient,
  subFontColor,
  lightColor,
  darkColor,
} from "./colors";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Heading,
  Highlight,
  Image as ChakraImage,
  IconButton,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { BiMoon, BiSun, BiLinkExternal } from "react-icons/bi";
import logo from "../assets/logo.svg";
import xLogo from "../assets/x_logo.svg";
import discordLogo from "../assets/discord_logo.svg";
import githubLogo from "../assets/github_logo.svg";

const App = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Flex h="10vh" align="center" justify="center">
        <Flex w={{ base: "90%", md: "80%" }} align="center">
          <ChakraImage alt="NeuronPool logo" src={logo} h={35} />
          <Spacer />
          <IconButton
            onClick={() => toggleColorMode()}
            variant="surface"
            rounded="md"
            boxShadow="xs"
            aria-label="Color mode"
          >
            {colorMode === "light" ? <BiMoon /> : <BiSun />}
          </IconButton>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" h="80vh">
        <Box
          bgGradient="to-b"
          gradientFrom={topGradient}
          gradientTo={bottomGradient}
          h="90%"
          w={{ base: "90%", md: "80%" }}
          borderRadius="lg"
        >
          <Flex align="center" justify="center" h="100%">
            <Box>
              <Heading
                color={colorMode === "light" ? lightColor : darkColor}
                fontSize={{ base: "2xl", md: "4xl" }}
                maxW="xl"
                px={3}
                letterSpacing="tight"
                textAlign="center"
              >
                <Highlight
                  query={["Staking solutions"]}
                  styles={{
                    px: "1",
                    py: "1",
                    color: colorMode === "light" ? lightColor : darkColor,
                    borderBottom: `double ${
                      colorMode === "light" ? lightColor : darkColor
                    } 3px`,
                  }}
                >
                  Staking solutions on ICP!
                </Highlight>
              </Heading>
              <Flex
                align="center"
                justify="center"
                direction="column"
                p={6}
                gap={6}
              >
                <Heading
                  letterSpacing="tight"
                  size={{ base: "md", md: "xl" }}
                  maxW="sm"
                  textAlign={"center"}
                  color={colorMode === "light" ? lightColor : darkColor}
                >
                  Building DeFi staking applications on the ICP blockchain.
                </Heading>
                <Flex align="center" direction={{ base: "column", md: "row" }}>
                  <a
                    href="https://vectors.neuronpool.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="surface" rounded="md" boxShadow="xs">
                      Explore Vectors <BiLinkExternal />
                    </Button>
                  </a>
                </Flex>
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
          mb={6}
        >
          <Heading color={subFontColor} size="md" letterSpacing="tight">
            hello@neuronpool.com
          </Heading>
          <Spacer />
          <Flex align="center" gap={3}>
            <Social />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;

const LinkItems = [
  {
    name: "X link",
    link: "https://x.com/NeuronPool",
    icon: xLogo,
  },
  {
    name: "Discord link",
    link: "https://discord.gg/5jRHUYnsrM",
    icon: discordLogo,
  },
  {
    name: "Github link",
    link: "https://github.com/neuronpool-technologies",
    icon: githubLogo,
  },
];

const Social = () => {
  return (
    <>
      {LinkItems.map((link) => (
        <SocialIconLink
          key={link.name}
          image={link.icon}
          alt={link.name}
          link={link.link}
          xLogo={link.name === "X link"}
        />
      ))}
    </>
  );
};

type SocialIconLinkProps = {
  image: string;
  alt: string;
  link: string;
  xLogo?: boolean;
};

const SocialIconLink = ({ image, alt, link, xLogo }: SocialIconLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconButton
        variant="surface"
        rounded="md"
        boxShadow="xs"
        aria-label={alt}
      >
        <ChakraImage h={"22px"} p={xLogo ? "3px" : 0} src={image} alt={alt} />
      </IconButton>
    </a>
  );
};
