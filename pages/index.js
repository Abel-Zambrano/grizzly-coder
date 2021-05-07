import Head from "next/head";
import Header from "../components/Header";
import Page from "../components/Page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grizzly Coder</title>
        <meta name="Grizzly Coder" content="Web development services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <Header />
        </Page>
      </main>
      <footer></footer>
    </div>
  );
}
