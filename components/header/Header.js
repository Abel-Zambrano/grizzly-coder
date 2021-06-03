import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const MyHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--black-dark);
  height: 10rem;
`;

export default function Header() {
  return (
    <MyHeader>
      <Logo />
      <Nav />
    </MyHeader>
  );
}
