import { Box, Flex, Text } from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';
import Player from './Player';

const PlayerBar = () => {
	const songs = useStoreState((state: any) => state.activeSongs);
	const activeSong = useStoreState((state: any) => state.activeSong);

	if (!activeSong) return null;

	return (
		<Flex align='center' w='100vw'>
			<Box w='30%' padding='20px' alignSelf='flex-start' textAlign='left'>
				<Text fontWeight='bold'>{activeSong.name}</Text>
				<Text fontSize='sm' color='gray.500'>
					{activeSong.artist.name}
				</Text>
			</Box>
			<Box w='40%'>
				<Player songs={songs} activeSong={activeSong} />
			</Box>
			<Box w='30%' paddingInline='20px' textAlign='right'>
				<Text>volume control</Text>
			</Box>
		</Flex>
	);
};

export default PlayerBar;
