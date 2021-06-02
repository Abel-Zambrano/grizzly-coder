import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --black: #181818;
  --white: #fff;
  --primary-blue: #0262bc;
  --primary-orange:  #ffa64d;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    letter-spacing: 0.1rem;
    scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  box-sizing: inherit;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

export default function Page({ children, className }) {
  return (
    <Container>
      <GlobalStyles />
      <Header className={className} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
