import styled from "styled-components";
import HomeBackground from "../components/home/HomeBackground";
import Column from "../components/home/Column";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <HomeBackground />
      <Column />
    </Container>
  );
}
