import styled from "styled-components";

const Background = styled.div`
  margin: 10rem 0;
  display: flex;
  .blue {
    background-color: var(--primary-blue);
    height: 50rem;
    width: 70rem;
    border-radius: 2rem;
  }

  .orange {
    background-color: var(--primary-orange);
    height: 50rem;
    width: 50rem;
    border-radius: 2rem;
    margin-left: -20rem;
    margin-top: 6rem;
  }
`;

export default function SquareBG() {
  return (
    <Background className="background">
      <div className="blue"></div>
      <div className="orange"></div>
    </Background>
  );
}
