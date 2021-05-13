import Head from "next/head";
import Page from "../components/Page";
import Globals from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grizzly Coder</title>
      </Head>
      <Globals />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
