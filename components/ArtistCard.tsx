import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const ArtistCard = ({ artist }) => {
  return (
    <Box as={Link} href="/" padding="20px" bg="darkGray" borderRadius="5px">
      <Image
        boxSize="180px"
        borderRadius="100%"
        src="https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="author profile"
      />
      <Box textAlign="left" lineHeight="28px" marginTop="4">
        <Text fontSize="lg" fontWeight="bold">
          {artist.name}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Artist
        </Text>
      </Box>
    </Box>
  );
};

export default ArtistCard;
