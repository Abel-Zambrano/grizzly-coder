import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  text-align: center;
  background-color: var(--black);

  .copyright {
    font-size: 1.5rem;
    color: var(--white);
  }
`;

export default function Footer() {
  return (
    <MyFooter>
      <p className="copyright">&copy; Grizzly Coder 2021</p>
    </MyFooter>
  );
}
