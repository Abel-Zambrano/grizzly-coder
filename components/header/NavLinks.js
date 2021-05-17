import styled from "styled-components";
import Link from "next/link";

const MyNavLinks = styled.div`
  .links {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100vw;

    &-item {
      font-family: "Orbitron", sans-serif;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: var(--white);

      &:hover {
        color: var(--primary-orange);
      }
    }
  }
`;

export default function NavLinks() {
  return (
    <MyNavLinks>
      <ul className="links">
        <li className="links-item">
          <Link href="/">home</Link>
        </li>
        <li className="links-item">
          <Link href="/about">about</Link>
        </li>
        <li className="links-item">
          <Link href="/merchandise">merchandise</Link>
        </li>
        <li className="links-item">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </MyNavLinks>
  );
}
