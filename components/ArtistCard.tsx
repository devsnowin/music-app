import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const ArtistCard = ({ artist }) => {
	return (
		<Box as={Link} href='/' padding='20px' bg='darkGray' borderRadius='5px'>
			<Image
				boxSize='180px'
				borderRadius='100%'
				src={`https://picsum.photos/400?random=${artist?.id}`}
				alt='author profile'
			/>
			<Box textAlign='left' lineHeight='28px' marginTop='4'>
				<Text fontSize='lg' fontWeight='bold'>
					{artist.name}
				</Text>
				<Text fontSize='sm' color='gray.600'>
					Artist
				</Text>
			</Box>
		</Box>
	);
};

export default ArtistCard;
