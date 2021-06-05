import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--black-light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
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
  }
`;

const Right = styled.div``;

export default function HomeBackground() {
  return (
    <Section>
      <Left>
        <div className="container">
          <h1 className="header">
            connecting you to the <span className="header__blue">digital</span>{" "}
            world
          </h1>
          <p className="text">services in web development simplified</p>
        </div>
        <div className="about">
          <h2>what we do</h2>
          <p>we provide services in dynamic content</p>
        </div>
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
