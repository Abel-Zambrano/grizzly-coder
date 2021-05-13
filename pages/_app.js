import Head from "next/head";
import Page from "../components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grizzly Coder</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
