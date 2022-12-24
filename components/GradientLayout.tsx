import { Box, Flex, Text, Image, Heading, Skeleton } from '@chakra-ui/react';

function capitalizeName(name: string) {
	return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

const GradientLayout = ({
	color,
	children,
	image,
	subtitle,
	title,
	desc,
	roundImage,
	isLoading,
}) => {
	return (
		<Box
			w='full'
			h='calc(100vh - 10vh)'
			overflowY='auto'
			bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%,rgba(18, 18, 18, 0.95) 50%)`}
		>
			<Flex bg={`${color}.600`} padding='40px'>
				<Box padding='20px'>
					<Skeleton
						isLoaded={!isLoading}
						borderRadius='100%'
						startColor={`${color}.300`}
						endColor={`${color}.500`}
					>
						<Image
							src={image}
							alt=''
							boxSize='180px'
							boxShadow='2xl'
							borderRadius={roundImage ? '100%' : '3px'}
							objectFit='cover'
						/>
					</Skeleton>
				</Box>
				<Box alignSelf='flex-end' padding='20px' textAlign='left'>
					<Skeleton
						isLoaded={!isLoading}
						my='2'
						w='fit-content'
						startColor={`${color}.300`}
						endColor={`${color}.500`}
					>
						<Text
							fontSize='sm'
							fontWeight='bold'
							color='gray.100'
							lineHeight='1px'
						>
							{subtitle?.toUpperCase()}
						</Text>
					</Skeleton>
					<Skeleton
						isLoaded={!isLoading}
						my='2'
						w='fit-content'
						startColor={`${color}.300`}
						endColor={`${color}.500`}
					>
						<Heading fontSize='6xl' fontWeight='extrabold' lineHeight='1'>
							{title && capitalizeName(title)}
						</Heading>
					</Skeleton>
					<Skeleton
						isLoaded={!isLoading}
						my='2'
						w='fit-content'
						startColor={`${color}.300`}
						endColor={`${color}.500`}
					>
						<Text fontSize='sm' color='gray.300'>
							{desc}
						</Text>
					</Skeleton>
				</Box>
			</Flex>
			<Box paddingY='50px'>{children}</Box>
		</Box>
	);
};

export default GradientLayout;
