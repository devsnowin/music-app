import Link from "next/link";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";

const TrackCard = () => {
  return (
    <VStack
      as={Link}
      href="/"
      w="14rem"
      padding="1rem"
      bg="gray.900"
      borderRadius="5px"
      gap="1rem"
      transition="all 0.5s ease"
      _hover={{ bg: "gray.800" }}
    >
      <Image
        src="https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="track thumnail"
        objectFit="cover"
        borderRadius="5px"
      />
      <VStack w="full" alignItems="flex-start" gap="0.2rem">
        <Heading as="h2" size="sm">
          Sing For The Moment
        </Heading>
        <Text fontWeight="bold" fontSize=".8em" color="gray.500">
          Justin, Mark thomson
        </Text>
      </VStack>
    </VStack>
  );
};

export default TrackCard;
