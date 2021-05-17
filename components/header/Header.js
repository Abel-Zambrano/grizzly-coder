import styled from "styled-components";

import Nav from "./Nav";

const MyHeader = styled.div`
  background-color: var(--black);
  height: 10rem;
`;

export default function Header() {
  return (
    <MyHeader>
      <Nav />
    </MyHeader>
  );
}
