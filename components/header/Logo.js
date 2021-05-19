import styled from "styled-components";

const MyLogo = styled.div`
  .logo {
    text-transform: capitalize;
    color: white;
    font-family: "Orbitron", sans-serif;
  }
`;

export default function Logo() {
  return (
    <MyLogo>
      <h1 className="logo">grizzly coder</h1>
    </MyLogo>
  );
}
