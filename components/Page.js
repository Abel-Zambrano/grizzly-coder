import styled from "styled-components";
import Globals from "../styles/globals";

const MyPage = styled.div``;

export default function Page({ children }) {
  return (
    <MyPage>
      <Globals />
      {children}
    </MyPage>
  );
}
