import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import 'reset-css';

import { store } from '../lib/store';
import theme from '../styles/theme';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<StoreProvider store={store}>
				{Component.authPage ? (
					<Component {...pageProps} />
				) : (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				)}
			</StoreProvider>
		</ChakraProvider>
	);
}
