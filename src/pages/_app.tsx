import type { AppProps } from "next/app";
import { LayoutNextPage } from "next";
import { GlobalStyle } from "styles/Global";
import { theme } from "utils/constants/theme/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "store";

type AppPropsWithLayout = AppProps & {
	Component: LayoutNextPage;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme("light")}>
				<Global styles={GlobalStyle} />
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</Provider>
	);
};

export default App;
