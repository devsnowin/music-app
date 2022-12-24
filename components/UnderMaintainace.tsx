import { Box, Center, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';

const UnderMaintainace = () => {
	return (
		<Grid placeItems='center' w='100%' mx='auto'>
			<Box textAlign='center'>
				<Center mt='-8rem'>
					<Image
						src='/under-construction.png'
						alt='Maintenance image'
						width={380}
						height={380}
						color='#fff'
					/>
				</Center>
				<Text fontSize='6xl' fontWeight='extrabold'>
					Under Maintenance
				</Text>
				<Text fontSize='lg'>This page is not available right now ☹️!</Text>
			</Box>
		</Grid>
	);
};

export default UnderMaintainace;
