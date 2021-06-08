import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyImage = styled(Image)`
  border-radius: 2rem;
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
  margin-right: -10rem;
  z-index: 10;

  .title {
    font-size: 4rem;
  }

  .text {
    font-size: 2rem;
  }
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
      <Content>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </Content>
      <MyImage src={src} alt={alt} width={width} height={height} />
    </Section>
  );
}
