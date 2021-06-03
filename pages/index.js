import styled from "styled-components";
// import HomeBackground from "../components/home/HomeBackground";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: greenyellow;
`;

export default function Home() {
  return <Container>{/* <HomeBackground /> */}</Container>;
}
