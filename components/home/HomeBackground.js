import Image from "next/image";
import styled from "styled-components";
import Services from "./Services";

const MyImage = styled(Image)`
  border-radius: 2rem;
`;

const Section = styled.section`
  background-color: var(--black-light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -12rem;
  z-index: 10;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 14rem;
    min-width: 72rem;
    text-align: center;
  }

  .header {
    color: var(--white);
    text-transform: capitalize;
    font-size: 4rem;

    &__blue {
      color: var(--primary-blue);
    }
  }

  .text {
    color: var(--white);
    text-transform: capitalize;
    font-size: 2rem;
  }

  .about {
    color: var(--white);
    font-size: 2rem;
    text-transform: capitalize;
    margin-top: 10rem;

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 26rem;
    }
  }

  .title {
    color: var(--primary-orange);
  }

  .orange-line {
    background: var(--primary-orange);
    height: 0.5rem;
    width: 6rem;
  }
`;

const Right = styled.div``;

export default function HomeBackground() {
  return (
    <Section>
      <Container>
        <Left>
          <div className="container">
            <h1 className="header">
              connecting you to the{" "}
              <span className="header__blue">digital</span> world
            </h1>
            <p className="text">services in web development simplified</p>
          </div>
          <div className="about">
            <div className="about-title">
              <div className="orange-line" />
              <h2 className="title">what we do</h2>
            </div>
            <Services />
          </div>
        </Left>
        <Right>
          <MyImage
            src="/images/home-background.png"
            alt="background"
            layout="fixed"
            width={500}
            height={700}
          />
        </Right>
      </Container>
    </Section>
  );
}
