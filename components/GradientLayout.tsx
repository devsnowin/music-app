import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  desc,
  roundImage,
}) => {
  return (
    <Box
      w="full"
      h="calc(100vh - 10vh)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%,rgba(18, 18, 18, 0.95) 50%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            src={image}
            alt=""
            boxSize="160px"
            boxShadow="2xl"
            borderRadius={roundImage ? "100%" : "3px"}
            objectFit="cover"
          />
        </Box>
        <Box padding="20px" lineHeight="10px" textAlign="left">
          <Text fontSize="sm" fontWeight="bold">
            {subtitle.toUpperCase()}
          </Text>
          <Heading fontSize="8xl" fontWeight="extrabold">
            {title}
          </Heading>
          <Text fontSize="xs">{desc}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
