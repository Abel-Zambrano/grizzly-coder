import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const MyHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--black);
  height: 14rem;
`;

export default function Header() {
  return (
    <MyHeader>
      <Logo />
      <Nav />
    </MyHeader>
  );
}
