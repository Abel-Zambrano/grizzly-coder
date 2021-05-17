import Head from "next/head";
import Page from "../components/Page";
import NProgress from "nprogress";
import Router from "next/dist/next-server/lib/router/router";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
