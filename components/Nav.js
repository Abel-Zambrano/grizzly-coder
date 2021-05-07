import styled from "styled-components";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MyNav = styled.nav``;

export default function Nav() {
  return (
    <MyNav>
      <nav className="nav-conatiner">
        <Logo />
        <NavLinks />
      </nav>
    </MyNav>
  );
}
