import type { AppProps } from "next/app";
import { LayoutNextPage } from "next";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/Global";
import { theme } from "utils/constants/theme/theme";

type AppPropsWithLayout = AppProps & {
  Component: LayoutNextPage;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme({ mode: "light" })}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
