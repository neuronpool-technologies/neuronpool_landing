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
        <Container maxW="6xl" py={{ base: 4, md: 5 }}>
          <Flex align="center">
            <ChakraImage alt="NeuronPool logo" src={logo} h={35} />
            <Spacer />
            <HStack gap={{ base: 2, md: 4 }}>
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
      <Box minH="100vh" display="flex" alignItems="center" pt={{ base: 24, md: 20 }}>
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 8, lg: 12 }}
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
      <Box id="features" py={{ base: 16, md: 20 }} bg="bg.muted">
        <Container maxW="6xl">
          <VStack gap={{ base: 10, md: 12 }}>
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

      {/* Use Cases Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="6xl">
          <VStack gap={{ base: 10, md: 12 }}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl">Vectors in Action</Heading>
              <Text fontSize="xl" color="fg.muted" maxW="2xl">
                Trusted by DAOs and protocols to automate treasury management
                and staking infrastructure
              </Text>
            </VStack>

            {/* cICP Highlight */}
            <Box
              bg="bg.muted"
              p={{ base: 6, lg: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="2px solid"
              borderColor="blue.200"
            >
              <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                gap={{ base: 6, lg: 12 }}
                alignItems="center"
              >
                <GridItem>
                  <VStack align="flex-start" gap={4}>
                    <Box
                      bg="blue.500"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Featured Integration
                    </Box>
                    <Heading size="xl" color="blue.600">
                      Powering cICP Liquid Staking
                    </Heading>
                    <Text color="fg.muted" lineHeight="relaxed">
                      Neuron vectors enable cICP's deflationary liquid staking.
                      95% of cICP's ICP is staked in 8 year neurons, with daily
                      rewards powering buy-and-burn while maintaining DEX
                      liquidity.
                    </Text>
                    <HStack gap={4} pt={2} fontSize={{ base: "xs", md: "sm" }}>
                      <Flex align="center" gap={1}>
                        <Text color="green.fg" fontWeight="bold">
                          ✓
                        </Text>
                        <Text>Deflationary</Text>
                      </Flex>
                      <Flex align="center" gap={1}>
                        <Text color="green.fg" fontWeight="bold">
                          ✓
                        </Text>
                        <Text>Auto-Compound</Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </GridItem>
                <GridItem>
                  <Box bg="blue.50" p={6} borderRadius="xl" textAlign="center">
                    <VStack gap={3}>
                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        cICP Total Value Locked
                      </Text>
                      <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                        $1M+
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        Powered by NeuronPool Vectors
                      </Text>
                    </VStack>
                  </Box>
                </GridItem>
              </Grid>
            </Box>

            {/* Sneed DAO RLL Highlight */}
            <Box
              bg="bg.muted"
              p={{ base: 6, lg: 8 }}
              borderRadius="2xl"
              boxShadow="lg"
              border="2px solid"
              borderColor="green.200"
            >
              <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                gap={{ base: 6, lg: 12 }}
                alignItems="center"
              >
                <GridItem>
                  <VStack align="flex-start" gap={4}>
                    <Box
                      bg="green.500"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      DAO Innovation
                    </Box>
                    <Heading size="xl" color="green.600">
                      Powering Sneed DAO's RLL Model
                    </Heading>
                    <Text color="fg.muted" lineHeight="relaxed">
                      Neuron and splitter vectors enable Sneed DAO's Recursive
                      Liquidity Loop. ICP is staked in an 8 year neuron, with
                      maturity distributed to governance members and for SNEED
                      buybacks.
                    </Text>
                    <HStack gap={4} pt={2} fontSize={{ base: "xs", md: "sm" }}>
                      <Flex align="center" gap={1}>
                        <Text color="green.fg" fontWeight="bold">
                          ✓
                        </Text>
                        <Text>Recursive Loop</Text>
                      </Flex>
                      <Flex align="center" gap={1}>
                        <Text color="green.fg" fontWeight="bold">
                          ✓
                        </Text>
                        <Text>Self-Sustaining</Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </GridItem>
                <GridItem>
                  <Box bg="green.50" p={6} borderRadius="xl" textAlign="center">
                    <VStack gap={3}>
                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        ICP Staked
                      </Text>
                      <Text fontSize="3xl" fontWeight="bold" color="green.600">
                        10K+
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        SNEED DAO Neuron Vector
                      </Text>
                    </VStack>
                  </Box>
                </GridItem>
              </Grid>
            </Box>

            {/* Use Cases Grid */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={{ base: 6, md: 8 }}
            >
              <UseCaseCard
                title="DAO Treasury Management"
                description="DAOs use vectors to stake treasury funds and diversify across multiple neuron strategies. Splitter vectors distribute maturity rewards across multiple destinations."
                features={[
                  "Multi-DAO Staking",
                  "Treasury Diversification",
                  "Splitter Vectors",
                ]}
              />
              <UseCaseCard
                title="Maturity & Cycles Automation"
                description="Automate maturity distribution and cycles management with NTC integration. Redeem vectors distribute cycles across multiple canisters, while mint vectors convert maturity to cycles."
                features={[
                  "Maturity Distribution",
                  "NTC Integration",
                  "Cycles Vectors",
                ]}
              />
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        py={{ base: 16, md: 20 }}
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
      <Box py={{ base: 8, md: 12 }} borderTop="1px solid" borderColor="border.subtle">
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

type UseCaseCardProps = {
  title: string;
  description: string;
  features: string[];
};

const UseCaseCard = ({ title, description, features }: UseCaseCardProps) => {
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
      h="full"
    >
      <Heading size="md" color="blue.600">
        {title}
      </Heading>
      <Text color="fg.muted" lineHeight="relaxed" flex={1}>
        {description}
      </Text>
      <VStack align="flex-start" gap={2} w="full">
        {features.map((feature, index) => (
          <Flex key={index} align="center" gap={2} fontSize="sm">
            <Box w={2} h={2} bg="blue.500" borderRadius="full" />
            <Text color="fg.muted">{feature}</Text>
          </Flex>
        ))}
      </VStack>
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
