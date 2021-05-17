import styled from "styled-components";

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
    }
  }
`;

export default function NavLinks() {
  return (
    <MyNavLinks>
      <ul className="links">
        <li className="links-item">home</li>
        <li className="links-item">about</li>
        <li className="links-item">merchandise</li>
        <li className="links-item">contact</li>
      </ul>
    </MyNavLinks>
  );
}
