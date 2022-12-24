import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const PlaylistCard = ({ playlist }) => {
	return (
		<Box
			as={Link}
			href={`/playlist/${playlist.id}`}
			h='fit-content'
			p='20px'
			bg='darkGray'
			borderRadius='5px'
		>
			<Image
				boxSize='180px'
				borderRadius='5px'
				src={`https://picsum.photos/400?random=${playlist?.id}`}
				alt='playlist photo'
			/>
			<Box textAlign='left' lineHeight='28px' marginTop='4'>
				<Text fontSize='lg' fontWeight='bold'>
					{playlist.name}
				</Text>
				<Text fontSize='sm' color='gray.600'>
					Artist
				</Text>
			</Box>
		</Box>
	);
};

export default PlaylistCard;
