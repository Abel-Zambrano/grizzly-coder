import styled from "styled-components";

const MyColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20rem 0;
`;

export default function Column({ children }) {
  return <MyColumn>{children}</MyColumn>;
}
