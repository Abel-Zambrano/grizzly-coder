import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20rem 0;
`;

const MyImage = styled(Image)`
  border-radius: 2rem;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--gray-blue);
  border-radius: 2rem;
  height: 10rem;
  width: 60rem;
  padding: 4rem;
  text-transform: capitalize;
  color: var(--white);
  margin-left: -10rem;
  z-index: 10;

  .title {
    font-size: 4rem;
  }

  .text {
    font-size: 2rem;
  }
`;

const BlueBG = styled.div`
  background-color: var(--primary-blue);
  border-radius: 2rem;
  height: 70rem;
  width: 80rem;
  margin-left: -85rem;
`;

export default function ServiceContentLeft({
  src,
  alt,
  width,
  height,
  title,
  text,
}) {
  return (
    <Section>
      <MyImage src={src} alt={alt} width={width} height={height} />
      <Content>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </Content>
      <BlueBG />
    </Section>
  );
}
