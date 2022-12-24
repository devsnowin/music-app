import { Box, Flex, Text } from "@chakra-ui/react";
import Player from "./Player";

const PlayerBar = () => {
  return (
    <Flex align="center" w="100vw">
      <Box w="30%" padding="20px" alignSelf="flex-start" textAlign="left">
        <Text fontWeight="bold">Song title</Text>
        <Text fontSize="sm" color="gray.500">
          Artist
        </Text>
      </Box>
      <Box w="40%">
        <Player />
      </Box>
      <Box w="30%">volume control</Box>
    </Flex>
  );
};

export default PlayerBar;
