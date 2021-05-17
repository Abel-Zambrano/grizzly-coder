import styled from "styled-components";
import NavLinks from "./NavLinks";

const MyNav = styled.nav``;

export default function Nav() {
  return (
    <MyNav>
      <nav className="nav-conatiner">
        <NavLinks />
      </nav>
    </MyNav>
  );
}
