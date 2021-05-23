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
        {links.map(({ id, name, url }) => {
          return (
            <li key={id} className="links-item">
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </MyNavLinks>
  );
}
