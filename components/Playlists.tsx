import Link from "next/link";
import { HStack, Heading, Image } from "@chakra-ui/react";

const Playlists = () => {
  return (
    <HStack
      as={Link}
      href="/"
      overflow="hidden"
      bg="gray.900"
      w="20rem"
      h="5rem"
      borderRadius="5px"
      gap="0.6rem"
      _hover={{ bg: "gray.800" }}
    >
      <Image
        src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="playlist image"
        w="full"
        maxW="8rem"
      />
      <Heading as="h2" size="sm">
        Playlist
      </Heading>
    </HStack>
  );
};

export default Playlists;
