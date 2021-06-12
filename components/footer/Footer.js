import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  text-align: center;
  .copyright {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default function Footer() {
  return (
    <MyFooter>
      <p className="copyright">&copy; Grizzly Coder 2021</p>
    </MyFooter>
  );
}
