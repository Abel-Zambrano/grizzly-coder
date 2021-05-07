import styled from "styled-components";

const MyLogo = styled.div`
  .logo {
    color: var(--green);
  }
`;

export default function () {
  return (
    <MyLogo>
      <h1 className="logo">grizzly coder</h1>
    </MyLogo>
  );
}
