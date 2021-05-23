import styled from "styled-components";
import Link from "next/link";
import links from "../../data/links";

const MyNavLinks = styled.div`
  width: 50rem;

  .links {
    display: flex;
    justify-content: space-between;
    list-style: none;

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
        {links.map((link) => {
          return (
            <li key={link.id} className="links-item">
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
