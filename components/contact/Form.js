import styled from "styled-components";

const Container = styled.div`
  .background {
    &-blue {
    }

    &-orange {
    }
  }
`;

export default function Form() {
  return (
    <Container>
      <div className="background">
        <div className="background-blue"></div>
        <div className="background-orange"></div>
      </div>
    </Container>
  );
}
