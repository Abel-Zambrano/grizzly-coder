import styled from "styled-components";
import Image from "next/image";

const MyImage = styled(Image)``;

const MyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    text-transform: capitalize;
    color: white;
    font-family: "Orbitron", sans-serif;
  }
`;

export default function Logo() {
  return (
    <MyLogo>
      <MyImage
        src="/images/gc-logo.png"
        alt="grizzly coder logo"
        width={100}
        height={80}
      />
      <h1 className="logo">grizzly coder</h1>
    </MyLogo>
  );
}
