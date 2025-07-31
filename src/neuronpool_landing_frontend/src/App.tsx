import {
  Box,
  Flex,
  Spacer,
  Button,
  Heading,
  Text,
  Highlight,
  Image as ChakraImage,
  IconButton,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import {
  BiMoon,
  BiSun,
  BiLinkExternal,
  BiShield,
  BiTrendingUp,
  BiUser,
} from "react-icons/bi";
import logo from "../assets/logo.svg";
import xLogo from "../assets/x_logo.svg";
import discordLogo from "../assets/discord_logo.svg";
import githubLogo from "../assets/github_logo.svg";

const App = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navigation */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="bg/80"
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor="border.subtle"
      >
        <Container maxW="6xl" py={5}>
          <Flex align="center">
            <ChakraImage alt="NeuronPool logo" src={logo} h={35} />
            <Spacer />
            <HStack gap={4}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("features")}
              >
                Features
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("how-it-works")}
              >
                How it Works
              </Button>
              <IconButton
                onClick={() => toggleColorMode()}
                variant="ghost"
                size="sm"
                aria-label="Color mode"
              >
                {colorMode === "light" ? <BiMoon /> : <BiSun />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section - Full Screen */}
      <Box minH="100vh" display="flex" alignItems="center" pt={20}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 6, lg: 12 }}
            alignItems="center"
          >
            <GridItem>
              <VStack align="flex-start" gap={6}>
                <Heading
                  size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  <Highlight
                    query="NeuronPool Vectors"
                    styles={{
                      px: "1",
                      py: "1",
                      color: "blue.fg",
                    }}
                  >
                    Explore NeuronPool Vectors
                  </Highlight>
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="fg.muted"
                  maxW="lg"
                  lineHeight="relaxed"
                >
                  Fully automated Neuron, Cycles and Splitter vectors on the
                  Internet Computer.
                </Text>
                <a
                  href="https://vectors.neuronpool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="surface"
                    colorPalette="blue"
                    rounded="md"
                    boxShadow="xs"
                  >
                    Explore Vectors Now <BiLinkExternal />
                  </Button>
                </a>

                <HStack
                  gap={{ base: 3, md: 6 }}
                  pt={2}
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  <Flex align="center" gap={1}>
                    <Text color="green.fg" fontWeight={"Bold"}>
                      ✓
                    </Text>{" "}
                    <Text color="fg.muted">Governed by NTN DAO</Text>
                  </Flex>
                  <Flex align="center" gap={1}>
                    <Text color="green.fg" fontWeight={"Bold"}>
                      ✓
                    </Text>{" "}
                    <Text color="fg.muted">100+ Pocket IC Tests</Text>
                  </Flex>
                </HStack>
              </VStack>
            </GridItem>

            <GridItem>
              <Box
                bgGradient="to-br"
                gradientFrom="blue.500"
                gradientTo="blue.700"
                p={{ base: 6, lg: 8 }}
                borderRadius={"2xl"}
                boxShadow={"2xl"}
                transform={{ base: "none", lg: "rotate(-2deg)" }}
                _hover={{ transform: { base: "none", lg: "rotate(0deg)" } }}
                transition="all 0.3s ease"
                mt={{ base: 4, lg: 0 }}

              >
                <VStack gap={6} color="white">
                  <Heading size="lg" textAlign="center">
                    NeuronPool Vectors
                  </Heading>
                  <Box w="full" bg="whiteAlpha.200" p={4} borderRadius="lg">
                    <Text fontSize="sm" opacity={0.8}>
                      Total Value Locked
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold">
                      $1.5M+
                    </Text>
                  </Box>
                  <Box w="full" bg="whiteAlpha.200" p={4} borderRadius="lg">
                    <Text fontSize="sm" opacity={0.8}>
                      ICP Staked
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" color="green.300">
                      300K+
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" py={20} bg="bg.muted">
        <Container maxW="6xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl">Why Choose NeuronPool?</Heading>
              <Text fontSize="xl" color="fg.muted" maxW="2xl">
                Built by ICP DeFi experts, designed for automation and peace of
                mind
              </Text>
            </VStack>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={8}
            >
              <FeatureCard
                icon={<BiTrendingUp size={24} />}
                title="Set & Forget"
                description="Automated neuron, cycles, and splitter vectors. Deploy once and let your DeFi strategy run seamlessly."
              />
              <FeatureCard
                icon={<BiShield size={24} />}
                title="Battle Tested"
                description="Tested with 100+ Pocket IC tests. You get maximum security and reliability for your vectors."
              />
              <FeatureCard
                icon={<BiUser size={24} />}
                title="DAO Governed"
                description="Community governance by NTN DAO ensures every protocol decision is made collectively by holders."
              />
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box id="how-it-works" py={20}>
        <Container maxW="6xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl">How It Works</Heading>
              <Text fontSize="xl" color="fg.muted" maxW="2xl">
                Create a vector in three steps
              </Text>
            </VStack>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={8}
            >
              <StepCard
                number="1"
                title="Get NTN Tokens"
                description="Purchase NTN Governance tokens for vector billing on any supported ICP DeX."
              />
              <StepCard
                number="2"
                title="Choose Vector Type"
                description="Select from neuron, cycles, or splitter vectors based on your DeFi strategy needs."
              />
              <StepCard
                number="3"
                title="Deploy & Automate"
                description="Launch your vector and let it execute automatically with zero maintenance needed."
              />
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        py={20}
        bgGradient="to-r"
        gradientFrom="blue.500"
        gradientTo="blue.700"
      >
        <Container maxW="4xl" textAlign="center">
          <VStack gap={6} color="white">
            <Heading size="2xl">Ready to Deploy Your Vector?</Heading>
            <Text fontSize="xl" opacity={0.9}>
              Start automating your ICP DeFi strategy with NeuronPool Vectors
            </Text>
            <a
              href="https://vectors.neuronpool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: "gray.100" }}
              >
                Launch Vectors App <BiLinkExternal />
              </Button>
            </a>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={12} borderTop="1px solid" borderColor="border.subtle">
        <Container maxW="6xl">
          <Flex
            align="center"
            direction={{ base: "column", md: "row" }}
            gap={3}
          >
            <Flex align="center" gap={3}>
              <ChakraImage alt="NeuronPool logo" src={logo} h={6} />
              <Text fontSize="sm" color="fg.muted" textTransform={"uppercase"}>
                hello@neuronpool.com
              </Text>
            </Flex>
            <Spacer />
            <HStack gap={2}>
              <Social />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default App;

// Component definitions
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <VStack
      p={6}
      bg="bg"
      borderRadius="xl"
      boxShadow="sm"
      align="flex-start"
      gap={4}
      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
      transition="all 0.3s ease"
    >
      <Box p={3} bg="blue.50" borderRadius="lg" color="blue.500">
        {icon}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text color="fg.muted" lineHeight="relaxed">
        {description}
      </Text>
    </VStack>
  );
};

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <VStack gap={4} textAlign="center">
      <Box
        w={12}
        h={12}
        bg="blue.500"
        color="white"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight="bold"
      >
        {number}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text color="fg.muted" lineHeight="relaxed">
        {description}
      </Text>
    </VStack>
  );
};

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
