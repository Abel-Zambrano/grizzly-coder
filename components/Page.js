import Header from "./Header";
import styled from "styled-components";

const MyPage = styled.div``;

export default function Page({ children }) {
  return (
    <MyPage>
      <Header />
      {children}
    </MyPage>
  );
}
