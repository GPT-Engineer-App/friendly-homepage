import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a passionate web developer creating modern and responsive web applications.</Text>
        </Box>
        <Box boxSize="200px">
          <Image src="https://via.placeholder.com/200" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Flex justifyContent="center" mt={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="solid" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:someone@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" mx={2}>
            Contact
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;