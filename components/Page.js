import Header from "./header/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --black: #181818;
  --white: #fff;
  --primary-orange:  #ffa64d
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

const MyPage = styled.div``;

export default function Page({ children }) {
  return (
    <MyPage>
      <GlobalStyles />
      <Header />
      {children}
    </MyPage>
  );
}
