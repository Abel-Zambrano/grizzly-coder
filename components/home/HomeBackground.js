import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--black-light);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black-dark);
  height: 14rem;
  min-width: 72rem;
  text-align: center;
`;

const Left = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header {
    color: var(--white);
    text-transform: capitalize;
    font-size: 4rem;
  }

  .text {
    color: var(--white);
    text-transform: capitalize;
    font-size: 2rem;
  }
`;

const Right = styled.div``;

export default function HomeBackground() {
  return (
    <Section>
      <Left>
        <Container>
          <h1 className="header">connecting you to the digital world</h1>
          <p className="text">services in web development simplified</p>
        </Container>
      </Left>
      <Right>
        <Image
          src="/images/home-background.png"
          alt="background"
          layout="fixed"
          width={500}
          height={700}
        />
      </Right>
    </Section>
  );
}
